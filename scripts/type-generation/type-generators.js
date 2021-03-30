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
    /**  Here we have 1 problems: 
     Create functions are used for both put and create and we normally have the request type with a $ref
     EXAMPLE:
     Path /coupons post and path /coupons/{id} put have: 
    
     "requestBody": {
        "$ref": "#/components/requestBodies/Coupon"
      }, 

      but openapi-typescript 2.X generates: 

       requestBody: {};

    I think that moving to openapi-typescript 3.X would fix the problem but it just works with the combined API --> review...
    */
}

module.exports = {
    generateCollectionRequestType
} 
