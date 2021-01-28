
type operations = import('./generated').operations
type paths = import('./generated').paths

declare module rebilly {
    // function getPropertyGeneric<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    //   return o[propertyName]; // o[propertyName] is of type T[K]
    // }
  
    // function getProperty(o: operations, propertyName: keyof operations) {
    //   return o[propertyName]; // o[propertyName] is of type T[K]
    // }
    // const PostSignupRequestOperation = getProperty(operations, 'PostSignupRequest');
    // const PostSignupRequestOperationType = typeof PostSignupRequestOperation;


  
  /*GENERATED TYPES: DON'T MANUALLY UPDATE AFTER THIS COMMENT*/

  //Account Resource
  type PostSignupRequestDataRequest = {data: operations['PostSignupRequest']['requestBody']['application/json']}
  type PostSignupResponse = Promise<{fields: operations['PostSignupRequest']['responses']['201']['application/json']}>
  
  type PostSigninRequestDataRequest = {data: operations['PostSigninRequest']['requestBody']['application/json']}
  type PostSigninResponse = Promise<{fields: operations['PostSigninRequest']['responses']['201']['application/json']}>
  
  type PostLogoutResponse = Promise<{fields: operations['PostLogoutRequest']['responses']['204']}>
  
  type PostActivationResponse = Promise<{fields: operations['PostActivation']['responses']['204']}>
  
  type PostForgotPasswordRequestDataRequest = {data: operations['PostForgotPasswordRequest']['requestBody']['application/json']}
  type PostForgotPasswordResponse = Promise<{fields: operations['PostForgotPasswordRequest']['responses']['204']}>

  //Aml resources

  
  //Api keys Resource
  type GetApiKeyCollectionQuery = operations['GetApiKeyCollection']['parameters']['query']
  type GetApiKeyCollectionResponse = {getJSON: {items: operations['GetApiKeyCollection']['responses']['200']['application/json']}}
  
  type GetApiKeyResponse = Promise<{fields: operations['GetApiKey']['responses']['200']['application/json']}>
  
  type PostApiKeyRequest = operations['PostApiKey']['requestBody']
  type PostApiKeyResponse = Promise<{fields: operations['PostApiKey']['responses']['201']['application/json']}>
  
  type PutApiKeyRequest = operations['PutApiKey']['requestBody']
  type PutApiKeyResponse = Promise<{fields: operations['PutApiKey']['responses']['201']['application/json']}>
  
  type DeleteApiKeyResponse = Promise<{fields: operations['DeleteApiKey']['responses']['204']}>
  
  //Bank accounts resource
  type GetBankAccountCollectionQuery = operations['GetBankAccountCollection']['parameters']['query']
  type GetBankAccountCollectionResponse = {getJSON: {items: operations['GetBankAccountCollection']['responses']['200']['application/json']}}
  
  //missing GetBankAccountRequest
  type GetBankAccountResponse = Promise<{fields: operations['GetBankAccount']['responses']['200']['application/json']}>
  
  type PostBankAccountDataRequest = {id: String, data: operations['PostBankAccount']['requestBody']}
  type PostBankAccountResponse = Promise<{fields: operations['PostBankAccount']['responses']['201']['application/json']}>
  
  type PutBankAccountDataRequest = {id: String, data: operations['PutBankAccount']['requestBody']}
  type PutBankAccountResponse = Promise<{fields: operations['PutBankAccount']['responses']['200']['application/json']}>
  
  //missing PostBankAccountDeactivationRequest 
  type PostBankAccountDeactivationResponse = Promise<{fields: operations['PostBankAccountDeactivation']['responses']['201']['application/json']}>

  // GatewayAccount Resource
  type GetGatewayAccountCollectionQuery = operations['GetGatewayAccountCollection']['parameters']['query']
  type GetGatewayAccountCollectionResponse = {getJSON: {items: operations['GetGatewayAccountCollection']['responses']['200']['application/json']}}
  
  //missing GetGatewayAccountRequest
  type GetGatewayAccountResponse = Promise<{fields: operations['GetGatewayAccount']['responses']['200']['application/json']}>

  type PostGatewayAccountDataRequest = {id: String, data: operations['PostGatewayAccount']['requestBody']}
  type PostGatewayAccountResponse = Promise<{fields: operations['PostGatewayAccount']['responses']['201']['application/json']}>
  
