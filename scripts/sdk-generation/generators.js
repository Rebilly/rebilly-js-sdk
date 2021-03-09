const kebabCase = require('lodash.kebabcase');
const camelCase = require('lodash.camelcase');
const { customResourceNames, customFunctionNames } = require('./customizations/customizations');

function formatResourceName(pathName) {
    // console.log({pathName})
 

    for (const [key, value] of Object.entries(customResourceNames)) {
        if(pathName.startsWith(key)) return value;
    }

    const firstResourcePathSegment = pathName.split('/')[1];
    // console.log('resourceName', resourceName)
    // console.log('pathName', pathName)
    if(pathName === '/' + firstResourcePathSegment || pathName.startsWith(`/${firstResourcePathSegment}/`)) {
        return capitalize(camelCase(firstResourcePathSegment)) 
    }

    return capitalize(camelCase(pathName));
}

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function getGenerator(schema) {

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
        // console.log('ᚬᚬᚬᚬ getPath', getPath)
        // console.log('ᚬᚬᚬᚬ getPath.responses.content', getPath.responses['200'].content['application/json'].schema.type === 'array')
        //TODO: Check how to detect cases that don't end up in collection
        //This does not work for array typed get operations like getAuthOptions in customer-authentication 
        // if(getPath.responses['200'].content['application/json'].schema.type === 'array') {
        //     return generateGetAllFunction(resourcePath, paramNames, customName);
        // }
        if (operationId.endsWith('Collection')) {
            return generateGetAllFunction(resourcePath, paramNames);
        } else {
            return generateFunction(schema, resourcePath, 'get');
        }
    }
    
    function generateGetAllFunction(resourcePath, paramNames) {
        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        paramNames = [...paramNames, ...dynamicParams];

        const functionName = findCustomName(resourcePath, 'get') || 'getAll';
        const functionCode = `${functionName}(${fromParamNamesToDefaultParams(paramNames)} = {}) {
            const params = {
                ${paramNames.join(',')}
            };
            return apiHandler.getAll(${formatResourcePath(resourcePath)}, params);
        }`
        return {functionName, functionCode};
    }
    
    function fromParamNamesToDefaultParams(paramNames) {
        const object = paramNames.reduce((acc, p) => {
            acc[p] = null;
            return acc;
        }, {})
        return JSON.stringify(object).replace(/"/g, '').replace(/:/g, '=');
    }
    
    function getParamName(schema, param) {
        if (param.name) return param.name;
        const pathKeys = param['$ref'].substring(2).split('/');
        const parameter = lookup(schema, pathKeys);
        return parameter.name;
    }
}

/**
 * Traverses the schema by using keys in pathKeys
 * @param {Object} schema 
 * @param {array} pathKeys 
 */
function lookup(schema, pathKeys) {
    // This should have a better name and signature: we access the schema from keys
    return pathKeys.reduce((acc, key) => acc[key], schema);
}


function functionGenerator(schema, httpVerb) {
    return function (resourceName, resourcePath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);
        return generateFunction(schema, resourcePath, httpVerb)
    }
}

function generateFunction(schema, resourcePath, httpVerb) {
    const appendDataIfNeeded = hasRequestParams(schema, resourcePath, httpVerb) ? ', data' : '';
    const expandParams = generateExpandParams(schema, resourcePath, httpVerb);
    const appendParamsIfNeeded = expandParams ? ',params' : '';
    const functionCode = `${generateFunctionSignature(schema, resourcePath, httpVerb)} { ${expandParams}
        return apiHandler.${httpVerb}(${formatResourcePath(resourcePath)} ${appendDataIfNeeded} ${appendParamsIfNeeded});
    }`
    const functionName = generateFunctionName(resourcePath, httpVerb);
    return {functionName, functionCode};
}

function postGenerator(schema) {
    return function (resourceName, resourcePath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);

        const expandParams = generateExpandParams(schema, resourcePath, 'post');
        const appendParamsIfNeeded = expandParams ? ',params' : '';

        let handlerFunction = 'post'; 
        if (!resourcePath.includes('{')) {
            // Create case
            handlerFunction = 'create';
            const functionCode = `${generateFunctionSignature(schema, resourcePath, 'post')} {
                ${expandParams}
                return apiHandler.create(${formatResourcePath(resourcePath + '/{id}')} ,id, data ${appendParamsIfNeeded});
            }`
            const functionName = generateFunctionName(resourcePath, 'post');
            return {functionName, functionCode};
        } else {
            return generateFunction(schema, resourcePath, 'post');
        }
    }
}

