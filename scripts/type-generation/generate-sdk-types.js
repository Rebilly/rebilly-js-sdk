const newLineAndTab = '\n  ';

function generateSdkTypes(schema, verbose = false) {
  let result = '';
  const paths = schema.paths;

  Object.keys(schema.paths).forEach(
    (pathName) => (result += openPath(pathName))
  );

  return result;

  function openPath(pathName) {
    let result = '';
    const path = paths[pathName];
    const globalParameters = path.parameters;

    if (path.get) {
      result += generateGet(path.get, pathName);
    }
    if (path.post) {
      result += generatePost(path.post);
    }
    if (path.put) {
      result += generatePut(path.put);
    }
    if (path.patch) {
      result += generatePatch(path.patch);
    }
    if (path.delete) {
      result += generateDelete(path.delete);
    }
    return result + newLineAndTab;
  }

  function generateGet(getPath, pathName) {
    let result = '';
    const operationId = getPath.operationId;
    result += generateQueryType(operationId, getPath, pathName) + newLineAndTab;
    result += generateResponseTypes(operationId, getPath);
    return result;
  }

  function generatePost(postPath) {
    let result = '';
    const operationId = postPath.operationId;
    if (!postPath.requestBody) {
      warn(`⚠️  Missing requestBody for Post operationId ${operationId}`);
    } else {
      result += generateRequestType(operationId, postPath);
      result += generateCreateType(operationId);
    }
    result += generateResponseTypes(operationId, postPath);
    return result;
  }

  function generatePut(putPath) {
    let result = '';
    const operationId = putPath.operationId;
    if (!putPath.requestBody) {
      warn(`⚠️  Missing requestBody for Put operationId ${operationId}`);
    } else {
      result += generateRequestType(operationId, putPath);
    }
    result += generateResponseTypes(operationId, putPath);
    return result;
  }

  function generatePatch(patchPath) {
    let result = '';
    const operationId = patchPath.operationId;
    if (!patchPath.requestBody) {
      warn(`⚠️ Missing requestBody for Patch operationId ${operationId}`);
    } else {
      result += generateRequestType(operationId, patchPath);
    }
    result += generateResponseTypes(operationId, patchPath);
    return result;
  }

  function generateRequestTypeName(operationId) {
    return operationId + 'Request';
  }

  function generateDelete(deletePath) {
    let result = '';
    const operationId = deletePath.operationId;
    if (deletePath.requestBody) {
      result += generateRequestType(operationId, deletePath);
    } else if (deletePath.parameters && deletePath.parameters.query) {
      result += generateQueryType(operationId, deletePath);
    }
    result += generateResponseTypes(operationId, deletePath);
    return result;
  }

  function generateQueryType(operationId, getPath, pathName) {
    const requestTypeName = generateRequestTypeName(operationId);
    const hasParametersInPathName = pathName.includes('{');
    if (!getPath.parameters && !hasParametersInPathName) {
      return '';
    }
    if (!getPath.parameters && hasParametersInPathName) {
      return `type ${generateRequestTypeName(
        operationId
      )} = ${generatePathParametersTypeBody(pathName)}\n`;
    }

    const parameters = `operations['${operationId}']['parameters']`;
    let requestType = `type ${requestTypeName} = ${parameters}`;
    if (operationId.endsWith('Collection')) {
      // Combine all the object properties from the query and path
      // properties of parameters. Sometimes parameters does not have
      // a path property, so use 'extends' to ensure we only union with
      // the path property when it exists (otherwise we'll get an error).
      requestType = `type ${requestTypeName} = ${parameters}["query"] & (${parameters} extends {path: {}} ? ${parameters}["path"] : {})`;
    }

    if (hasParametersInPathName) {
      requestType += ' & ' + generatePathParametersTypeBody(pathName);
    }

    return requestType + newLineAndTab;
  }

  function generateRequestType(operationId, path) {
    const requestTypeName = generateRequestTypeName(operationId);
    let requestType = `type ${requestTypeName} = operations['${operationId}']['requestBody']`;
    if (hasJsonRequest(path)) {
      requestType += "['content']['application/json']";
    }
    return requestType + newLineAndTab;
  }

  function generateCreateType(operationId) {
    const dataRequestTypeName = generateRequestTypeName(operationId);
    const requestTypeName = dataRequestTypeName.replace('Post', 'Create');
    let requestType = `type ${requestTypeName} = { id: String,  data: ${dataRequestTypeName}, expand?: String }`;
    return requestType + newLineAndTab;
  }

  function generateResponseTypes(operationId, path) {
    const responseTypeName = operationId + 'Response';

    let responseType = `type ${responseTypeName} = ${`operations['${operationId}']['responses']${getResponseCode(
      path
    )}`}`;

    if (
      operationId.endsWith('Collection') &&
      operationId !== 'GetEventRuleCollection' // This operation is not returning a real collection
    ) {
      /* Getting the type of the first element of the collection
      to be used by {items: fields: []} TS type */
      responseType += '[0]';
    }

    let responsePromiseType = `type ${responseTypeName}Promise = ${promise(
      operationId,
      responseTypeName
    )}`;

    return responseType + newLineAndTab + responsePromiseType + newLineAndTab;
  }

  function promise(operationId, responseTypeName) {
    return operationId.endsWith('Collection')
      ? itemsPromise(responseTypeName)
      : fieldsPromise(responseTypeName);
  }

  function getResponseCode(path) {
    let code = null;
    if (path.responses['201']) {
      code = '201';
    } else if (path.responses['204']) {
      code = '204';
    } else if (path.responses['200']) {
      code = '200';
    }
    let result = `['${code}']`;
    if (
      path.responses[code].content &&
      path.responses[code].content['application/json']
    ) {
      result += `['content']['application/json']`;
    }
    // Assuming that $ref will always contain application/json
    if (code === '201' && path.responses[code]['$ref']) {
      result += `['content']['application/json']`;
    }
    return result;
  }

  function fieldsPromise(response) {
    return `Promise<{fields: ${response}}>`;
  }

  function itemsPromise(response) {
    return `Promise<{ items: {fields: ${response}}[], getJSON: object, total?: number, offset?: number, limit?: number }>`;
  }

  function hasJsonRequest(path) {
    return (
      (path.requestBody &&
        path.requestBody.content &&
        path.requestBody.content['application/json']) ||
      path.requestBody.hasOwnProperty('$ref')
    );
  }

  function generatePathParametersTypeBody(pathName) {
    const getBindParamsFromPathName = (pathName) =>
      pathName.match(/(?<=\{).+?(?=\})/g);
    const pathParams = getBindParamsFromPathName(pathName);
    const pathParamTypes =
      '{ ' +
      pathParams.map((paramName) => paramName + ' : String').join(',') +
      ' }';
    return pathParamTypes;
  }

  function warn(message) {
    if (verbose) console.warn(message);
  }
}

module.exports = { generateSdkTypes };
