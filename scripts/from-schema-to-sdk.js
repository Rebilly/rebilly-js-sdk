const axios = require('axios');
const prettier = require('prettier');
const camelCase = require('lodash.camelcase');
const kebabCase = require('lodash.kebabcase');

// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
//Should we have one special for storefront???
const customFunctionNames = {
    //Authentication Resource
    "/authentication-options": {get: 'getAuthOptions', put: 'updateAuthOptions'},
    "/authentication-tokens/{token}/exchange":  'exchangeToken',
    "/authentication-tokens": {get: 'getAllAuthTokens', post: "login"},
    "/authentication-tokens/{token}": {get: 'verify', delete: "logout"},
    '/credentials': {get: 'getAllCredentials', post: 'createCredential'}, // this one uses create instead of post 
    '/credentials/{id}': {
        get: 'getCredential',
        put: 'updateCredential', 
        delete: 'deleteCredential', 
        post: 'createCredential' // this one uses create instead of post 
    }, 
    '/password-tokens': {get: 'getAllResetPasswordTokens', post: 'createResetPasswordToken'},
    '/password-tokens/{id}': {get: 'getResetPasswordToken', delete: 'deleteResetPasswordToken'},

    //Customer Resource
    '/customers/{id}': {delete: 'merge', post: 'create'},
    '/customers/{id}/lead-source': {
        get: 'getLeadSource', 
        put: 'createLeadSource',
        alias: {verb: 'put', name: 'updateLeadSource'},
        delete: 'deleteLeadSource'
    },
    '/customers/{id}/upcoming-invoices': 'getAllUpcomingInvoices',
    '/customers/{id}/timeline': {get: 'getAllTimelineMessages', post: 'createTimelineComment'},
    '/customers/{id}/timeline/{messageId}': {get: 'getTimelineMessage', delete: 'deleteTimelineMessage'},

    //Files Resource
    '/attachments': {get: 'getAllAttachments', post: 'attach'},
    '/attachments/{id}': {get: 'getAttachment', put: 'updateAttachment', delete: 'detach'},
    '/files': {post: 'upload', get: 'getAll'},
    '/files/{id}/download': 'download',

    //Invoices resource
    '/invoices/{id}/issue': 'issue',
    '/invoices/{id}/reissue': 'reissue',
    '/invoices/{id}/abandon': 'abandon',
    '/invoices/{id}/void': 'void',
    '/invoices/{id}/items': {get: 'getAllInvoiceItems', post: 'createInvoiceItem'},
    '/invoices/{id}/lead-source': {
        get: 'getLeadSource', 
        put: 'createLeadSource',
        alias: {verb: 'put', name: 'updateLeadSource'},
        delete: 'deleteLeadSource'
    },
    '/invoices/{id}/timeline': {get: 'getAllTimelineMessages', post: 'createTimelineComment'},
    '/invoices/{id}/timeline/{messageId}': {get: 'getTimelineMessage', delete: 'deleteTimelineMessage'},
    '/invoices/{id}/transaction-allocations': 'getAllTransactionAllocations',
    '/invoices/{id}/transaction': 'applyTransaction',
    '/invoices/{id}/recalculate': 'recalculate',

    //kyc-documents
    '/kyc-documents/{id}/acceptance': 'accept',
    '/kyc-documents/{id}/rejection': 'reject',
    '/kyc-documents/{id}/review': 'review',

    //Payment cards
    '/payment-cards/{id}': {post: 'create', patch: 'patch'},
    '/payment-cards/{id}/deactivation': 'deactivate',

    //PaymentInstruments
    '/payment-instruments/{id}/deactivation': 'deactivate',
    
    //PaypalAccounts
    '/paypal-accounts/{id}/deactivation': 'deactivate',
    '/paypal-accounts/{id}/activation': 'activate',

    //SubscriptionReactivations
    '/subscription-reactivations': {get: 'getAll', post: 'reactivate'},

    //Subscriptions
    '/subscriptions/{id}/cancel': 'cancel',
    '/subscriptions/{id}/change-plan': 'changePlan',
    '/subscriptions/{id}/upcoming-invoices': 'getAllUpcomingInvoices',
    '/subscriptions/{id}/upcoming-invoices/{invoiceId}/issue': 'issueUpcomingInvoice',
    '/subscriptions/{id}/timeline': {
        get: 'getAllTimelineMessages',
        post: 'createTimelineComment'
    },
    '/subscriptions/{id}/timeline/{messageId}': {
        get: 'getTimelineMessage',
        delete: 'deleteTimelineMessage'
    },
    '/subscriptions/{id}/interim-invoice': 'createInterimInvoice',

    //Tags
    '/tags/{tag}/customers': {
        post: 'tagCustomers',
        delete : 'untagCustomers'
    },
    '/tags/{tag}/customers/{customerId}': {
        post: 'tagCustomer',
        delete : 'untagCustomer'
    },
    


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
    '/3dsecure': 'ThreeDSecure',
    '/authentication': 'CustomerAuthentication',
    '/authentication-options': 'CustomerAuthentication',
    '/authentication-tokens': 'CustomerAuthentication',
    '/attachments': 'Files',
    '/files': 'Files',
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
        const allFunctionsCode = Object.values(this.generateResourceFunctions(pathName)).join(',');
        let resourceContent = `export default function ${formatResourceName(pathName)}Resource({apiHandler}){return {${allFunctionsCode}}}`;
        resourceContent = prettier.format(resourceContent, { semi: true, parser: "babel", singleQuote: true });
        processedResources[filename] = resourceContent;
    }

    generateResourceFunctions(pathName) {
        const sharedPathNames = getPathNamesWithSameCustomResourceName(pathName);
        // console.log(sharedPathNames);
        const doesPathStartWithOneOfTheSharedPathNames = (path)=> sharedPathNames.find(name => path.startsWith(name + '/'));
        const resourcePaths = Object.keys(this.paths).filter(path => sharedPathNames.includes(path) || doesPathStartWithOneOfTheSharedPathNames(path));


        let allResourceFunctions = resourcePaths.reduce((functions, resourcePath) => {
            const newFunctions = this.generatePathFunctions(pathName, resourcePath);
            return {...functions, ...newFunctions}
        }, {});
        // console.log("💃🏽💃🏽💃🏽💃🏽💃🏽~ all flat allResourceFunctions", allResourceFunctions)
        return allResourceFunctions;
    }


    generatePathFunctions(resourceName, resourcePath) {
        const verbs = ['get', 'post', 'put', 'delete', 'patch'];
        const path = this.paths[resourcePath];

        const functions = verbs.reduce((functions, verb) => {
            const generator = this.buildGenerator(verb)
            if (!path[verb]) return functions
            const {functionName, functionCode} = generator(resourceName, resourcePath, path[verb]);
            functions[functionName] = functionCode;
            return functions;
        }, {});

        this.appendAliasMethodIfNeeded(resourceName, resourcePath, functions);
        return functions;
    }

    appendAliasMethodIfNeeded(resourceName, resourcePath, functions) {
        if (!customFunctionNames[resourcePath]) return;
        const path = this.paths[resourcePath];
        if (customFunctionNames[resourcePath]['alias']) {
            const {verb, name} = customFunctionNames[resourcePath]['alias'];
            const generator = this.buildGenerator(verb)
            let {functionCode} = generator(resourceName, resourcePath, path[verb]);
            const originalFunctionName = functionCode.split('(')[0];
            functionCode = functionCode.replace(originalFunctionName, name);
            functions[name] = functionCode;
        } 
    }

    buildGenerator(httpVerb) {
        if (httpVerb === 'get') return getGenerator(this.schema);
        if (httpVerb === 'post') return postGenerator(this.schema);
        return functionGenerator(this.schema, httpVerb);
    }

    hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
    }
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
    if (!hasRequestParameterRef(schema, resourcePath, httpVerb)) return false;
    const parameterSchema = getParameterSchema(schema, resourcePath, httpVerb);
    if (parameterSchema.type === 'object') return parameterSchema.properties.hasOwnProperty('_embedded');
    if (parameterSchema.allOf) return parameterSchema.allOf.some(schema => schema.properties && schema.properties.hasOwnProperty('_embedded'));
    return false;
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
