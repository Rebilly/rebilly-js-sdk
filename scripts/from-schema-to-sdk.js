const axios = require('axios');
const prettier = require('prettier');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');

// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
//Should we have one special for storefront???
const customFunctionNames = {
    "/authentication-tokens/{token}/exchange": "exchangeToken",
    "/authentication-tokens": "login",
  
    //Storefront
    "/account/password": "changePassword",
    "/account/forgot-password": "requestPasswordReset",
    "/account/reset-password/{token}": "confirmPasswordReset",
    "/account/resend-verification": "resendEmailVerification",
    "/account/verification/{token}": "verifyEmail",
  };

function generateSDKFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/combined/combined/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data, customFunctionNames).processSchema());
}

// Is it possible that we have an experimental not combined schema???
function generateSDKFromSchemaStorefront() {
    return axios.get('https://api.redoc.ly/registry/rebilly/storefront/storefront/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data, customFunctionNames).processSchema());
}

const newLineAndTab = '\n  '

function formatResourceName(pathName) {
    // Paths starting with these keys belong to a resource with the custom name given by the value
    const customResourceNames = {
        '/3d': 'ThreeDSecure',
        '/authentication': 'CustomerAuthentication',
        '/attachments': 'Files',
        '/coupons': 'Coupons',
        '/credentials': 'CustomerAuthentication',
        '/customer-timeline-custom-events': 'Todo',
        '/customer-timeline-events': 'Timelines',
        '/password-tokens': 'CustomerAuthentication',
        '/permissions-emulation': 'Profile',
        '/tokens': 'PaymentTokens',
        '/digital-wallets': 'Todo',
        '/activation': 'Todo',
        '/email-delivery-setting-verifications': 'EmailDeliverySettings',
        '/forgot-password': 'Account',
        '/grid-segments': 'Segments',
        '/logout': 'Account',
        '/reset-password': 'Account',
        '/signin': 'Account',
        '/signup': 'Account',
        '/experimental/organizations': 'Todo',

        //Storefront
        '/register': 'Account',
        
        '/login': 'Authorization',
        //TODO: find easy way to override in the context of Storefront
        // '/logout': 'Authorization',

        '/preview-purchase': 'Purchase',
        '/ready-to-pay': 'Purchase'
    };

    const storefrontCustomResourceNames = {
    
    };

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

function getResourceType(pathName) {
    const experimentalPaths = [
        '/subscriptions/{subscriptionId}/summary-metrics',
        '/reports/api-log-summary',
        '/reports/cumulative-subscriptions',
        '/reports/dcc-markup',
        '/reports/disputes',
        '/reports/events-triggered',
        '/reports/events-triggered/{eventType}/rules',
        '/reports/future-renewals',
        '/reports/renewal-sales',
        '/reports/retention-percentage',
        '/reports/retention-value',
        '/reports/retry-transaction',
        '/reports/subscription-cancellation',
        '/reports/subscription-renewal-list',
        '/reports/subscription-renewal',
        '/reports/time-series-transaction',
        '/reports/transactions-time-dispute',
        '/reports/transactions',
        '/reports/dashboard',
        '/customers/{customerId}/summary-metrics',
        '/transactions/{id}/timeline',
        '/customers/{id}/timeline',
        '/histograms/transactions',
        '/data-exports',
        '/data-exports/{id}'
    ];

    if (experimentalPaths.includes(pathName)) {
        return 'experimental';
    }
    return 'default'
}

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// I need a table matching paths and resource names or is it any automatic way to detect them?

class SDKGenerator {
    constructor(schema, customFunctionNames = {}) {
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
            // console.log('pathName', pathName)
            //this.schema.paths[pathName].VERBO

            //HERE we have to get the path 

            const filename = kebabCase(formatResourceName(pathName)) + '-resource.js';
            // Avoid processing resource if it was already processed
            if (processedResources.hasOwnProperty(filename)) return
            let resourceContent = `export default function ${formatResourceName(pathName)}Resource({apiHandler}){return {${this.generateResourceFunctions(pathName)}}}`;
            resourceContent = prettier.format(resourceContent, { semi: true, parser: "babel", singleQuote: true });
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
    }


    generatePathFunctions(resourceName, resourcePath) {
        // const verbs = ['get'];
        const verbs = ['get', 'post', 'put', 'delete', 'patch'];
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
            case 'put':
                return putGenerator(this.schema, this.customFunctionNames);
            case 'delete':
                return deleteGenerator(this.schema, this.customFunctionNames);
            case 'patch':
                return patchGenerator(this.schema, this.customFunctionNames);
            default:
                break;
        }
    }

    hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
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
    }
}

function putGenerator(schema, customFunctionNames = {}) {
    return function (resourceName, resourcePath, putPath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);
       
        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        const functionName = customFunctionNames[resourcePath] || 'update';

        const result = `${functionName}({${dynamicParams} data}) {
            return apiHandler.put(${formatResourcePath(resourcePath)}, data);
        }`
        return result;
    }
}

function deleteGenerator(schema, customFunctionNames = {}) {
    return function (resourceName, resourcePath, deletePath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);
    
        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        const functionName = customFunctionNames[resourcePath] || 'delete';

        const result = `${functionName}({${dynamicParams} data}) {
            return apiHandler.delete(${formatResourcePath(resourcePath)}, data);
        }`
        return result;
    }
}

function patchGenerator(schema, customFunctionNames = {}) {
    return function (resourceName, resourcePath, deletePath) {
        // console.log('generating post for resourcePath', resourcePath);
        // console.log('generating post for path', postPath);
    
        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        const functionName = customFunctionNames[resourcePath] || 'update';

        const result = `${functionName}({${dynamicParams} data}) {
            return apiHandler.patch(${formatResourcePath(resourcePath)}, data);
        }`
        return result;
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

function getResourceFromPath(pathName) {
    return kebabCase(formatResourceName(pathName)) + '-resource.js';


}

module.exports = {generateSDKFromSchema, generateSDKFromSchemaStorefront, SDKGenerator, getResourceFromPath, getResourceType} 
