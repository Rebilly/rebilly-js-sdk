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
        this.httpVerb = httpVerb;
        this.pathSchema = this.schema.paths[this.resourcePath];
        this.operationId = this.pathSchema[this.httpVerb].operationId;
        this.pathParameters = this.pathSchema[httpVerb].parameters;
    }

    getRequestBody() {
        return this.pathSchema[this.httpVerb].requestBody;
    }

    generateFunction() {
        const functionName = this.generateFunctionName();
        const functionCode = `${this.generateFunctionSignature(functionName)} ${this.generateFunctionBody()}`
        return {functionName, functionCode};
    }

    generateFunctionBody() {
        const paramsConstant = this.generateParamsConstant();
        return `{ ${paramsConstant}
            ${this.generateReturnLine(paramsConstant)}
        }`
    }

    generateReturnLine(paramsConstant) {
        const appendParamsIfNeeded = paramsConstant ? ',params' : '';
        const appendDataIfNeeded = this.hasRequestParams() ? ', data' : '';
        return `return apiHandler.${this.getApiHandlerMethod()}(${this.generateApiPath()} ${appendDataIfNeeded} ${appendParamsIfNeeded});`
    }

    generateApiPath() {
        const getApiPath = (resourcePath) => {
            const pathWithoutLeadingSlash = resourcePath.substring(1);
            return `\`${pathWithoutLeadingSlash.split('{').join('${')}\``;
        }
        if (this.isCreateFunction()) return `${getApiPath(this.resourcePath + '/{id}')} ,id`;
        return getApiPath(this.resourcePath);
    }


    isGetAllFunction() {
        return this.httpVerb === 'get' && this.operationId.endsWith('Collection');
    }

    isCreateFunction() {
        return this.httpVerb === 'post' && !this.resourcePath.includes('{'); 
    }

    getApiHandlerMethod() {
        if (this.isGetAllFunction()) return 'getAll';
        if (this.isCreateFunction()) return 'create';
        return this.httpVerb;
    }

    generateParamsConstant () {
        const namedParams = this.generateNamedParamsConstant();
        const expandParams = this.generateExpandParamsConstant();
        return namedParams || expandParams;
    }

    generateExpandParamsConstant() {
        return this.hasEmbeddedParams() 
                ? 'const params = {expand};'
                : '';
    }

    generateFunctionSignature(functionName) {
        const argumentList = (this.isGetAllFunction()) 
            ? this.generateDefaultOptionalArguments()
            : `{${this.generateArgumentsWithDefaults()}}`;

        return `${functionName}(${argumentList})`;
    }

    getNamedParametersWithDefaultValues() {
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
        
        return this.pathParameters
        ? this.pathParameters.reduce(accumulateParamsFn, []) 
        : [];
    }

    getAllParamNames() {
        const dynamicParams = this.extractParametersFromResourcePath();
        const namedParams = this.getRefPathParameters();
        
        //Special case for create
        if (this.httpVerb === 'post' && !this.resourcePath.includes('{')) {
            dynamicParams.push("id");
        }
        
        if (this.hasRequestParams()) {
            dynamicParams.push('data');
        }
        
        if (this.hasEmbeddedParams() && !namedParams.includes('expand')) {
            dynamicParams.push('expand');
        }

        //We use Set to remove duplicates
        return [...new Set([...dynamicParams,...namedParams])];
    }

    getRefPathParameters() {
        const accumulateParamsFn =  (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            params.push(paramName);
            return params;
        }
        
        return this.pathParameters 
        ? this.pathParameters.reduce(accumulateParamsFn, []) 
        : [];
    }

    getOptionalParameters() {
        const parameters = this.pathParameters;
        if (!parameters) return [];
        return parameters
            .filter(param => (param.required === false || param.name === 'expand'))
            .map(param => param.name);
    }

    generateDefaultOptionalArguments() {
        const argsWithDefaults = this.getAllParamNames().map(param => {
            param+= ' = null'; 
            return param;
        }).join(',');
        return `{ ${argsWithDefaults} } = {}`; 
    }

    generateArgumentsWithDefaults() {
        const optionalParamNames = this.getOptionalParameters();
        return this.getAllParamNames().map(paramName => {
            if (optionalParamNames.includes(paramName) || paramName === 'expand') return paramName + ' = null';
            //Special case for create
            if (paramName === 'id' && this.httpVerb === 'post' && !this.resourcePath.includes('{')) return "id = ''";
            return paramName;
        }).join(',');
    }

    generateFunctionName() {
        const defaultFunctionNames = {
            'get': 'get',
            'put': 'update',
            'patch': 'update',
            'post': 'create',
            'delete': 'delete',
        };
        const defaultFunctionName = (this.isGetAllFunction()) ? 'getAll' : defaultFunctionNames[this.httpVerb]; 

        return this.findCustomName() || defaultFunctionName;
    }

    findCustomName() {
        const customName = customFunctionNames[this.resourcePath];
        if (!customName) return false;
        if (typeof customName === 'string') return customName;
        return customName[this.httpVerb];
    }

    generateExpandParamConstant() {
        return this.hasEmbeddedParams() 
        ? 'const params = {expand};'
        : '';
    }
    
    generateNamedParamsConstant() {
        const namedParameters = this.getNamedParameters();
        return namedParameters.length > 0
            ? `const params = {${namedParameters.join(',')}};`
            : '';
    }

    getNamedParameters() {
        const accumulateParamsFn = (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            params.push(paramName);
            return params;
        }
        
        return this.pathParameters 
        ? this.pathParameters.reduce(accumulateParamsFn, []) 
        : [];
    }
    
    getParamName(param) {
        if (param.name) return param.name;
        const pathKeys = param['$ref'].substring(2).split('/');
        const parameter = lookup(this.schema, pathKeys);
        return parameter.name;
    }
    
    hasRequestParams(){
        return this.getRequestBody();
    }

    hasEmbeddedParams = () => {
        if (this.hasEmbeddedPathParameters()) return true;
        if (!this.hasRequestParameterRef()) return false;
        const parameterSchema = this.getParameterSchema();
        if (parameterSchema.type === 'object' && parameterSchema.properties.hasOwnProperty('_embedded')) return true;
        if (parameterSchema.allOf) return parameterSchema.allOf.some(schema => schema.properties && schema.properties.hasOwnProperty('_embedded'));
        return false;
    }
    
    hasEmbeddedPathParameters() {
        return this.pathParameters && this.pathParameters.some(parameter => {
            if (parameter.$ref) {
                const pathKeys = parameter.$ref.substring(2).split('/');
                return lookup(this.schema, pathKeys).name === 'expand';
            }
            return false;
        }); 
    }

    getParameterSchema() {
        if (!this.hasRequestParameterRef()) return;
        const parameterRef = this.getRequestBody().$ref;
        const parameterSchema = this.schema.components.schemas[parameterRef.split('/').pop()];
        if (!parameterSchema) {
            //TODO: review storefront tests when we uncomment this
            //  console.warn(`${parameterRef} does not have proper parameter schema inside components`);
             return {type: undefined};
        }
        return parameterSchema;
    }

    hasRequestParameterRef = () => {
        const requestBody = this.getRequestBody();
        if (!requestBody) return false;
        return !!requestBody.$ref;
    }

    extractParametersFromResourcePath() {
        let dynamicParams = this.resourcePath.match(/{(.*?)}/g)
        if (dynamicParams) dynamicParams = dynamicParams.map(param => param.replace(/{|}/g, ''));
        return dynamicParams || [];
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
