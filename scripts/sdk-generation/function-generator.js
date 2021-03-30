const { customFunctionNames } = require('./customizations/customizations');

/**
 * Traverses the schema by using keys in pathKeys
 * @param {Object} schema 
 * @param {array} pathKeys 
 */
function lookup(schema, pathKeys) {
    // This should have a better name and signature: we access the schema from keys
    return pathKeys.reduce((acc, key) => acc[key], schema);
}

function mergeWithoutDuplicates(a, b) {
    return [...new Set([...a,...b])];
}

function buildFunctionData(schema, resourcePath, httpVerb) {
    const verbSchema = schema.paths[resourcePath][httpVerb];
    return {
        schema,
        resourcePath,
        httpVerb,
        operationId : verbSchema.operationId,
        pathParameters : verbSchema.parameters,
        requestBody: verbSchema.requestBody
    }
}

class FunctionGenerator {
    constructor(schema, resourcePath, httpVerb) {
        const verbSchema = schema.paths[resourcePath][httpVerb];
        this.schema = schema;
        this.resourcePath = resourcePath;
        this.httpVerb = httpVerb;
        this.operationId = verbSchema.operationId;
        this.pathParameters = verbSchema.parameters;
        this.requestBody = verbSchema.requestBody;
    }

    generateFunction() {
        const functionName = this.generateFunctionName();
        const functionCode = `${this.generateFunctionSignature(functionName)} ${this.generateFunctionBody()}`;
        return {functionName, functionCode};
    }

    generateFunctionBody() {
        const paramsConstant = this.generateParamsConstant();
        return `{ ${paramsConstant}
            ${this.generateReturnLine(paramsConstant)}
        }`
    }

    generateReturnLine(paramsConstant) {
        const appendDataIfNeeded = this.hasRequestParams() ? ', data' : '';
        const appendParamsIfNeeded = paramsConstant ? ',params' : '';
        return `return apiHandler.${this.getApiHandlerMethod()}(${this.generateApiPath()} ${appendDataIfNeeded} ${appendParamsIfNeeded});`
    }

    buildQueryString() {
        if (this.isGetAllFunction()) return '';
        const queryParams = this.getQueryParameterNames();
        const searchParams = queryParams.reduce((params, paramName) => {
            params[paramName] = `\${${paramName}}`;
            return params;
        }, {});
        const queryString = Object.keys(searchParams)
            .map(k => k + '=' + searchParams[k]).join('&');
        if (queryString === '') return ''
        return '?' + queryString;
    }

    generateApiPath() {
        const getApiPath = (resourcePath) => {
            const pathWithoutLeadingSlash = resourcePath.substring(1);
            return `\`${pathWithoutLeadingSlash.split('{').join('${')}${this.buildQueryString()}\``;
        }
        if (this.isCreateFunction()) return `${getApiPath(this.resourcePath + '/{id}')} ,id`;
        return getApiPath(this.resourcePath)
    }

    isGetAllFunction() {
        return this.httpVerb === 'get' 
            && (this.operationId.endsWith('Collection') || this.operationId === 'GetAmlEntry');
    }

    isCreateFunction() {
        const putPath = this.resourcePath + '/{id}';
        return this.httpVerb === 'post' 
            && !this.resourcePath.includes('{')
            && !!this.schema.paths.hasOwnProperty(putPath)
            && this.schema.paths[putPath].hasOwnProperty('put'); 
    }

    getApiHandlerMethod() {
        if (this.isGetAllFunction()) return 'getAll';
        if (this.isCreateFunction()) return 'create';
        return this.httpVerb;
    }

