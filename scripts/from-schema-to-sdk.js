const axios = require('axios');
const prettier = require('prettier');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');

// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
//Should we have one special for storefront???
const customFunctionNames = {
    "/authentication-tokens/{token}/exchange": "exchangeToken",
    "/authentication-tokens": "login",

    '/bank-accounts/{id}/deactivation': 'deactivate',

    //TODO: unit test this case:
    '/coupons-redemptions': {get: 'getAllRedemptions', post: 'redeem'},
    '/coupons-redemptions/{id}': 'getRedemption',
    '/coupons-redemptions/{id}/cancel': 'cancelRedemption',
    '/coupons/{id}/expiration': 'setExpiration',

  
    //Storefront
    "/account/password": "changePassword",
    "/account/forgot-password": "requestPasswordReset",
    "/account/reset-password/{token}": "confirmPasswordReset",
    "/account/resend-verification": "resendEmailVerification",
    "/account/verification/{token}": "verifyEmail",
  };

function generateSDKFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/core-api/core/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data, customFunctionNames).processSchema());
}

// Is it possible that we have an experimental not combined schema???
function generateSDKFromSchemaStorefront() {
    return axios.get('https://api.redoc.ly/registry/rebilly/storefront/storefront/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data, customFunctionNames).processSchema());
}

const newLineAndTab = '\n  '

// Paths starting with these keys belong to a resource with the custom name given by the value
const customResourceNames = {
    '/3d': 'ThreeDSecure',
    '/authentication': 'CustomerAuthentication',
    '/attachments': 'Files',
    '/coupons': 'Coupons',
    '/coupons-redemptions': 'Coupons',
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

        let processedResources = {};

        Object.keys(this.schema.paths).forEach(pathName => {
            //Temporary avoid iteration to test/debug just one path at a time
            // const pathName = Object.keys(this.schema.paths)[5];
            this.generateResourceFileContent(processedResources, pathName);
          
        })
        return processedResources;
    }

    generateResourceFileContent(processedResources, pathName) {
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
    }

    generateResourceFunctions(pathName) {
        const sharedPathNames = getPathNamesWithSameCustomResourceName(pathName);
        const doesPathStartWithOneOfTheSharedPathNames = (path)=> sharedPathNames.find(name => path.startsWith(name + '/'));
        const resourcePaths = Object.keys(this.paths).filter(path => sharedPathNames.includes(path) || doesPathStartWithOneOfTheSharedPathNames(path));


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
        if (httpVerb=== 'get') return getGenerator(this.schema, this.customFunctionNames);
        return functionGenerator(this.schema, httpVerb);
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
        
        //TODO: generatize passing verb and customFunctionNames??
        const findCustomName = (resourcePath) => {
            const customName = customFunctionNames[resourcePath];
            if (!customName) return false;
            if (typeof customName === 'string') return customName;
            return customName.get;
        }
        
        const paramNames = getPath.parameters 
        ? getPath.parameters.reduce(accumulateNamesFn, []) 
        : [];

        const customName = findCustomName(resourcePath);

        const operationId = getPath.operationId;
        // console.log('🐼🐼🐼🐼🐼 GET operationId', operationId)
        // console.log('⎨⎨⎨⎨ paramNames', paramNames)
        // console.log('ᚬᚬᚬᚬ getPath', getPath)
        // console.log('ᚬᚬᚬᚬ getPath.responses.content', getPath.responses['200'].content['application/json'].schema.type === 'array')
        if(getPath.responses['200'].content['application/json'].schema.type === 'array') {
            return generateGetAllFunction(resourcePath, paramNames, customName);
        }
        if (operationId.endsWith('Collection')) {
            return generateGetAllFunction(resourcePath, paramNames, customName);
        } else {
            return generateGetFunction(resourcePath, customName);
        }
    }
    
    function generateGetAllFunction(resourcePath, paramNames, customName = null) {
        const functionName = customName || 'getAll';
        const dynamicParams = extractParametersFromResourcePath(resourcePath);
        paramNames = [...paramNames, ...dynamicParams];

        return `${functionName}(${fromParamNamesToDefaultParams(paramNames)} = {}) {
            const params = {
                ${paramNames.join(',')}
            };
            return apiHandler.getAll(${formatResourcePath(resourcePath)}, params);
        }`
    }
    
    function generateGetFunction(resourcePath, customName = null) {
        const functionName = customName || 'get';
        const dynamicParams = extractParametersFromResourcePath(resourcePath).join(',');

        return `${functionName}({${dynamicParams}}) {
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

        const appendDataIfNeeded = hasRequestParams(schema, resourcePath, httpVerb) ? ', data' : '';
        const result = `${generateFunctionSignature(schema, resourcePath, httpVerb)} {
            return apiHandler.${httpVerb}(${formatResourcePath(resourcePath)} ${appendDataIfNeeded});
        }`
        return result;
    }
}



function generateFunctionSignature(schema, resourcePath, httpVerb) {
    const findCustomName = (resourcePath) => {
        const customName = customFunctionNames[resourcePath];
        if (!customName) return false;
        if (typeof customName === 'string') return customName;
        return customName[httpVerb];
    }

    const defaultFunctionNames = {
        'get': 'get',
        'put': 'update',
        'patch': 'update',
        'post': 'create',
        'delete': 'delete',
    };

    const functionName = findCustomName(resourcePath) || defaultFunctionNames[httpVerb];
    const dynamicParams = extractParametersFromResourcePath(resourcePath);
    if (hasRequestParams(schema, resourcePath, httpVerb)) {
        dynamicParams.push('data');
    }
    
    return `${functionName}({${dynamicParams.join(',')}})`;
}

const hasRequestParams = (schema, resourcePath, httpVerb) => schema.paths[resourcePath][httpVerb].requestBody;

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

function getResourceFromPath(pathName) {
    return kebabCase(formatResourceName(pathName)) + '-resource.js';


}

function getPathNamesWithSameCustomResourceName(pathName) {
    const resourceName = formatResourceName(pathName);
    const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
    if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
    return sharedPathNames;
};

module.exports = {generateSDKFromSchema, generateSDKFromSchemaStorefront, SDKGenerator, getResourceFromPath, getResourceType, formatResourcePath} 
