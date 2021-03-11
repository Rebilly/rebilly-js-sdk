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

function getPathNamesWithSameCustomResourceName(pathName) {
    const resourceName = formatResourceName(pathName);
    const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
    if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
    return sharedPathNames;
};

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

//Command pattern
class FunctionGenerator {
    constructor(schema, resourcePath, httpVerb) {
        this.schema = schema;
        this.resourcePath = resourcePath;
        this.operationId = resourcePath.operationId;
        this.pathSchema = this.schema.paths[this.resourcePath]
    }

    getOperationId(httpVerb) {
        return this.pathSchema[httpVerb].operationId;
    }

    getRequestBody(httpVerb) {
        return this.pathSchema[httpVerb].requestBody;
    }

    generateFunction(httpVerb) {
        const functionName = this.generateFunctionName(httpVerb);
        const functionCode = `${this.generateFunctionSignature(httpVerb, functionName)} ${this.generateFunctionBody(httpVerb)}`
        return {functionName, functionCode};
    }

    generateFunctionBody(httpVerb) {
        const paramsConstant = this.generateParamsConstant(httpVerb);
        return `{ ${paramsConstant}
            ${this.generateReturnLine(httpVerb, paramsConstant)}
        }`
    }

    generateReturnLine(httpVerb, paramsConstant) {
        const appendParamsIfNeeded = paramsConstant ? ',params' : '';
        const appendDataIfNeeded = this.hasRequestParams(httpVerb) ? ', data' : '';
        return `return apiHandler.${this.getApiHandlerMethod(httpVerb)}(${this.generateApiPath(httpVerb)} ${appendDataIfNeeded} ${appendParamsIfNeeded});`
    }

    generateApiPath(httpVerb) {
        if (this.isCreateFunction(httpVerb)) return `${this.formatResourcePath(this.resourcePath + '/{id}')} ,id`;
        return this.formatResourcePath(this.resourcePath);
    }

    isGetAllFunction(httpVerb) {
        return httpVerb === 'get' && this.getOperationId(httpVerb).endsWith('Collection');
    }

    isCreateFunction(httpVerb) {
        return httpVerb === 'post' && !this.resourcePath.includes('{'); 
    }

    getApiHandlerMethod(httpVerb) {
        if (this.isGetAllFunction(httpVerb)) return 'getAll';
        if (this.isCreateFunction(httpVerb)) return 'create';
        return httpVerb;
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
        const argumentList = (this.isGetAllFunction(httpVerb)) 
            ? this.generateDefaultOptionalArguments('get')
            : `{${this.generateArgumentsWithDefaults(httpVerb)}}`;

        return `${functionName}(${argumentList})`;
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

    getAllParamNames(httpVerb) {
        const dynamicParams = this.extractParametersFromResourcePath();
        const namedParams = this.getRefParams(httpVerb);
        
        //Special case for create
        if (httpVerb === 'post' && !this.resourcePath.includes('{')) {
            dynamicParams.push("id");
        }
        
        if (this.hasRequestParams(httpVerb)) {
            dynamicParams.push('data');
        }
        
        if (this.hasEmbeddedParams(httpVerb) && !namedParams.includes('expand')) {
            dynamicParams.push('expand');
        }

        //We use Set to remove duplicates
        return [...new Set([...dynamicParams,...namedParams])];
    }

    //TODO: ?? we should improve this name
    getRefParams(httpVerb) {
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

    getOptionalParameters(httpVerb) {
        const parameters = this.pathSchema[httpVerb].parameters;
        if (!parameters) return [];
        return parameters
            .filter(param => (param.required === false || param.name === 'expand'))
            .map(param => param.name);
    }

    generateDefaultOptionalArguments(httpVerb) {
        const argsWithDefaults = this.getAllParamNames(httpVerb).map(param => {
            param+= ' = null'; 
            return param;
        }).join(',');
        return `{ ${argsWithDefaults} } = {}`; 
    }

    generateArgumentsWithDefaults(httpVerb) {
        const optionalParamNames = this.getOptionalParameters(httpVerb);
        return this.getAllParamNames(httpVerb).map(paramName => {
            if (optionalParamNames.includes(paramName) || paramName === 'expand') return paramName + ' = null';
            //Special case for create
            if (paramName === 'id' && httpVerb === 'post' && !this.resourcePath.includes('{')) return "id = ''";
            return paramName;
        }).join(',');
    }

    generateFunctionName(httpVerb) {
        const defaultFunctionNames = {
            'get': 'get',
            'put': 'update',
            'patch': 'update',
            'post': 'create',
            'delete': 'delete',
        };
        const defaultFunctionName = (this.isGetAllFunction(httpVerb)) ? 'getAll' : defaultFunctionNames[httpVerb]; 

        return this.findCustomName(httpVerb) || defaultFunctionName;
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
    FunctionGenerator
} 
