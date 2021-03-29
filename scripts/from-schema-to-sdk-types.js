const axios = require('axios');

function generateSDKTypesFromSchema() {
    return axios.get('https://api.redoc.ly/registry/rebilly/combined/combined/bundle/master/openapi.json')
    .then(response => processSchema(response.data))
}

module.exports = {generateSDKTypesFromSchema} 

const newLineAndTab = '\n  '

function processSchema(schema) {
    let result = '' 
    const paths = schema.paths;

    Object.keys(schema.paths).forEach(pathName => result += openPath(pathName))
    
    return result

    function openPath(pathName) {
        let result = ''
        // console.log('opening path', pathName)
        const path = paths[pathName]
        const globalParameters = path.parameters
        // console.log({globalParameters})
        
        if (path.get) {
            result += generateGet(path.get)
        }
        if (path.post) {
            result += generatePost(path.post)
        }
        if (path.put) {
            result += generatePut(path.put)
        }
        if (path.patch) {
            result += generatePatch(path.patch)
        }
        if (path.delete) {
            result += generateDelete(path.delete)
        }
        return result + newLineAndTab
    }

    function generateGet(getPath) {
        let result = ''
        const operationId = getPath.operationId
        if (!getPath.parameters) {
            warn(`⚠️  Missing parameters for Get operationId ${operationId}`)
        } else {
            result+= generateQueryType(operationId, getPath) + newLineAndTab
        }
        result += generateResponseType(operationId, getPath)
        return result
    }

    function generatePost(postPath) {
        let result = ''
        const operationId = postPath.operationId
        if (!postPath.requestBody) {
            warn(`⚠️  Missing requestBody for Post operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, postPath)
        }
        result += generateResponseType(operationId, postPath)
        return result
    }

    function generatePut(putPath) {
        let result = ''
        const operationId = putPath.operationId
        if (!putPath.requestBody) {
            warn(`⚠️  Missing requestBody for Put operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, putPath)
        }
        result += generateResponseType(operationId, putPath)
        return result
    }
    
    function generatePatch(patchPath) {
        let result = ''
        const operationId = patchPath.operationId
        if (!patchPath.requestBody) {
            warn(`⚠️ Missing requestBody for Patch operationId ${operationId}`)
        } else {
            result += generateRequestType(operationId, patchPath)
        }
        result += generateResponseType(operationId, patchPath)
        return result
    }

    function generateDelete(deletePath) {
        let result = ''
        const operationId = deletePath.operationId
        if (deletePath.requestBody) {
            result += generateRequestType(operationId, deletePath) 
        } else if (deletePath.parameters && deletePath.parameters.query) {
            result += generateQueryType(operationId, deletePath) 
        }
        result += generateResponseType(operationId, deletePath)
        return result
    }

    function generateQueryType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['parameters']`
        if (operationId.endsWith('Collection')) {
            requestType += "['query']"
        }
        return requestType + newLineAndTab
    }

    function generateRequestType(operationId, path) {
        const requestTypeName = operationId + 'Request'
        let requestType = `type ${requestTypeName} = operations['${operationId}']['requestBody']`
        if (hasApplicationJson(path)) {
            requestType += "['application/json']"
        }
        return requestType + newLineAndTab
    }
    
    function generateResponseType(operationId, path) {
        const responseTypeName = operationId + 'Response'
        let responseType = `type ${responseTypeName} = ${promise(operationId, path)}`
        return responseType + newLineAndTab
    }

    function promise(operationId, path) {
        let response = `operations['${operationId}']['responses']${getResponseCode(path)}`
        return (operationId.endsWith('Collection')) ? itemsPromise(response) : fieldsPromise(response)
    }
            
    function getResponseCode(path) {
        let code = null
        if (path.responses['201']) {
            code = '201'
        } else if (path.responses['204']) {
            code = '204'
        } else if (path.responses['200']) {
            code = '200'
        }
        let result = `['${code}']`
        if (path.responses[code].content && path.responses[code].content['application/json']) {
            result += `['application/json']`
        }
        return result
    }

    function fieldsPromise(response) {
        return `Promise<{fields: ${response}}>`
    }
    
    function itemsPromise(response) {
        //TODO: Sometimes we have getJSON function wrapping items
        return `Promise<{ items: ${response}}>`
    }

    function hasApplicationJson(path) {
        return (path.requestBody && path.requestBody.content && path.requestBody.content['application/json']) 
    }
  
    function warn(message) {
        //If verbose
        //console.warn(message)
    }
}