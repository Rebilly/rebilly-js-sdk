const axios = require('axios');
const prettier = require('prettier');
const kebabCase = require('lodash.kebabcase');
const {getPathNamesWithSameCustomResourceName, 
    formatResourceName, 
    functionGenerator, 
    getGenerator, 
    postGenerator
} = require('./generators');
const { customFunctionNames } = require('./customizations/customizations');
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
        
        this.appendAliasDownloadCSVMethodIfNeeded(pathName, allResourceFunctions);
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

    appendAliasDownloadCSVMethodIfNeeded(pathName, functions) {
        if (pathsWithDownloadCSV.includes(pathName)) {
            functions['downloadCSV'] = `downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
    const config = {
        params: {
            limit,
            offset,
            sort,
            expand,
            filter,
            q,
            criteria
        },
        headers: csvHeader
    };
    return apiHandler.download('${pathName.substr(1)}', config);
}`;
        };
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

module.exports = {generateSDKFromSchema, generateSDKFromSchemaStorefront, SDKGenerator, getResourceType, getResourceFromPath} 
