declare module rebilly {
    
  //**JS-SDK types generated with custom scripts (from-schema-to-sdk-types)**
  //<sdk-types>
  type Expandable <T> = (Partial<T> & { expand?: String })

  //TODO: 
  // Decide if we remove these superfluous Response "data wrappers"
  // type PostApiKeyDataRequest = {id: String, data: PostApiKeyRequest};
  
  // type PutApiKeyDataRequest = {id: String, data: PutApiKeyRequest};
  
  // type PostGatewayAccountDataRequest = {id: String, data: PostGatewayAccountRequest};
  
  // type PutGatewayAccountDataRequest = {id: String, data: PutGatewayAccountRequest};
  
  // type PutGatewayAccountLimitDataRequest = {id: String, volumeLimitId: String, data: PutGatewayAccountLimitRequest};
  
  // type PutGatewayAccountDowntimeScheduleDataRequest = {id: String, downtimeScheduleId: String, data: PutGatewayAccountDowntimeScheduleRequest};
  
  // type PostGatewayAccountDowntimeScheduleDataRequest = {id: String, data: PostGatewayAccountDowntimeScheduleRequest};
  
  // type PutBankAccountDataRequest = {id: String, data: PutBankAccountRequest};
  
  // type PostBankAccountDataRequest = {id: String, data: PostBankAccountRequest};
  
  // type PostForgotPasswordRequestDataRequest = {data: PostForgotPasswordRequestRequest};
  
  // type PostSigninRequestDataRequest = {data: PostSigninRequestRequest};
  
  // type PostSignupRequestDataRequest = {data: PostSignupRequestRequest};
  
  // type PostInvoiceIssuanceDataRequest = {id: String, data: PostInvoiceIssuanceRequest};
  
  // type PostInvoiceReissuanceDataRequest = {id: String, data: PostInvoiceReissuanceRequest};
  
  // type PostInvoiceItemDataRequest = {id: String, data: PostInvoiceItemRequest};
  
  // type PutCustomerLeadSourceDataRequest = {id: String, data: PutCustomerLeadSourceRequest};
  
  // type PostBlocklistDataRequest = {id: String, data: PostBlocklistRequest};

  //**Types generated with openapi-typescript**
  //<open-api-types>
}