  type PutGatewayAccountDataRequest = {id: String, data: operations['PutGatewayAccount']['requestBody']}
  type PutGatewayAccountResponse = Promise<{fields: operations['PutGatewayAccount']['responses']['201']['application/json']}>
  
  // Missing DeleteGatewayAccountRequest
  type DeleteGatewayAccountResponse = Promise<{fields: operations['DeleteGatewayAccount']['responses']['204']}>
  
  //Missing PostGatewayAccountEnablementRequest
  type PostGatewayAccountEnablementResponse = Promise<{fields: operations['PostGatewayAccountEnablement']['responses']['201']['application/json']}>
  
  //Missing PostGatewayAccountDisablementRequest
  type PostGatewayAccountDisablementResponse = Promise<{fields: operations['PostGatewayAccountDisablement']['responses']['201']['application/json']}>
 
  //Missing PostGatewayAccountClosureRequest
  type PostGatewayAccountClosureResponse = Promise<{fields: operations['PostGatewayAccountClosure']['responses']['201']['application/json']}>

  //Missing checkCredentials related??

  //Missing request for all DowntimeSchedule related
  type GetGatewayAccountDowntimeScheduleCollectionResponse = {getJSON: {items: operations['GetGatewayAccountDowntimeScheduleCollection']['responses']['200']['application/json']}}
  
  type PostGatewayAccountDowntimeScheduleDataRequest = {id: String, data: operations['PostGatewayAccountDowntimeSchedule']['requestBody']}
  type PostGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['PostGatewayAccountDowntimeSchedule']['responses']['201']['application/json']}>
  
  type PutGatewayAccountDowntimeScheduleDataRequest = {id: String, downtimeScheduleId: String, data: operations['PutGatewayAccountDowntimeSchedule']['requestBody']}
  type PutGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['PutGatewayAccountDowntimeSchedule']['responses']['200']['application/json']}>
  
  //Missing request for all DeleteGatewayAccountDowntimeScheduleRequest
  type DeleteGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['DeleteGatewayAccountDowntimeSchedule']['responses']['204']}>
  
  type GetGatewayAccountLimitCollectionQuery = operations['GetGatewayAccountLimitCollection']['parameters']['query']
  type GetGatewayAccountLimitCollectionResponse = {getJSON: {items: operations['GetGatewayAccountLimitCollection']['responses']['200']['application/json']}}
  
  type GetGatewayAccountLimitResponse = Promise<{fields: operations['GetGatewayAccountLimit']['responses']['200']['application/json']}>
  
  type PutGatewayAccountLimitDataRequest = {id: String, volumeLimitId: String, data: operations['PutGatewayAccountLimit']['requestBody']['application/json']}
  type PutGatewayAccountLimitResponse = Promise<{fields: operations['PutGatewayAccountLimit']['responses']['200']['application/json']}>
  
  type DeleteGatewayAccountLimitResponse = Promise<{fields: operations['DeleteGatewayAccountLimit']['responses']['204']}>
  
  type GetGatewayAccountTimelineCollectionQuery = operations['GetGatewayAccountTimelineCollection']['parameters']['query']
  type GetGatewayAccountTimelineCollectionResponse = {getJSON: {items: operations['GetGatewayAccountTimelineCollection']['responses']['200']['application/json']}}
  
  type GetGatewayAccountTimelineResponse = Promise<{fields: operations['GetGatewayAccountTimeline']['responses']['200']['application/json']}>
  
  type DeleteGatewayAccountTimelineResponse = Promise<{fields: operations['DeleteGatewayAccountTimeline']['responses']['204']}>
  
  type PostGatewayAccountTimelineDataRequest = {id: String, data: operations['PostGatewayAccountTimeline']['requestBody']}
  type PostGatewayAccountTimelineResponse = Promise<{fields: operations['PostGatewayAccountTimeline']['responses']['201']['application/json']}>
  
  //Customers resource
  type GetCustomerCollectionQuery = operations['GetCustomerCollection']['parameters']['query']
  type GetCustomerCollectionResponse = {getJSON: {items: operations['GetCustomerCollection']['responses']['200']['application/json']}}
  
  // Missing Customer request
  type GetCustomerResponse = Promise<{fields: operations['GetCustomer']['responses']['200']['application/json']}>



  /*GENERATED TYPES: DON'T MANUALLY UPDATE BEFORE THIS COMMENT*/




  // Autocompletion inside brackets works after typing quote

  //TODO: 
  // Response data wrappers (superfluous):
  // GatewayAccount Resource
  //Missing checkCredentials related??
}
