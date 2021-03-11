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
        const generator = new Generator(schema, resourcePath);
        return generator.generateFunction(httpVerb)
    }
}

function getGenerator(schema) {

    return function generateGet(resourceName, resourcePath, getPath) {
       
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
            return generateGetAllFunction(resourcePath);
        } else {
            const generator = new Generator(schema, resourcePath);
            return generator.generateFunction('get');
        }
    }
    
    function generateGetAllFunction(resourcePath) {
        const generator = new Generator(schema, resourcePath);
        const dynamicParams = generator.extractParametersFromResourcePath();
        const paramNamesWithDefaultValues = [...generator.getNamedParametersWithDefaultValues('get'), ...dynamicParams];
        const paramNames = [...generator.getNamedParameters('get'), ...dynamicParams];

        const functionName = generator.findCustomName('get') || 'getAll';
        const functionCode = `${functionName}(${fromParamNamesToDefaultParams(paramNamesWithDefaultValues)} = {}) {
            const params = {
                ${paramNames.join(',')}
            };
            return apiHandler.getAll(${generator.formatResourcePath(resourcePath)}, params);
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
}

function postGenerator(schema) {
    return function (resourceName, resourcePath) {
        const generator = new Generator(schema, resourcePath);
        const expandParams = generator.generateExpandParamConstant('post');
        const appendParamsIfNeeded = expandParams ? ',params' : '';

        let handlerFunction = 'post'; 
        if (!resourcePath.includes('{')) {
            // Create case
            handlerFunction = 'create';
            const functionName = generator.generateFunctionName('post');
            const functionCode = `${generator.generateFunctionSignature('post', functionName)} {
                ${expandParams}
                return apiHandler.create(${generator.formatResourcePath(resourcePath + '/{id}')} ,id, data ${appendParamsIfNeeded});
            }`
            return {functionName, functionCode};
        } else {
            return generator.generateFunction('post');
        }
    }
}

function getPathNamesWithSameCustomResourceName(pathName) {
    const resourceName = formatResourceName(pathName);
    const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
    if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
    return sharedPathNames;
};


//Command pattern
class Generator {
    constructor(schema, resourcePath) {
        this.schema = schema;
        this.resourcePath = resourcePath;
        this.pathSchema = this.schema.paths[this.resourcePath]
    }

    getRequestBody(httpVerb) {
        return this.pathSchema[httpVerb].requestBody;
    }

    generateFunction(httpVerb) {
        const appendDataIfNeeded = this.hasRequestParams(httpVerb) ? ', data' : '';
        const paramsConstant = this.generateParamsConstant(httpVerb);
        const appendParamsIfNeeded = paramsConstant ? ',params' : '';
    
    
        const functionName = this.generateFunctionName(httpVerb);
        const functionCode = `${this.generateFunctionSignature(httpVerb, functionName)} { ${paramsConstant}
            return apiHandler.${httpVerb}(${this.formatResourcePath(this.resourcePath)} ${appendDataIfNeeded} ${appendParamsIfNeeded});
        }`
        return {functionName, functionCode};
    }


    generateParamsConstant (httpVerb) {
        const namedParams = this.generateNamedParamsConstant(httpVerb);
        const expandParams = this.generateExpandParamsConstant(httpVerb);
        return namedParams || expandParams;
    }

    generateExpandParamsConstant(httpVerb) {
        return this.hasEmbeddedParams(httpVerb) 
                ? 'const params = {expand};'
                : '';
    }

    // Esta se compone de functionName + params --> es fácil de extraerlos para reutilizar
    generateFunctionSignature(httpVerb, functionName) {
        return `${functionName}({${this.generateParameterList(httpVerb)}})`;
    }

    generateParameterList(httpVerb) {
        const dynamicParams = this.extractParametersFromResourcePath();
        const namedParams = this.getNamedParametersWithDefaultValues(httpVerb);
        
        //Special case for create
        if (httpVerb === 'post' && !this.resourcePath.includes('{')) {
            dynamicParams.push("id = ''");
        }
        
        if (this.hasRequestParams(httpVerb)) {
            dynamicParams.push('data');
        }
        
        if (this.hasEmbeddedParams(httpVerb) && !namedParams.includes('expand = null')) {
            dynamicParams.push('expand = null');
        }
        
        const allParams = [...dynamicParams,...namedParams];
        return allParams.join(',');
    }

    getNamedParametersWithDefaultValues(httpVerb) {
        const accumulateParamsFn =  (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            if (param.required === false || paramName === 'expand') {
                params.push(`${paramName} = null`);
            } else {
                params.push(paramName);
            }
            return params;
        }
        
        const pathSchema = this.pathSchema[httpVerb];
        return pathSchema.parameters 
        ? pathSchema.parameters.reduce(accumulateParamsFn, []) 
        : [];
    }

    generateFunctionName(httpVerb) {
        const defaultFunctionNames = {
            'get': 'get',
            'put': 'update',
            'patch': 'update',
            'post': 'create',
            'delete': 'delete',
        };
    
        return this.findCustomName(httpVerb) || defaultFunctionNames[httpVerb];
    }

    findCustomName(httpVerb) {
        const customName = customFunctionNames[this.resourcePath];
        if (!customName) return false;
        if (typeof customName === 'string') return customName;
        return customName[httpVerb];
    }

    generateExpandParamConstant(httpVerb) {
        return this.hasEmbeddedParams(httpVerb) 
        ? 'const params = {expand};'
        : '';
    }
    
    generateNamedParamsConstant(httpVerb) {
        const namedParameters = this.getNamedParameters(httpVerb);
        return namedParameters.length > 0
            ? `const params = {${namedParameters.join(',')}};`
            : '';
    }

    getNamedParameters(httpVerb) {
        const accumulateParamsFn =  (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            params.push(paramName);
            return params;
        }
        
        const pathSchema = this.pathSchema[httpVerb];
        return pathSchema.parameters 
        ? pathSchema.parameters.reduce(accumulateParamsFn, []) 
        : [];
    }
    
    getParamName(param) {
        if (param.name) return param.name;
        const pathKeys = param['$ref'].substring(2).split('/');
        const parameter = lookup(this.schema, pathKeys);
        return parameter.name;
    }
    
    hasRequestParams(httpVerb){
        return this.getRequestBody(httpVerb);
    }

    hasEmbeddedParams = (httpVerb) => {
        const globalParameters = this.pathSchema[httpVerb].parameters;
        if (globalParameters && this.someEmbeddedInsideParameters(globalParameters)) return true;
        if (!this.hasRequestParameterRef(httpVerb)) return false;
        const parameterSchema = this.getParameterSchema(httpVerb);
        if (parameterSchema.type === 'object' && parameterSchema.properties.hasOwnProperty('_embedded')) return true;
        if (parameterSchema.allOf) return parameterSchema.allOf.some(schema => schema.properties && schema.properties.hasOwnProperty('_embedded'));
        return false;
    }
    
    someEmbeddedInsideParameters(parameters) {
        return parameters.some(parameter => {
            if (parameter.$ref) {
                const pathKeys = parameter.$ref.substring(2).split('/');
                return lookup(this.schema, pathKeys).name === 'expand';
            }
            return false;
        }); 
    }

    getParameterSchema(httpVerb) {
        if (!this.hasRequestParameterRef(httpVerb)) return;
        const parameterRef = this.getRequestBody(httpVerb).$ref;
        const parameterSchema = this.schema.components.schemas[parameterRef.split('/').pop()];
        if (!parameterSchema) {
            //TODO: review storefront tests when we uncomment this
            //  console.warn(`${parameterRef} does not have proper parameter schema inside components`);
             return {type: undefined};
        }
        return parameterSchema;
    }

    hasRequestParameterRef = (httpVerb) => {
        const requestBody = this.getRequestBody(httpVerb);
        if (!requestBody) return false;
        return !!requestBody.$ref;
    }

    extractParametersFromResourcePath() {
        let dynamicParams = this.resourcePath.match(/{(.*?)}/g)
        if (dynamicParams) dynamicParams = dynamicParams.map(param => param.replace(/{|}/g, ''));
        return dynamicParams || [];
    }

    formatResourcePath(resourcePath) {
        const pathWithoutLeadingSlash = resourcePath.substring(1);
        return `\`${pathWithoutLeadingSlash.split('{').join('${')}\``;
    }
    
    getPathNamesWithSameCustomResourceName(pathName) {
        const resourceName = formatResourceName(pathName);
        const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
        if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
        return sharedPathNames;
    };
}

module.exports = {
    formatResourceName, 
    getPathNamesWithSameCustomResourceName, 
    functionGenerator,
    getGenerator,
    postGenerator,
    Generator
} 