function generateFunctionSignature(schema, resourcePath, httpVerb) {
    
    const dynamicParams = extractParametersFromResourcePath(resourcePath);
    
    //Special case for create
    if (httpVerb === 'post' && !resourcePath.includes('{')) {
        dynamicParams.push("id = ''");
    }
    
    if (hasRequestParams(schema, resourcePath, httpVerb)) {
        dynamicParams.push('data');
    }
    
    if (hasEmbeddedParams(schema, resourcePath, httpVerb)) {
        dynamicParams.push('expand = null');
    }

    const functionName = generateFunctionName(resourcePath, httpVerb);
    
    return `${functionName}({${dynamicParams.join(',')}})`;
}

function findCustomName(resourcePath, httpVerb) {
    const customName = customFunctionNames[resourcePath];
    if (!customName) return false;
    if (typeof customName === 'string') return customName;
    return customName[httpVerb];
}

function generateFunctionName(resourcePath, httpVerb) {
    const defaultFunctionNames = {
        'get': 'get',
        'put': 'update',
        'patch': 'update',
        'post': 'create',
        'delete': 'delete',
    };

    return findCustomName(resourcePath, httpVerb) || defaultFunctionNames[httpVerb];
}

function generateExpandParams(schema, resourcePath, httpVerb) {
    return hasEmbeddedParams(schema, resourcePath, httpVerb) 
            ? 'const params = {expand};'
            : '';

}

const hasRequestParams = (schema, resourcePath, httpVerb) => schema.paths[resourcePath][httpVerb].requestBody;
const hasRequestParameterRef = (schema, resourcePath, httpVerb) => {
    const requestBody = schema.paths[resourcePath][httpVerb].requestBody;
    if (!requestBody) return false;
    return !!requestBody.$ref;
}

const hasEmbeddedParams = (schema, resourcePath, httpVerb) => {
    const globalParameters = schema.paths[resourcePath][httpVerb].parameters;
    if (globalParameters && someEmbeddedInsideParameters(schema, resourcePath, globalParameters)) return true;
    if (!hasRequestParameterRef(schema, resourcePath, httpVerb)) return false;
    const parameterSchema = getParameterSchema(schema, resourcePath, httpVerb);
    if (parameterSchema.type === 'object' && parameterSchema.properties.hasOwnProperty('_embedded')) return true;
    if (parameterSchema.allOf) return parameterSchema.allOf.some(schema => schema.properties && schema.properties.hasOwnProperty('_embedded'));
    return false;
}

function someEmbeddedInsideParameters(schema, resourcePath, parameters) {
    return parameters.some(parameter => {
        if (parameter.$ref) {
            const pathKeys = parameter.$ref.substring(2).split('/');
            return lookup(schema, pathKeys).name === 'expand';
        }
        return false;
    }); 
}

function getGlobalParameters(schema, resourcePath) {
    return schema.paths[resourcePath]
}

function getParameterSchema(schema, resourcePath, httpVerb) {
    if (!hasRequestParameterRef(schema, resourcePath, httpVerb)) return false;
    const parameterRef = schema.paths[resourcePath][httpVerb].requestBody.$ref;
    const parameterSchema = schema.components.schemas[parameterRef.split('/').pop()];
    if (!parameterSchema) {
        //TODO: review storefront tests when we uncomment this
        //  console.warn(`${parameterRef} does not have proper parameter schema inside components`);
         return {type: undefined};
    }
    return parameterSchema;
}

function extractParametersFromResourcePath(resourcePath) {
    let dynamicParams = resourcePath.match(/{(.*?)}/g)
    if (dynamicParams) dynamicParams = dynamicParams.map(param => param.replace(/{|}/g, ''));
    return dynamicParams || [];
}

function formatResourcePath(resourcePath) {
    // console.log('resourcePath', resourcePath);
    const pathWithoutLeadingSlash = resourcePath.substring(1);
    return `\`${pathWithoutLeadingSlash.split('{').join('${')}\``;
}

function getPathNamesWithSameCustomResourceName(pathName) {
    const resourceName = formatResourceName(pathName);
    const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
    if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
    return sharedPathNames;
};

module.exports = {
    formatResourceName, 
    formatResourcePath, 
    getPathNamesWithSameCustomResourceName, 
    functionGenerator,
    getGenerator,
    postGenerator
} 
