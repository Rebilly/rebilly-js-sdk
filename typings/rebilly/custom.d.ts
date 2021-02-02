
type operations = import('./generated').operations
type paths = import('./generated').paths

declare module rebilly {
    
  //**AUTO-GENERATED-TYPES-HERE**

  //TODO: 
  // Decided if we remove these superfluous Response "data wrappers"
  type PostGatewayAccountDataRequest = {id: String, data: PostGatewayAccountRequest};
  
  type PutGatewayAccountDataRequest = {id: String, data: PutGatewayAccountRequest};
  
  type PutGatewayAccountLimitDataRequest = {id: String, volumeLimitId: String, data: PutGatewayAccountLimitRequest};
  
  type PutGatewayAccountDowntimeScheduleDataRequest = {id: String, downtimeScheduleId: String, data: PutGatewayAccountDowntimeScheduleRequest};
  
  type PostGatewayAccountDowntimeScheduleDataRequest = {id: String, data: PostGatewayAccountDowntimeScheduleRequest};
  
  type PutBankAccountDataRequest = {id: String, data: PutBankAccountRequest};
  
  type PostBankAccountDataRequest = {id: String, data: PostBankAccountDataRequest};
  
  type PostForgotPasswordRequestDataRequest = {data: PostForgotPasswordRequestRequest};
  
  type PostSigninRequestDataRequest = {data: PostSigninRequestRequest};
  
  type PostSignupRequestDataRequest = {data: PostSignupRequestRequest};
}
