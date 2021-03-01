import { create } from 'domain';
import { resourceUsage } from 'process';

const axios = require('axios');
const prettier = require('prettier');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');
const fs = require('fs').promises;

function generateSDKFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/combined/combined/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data).processSchema());
}

const newLineAndTab = '\n  '

function formatResourceName(pathName) {
    let result = pathName;
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

function createResourcesFiles(resourceContent) {
    Object.keys(resourceContent).forEach(filename => {
        resourceContent[filename]
        fs.writeFile(filename, resourceContent[filename], 'utf8');
    })
}

// I need a table matching paths and resource names or is it any automatic way to detect them?

export class SDKGenerator {
    constructor(schema, customFunctionNames={}) {
        this.schema = schema;
        this.paths = schema.paths;
        this.customFunctionNames = customFunctionNames;
    }

    processSchema() {

        const processedResources = {};

        Object.keys(this.schema.paths).forEach(pathName => {
            //Temporary avoid iteration to test/debug just one path at a time
            // const pathName = Object.keys(this.schema.paths)[5];
            const resourceName = pathName.split('/')[1]
            // Avoid processing resource if it was already processed
            if (processedResources.hasOwnProperty(resourceName)) return
            let resourceContent = `export default function ${formatResourceName(pathName)}Resource({apiHandler}){return {${this.generateResourceFunctions(pathName)}}}`;
            resourceContent = prettier.format(resourceContent, { semi: true, parser: "babel", singleQuote: true });
            const filename = kebabCase(formatResourceName(pathName)) + '-resource.js';
            processedResources[filename] = resourceContent;
        })
        return processedResources;
    }

    generateResourceFunctions(pathName) {
        const resourcePaths = Object.keys(this.paths).filter(path => path === pathName || path.startsWith(pathName + '/'))

        let allResourceFunctions = resourcePaths.reduce((functions, resourcePath) => {
            functions.push(this.generatePathFunctions(pathName, resourcePath));
            return functions;
        }, []);
        // @ts-ignore
        allResourceFunctions = allResourceFunctions.flat(1); //Merge first depth level
        // console.log("💃🏽💃🏽💃🏽💃🏽💃🏽~ all flat allResourceFunctions", allResourceFunctions)

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


    generatePathFunctions(resourceName, resourcePath) {
        // const verbs = ['get', 'post'];
        const verbs = ['get'];
        const path = this.paths[resourcePath];

        const functions = verbs.reduce((functions, verb) => {
            if (!path[verb]) return functions
            const generator = this.buildGenerator(verb)
            functions.push(generator(resourceName, resourcePath, path[verb]))
            // console.log("🚀🚀🚀🚀🚀🚀🚀 ~ PATH functions", functions)
            return functions;
        }, []);
        return functions;
    }

    buildGenerator(httpVerb) {
        switch (httpVerb) {
            case 'get':
                return getGenerator(this.schema, this.customFunctionNames);
            case 'post':
                return postGenerator(this.schema, this.customFunctionNames);
            default:
                break;
        }
    }

    generatePost2(postPath) {
        let result = ''
        const operationId = postPath.operationId
        if (!postPath.requestBody) {
            this.warn(`⚠️  Missing requestBody for Post operationId ${operationId}`)
        } else {
            result += this.generateRequestType(operationId, postPath)
        }
        result += this.generateResponseType(operationId, postPath)
        return result
    }

    generatePut(putPath) {
        let result = ''
        const operationId = putPath.operationId
        if (!putPath.requestBody) {
            this.warn(`⚠️  Missing requestBody for Put operationId ${operationId}`)
        } else {
            result += this.generateRequestType(operationId, putPath)
        }
        result += this.generateResponseType(operationId, putPath)
        return result
    }

    generatePatch(patchPath) {
        let result = ''
        const operationId = patchPath.operationId
        if (!patchPath.requestBody) {
            this.warn(`⚠️ Missing requestBody for Patch operationId ${operationId}`)
        } else {
            result += this.generateRequestType(operationId, patchPath)
        }
        result += this.generateResponseType(operationId, patchPath)
        return result
    }

    generateDelete(deletePath) {
        let result = ''
        const operationId = deletePath.operationId
        if (deletePath.requestBody) {
            result += this.generateRequestType(operationId, deletePath) 
        } else if (deletePath.parameters && deletePath.parameters.query) {
            result += this.generateQueryType(operationId, deletePath) 
        }
        result += this.generateResponseType(operationId, deletePath)
        return result
    }

    generateQueryType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['parameters']`
        if (operationId.endsWith('Collection')) {
            requestType += "['query']"
        }
        return requestType + newLineAndTab
    }

    generateRequestType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['requestBody']`
        if (this.hasApplicationJson(path)) {
            requestType += "['application/json']"
        }
        return requestType + newLineAndTab
    }

    generateResponseType(operationId, path) {
        const responseTypeName = operationId + 'Response'
        let responseType = `type ${responseTypeName} = ${this.promise(operationId, path)}`
        return responseType + newLineAndTab
    }

    promise(operationId, path) {
        let response = `operations['${operationId}']['responses']${this.getResponseCode(path)}`
        return (operationId.endsWith('Collection')) ? this.itemsPromise(response) : this.fieldsPromise(response)
    }
            
    getResponseCode(path) {
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

    fieldsPromise(response) {
        return `Promise<{fields: ${response}}>`
    }

    itemsPromise(response) {
        //TODO: Sometimes we have getJSON function wrapping items
        return `Promise<{ items: ${response}}>`
    }

    hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
    }

    warn(message) {
        //If verbose
        //console.this.warn(message)
    }
}

function getGenerator(schema, customFunctionNames = {}) {

    return function generateGet(resourceName, resourcePath, getPath) {
        const accumulateNamesFn =  (paramNames, param) => {
            const paramName = getParamName(schema, param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return paramNames;
            paramNames.push(paramName);
            return paramNames;
        }
        
        const paramNames = getPath.parameters 
        ? getPath.parameters.reduce(accumulateNamesFn, []) 
        : [];

        const operationId = getPath.operationId;
        // console.log('🐼🐼🐼🐼🐼 GET operationId', operationId)
        // console.log('⎨⎨⎨⎨ paramNames', paramNames)
        if (operationId.endsWith('Collection')) {
            return generateGetAllFunction(resourceName, resourcePath,paramNames);
        } else {
            return generateGetFunction(resourcePath);
        }
    }
    
    function generateGetAllFunction(resourceName, resourcePath, paramNames) {
        return `getAll(${fromParamNamesToDefaultParams(paramNames)} = {}) {
            const params = {
                ${paramNames.join(',')}
            };
            return apiHandler.getAll(${formatResourcePath(resourcePath)}, params);
        }`
    }
    
    function generateGetFunction(resourcePath) {
        const dynamicParams = extractParametersFromResourcePath(resourcePath);

        return `get({${dynamicParams}}) {
            return apiHandler.get(${formatResourcePath(resourcePath)});
        }`
    }
    
    function fromParamNamesToDefaultParams(paramNames) {
        const object = paramNames.reduce((acc, p) => {
            acc[p] = null;
            return acc;
        }, {})
        return JSON.stringify(object).replace(/"/g, '').replace(/:/g, '=');
    }
    
    function getParamName(schema, param) {
        // This should have a better name and signature: we access the schema from keys
        if (param.name) return param.name;
        const pathKeys = param['$ref'].substring(2).split('/');
        const parameter = pathKeys.reduce((acc, key) => acc[key], schema);
        return parameter.name;
    }
}

function postGenerator(schema, customFunctionNames = {}) {
    return function (resourceName, resourcePath, postPath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);

        /*
            If we wanted to improve signature code 
        */
        // const requestBody = postPath.requestBody.content['application/json'].schema.$ref;
        // const schemaIndex = 3;
        // const schemaName = requestBody.split('/')[schemaIndex];
        // const requestSchema = schema.components.schemas[schemaName];


        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        const functionName = customFunctionNames[resourcePath] || 'create';

        const result = `${functionName}({${dynamicParams} data}) {
            return apiHandler.post(${formatResourcePath(resourcePath)}, data);
        }`
        return result;
        
        // const operationId = postPath.operationId;
        // if (operationId.endsWith('Collection')) {
        //     return generateGetAllFunction(resourceName, paramNames);
        // } else {
        //     return generateGetFunction(resourceName);
        // }
    }
}

function extractParametersFromResourcePath(resourcePath) {
    let dynamicParams = resourcePath.match(/{(.*?)}/g)
    if (dynamicParams) dynamicParams = dynamicParams.map(param => param.replace(/{|}/g, ''));
    return (dynamicParams) ? dynamicParams += ',' : [];
}

function formatResourcePath(resourcePath) {
    return `\`${resourcePath.replace('{', '${')}\``;
}

module.exports = {generateSDKFromSchema, SDKGenerator} 
