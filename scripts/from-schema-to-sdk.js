const axios = require('axios');
const prettier = require('prettier');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');
const fs = require('fs').promises;

function generateSDKFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/combined/combined/bundle/master/openapi.json')
    .then(response => processSchema(response.data))
}

module.exports = {generateSDKFromSchema} 

const newLineAndTab = '\n  '


function resourceName(pathName) {
    let result = pathName;
    console.log('pathName', pathName)
    // Exception for 3dSecure
    if (pathName.startsWith('/3d')) {
        return 'ThreeDSecure';
    }
    return capitalize(camelCase(result));
}

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function processSchema(schema) {
    const paths = schema.paths;

    const processedResources = [];

    //TODO: limiting to first pathName (3Dsecure)
    // Object.keys(schema.paths).forEach(pathName => {
        const pathName = Object.keys(schema.paths)[0];
        let resource = `export default function ${resourceName(pathName)}Resource({apiHandler}){return {${generateResourceFunctions(pathName)}}}`;
        resource = prettier.format(resource, { semi: true, parser: "babel" });
        const filename = kebabCase(resourceName(pathName)) + '-resource.js';
        fs.writeFile(filename, resource, 'utf8');
    // })

    function generateResourceFunctions(pathName) {
        const resourceName = pathName.split('/')[1]
        if (processedResources.includes(resourceName)) return

        const resourcePaths = Object.keys(paths).filter(path => path.startsWith('/' + resourceName))

        let allResourceFunctions = resourcePaths.reduce((functions, resourcePath) => {
            functions.push(generatePathFunctions(resourceName, resourcePath));
            return functions;
        }, []);
        // @ts-ignore
        allResourceFunctions = allResourceFunctions.flat(1); //Merge first depth level

        return allResourceFunctions;

        // if (path.post) {
        //     result += generatePost(path.post)
        // }
        // if (path.put) {
        //     result += generatePut(path.put)
        // }
        // if (path.patch) {
        //     result += generatePatch(path.patch)
        // }
        // if (path.delete) {
        //     result += generateDelete(path.delete)
        // }
    }

    
    function generatePathFunctions(resourceName, resourcePath) {
        const verbs = ['get', ];
        const path = paths[resourcePath];

        const functions = verbs.reduce((functions, verb) => {
            if (!path[verb]) return functions
            functions.push(generateGet(resourceName, path[verb]))
            return functions;
        }, []);
        return functions;
    }

    function getParamName(param) {
        const pathKeys = param['$ref'].substring(2).split('/')
        const parameter = pathKeys.reduce((acc, key) => acc[key], schema);
        return parameter.name;
    }

    function fromParamNamesToDefaultParams(paramNames) {
        const object = paramNames.reduce((acc, p) => {
            acc[p] = null;
            return acc;
        }, {})
        return JSON.stringify(object).replace(/"/g, '').replace(/:/g, '=');
    }

    function generateGetAllFunction(resourceName, paramNames) {
        return `getAll(${fromParamNamesToDefaultParams(paramNames)} = {}) {
            const params = {
                ${paramNames.join(',')}
            };
            return apiHandler.getAll('${resourceName}', params);
        }`
    }
   
    function generateGetFunction(resourceName) {
        return `get({id}) {
            return apiHandler.get('${resourceName}/' + id);
        },`
    }

    function generateGet(resourceName, getPath) {
        const accumulateNames =  (paramNames, param) => {
            paramNames.push(getParamName(param));
            return paramNames;
        }
        const paramNames = getPath.parameters 
            ? getPath.parameters.reduce(accumulateNames, []) 
            : [];

        const operationId = getPath.operationId;
        if (operationId.endsWith('Collection')) {
            return generateGetAllFunction(resourceName, paramNames);
        } else {
            return generateGetFunction(resourceName);
        }
    }

    function generatePost(postPath) {
        let result = ''
        const operationId = postPath.operationId
        if (!postPath.requestBody) {
            warn(`⚠️  Missing requestBody for Post operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, postPath)
        }
        result += generateResponseType(operationId, postPath)
        return result
    }

    function generatePut(putPath) {
        let result = ''
        const operationId = putPath.operationId
        if (!putPath.requestBody) {
            warn(`⚠️  Missing requestBody for Put operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, putPath)
        }
        result += generateResponseType(operationId, putPath)
        return result
    }
    
    function generatePatch(patchPath) {
        let result = ''
        const operationId = patchPath.operationId
        if (!patchPath.requestBody) {
            warn(`⚠️ Missing requestBody for Patch operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, patchPath)
        }
        result += generateResponseType(operationId, patchPath)
        return result
    }

    function generateDelete(deletePath) {
        let result = ''
        const operationId = deletePath.operationId
        if (deletePath.requestBody) {
            result += generateRequestType(operationId, deletePath) 
        } else if (deletePath.parameters && deletePath.parameters.query) {
            result += generateQueryType(operationId, deletePath) 
        }
        result += generateResponseType(operationId, deletePath)
        return result
    }
   
    function generateQueryType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['parameters']`
        if (operationId.endsWith('Collection')) {
            requestType += "['query']"
        }
        return requestType + newLineAndTab
    }

    function generateRequestType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['requestBody']`
        if (hasApplicationJson(path)) {
            requestType += "['application/json']"
        }
        return requestType + newLineAndTab
    }
    
    function generateResponseType(operationId, path) {
        const responseTypeName = operationId + 'Response'
        let responseType = `type ${responseTypeName} = ${promise(operationId, path)}`
        return responseType + newLineAndTab
    }

    function promise(operationId, path) {
        let response = `operations['${operationId}']['responses']${getResponseCode(path)}`
        return (operationId.endsWith('Collection')) ? itemsPromise(response) : fieldsPromise(response)
    }
            
    function getResponseCode(path) {
        let code = null
        if (path.responses['201']) {
            code = '201'
        } else if (path.responses['204']) {
            code = '204'
        } else if (path.responses['200']) {
            code = '200'
        }
        let result = `['${code}']`
        if (path.responses[code].content && path.responses[code].content['application/json']) {
            result += `['application/json']`
        }
        return result
    }

    function fieldsPromise(response) {
        return `Promise<{fields: ${response}}>`
    }
    
    function itemsPromise(response) {
        //TODO: Sometimes we have getJSON function wrapping items
        return `Promise<{ items: ${response}}>`
    }

    function hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
    }
  
    function warn(message) {
        //If verbose
        //console.warn(message)
    }
}