    generateParamsConstant () {
        const namedParams = this.generateRequestParametersConstant();
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
            ? this.generateGetAllArguments()
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

        return mergeWithoutDuplicates(dynamicParams, namedParams);
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

    generateGetAllArguments() {
        return this.hasRequiredParameters() 
            ? `{ ${this.generateArgumentsWithDefaults()} }`
            : this.generateAllArgumentsWithEmptyDefault();
    }

    generateAllArgumentsWithEmptyDefault() {
        const argsWithDefaults = this.getAllParamNames().map(param => {
            param+= ' = null'; 
            return param;
       }).join(',');
       return `{ ${argsWithDefaults} } = {}`
    }

    hasRequiredParameters() {
        return this.getOptionalParameters().length > 0
        && this.getAllParamNames() !== this.getOptionalParameters();
    }

    generateArgumentsWithDefaults() {
        const optionalParamNames = this.getOptionalParameters();
        return this.getAllParamNames().map(paramName => {
            if (optionalParamNames.includes(paramName) || paramName === 'expand') return paramName + ' = null';
            //Special case for create
            if (paramName === 'id' && this.isCreateFunction()) return "id = ''";
            if (paramName === 'id' && !this.resourcePath.includes('/{id}')) return null;
            return paramName;
        }).filter(p => p !== null).join(',');
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
    
    generateRequestParametersConstant() {
        let namedParameters = this.getRequestParameterNames();
        if (this.hasEmbeddedParams()) {
             namedParameters = mergeWithoutDuplicates(namedParameters, ['expand']);
        }
        return namedParameters.length > 0
            ? `const params = {${namedParameters.join(',')}};`
            : '';
    }

    getRequestParameterNames() {
        const accumulateParamsFn = (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            if (param.in === 'query' && !this.isGetAllFunction()) return params;
            params.push(paramName);
            return params;
        }
        
        return this.pathParameters 
        ? this.pathParameters.reduce(accumulateParamsFn, []) 
        : [];
    }

    getQueryParameterNames() {
        const accumulateParamsFn = (params, param) => {
            const paramName = this.getParamName(param);
            // Discard organization-Id from parameters
            if (paramName === 'Organization-Id') return params;
            if (param.in === 'query') params.push(paramName);
            return params;
        }
        
        return this.pathParameters 
        ? this.pathParameters.reduce(accumulateParamsFn, []) 
        : [];
    }
           
    getParamName(param) {
        if (param.name) return param.name;
        const parameter = this.getParameterFromRef(param.$ref);
        return parameter.name;
    }

    getParameterFromRef(ref) {
        const pathKeys = ref.substring(2).split('/');
        return lookup(this.schema, pathKeys);
    }
    
    hasRequestParams(){
        return this.requestBody;
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
                return this.getParameterFromRef(parameter.$ref);
            }
            return false;
        }); 
    }

    getParameterSchema() {
        if (!this.hasRequestParameterRef()) return;
        const parameterRef = this.requestBody.$ref;
        const parameterSchema = this.schema.components.schemas[parameterRef.split('/').pop()];
        if (!parameterSchema) {
            //TODO: review storefront tests when we uncomment this
            //  console.warn(`${parameterRef} does not have proper parameter schema inside components`);
             return {type: undefined};
        }
        return parameterSchema;
    }

    /**
     * Returns an array of params indicating if each param is required or not
     * We are not using it for now but it would be very useful if we want to replace 
     * data with the actual structure of data
     */
    getRequestPayloadParams() {
        const getRequestPayloadSchema = ()=> {
            const parameterSchema = this.getParameterSchema();
            if (parameterSchema && parameterSchema.allOf) {
                //We limit to allOf of one object
                return parameterSchema.allOf.map(param => this.getParameterFromRef(param.$ref))[0];
            }
            const requestBodyContent = this.requestBody.content;
            if (requestBodyContent && requestBodyContent['application/json'].schema.$ref) 
            {
                return this.getParameterFromRef(this.requestBody.content['application/json'].schema.$ref);
            }
            if (requestBodyContent && requestBodyContent['application/json'].schema) {
                return this.requestBody.content['application/json'].schema;
            } 
        }
        const parametersSchema = getRequestPayloadSchema();
        if (parametersSchema.type === 'object') {
            return Object.keys(parametersSchema.properties).map(propertyKey => {
                if (parametersSchema.required.includes(propertyKey)) {
                    return {[propertyKey]: 'required'};
                }
                return {[propertyKey]: 'null'};
            })
        }
    }

    hasRequestParameterRef = () => {
        const requestBody = this.requestBody;
        if (!requestBody) return false;
        return !!requestBody.$ref;
    }

    extractParametersFromResourcePath() {
        let dynamicParams = this.resourcePath.match(/{(.*?)}/g)
        if (dynamicParams) dynamicParams = dynamicParams.map(param => param.replace(/{|}/g, ''));
        return dynamicParams || [];
    }
}

module.exports = {
    FunctionGenerator
} 
