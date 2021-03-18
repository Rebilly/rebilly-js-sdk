const axios = require('axios');
const prettier = require('prettier');
const kebabCase = require('lodash.kebabcase');
const camelCase = require('lodash.camelcase');

const {  
    FunctionGenerator
} = require('./function-generator');
const { customFunctionNames, customResourceNames } = require('./customizations/customizations');
const { pathsWithDownloadCSV } = require('./customizations/download-functions');

function generateSDKFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/core-api/core/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data).processSchema());
}

// Is it possible that we have an experimental not combined schema???
function generateSDKFromSchemaStorefront() {
    return axios.get('https://api.redoc.ly/registry/rebilly/storefront/storefront/bundle/master/openapi.json')
    .then(response => new SDKGenerator(response.data).processSchema());
}

function getResourceFromPath(pathName) {
    return kebabCase(formatResourceName(pathName)) + '-resource.js';
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

class SDKGenerator {
    constructor(schema) {
        this.schema = schema;
        this.paths = schema.paths;
    }

    processSchema() {
        let processedResources = {};

        Object.keys(this.paths).forEach(pathName => {
            //Temporary avoid iteration to test/debug just one path at a time
            // const pathName = Object.keys(this.schema.paths)[5];
            this.generateResourceFileContent(processedResources, pathName);
          
        })
        return processedResources;
    }

    generateResourceFileContent(processedResources, pathName) {
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
        const doesPathStartWithOneOfTheSharedPathNames = (path)=> sharedPathNames.find(name => path.startsWith(name + '/'));
        const resourcePaths = Object.keys(this.paths).filter(path => sharedPathNames.includes(path) || doesPathStartWithOneOfTheSharedPathNames(path));
        
        let allResourceFunctions = resourcePaths.reduce((functions, resourcePath) => {
            const newFunctions = this.generatePathFunctions(resourcePath);
            return {...functions, ...newFunctions}
        }, {});
        
        this.appendAliasDownloadCSVMethodIfNeeded(pathName, allResourceFunctions);
        this.appendDownloadPDFIfNeeded(pathName, allResourceFunctions);
        this.avoidUpdateFunctionForSomeResources(pathName, allResourceFunctions);
        return allResourceFunctions;
    }

    generatePathFunctions(resourcePath) {
        const verbs = ['get', 'post', 'put', 'delete', 'patch'];
        const path = this.paths[resourcePath];

        const functions = verbs.reduce((functions, verb) => {
            if (!path[verb]) return functions
            const {functionName, functionCode} = new FunctionGenerator(this.schema, resourcePath, verb).generateFunction();
            functions[functionName] = functionCode;
            return functions;
        }, {});

        this.appendAliasMethodIfNeeded(resourcePath, functions);
        return functions;
    }

    appendAliasMethodIfNeeded(resourcePath, functions) {
        if (!customFunctionNames[resourcePath]) return;
        const path = this.paths[resourcePath];
        if (customFunctionNames[resourcePath]['alias']) {
            const {verb, name} = customFunctionNames[resourcePath]['alias'];
            let {functionCode} = new FunctionGenerator(this.schema, resourcePath, verb).generateFunction();
            const originalFunctionName = functionCode.split('(')[0];
            functionCode = functionCode.replace(originalFunctionName, name);
            functions[name] = functionCode;
        } 
    }

    appendAliasDownloadCSVMethodIfNeeded(pathName, functions) {
        if (pathsWithDownloadCSV.includes(pathName)) {
            functions['downloadCSV'] = `downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
                const config = {
                    params: {
                        limit,
                        offset,
                        sort,
                        expand,
                        filter,
                        q
                    },
                    headers: csvHeader
                };
                return apiHandler.download('${pathName.substr(1)}', config);
            }`;
        };
    }

    appendDownloadPDFIfNeeded(pathName, functions) {
        if (pathName === '/invoices') {
            functions['downloadPDF'] = `downloadPDF({id}) {
                const config = {
                    headers: pdfHeader,
                    responseType: 'arraybuffer'
                };
                return apiHandler.download(\`invoices/\${id}\`, config);
            },`;
        }
    }

    // There certain resources where we already allow post and put though create function
    // so that we don't want to include explicit update function
    avoidUpdateFunctionForSomeResources(pathName, functions) {
        if (['/subscription-cancellations', '/bank-accounts'].includes(pathName)) {
            delete functions.update;
        }
    }

    hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
    }
}

function getPathNamesWithSameCustomResourceName(pathName) {
    const resourceName = formatResourceName(pathName);
    const sharedPathNames = Object.keys(customResourceNames).filter(key => customResourceNames[key] === resourceName);
    if (sharedPathNames.length === 0) { sharedPathNames.push(pathName)}
    return sharedPathNames;
};

function formatResourceName(pathName) {
    for (const [key, value] of Object.entries(customResourceNames)) {
        if(pathName.startsWith(key)) return value;
    }

    const firstResourcePathSegment = pathName.split('/')[1];
    if(pathName === '/' + firstResourcePathSegment || pathName.startsWith(`/${firstResourcePathSegment}/`)) {
        return capitalize(camelCase(firstResourcePathSegment)) 
    }

    return capitalize(camelCase(pathName));
}

function capitalize(s) {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

module.exports = {generateSDKFromSchema, generateSDKFromSchemaStorefront, SDKGenerator, getResourceType, getResourceFromPath} 
