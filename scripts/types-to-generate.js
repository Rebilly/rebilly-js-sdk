const generatedTypes = 
`
  /*GENERATED TYPES: DON'T MANUALLY UPDATE AFTER THIS COMMENT*/

  //Account Resource
  ${RequestDataType('PostSignupRequest')}
  ${ResponseType('PostSignupRequest')}
  
  ${RequestDataType('PostSigninRequest')}
  ${ResponseType('PostSigninRequest')}
  
  ${Response204Type('PostLogoutRequest')}
  
  ${Response204Type('PostActivation')}
  
  ${RequestDataType('PostForgotPasswordRequest')}
  ${Response204Type('PostForgotPasswordRequest')}

  //Aml resources

  
  //Api keys Resource
  ${CollectionQueryType('GetApiKeyCollection')}
  ${CollectionResponseType('GetApiKeyCollection')}
  
  ${ResponseType('GetApiKey', '200')}
  
  ${EmptyRequestType('PostApiKey')}
  ${ResponseType('PostApiKey')}
  
  ${EmptyRequestType('PutApiKey')}
  ${ResponseType('PutApiKey')}
  
  ${Response204Type('DeleteApiKey')}
  
  //Bank accounts resource
  ${CollectionQueryType('GetBankAccountCollection')}
  ${CollectionResponseType('GetBankAccountCollection')}
  
  //missing GetBankAccountRequest
  ${ResponseType('GetBankAccount', '200')}
  
  ${RequestIdDataType('PostBankAccount')}
  ${ResponseType('PostBankAccount')}
  
  ${RequestIdDataType('PutBankAccount')}
  ${ResponseType('PutBankAccount', '200')}
  
  //missing PostBankAccountDeactivationRequest 
  ${ResponseType('PostBankAccountDeactivation')}

  // GatewayAccount Resource
  ${CollectionQueryType('GetGatewayAccountCollection')}
  ${CollectionResponseType('GetGatewayAccountCollection')}
  
  //missing GetGatewayAccountRequest
  ${ResponseType('GetGatewayAccount', '200')}

  ${RequestIdDataType('PostGatewayAccount')}
  ${ResponseType('PostGatewayAccount')}
  
  ${RequestIdDataType('PutGatewayAccount')}
  ${ResponseType('PutGatewayAccount')}
  
  // Missing DeleteGatewayAccountRequest
  ${Response204Type('DeleteGatewayAccount')}
  
  //Missing PostGatewayAccountEnablementRequest
  ${ResponseType('PostGatewayAccountEnablement')}
  
  //Missing PostGatewayAccountDisablementRequest
  ${ResponseType('PostGatewayAccountDisablement')}
 
  //Missing PostGatewayAccountClosureRequest
  ${ResponseType('PostGatewayAccountClosure')}

  //Missing checkCredentials related??

  //Missing request for all DowntimeSchedule related
  ${CollectionResponseType('GetGatewayAccountDowntimeScheduleCollection')}
  
  ${RequestIdDataType('PostGatewayAccountDowntimeSchedule')}
  ${ResponseType('PostGatewayAccountDowntimeSchedule')}
  
  ${RequestDowntimeScheduleDataType('PutGatewayAccountDowntimeSchedule')}
  ${ResponseType('PutGatewayAccountDowntimeSchedule', '200')}
  
  //Missing request for all DeleteGatewayAccountDowntimeScheduleRequest
  ${Response204Type('DeleteGatewayAccountDowntimeSchedule')}
  
  ${CollectionQueryType('GetGatewayAccountLimitCollection')}
  ${CollectionResponseType('GetGatewayAccountLimitCollection')}
  
  ${ResponseType('GetGatewayAccountLimit', '200')}
  
  ${RequestAccountLimitDataType('PutGatewayAccountLimit')}
  ${ResponseType('PutGatewayAccountLimit', '200')}
  
  ${Response204Type('DeleteGatewayAccountLimit')}
  
  ${CollectionQueryType('GetGatewayAccountTimelineCollection')}
  ${CollectionResponseType('GetGatewayAccountTimelineCollection')}
  
  ${ResponseType('GetGatewayAccountTimeline', '200')}
  
  ${Response204Type('DeleteGatewayAccountTimeline')}
  
  ${RequestIdDataType('PostGatewayAccountTimeline')}
  ${ResponseType('PostGatewayAccountTimeline')}
  
  //Customers resource
  ${CollectionQueryType('GetCustomerCollection')}
  ${CollectionResponseType('GetCustomerCollection')}
  
  // Missing Customer request
  ${ResponseType('GetCustomer', '200')}



  /*GENERATED TYPES: DON'T MANUALLY UPDATE BEFORE THIS COMMENT*/
`

// TODO: meter tests para estas funciones:
// TODO: hacer un test automatico despues de escupe para saber que he generado todo bien...(tsc del index.d.ts??)
function RequestDataType(operationName) {
    return `type ${operationName}DataRequest = {data: operations['${operationName}']['requestBody']['application/json']}`;
};

function RequestIdDataType(operationName) {
    return `type ${operationName}DataRequest = {id: String, data: operations['${operationName}']['requestBody']}`;
};

function RequestIdDataJsonType(operationName) {
    return `type ${operationName}DataRequest = {id: String, data: operations['${operationName}']['requestBody']['application/json']}`;
};

function RequestDowntimeScheduleDataType(operationName) {
    return `type ${operationName}DataRequest = {id: String, downtimeScheduleId: String, data: operations['${operationName}']['requestBody']}`;
};

function RequestAccountLimitDataType(operationName) {
    return `type ${operationName}DataRequest = {id: String, volumeLimitId: String, data: operations['${operationName}']['requestBody']['application/json']}`;
};

function EmptyRequestType(operationName) {
    return `type ${operationName}Request = operations['${operationName}']['requestBody']`;
};

function CollectionQueryType(operationName) {
    return `type ${operationName}Query = operations['${operationName}']['parameters']['query']`;
};

function CollectionResponseType(operationName) {
    return `type ${operationName}Response = {getJSON: {items: operations['${operationName}']['responses']['200']['application/json']}}`;
};

function ResponseType(operationName, okCode='201') {
    return `type ${operationName.replace('Request','')}Response = Promise<{fields: operations['${operationName}']['responses']['${okCode}']['application/json']}>`;
};

function Response204Type(operationName) {
    return `type ${operationName.replace('Request','')}Response = Promise<{fields: operations['${operationName}']['responses']['204']}>`;
};

module.exports = {generatedTypes}