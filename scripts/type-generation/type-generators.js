function generateCollectionRequestType(operationId, isExpandable) {
    let requestType = `${operationId}Request`;
    if (isExpandable) {
        requestType = `Expandable<rebilly.${requestType}>`;
    } 

    const responseType = `${operationId}Response`;

    return  `
/**
* @param { rebilly.${requestType} } request
* @returns { rebilly.${responseType} } response
*/`;
};

function generateCreateRequestType(operationId) {
    let requestType = `${operationId}Request`.replace('Post', 'Create');
    const responseType = `${operationId}Response`;
    return  `
/**
* @param { rebilly.${requestType} } request
* @returns { rebilly.${responseType} } response
*/`;
}

module.exports = {
    generateCollectionRequestType, generateCreateRequestType
} 
