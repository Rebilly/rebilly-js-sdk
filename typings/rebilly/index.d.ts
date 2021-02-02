
type operations = import('./generated').operations
type paths = import('./generated').paths

declare module rebilly {
    
  type Get3DSecureCollectionRequest = operations['Get3DSecureCollection']['parameters']['query']
  
  type Get3DSecureCollectionResponse = operations['Get3DSecureCollection']['responses']['200']
  type Post3DSecureRequest = operations['Post3DSecure']['requestBody']['application/json']
  type Post3DSecureResponse = operations['Post3DSecure']['responses']['201']['application/json']
  
  type Get3DSecureResponse = operations['Get3DSecure']['responses']['200']
  
  type GetAttachmentCollectionRequest = operations['GetAttachmentCollection']['parameters']['query']
  
  type GetAttachmentCollectionResponse = operations['GetAttachmentCollection']['responses']['200']
  type PostAttachmentRequest = operations['PostAttachment']['requestBody']
  type PostAttachmentResponse = operations['PostAttachment']['responses']['201']
  
  type GetAttachmentResponse = operations['GetAttachment']['responses']['200']
  type PutAttachmentRequest = operations['PutAttachment']['requestBody']
  type PutAttachmentResponse = operations['PutAttachment']['responses']['201']
  type DeleteAttachmentResponse = operations['DeleteAttachment']['responses']['204']
  
  type GetAuthenticationOptionResponse = operations['GetAuthenticationOption']['responses']['200']
  type PutAuthenticationOptionRequest = operations['PutAuthenticationOption']['requestBody']['application/json']
  type PutAuthenticationOptionResponse = operations['PutAuthenticationOption']['responses']['200']['application/json']
  
  type GetAuthenticationTokenCollectionRequest = operations['GetAuthenticationTokenCollection']['parameters']['query']
  
  type GetAuthenticationTokenCollectionResponse = operations['GetAuthenticationTokenCollection']['responses']['200']
  type PostAuthenticationTokenRequest = operations['PostAuthenticationToken']['requestBody']['application/json']
  type PostAuthenticationTokenResponse = operations['PostAuthenticationToken']['responses']['201']['application/json']
  
  type GetAuthenticationTokenVerificationResponse = operations['GetAuthenticationTokenVerification']['responses']['200']
  type DeleteAuthenticationTokenResponse = operations['DeleteAuthenticationToken']['responses']['204']
  
  type PostAuthenticationTokenExchangeRequest = operations['PostAuthenticationTokenExchange']['requestBody']['application/json']
  type PostAuthenticationTokenExchangeResponse = operations['PostAuthenticationTokenExchange']['responses']['201']['application/json']
  
  type GetBankAccountCollectionRequest = operations['GetBankAccountCollection']['parameters']['query']
  
  type GetBankAccountCollectionResponse = operations['GetBankAccountCollection']['responses']['200']
  type PostBankAccountRequest = operations['PostBankAccount']['requestBody']['application/json']
  type PostBankAccountResponse = operations['PostBankAccount']['responses']['201']['application/json']
  
  type GetBankAccountResponse = operations['GetBankAccount']['responses']['200']
  type PutBankAccountRequest = operations['PutBankAccount']['requestBody']['application/json']
  type PutBankAccountResponse = operations['PutBankAccount']['responses']['201']['application/json']
  type PatchBankAccountRequest = operations['PatchBankAccount']['requestBody']['application/json']
  type PatchBankAccountResponse = operations['PatchBankAccount']['responses']['200']['application/json']
  
  type PostBankAccountDeactivationResponse = operations['PostBankAccountDeactivation']['responses']['201']
  
  type GetBlocklistCollectionRequest = operations['GetBlocklistCollection']['parameters']['query']
  
  type GetBlocklistCollectionResponse = operations['GetBlocklistCollection']['responses']['200']
  type PostBlocklistRequest = operations['PostBlocklist']['requestBody']
  type PostBlocklistResponse = operations['PostBlocklist']['responses']['201']
  
  type GetBlocklistResponse = operations['GetBlocklist']['responses']['200']
  type PutBlocklistRequest = operations['PutBlocklist']['requestBody']
  type PutBlocklistResponse = operations['PutBlocklist']['responses']['201']
  type DeleteBlocklistResponse = operations['DeleteBlocklist']['responses']['204']
  
  type GetCouponRedemptionCollectionRequest = operations['GetCouponRedemptionCollection']['parameters']['query']
  
  type GetCouponRedemptionCollectionResponse = operations['GetCouponRedemptionCollection']['responses']['200']
  type PostCouponRedemptionRequest = operations['PostCouponRedemption']['requestBody']['application/json']
  type PostCouponRedemptionResponse = operations['PostCouponRedemption']['responses']['201']['application/json']
  
  type GetCouponRedemptionResponse = operations['GetCouponRedemption']['responses']['200']
  
  type PostCouponRedemptionCancellationResponse = operations['PostCouponRedemptionCancellation']['responses']['201']
  
  type GetCouponCollectionRequest = operations['GetCouponCollection']['parameters']['query']
  
  type GetCouponCollectionResponse = operations['GetCouponCollection']['responses']['200']
  type PostCouponRequest = operations['PostCoupon']['requestBody']
  type PostCouponResponse = operations['PostCoupon']['responses']['201']
  
  type GetCouponResponse = operations['GetCoupon']['responses']['200']
  type PutCouponRequest = operations['PutCoupon']['requestBody']
  type PutCouponResponse = operations['PutCoupon']['responses']['201']
  
  type PostCouponExpirationRequest = operations['PostCouponExpiration']['requestBody']['application/json']
  type PostCouponExpirationResponse = operations['PostCouponExpiration']['responses']['201']['application/json']
  
  type GetCredentialCollectionRequest = operations['GetCredentialCollection']['parameters']['query']
  
  type GetCredentialCollectionResponse = operations['GetCredentialCollection']['responses']['200']
  type PostCredentialRequest = operations['PostCredential']['requestBody']
  type PostCredentialResponse = operations['PostCredential']['responses']['201']
  
  type GetCredentialResponse = operations['GetCredential']['responses']['200']
  type PutCredentialRequest = operations['PutCredential']['requestBody']
  type PutCredentialResponse = operations['PutCredential']['responses']['201']
  type DeleteCredentialResponse = operations['DeleteCredential']['responses']['204']
  
  type GetCustomFieldCollectionResponse = operations['GetCustomFieldCollection']['responses']['200']
  
  type GetCustomFieldResponse = operations['GetCustomField']['responses']['200']
  type PutCustomFieldRequest = operations['PutCustomField']['requestBody']['application/json']
  type PutCustomFieldResponse = operations['PutCustomField']['responses']['201']['application/json']
  
  type GetCustomerCollectionRequest = operations['GetCustomerCollection']['parameters']['query']
  
  type GetCustomerCollectionResponse = operations['GetCustomerCollection']['responses']['200']
  type PostCustomerRequest = operations['PostCustomer']['requestBody']
  type PostCustomerResponse = operations['PostCustomer']['responses']['201']
  
  type GetCustomerResponse = operations['GetCustomer']['responses']['200']
  type PutCustomerRequest = operations['PutCustomer']['requestBody']
  type PutCustomerResponse = operations['PutCustomer']['responses']['201']
  type DeleteCustomerResponse = operations['DeleteCustomer']['responses']['204']
  
  type GetCustomerTimelineCustomEventTypeCollectionRequest = operations['GetCustomerTimelineCustomEventTypeCollection']['parameters']['query']
  
  type GetCustomerTimelineCustomEventTypeCollectionResponse = operations['GetCustomerTimelineCustomEventTypeCollection']['responses']['200']
  type PostCustomerTimelineCustomEventTypeRequest = operations['PostCustomerTimelineCustomEventType']['requestBody']['application/json']
  type PostCustomerTimelineCustomEventTypeResponse = operations['PostCustomerTimelineCustomEventType']['responses']['201']['application/json']
  
  type GetCustomerTimelineCustomEventTypeResponse = operations['GetCustomerTimelineCustomEventType']['responses']['200']
  
  type GetCustomerTimelineEventCollectionRequest = operations['GetCustomerTimelineEventCollection']['parameters']['query']
  
  type GetCustomerTimelineEventCollectionResponse = operations['GetCustomerTimelineEventCollection']['responses']['200']
  
  type GetCustomerLeadSourceResponse = operations['GetCustomerLeadSource']['responses']['200']
  type PutCustomerLeadSourceRequest = operations['PutCustomerLeadSource']['requestBody']['application/json']
  type PutCustomerLeadSourceResponse = operations['PutCustomerLeadSource']['responses']['201']['application/json']
  type DeleteCustomerLeadSourceResponse = operations['DeleteCustomerLeadSource']['responses']['204']
  
  type GetCustomerTimelineCollectionRequest = operations['GetCustomerTimelineCollection']['parameters']['query']
  
  type GetCustomerTimelineCollectionResponse = operations['GetCustomerTimelineCollection']['responses']['200']
  type PostCustomerTimelineRequest = operations['PostCustomerTimeline']['requestBody']['application/json']
  type PostCustomerTimelineResponse = operations['PostCustomerTimeline']['responses']['201']['application/json']
  
  type GetCustomerTimelineResponse = operations['GetCustomerTimeline']['responses']['200']
  type DeleteCustomerTimelineResponse = operations['DeleteCustomerTimeline']['responses']['204']
  
  type GetCustomerUpcomingInvoiceCollectionRequest = operations['GetCustomerUpcomingInvoiceCollection']['parameters']['query']
  
  type GetCustomerUpcomingInvoiceCollectionResponse = operations['GetCustomerUpcomingInvoiceCollection']['responses']['200']
  
  type GetDisputeCollectionRequest = operations['GetDisputeCollection']['parameters']['query']
  
  type GetDisputeCollectionResponse = operations['GetDisputeCollection']['responses']['200']
  type PostDisputeRequest = operations['PostDispute']['requestBody']
  type PostDisputeResponse = operations['PostDispute']['responses']['201']
  
  type GetDisputeResponse = operations['GetDispute']['responses']['200']
  type PutDisputeRequest = operations['PutDispute']['requestBody']
  type PutDisputeResponse = operations['PutDispute']['responses']['201']
  
  type GetFileCollectionRequest = operations['GetFileCollection']['parameters']['query']
  
  type GetFileCollectionResponse = operations['GetFileCollection']['responses']['200']
  type PostFileRequest = operations['PostFile']['requestBody']['application/json']
  type PostFileResponse = operations['PostFile']['responses']['201']['application/json']
  
  type GetFileResponse = operations['GetFile']['responses']['200']
  type PutFileRequest = operations['PutFile']['requestBody']['application/json']
  type PutFileResponse = operations['PutFile']['responses']['200']['application/json']
  type DeleteFileResponse = operations['DeleteFile']['responses']['204']
  
  type GetFileDownloadResponse = operations['GetFileDownload']['responses']['200']
  
  type GetFileDownloadExtensionResponse = operations['GetFileDownloadExtension']['responses']['200']
  
  type GetInvoiceCollectionRequest = operations['GetInvoiceCollection']['parameters']['query']
  
  type GetInvoiceCollectionResponse = operations['GetInvoiceCollection']['responses']['200']
  type PostInvoiceRequest = operations['PostInvoice']['requestBody']
  type PostInvoiceResponse = operations['PostInvoice']['responses']['201']
  
  type GetInvoiceRequest = operations['GetInvoice']['parameters']
  
  type GetInvoiceResponse = operations['GetInvoice']['responses']['200']
  type PutInvoiceRequest = operations['PutInvoice']['requestBody']
  type PutInvoiceResponse = operations['PutInvoice']['responses']['201']
  
  type PostInvoiceAbandonmentResponse = operations['PostInvoiceAbandonment']['responses']['201']
  
  type PostInvoiceIssuanceRequest = operations['PostInvoiceIssuance']['requestBody']['application/json']
  type PostInvoiceIssuanceResponse = operations['PostInvoiceIssuance']['responses']['201']['application/json']
  
  type GetInvoiceItemCollectionRequest = operations['GetInvoiceItemCollection']['parameters']['query']
  
  type GetInvoiceItemCollectionResponse = operations['GetInvoiceItemCollection']['responses']['200']
  type PostInvoiceItemRequest = operations['PostInvoiceItem']['requestBody']['application/json']
  type PostInvoiceItemResponse = operations['PostInvoiceItem']['responses']['201']['application/json']
  
  type PostInvoiceRecalculationResponse = operations['PostInvoiceRecalculation']['responses']['201']
  
  type PostInvoiceReissuanceRequest = operations['PostInvoiceReissuance']['requestBody']['application/json']
  type PostInvoiceReissuanceResponse = operations['PostInvoiceReissuance']['responses']['201']['application/json']
  
  type GetInvoiceTimelineCollectionRequest = operations['GetInvoiceTimelineCollection']['parameters']['query']
  
  type GetInvoiceTimelineCollectionResponse = operations['GetInvoiceTimelineCollection']['responses']['200']
  type PostInvoiceTimelineRequest = operations['PostInvoiceTimeline']['requestBody']['application/json']
  type PostInvoiceTimelineResponse = operations['PostInvoiceTimeline']['responses']['201']['application/json']
  
  type GetInvoiceTimelineResponse = operations['GetInvoiceTimeline']['responses']['200']
  type DeleteInvoiceTimelineResponse = operations['DeleteInvoiceTimeline']['responses']['204']
  
  type GetInvoiceTransactionAllocationCollectionResponse = operations['GetInvoiceTransactionAllocationCollection']['responses']['200']
  
  type PostInvoiceVoidResponse = operations['PostInvoiceVoid']['responses']['201']
  
  type GetKycDocumentCollectionRequest = operations['GetKycDocumentCollection']['parameters']['query']
  
  type GetKycDocumentCollectionResponse = operations['GetKycDocumentCollection']['responses']['200']
  type PostKycDocumentRequest = operations['PostKycDocument']['requestBody']['application/json']
  type PostKycDocumentResponse = operations['PostKycDocument']['responses']['201']['application/json']
  
  type GetKycDocumentResponse = operations['GetKycDocument']['responses']['200']
  type PutKycDocumentRequest = operations['PutKycDocument']['requestBody']['application/json']
  type PutKycDocumentResponse = operations['PutKycDocument']['responses']['201']['application/json']
  
  type PostKycDocumentAcceptanceResponse = operations['PostKycDocumentAcceptance']['responses']['201']
  
  type PostKycDocumentRejectionRequest = operations['PostKycDocumentRejection']['requestBody']['application/json']
  type PostKycDocumentRejectionResponse = operations['PostKycDocumentRejection']['responses']['201']['application/json']
  
  type PostKycDocumentReviewResponse = operations['PostKycDocumentReview']['responses']['201']
  
  type GetPasswordTokenCollectionRequest = operations['GetPasswordTokenCollection']['parameters']['query']
  
  type GetPasswordTokenCollectionResponse = operations['GetPasswordTokenCollection']['responses']['200']
  type PostPasswordTokenRequest = operations['PostPasswordToken']['requestBody']['application/json']
  type PostPasswordTokenResponse = operations['PostPasswordToken']['responses']['201']['application/json']
  
  type GetPasswordTokenResponse = operations['GetPasswordToken']['responses']['200']
  type DeletePasswordTokenResponse = operations['DeletePasswordToken']['responses']['204']
  
  type GetPaymentInstrumentCollectionRequest = operations['GetPaymentInstrumentCollection']['parameters']['query']
  
  type GetPaymentInstrumentCollectionResponse = operations['GetPaymentInstrumentCollection']['responses']['200']
  type PostPaymentInstrumentRequest = operations['PostPaymentInstrument']['requestBody']
  type PostPaymentInstrumentResponse = operations['PostPaymentInstrument']['responses']['201']
  
  type GetPaymentInstrumentResponse = operations['GetPaymentInstrument']['responses']['200']
  type PatchPaymentInstrumentRequest = operations['PatchPaymentInstrument']['requestBody']
  type PatchPaymentInstrumentResponse = operations['PatchPaymentInstrument']['responses']['200']
  
  type PostPaymentInstrumentDeactivationResponse = operations['PostPaymentInstrumentDeactivation']['responses']['201']
  
  type GetPaymentCardCollectionRequest = operations['GetPaymentCardCollection']['parameters']['query']
  
  type GetPaymentCardCollectionResponse = operations['GetPaymentCardCollection']['responses']['200']
  type PostPaymentCardRequest = operations['PostPaymentCard']['requestBody']['application/json']
  type PostPaymentCardResponse = operations['PostPaymentCard']['responses']['201']['application/json']
  
  type GetPaymentCardResponse = operations['GetPaymentCard']['responses']['200']
  type PutPaymentCardRequest = operations['PutPaymentCard']['requestBody']['application/json']
  type PutPaymentCardResponse = operations['PutPaymentCard']['responses']['201']['application/json']
  type PatchPaymentCardRequest = operations['PatchPaymentCard']['requestBody']['application/json']
  type PatchPaymentCardResponse = operations['PatchPaymentCard']['responses']['200']['application/json']
  
  type PostPaymentCardAuthorizationRequest = operations['PostPaymentCardAuthorization']['requestBody']['application/json']
  type PostPaymentCardAuthorizationResponse = operations['PostPaymentCardAuthorization']['responses']['201']['application/json']
  
  type PostPaymentCardDeactivationResponse = operations['PostPaymentCardDeactivation']['responses']['201']
  
  type GetPaymentMethodCollectionResponse = operations['GetPaymentMethodCollection']['responses']['200']
  
  type GetPaymentMethodResponse = operations['GetPaymentMethod']['responses']['200']
  
  type GetPayPalAccountCollectionRequest = operations['GetPayPalAccountCollection']['parameters']['query']
  
  type GetPayPalAccountCollectionResponse = operations['GetPayPalAccountCollection']['responses']['200']
  type PostPayPalAccountRequest = operations['PostPayPalAccount']['requestBody']['application/json']
  type PostPayPalAccountResponse = operations['PostPayPalAccount']['responses']['201']['application/json']
  
  type GetPayPalAccountResponse = operations['GetPayPalAccount']['responses']['200']
  type PutPayPalAccountRequest = operations['PutPayPalAccount']['requestBody']['application/json']
  type PutPayPalAccountResponse = operations['PutPayPalAccount']['responses']['201']['application/json']
  
  type PostPayPalAccountActivationRequest = operations['PostPayPalAccountActivation']['requestBody']['application/json']
  type PostPayPalAccountActivationResponse = operations['PostPayPalAccountActivation']['responses']['201']['application/json']
  
  type PostPayPalAccountDeactivationResponse = operations['PostPayPalAccountDeactivation']['responses']['201']
  
  type PostPermissionsEmulationRequest = operations['PostPermissionsEmulation']['requestBody']['application/json']
  type PostPermissionsEmulationResponse = operations['PostPermissionsEmulation']['responses']['201']['application/json']
  type DeletePermissionsEmulationResponse = operations['DeletePermissionsEmulation']['responses']['201']
  
  type GetPlanCollectionRequest = operations['GetPlanCollection']['parameters']['query']
  
  type GetPlanCollectionResponse = operations['GetPlanCollection']['responses']['200']
  type PostPlanRequest = operations['PostPlan']['requestBody']
  type PostPlanResponse = operations['PostPlan']['responses']['201']
  
  type GetPlanResponse = operations['GetPlan']['responses']['200']
  type PutPlanRequest = operations['PutPlan']['requestBody']
  type PutPlanResponse = operations['PutPlan']['responses']['201']
  type DeletePlanResponse = operations['DeletePlan']['responses']['204']
  
  type GetProductCollectionRequest = operations['GetProductCollection']['parameters']['query']
  
  type GetProductCollectionResponse = operations['GetProductCollection']['responses']['200']
  type PostProductRequest = operations['PostProduct']['requestBody']
  type PostProductResponse = operations['PostProduct']['responses']['201']
  
  type GetProductResponse = operations['GetProduct']['responses']['200']
  type PutProductRequest = operations['PutProduct']['requestBody']
  type PutProductResponse = operations['PutProduct']['responses']['201']
  type DeleteProductResponse = operations['DeleteProduct']['responses']['204']
  
  type GetSearchRequest = operations['GetSearch']['parameters']
  
  type GetSearchResponse = operations['GetSearch']['responses']['200']
  
  type GetShippingZoneCollectionRequest = operations['GetShippingZoneCollection']['parameters']['query']
  
  type GetShippingZoneCollectionResponse = operations['GetShippingZoneCollection']['responses']['200']
  type PostShippingZoneRequest = operations['PostShippingZone']['requestBody']['application/json']
  type PostShippingZoneResponse = operations['PostShippingZone']['responses']['201']['application/json']
  
  type GetShippingZoneResponse = operations['GetShippingZone']['responses']['200']
  type PutShippingZoneRequest = operations['PutShippingZone']['requestBody']['application/json']
  type PutShippingZoneResponse = operations['PutShippingZone']['responses']['201']['application/json']
  type DeleteShippingZoneResponse = operations['DeleteShippingZone']['responses']['204']
  
  type GetSubscriptionCancellationCollectionRequest = operations['GetSubscriptionCancellationCollection']['parameters']['query']
  
  type GetSubscriptionCancellationCollectionResponse = operations['GetSubscriptionCancellationCollection']['responses']['200']
  type PostSubscriptionCancellationRequest = operations['PostSubscriptionCancellation']['requestBody']
  type PostSubscriptionCancellationResponse = operations['PostSubscriptionCancellation']['responses']['201']
  
  type GetSubscriptionCancellationResponse = operations['GetSubscriptionCancellation']['responses']['200']
  type PutSubscriptionCancellationRequest = operations['PutSubscriptionCancellation']['requestBody']
  type PutSubscriptionCancellationResponse = operations['PutSubscriptionCancellation']['responses']['201']
  type DeleteSubscriptionCancellationResponse = operations['DeleteSubscriptionCancellation']['responses']['204']
  
  type GetSubscriptionReactivationCollectionRequest = operations['GetSubscriptionReactivationCollection']['parameters']['query']
  
  type GetSubscriptionReactivationCollectionResponse = operations['GetSubscriptionReactivationCollection']['responses']['200']
  type PostSubscriptionReactivationRequest = operations['PostSubscriptionReactivation']['requestBody']['application/json']
  type PostSubscriptionReactivationResponse = operations['PostSubscriptionReactivation']['responses']['201']['application/json']
  
  type GetSubscriptionReactivationResponse = operations['GetSubscriptionReactivation']['responses']['200']
  
  type GetSubscriptionCollectionRequest = operations['GetSubscriptionCollection']['parameters']['query']
  
  type GetSubscriptionCollectionResponse = operations['GetSubscriptionCollection']['responses']['200']
  type PostSubscriptionRequest = operations['PostSubscription']['requestBody']
  type PostSubscriptionResponse = operations['PostSubscription']['responses']['201']
  
  type GetSubscriptionRequest = operations['GetSubscription']['parameters']
  
  type GetSubscriptionResponse = operations['GetSubscription']['responses']['200']
  type PutSubscriptionRequest = operations['PutSubscription']['requestBody']
  type PutSubscriptionResponse = operations['PutSubscription']['responses']['201']
  
  type PostSubscriptionPlanChangeRequest = operations['PostSubscriptionPlanChange']['requestBody']['application/json']
  type PostSubscriptionPlanChangeResponse = operations['PostSubscriptionPlanChange']['responses']['201']['application/json']
  
  type PostSubscriptionInterimInvoiceRequest = operations['PostSubscriptionInterimInvoice']['requestBody']['application/json']
  type PostSubscriptionInterimInvoiceResponse = operations['PostSubscriptionInterimInvoice']['responses']['201']['application/json']
  
  type GetSubscriptionTimelineCollectionRequest = operations['GetSubscriptionTimelineCollection']['parameters']['query']
  
  type GetSubscriptionTimelineCollectionResponse = operations['GetSubscriptionTimelineCollection']['responses']['200']
  type PostSubscriptionTimelineRequest = operations['PostSubscriptionTimeline']['requestBody']['application/json']
  type PostSubscriptionTimelineResponse = operations['PostSubscriptionTimeline']['responses']['201']['application/json']
  
  type GetSubscriptionTimelineResponse = operations['GetSubscriptionTimeline']['responses']['200']
  type DeleteSubscriptionTimelineResponse = operations['DeleteSubscriptionTimeline']['responses']['204']
  
  type GetSubscriptionUpcomingInvoiceCollectionRequest = operations['GetSubscriptionUpcomingInvoiceCollection']['parameters']['query']
  
  type GetSubscriptionUpcomingInvoiceCollectionResponse = operations['GetSubscriptionUpcomingInvoiceCollection']['responses']['200']
  
  type PostUpcomingInvoiceIssuanceRequest = operations['PostUpcomingInvoiceIssuance']['requestBody']['application/json']
  type PostUpcomingInvoiceIssuanceResponse = operations['PostUpcomingInvoiceIssuance']['responses']['201']['application/json']
  
  type GetTagCollectionRequest = operations['GetTagCollection']['parameters']['query']
  
  type GetTagCollectionResponse = operations['GetTagCollection']['responses']['200']
  type PostTagRequest = operations['PostTag']['requestBody']
  type PostTagResponse = operations['PostTag']['responses']['201']
  
  type GetTagResponse = operations['GetTag']['responses']['200']
  type PatchTagRequest = operations['PatchTag']['requestBody']
  type PatchTagResponse = operations['PatchTag']['responses']['200']
  type DeleteTagResponse = operations['DeleteTag']['responses']['204']
  
  type PostTagCustomerCollectionRequest = operations['PostTagCustomerCollection']['requestBody']['application/json']
  type PostTagCustomerCollectionResponse = operations['PostTagCustomerCollection']['responses']['204']['application/json']
  type DeleteTagCustomerCollectionRequest = operations['DeleteTagCustomerCollection']['requestBody']['application/json']
  type DeleteTagCustomerCollectionResponse = operations['DeleteTagCustomerCollection']['responses']['204']
  
  type PostTagCustomerResponse = operations['PostTagCustomer']['responses']['204']
  type DeleteTagCustomerResponse = operations['DeleteTagCustomer']['responses']['204']
  
  type GetTokenCollectionRequest = operations['GetTokenCollection']['parameters']['query']
  
  type GetTokenCollectionResponse = operations['GetTokenCollection']['responses']['200']
  type PostTokenRequest = operations['PostToken']['requestBody']['application/json']
  type PostTokenResponse = operations['PostToken']['responses']['201']['application/json']
  
  type GetTokenResponse = operations['GetToken']['responses']['200']
  
  type PostDigitalWalletValidationRequest = operations['PostDigitalWalletValidation']['requestBody']['application/json']
  type PostDigitalWalletValidationResponse = operations['PostDigitalWalletValidation']['responses']['201']['application/json']
  
  type GetTransactionCollectionRequest = operations['GetTransactionCollection']['parameters']['query']
  
  type GetTransactionCollectionResponse = operations['GetTransactionCollection']['responses']['200']
  type PostTransactionRequest = operations['PostTransaction']['requestBody']
  type PostTransactionResponse = operations['PostTransaction']['responses']['201']
  
  type GetTransactionResponse = operations['GetTransaction']['responses']['200']
  type PatchTransactionRequest = operations['PatchTransaction']['requestBody']
  type PatchTransactionResponse = operations['PatchTransaction']['responses']['200']
  
  type PostPayoutRequest = operations['PostPayout']['requestBody']
  type PostPayoutResponse = operations['PostPayout']['responses']['201']
  
  type PostTransactionCancellationResponse = operations['PostTransactionCancellation']['responses']['201']
  
  type GetTransactionGatewayLogCollectionResponse = operations['GetTransactionGatewayLogCollection']['responses']['200']
  
  type PostTransactionRefundRequest = operations['PostTransactionRefund']['requestBody']['application/json']
  type PostTransactionRefundResponse = operations['PostTransactionRefund']['responses']['201']['application/json']
  
  type GetTransactionTimelineCollectionRequest = operations['GetTransactionTimelineCollection']['parameters']['query']
  
  type GetTransactionTimelineCollectionResponse = operations['GetTransactionTimelineCollection']['responses']['200']
  type PostTransactionTimelineRequest = operations['PostTransactionTimeline']['requestBody']['application/json']
  type PostTransactionTimelineResponse = operations['PostTransactionTimeline']['responses']['201']['application/json']
  
  type GetTransactionTimelineResponse = operations['GetTransactionTimeline']['responses']['200']
  type DeleteTransactionTimelineResponse = operations['DeleteTransactionTimeline']['responses']['204']
  
  type PostActivationResponse = operations['PostActivation']['responses']['204']
  
  type GetApiKeyCollectionRequest = operations['GetApiKeyCollection']['parameters']['query']
  
  type GetApiKeyCollectionResponse = operations['GetApiKeyCollection']['responses']['200']
  type PostApiKeyRequest = operations['PostApiKey']['requestBody']
  type PostApiKeyResponse = operations['PostApiKey']['responses']['201']
  
  type GetApiKeyResponse = operations['GetApiKey']['responses']['200']
  type PutApiKeyRequest = operations['PutApiKey']['requestBody']
  type PutApiKeyResponse = operations['PutApiKey']['responses']['201']
  type DeleteApiKeyResponse = operations['DeleteApiKey']['responses']['204']
  
  type GetBroadcastMessageCollectionResponse = operations['GetBroadcastMessageCollection']['responses']['200']
  type PostBroadcastMessageRequest = operations['PostBroadcastMessage']['requestBody']['application/json']
  type PostBroadcastMessageResponse = operations['PostBroadcastMessage']['responses']['201']['application/json']
  
  type GetBroadcastMessageResponse = operations['GetBroadcastMessage']['responses']['200']
  type PatchBroadcastMessageRequest = operations['PatchBroadcastMessage']['requestBody']['application/json']
  type PatchBroadcastMessageResponse = operations['PatchBroadcastMessage']['responses']['200']['application/json']
  type DeleteBroadcastMessageResponse = operations['DeleteBroadcastMessage']['responses']['204']
  
  type GetCheckoutFormCollectionResponse = operations['GetCheckoutFormCollection']['responses']['200']
  type PostCheckoutFormRequest = operations['PostCheckoutForm']['requestBody']['application/json']
  type PostCheckoutFormResponse = operations['PostCheckoutForm']['responses']['201']['application/json']
  
  type GetCheckoutFormResponse = operations['GetCheckoutForm']['responses']['200']
  type PutCheckoutFormRequest = operations['PutCheckoutForm']['requestBody']['application/json']
  type PutCheckoutFormResponse = operations['PutCheckoutForm']['responses']['201']['application/json']
  type DeleteCheckoutFormResponse = operations['DeleteCheckoutForm']['responses']['204']
  
  type PostAwsSesCredentialHashRequest = operations['PostAwsSesCredentialHash']['requestBody']['application/json']
  type PostAwsSesCredentialHashResponse = operations['PostAwsSesCredentialHash']['responses']['201']['application/json']
  
  type GetAwsSesCredentialHashResponse = operations['GetAwsSesCredentialHash']['responses']['200']
  type PatchAwsSesCredentialHashRequest = operations['PatchAwsSesCredentialHash']['requestBody']['application/json']
  type PatchAwsSesCredentialHashResponse = operations['PatchAwsSesCredentialHash']['responses']['200']['application/json']
  
  type PostEmailCredentialHashRequest = operations['PostEmailCredentialHash']['requestBody']['application/json']
  type PostEmailCredentialHashResponse = operations['PostEmailCredentialHash']['responses']['201']['application/json']
  
  type GetEmailCredentialHashResponse = operations['GetEmailCredentialHash']['responses']['200']
  type PatchEmailCredentialHashRequest = operations['PatchEmailCredentialHash']['requestBody']['application/json']
  type PatchEmailCredentialHashResponse = operations['PatchEmailCredentialHash']['responses']['200']['application/json']
  
  type PostMailgunCredentialHashRequest = operations['PostMailgunCredentialHash']['requestBody']['application/json']
  type PostMailgunCredentialHashResponse = operations['PostMailgunCredentialHash']['responses']['201']['application/json']
  
  type GetMailgunCredentialHashResponse = operations['GetMailgunCredentialHash']['responses']['200']
  type PatchMailgunCredentialHashRequest = operations['PatchMailgunCredentialHash']['requestBody']['application/json']
  type PatchMailgunCredentialHashResponse = operations['PatchMailgunCredentialHash']['responses']['200']['application/json']
  
  type GetOauth2CredentialHashCollectionResponse = operations['GetOauth2CredentialHashCollection']['responses']['200']
  type PostOauth2CredentialHashRequest = operations['PostOauth2CredentialHash']['requestBody']
  type PostOauth2CredentialHashResponse = operations['PostOauth2CredentialHash']['responses']['201']
  
  type GetOauth2CredentialHashResponse = operations['GetOauth2CredentialHash']['responses']['200']
  type PatchOauth2CredentialHashRequest = operations['PatchOauth2CredentialHash']['requestBody']
  type PatchOauth2CredentialHashResponse = operations['PatchOauth2CredentialHash']['responses']['200']
  
  type GetOauth2CredentialHashItemCollectionResponse = operations['GetOauth2CredentialHashItemCollection']['responses']['200']
  
  type GetPlaidCredentialCollectionRequest = operations['GetPlaidCredentialCollection']['parameters']['query']
  
  type GetPlaidCredentialCollectionResponse = operations['GetPlaidCredentialCollection']['responses']['200']
  type PostPlaidCredentialHashRequest = operations['PostPlaidCredentialHash']['requestBody']['application/json']
  type PostPlaidCredentialHashResponse = operations['PostPlaidCredentialHash']['responses']['201']['application/json']
  
  type GetPlaidCredentialHashResponse = operations['GetPlaidCredentialHash']['responses']['200']
  type PatchPlaidCredentialHashRequest = operations['PatchPlaidCredentialHash']['requestBody']['application/json']
  type PatchPlaidCredentialHashResponse = operations['PatchPlaidCredentialHash']['responses']['200']['application/json']
  
  type PostPostmarkCredentialHashRequest = operations['PostPostmarkCredentialHash']['requestBody']['application/json']
  type PostPostmarkCredentialHashResponse = operations['PostPostmarkCredentialHash']['responses']['201']['application/json']
  
  type GetPostmarkCredentialHashResponse = operations['GetPostmarkCredentialHash']['responses']['200']
  type PatchPostmarkCredentialHashRequest = operations['PatchPostmarkCredentialHash']['requestBody']['application/json']
  type PatchPostmarkCredentialHashResponse = operations['PatchPostmarkCredentialHash']['responses']['200']['application/json']
  
  type PostSendGridCredentialHashRequest = operations['PostSendGridCredentialHash']['requestBody']['application/json']
  type PostSendGridCredentialHashResponse = operations['PostSendGridCredentialHash']['responses']['201']['application/json']
  
  type GetSendGridCredentialHashResponse = operations['GetSendGridCredentialHash']['responses']['200']
  type PatchSendGridCredentialHashRequest = operations['PatchSendGridCredentialHash']['requestBody']['application/json']
  type PatchSendGridCredentialHashResponse = operations['PatchSendGridCredentialHash']['responses']['200']['application/json']
  
  type PostWebhookCredentialHashRequest = operations['PostWebhookCredentialHash']['requestBody']['application/json']
  type PostWebhookCredentialHashResponse = operations['PostWebhookCredentialHash']['responses']['201']['application/json']
  
  type GetWebhookCredentialHashResponse = operations['GetWebhookCredentialHash']['responses']['200']
  type PatchWebhookCredentialHashRequest = operations['PatchWebhookCredentialHash']['requestBody']['application/json']
  type PatchWebhookCredentialHashResponse = operations['PatchWebhookCredentialHash']['responses']['200']['application/json']
  
  type GetExperianCredentialHashCollectionResponse = operations['GetExperianCredentialHashCollection']['responses']['200']
  type PostExperianCredentialHashRequest = operations['PostExperianCredentialHash']['requestBody']['application/json']
  type PostExperianCredentialHashResponse = operations['PostExperianCredentialHash']['responses']['201']['application/json']
  
  type GetExperianCredentialHashResponse = operations['GetExperianCredentialHash']['responses']['200']
  type PatchExperianCredentialHashRequest = operations['PatchExperianCredentialHash']['requestBody']['application/json']
  type PatchExperianCredentialHashResponse = operations['PatchExperianCredentialHash']['responses']['200']['application/json']
  
  type VerifyEmailDeliverySettingsResponse = operations['VerifyEmailDeliverySettings']['responses']['200']
  
  type GetEmailDeliverySettingCollectionResponse = operations['GetEmailDeliverySettingCollection']['responses']['200']
  type PostEmailDeliverySettingRequest = operations['PostEmailDeliverySetting']['requestBody']['application/json']
  type PostEmailDeliverySettingResponse = operations['PostEmailDeliverySetting']['responses']['201']['application/json']
  
  type GetEmailDeliverySettingResponse = operations['GetEmailDeliverySetting']['responses']['200']
  type PatchEmailDeliverySettingsRequest = operations['PatchEmailDeliverySettings']['requestBody']['application/json']
  type PatchEmailDeliverySettingsResponse = operations['PatchEmailDeliverySettings']['responses']['200']['application/json']
  type DeleteEmailDeliverySettingResponse = operations['DeleteEmailDeliverySetting']['responses']['204']
  
  type ResendEmailDeliverySettingVerificationResponse = operations['ResendEmailDeliverySettingVerification']['responses']['200']
  
  type GetEmailMessageCollectionResponse = operations['GetEmailMessageCollection']['responses']['200']
  type PostEmailMessageRequest = operations['PostEmailMessage']['requestBody']['application/json']
  type PostEmailMessageResponse = operations['PostEmailMessage']['responses']['201']['application/json']
  
  type GetEmailMessageResponse = operations['GetEmailMessage']['responses']['200']
  type PatchEmailMessageRequest = operations['PatchEmailMessage']['requestBody']['application/json']
  type PatchEmailMessageResponse = operations['PatchEmailMessage']['responses']['200']['application/json']
  type DeleteEmailMessageResponse = operations['DeleteEmailMessage']['responses']['204']
  
  type GetEmailNotificationCollectionResponse = operations['GetEmailNotificationCollection']['responses']['200']
  
  type GetEventCollectionResponse = operations['GetEventCollection']['responses']['200']
  
  type GetEventResponse = operations['GetEvent']['responses']['200']
  
  type GetEventRuleCollectionResponse = operations['GetEventRuleCollection']['responses']['200']
  type PutEventRuleCollectionRequest = operations['PutEventRuleCollection']['requestBody']
  type PutEventRuleCollectionResponse = operations['PutEventRuleCollection']['responses']['200']
  
  type GetEventRuleHistoryCollectionRequest = operations['GetEventRuleHistoryCollection']['parameters']['query']
  
  type GetEventRuleHistoryCollectionResponse = operations['GetEventRuleHistoryCollection']['responses']['200']
  
  type GetEventRuleHistoryVersionRequest = operations['GetEventRuleHistoryVersion']['parameters']
  
  type GetEventRuleHistoryVersionResponse = operations['GetEventRuleHistoryVersion']['responses']['200']
  
  type GetEventRuleVersionRequest = operations['GetEventRuleVersion']['parameters']
  
  type GetEventRuleVersionResponse = operations['GetEventRuleVersion']['responses']['200']
  
  type PostForgotPasswordRequestRequest = operations['PostForgotPasswordRequest']['requestBody']['application/json']
  type PostForgotPasswordRequestResponse = operations['PostForgotPasswordRequest']['responses']['204']['application/json']
  
  type GetGatewayAccountCollectionRequest = operations['GetGatewayAccountCollection']['parameters']['query']
  
  type GetGatewayAccountCollectionResponse = operations['GetGatewayAccountCollection']['responses']['200']
  type PostGatewayAccountRequest = operations['PostGatewayAccount']['requestBody']
  type PostGatewayAccountResponse = operations['PostGatewayAccount']['responses']['201']
  
  type GetGatewayAccountResponse = operations['GetGatewayAccount']['responses']['200']
  type PutGatewayAccountRequest = operations['PutGatewayAccount']['requestBody']
  type PutGatewayAccountResponse = operations['PutGatewayAccount']['responses']['201']
  type PatchGatewayAccountRequest = operations['PatchGatewayAccount']['requestBody']
  type PatchGatewayAccountResponse = operations['PatchGatewayAccount']['responses']['200']
  type DeleteGatewayAccountResponse = operations['DeleteGatewayAccount']['responses']['204']
  
  type PostGatewayAccountClosureResponse = operations['PostGatewayAccountClosure']['responses']['201']
  
  type PostGatewayAccountDisablementResponse = operations['PostGatewayAccountDisablement']['responses']['201']
  
  type GetGatewayAccountDowntimeScheduleCollectionRequest = operations['GetGatewayAccountDowntimeScheduleCollection']['parameters']['query']
  
  type GetGatewayAccountDowntimeScheduleCollectionResponse = operations['GetGatewayAccountDowntimeScheduleCollection']['responses']['200']
  type PostGatewayAccountDowntimeScheduleRequest = operations['PostGatewayAccountDowntimeSchedule']['requestBody']
  type PostGatewayAccountDowntimeScheduleResponse = operations['PostGatewayAccountDowntimeSchedule']['responses']['201']
  
  type GetGatewayAccountDowntimeScheduleResponse = operations['GetGatewayAccountDowntimeSchedule']['responses']['200']
  type PutGatewayAccountDowntimeScheduleRequest = operations['PutGatewayAccountDowntimeSchedule']['requestBody']
  type PutGatewayAccountDowntimeScheduleResponse = operations['PutGatewayAccountDowntimeSchedule']['responses']['200']
  type DeleteGatewayAccountDowntimeScheduleResponse = operations['DeleteGatewayAccountDowntimeSchedule']['responses']['204']
  
  type PostGatewayAccountEnablementResponse = operations['PostGatewayAccountEnablement']['responses']['201']
  
  type GetGatewayAccountLimitCollectionRequest = operations['GetGatewayAccountLimitCollection']['parameters']['query']
  
  type GetGatewayAccountLimitCollectionResponse = operations['GetGatewayAccountLimitCollection']['responses']['200']
  
  type GetGatewayAccountLimitResponse = operations['GetGatewayAccountLimit']['responses']['200']
  type PutGatewayAccountLimitRequest = operations['PutGatewayAccountLimit']['requestBody']['application/json']
  type PutGatewayAccountLimitResponse = operations['PutGatewayAccountLimit']['responses']['200']['application/json']
  type DeleteGatewayAccountLimitResponse = operations['DeleteGatewayAccountLimit']['responses']['204']
  
  type GetGatewayAccountTimelineCollectionRequest = operations['GetGatewayAccountTimelineCollection']['parameters']['query']
  
  type GetGatewayAccountTimelineCollectionResponse = operations['GetGatewayAccountTimelineCollection']['responses']['200']
  type PostGatewayAccountTimelineRequest = operations['PostGatewayAccountTimeline']['requestBody']['application/json']
  type PostGatewayAccountTimelineResponse = operations['PostGatewayAccountTimeline']['responses']['201']['application/json']
  
  type GetGatewayAccountTimelineResponse = operations['GetGatewayAccountTimeline']['responses']['200']
  type DeleteGatewayAccountTimelineResponse = operations['DeleteGatewayAccountTimeline']['responses']['204']
  
  type GetGridSegmentCollectionRequest = operations['GetGridSegmentCollection']['parameters']['query']
  
  type GetGridSegmentCollectionResponse = operations['GetGridSegmentCollection']['responses']['200']
  type PostGridSegmentRequest = operations['PostGridSegment']['requestBody']
  type PostGridSegmentResponse = operations['PostGridSegment']['responses']['201']
  
  type GetGridSegmentResponse = operations['GetGridSegment']['responses']['200']
  type PutGridSegmentRequest = operations['PutGridSegment']['requestBody']['application/json']
  type PutGridSegmentResponse = operations['PutGridSegment']['responses']['200']['application/json']
  type DeleteGridSegmentResponse = operations['DeleteGridSegment']['responses']['204']
  
  type GetIntegrationCollectionResponse = operations['GetIntegrationCollection']['responses']['200']
  
  type GetIntegrationResponse = operations['GetIntegration']['responses']['200']
  
  type GetListCollectionRequest = operations['GetListCollection']['parameters']['query']
  
  type GetListCollectionResponse = operations['GetListCollection']['responses']['200']
  type PostListRequest = operations['PostList']['requestBody']
  type PostListResponse = operations['PostList']['responses']['201']
  
  type GetListResponse = operations['GetList']['responses']['200']
  type PutListRequest = operations['PutList']['requestBody']
  type PutListResponse = operations['PutList']['responses']['201']
  type DeleteListResponse = operations['DeleteList']['responses']['204']
  
  type GetListVersionResponse = operations['GetListVersion']['responses']['200']
  
  type PostLogoutRequestResponse = operations['PostLogoutRequest']['responses']['204']
  
  type GetMembershipCollectionRequest = operations['GetMembershipCollection']['parameters']['query']
  
  type GetMembershipCollectionResponse = operations['GetMembershipCollection']['responses']['200']
  
  type GetMembershipResponse = operations['GetMembership']['responses']['200']
  type PutMembershipRequest = operations['PutMembership']['requestBody']['application/json']
  type PutMembershipResponse = operations['PutMembership']['responses']['201']['application/json']
  type DeleteMembershipResponse = operations['DeleteMembership']['responses']['204']
  
  type GetOrganizationCollectionRequest = operations['GetOrganizationCollection']['parameters']['query']
  
  type GetOrganizationCollectionResponse = operations['GetOrganizationCollection']['responses']['200']
  type PostOrganizationRequest = operations['PostOrganization']['requestBody']
  type PostOrganizationResponse = operations['PostOrganization']['responses']['201']
  
  type GetOrganizationResponse = operations['GetOrganization']['responses']['200']
  type PutOrganizationRequest = operations['PutOrganization']['requestBody']
  type PutOrganizationResponse = operations['PutOrganization']['responses']['201']
  type DeleteOrganizationResponse = operations['DeleteOrganization']['responses']['204']
  
  type GetPaymentCardBankNameCollectionRequest = operations['GetPaymentCardBankNameCollection']['parameters']['query']
  
  type GetPaymentCardBankNameCollectionResponse = operations['GetPaymentCardBankNameCollection']['responses']['200']
  
  type PostPreviewRuleActionEmailSendingRequest = operations['PostPreviewRuleActionEmailSending']['requestBody']['application/json']
  type PostPreviewRuleActionEmailSendingResponse = operations['PostPreviewRuleActionEmailSending']['responses']['200']['application/json']
  
  type PostPreviewRuleActionWebhookTriggerRequest = operations['PostPreviewRuleActionWebhookTrigger']['requestBody']['application/json']
  type PostPreviewRuleActionWebhookTriggerResponse = operations['PostPreviewRuleActionWebhookTrigger']['responses']['200']['application/json']
  
  type PostPreviewWebhookRequest = operations['PostPreviewWebhook']['requestBody']
  type PostPreviewWebhookResponse = operations['PostPreviewWebhook']['responses']['204']
  
  type GetProfileResponse = operations['GetProfile']['responses']['200']
  type PutProfileRequest = operations['PutProfile']['requestBody']['application/json']
  type PutProfileResponse = operations['PutProfile']['responses']['200']['application/json']
  
  type PostProfilePasswordChangeRequest = operations['PostProfilePasswordChange']['requestBody']
  type PostProfilePasswordChangeResponse = operations['PostProfilePasswordChange']['responses']['201']
  
  type PostProfileTotpResetResponse = operations['PostProfileTotpReset']['responses']['201']
  
  type GetPasswordResetTokenResponse = operations['GetPasswordResetToken']['responses']['200']
  type PostPasswordResetRequest = operations['PostPasswordReset']['requestBody']['application/json']
  type PostPasswordResetResponse = operations['PostPasswordReset']['responses']['201']['application/json']
  
  type GetSendThroughAttributionCollectionResponse = operations['GetSendThroughAttributionCollection']['responses']['200']
  
  type PostSigninRequestRequest = operations['PostSigninRequest']['requestBody']['application/json']
  type PostSigninRequestResponse = operations['PostSigninRequest']['responses']['201']['application/json']
  
  type PostSignupRequestRequest = operations['PostSignupRequest']['requestBody']['application/json']
  type PostSignupRequestResponse = operations['PostSignupRequest']['responses']['201']['application/json']
  
  type GetStatusResponse = operations['GetStatus']['responses']['200']
  
  type GetTrackingApiCollectionRequest = operations['GetTrackingApiCollection']['parameters']['query']
  
  type GetTrackingApiCollectionResponse = operations['GetTrackingApiCollection']['responses']['200']
  
  type GetTrackingApiResponse = operations['GetTrackingApi']['responses']['200']
  
  type GetTrackingListCollectionRequest = operations['GetTrackingListCollection']['parameters']['query']
  
  type GetTrackingListCollectionResponse = operations['GetTrackingListCollection']['responses']['200']
  
  type GetTrackingWebhookCollectionRequest = operations['GetTrackingWebhookCollection']['parameters']['query']
  
  type GetTrackingWebhookCollectionResponse = operations['GetTrackingWebhookCollection']['responses']['200']
  
  type GetTrackingWebhookResponse = operations['GetTrackingWebhook']['responses']['200']
  
  type GetTrackingWebhookHistoryCollectionResponse = operations['GetTrackingWebhookHistoryCollection']['responses']['200']
  
  type PostTrackingWebhookResendRequestResponse = operations['PostTrackingWebhookResendRequest']['responses']['204']
  
  type GetUserCollectionRequest = operations['GetUserCollection']['parameters']['query']
  
  type GetUserCollectionResponse = operations['GetUserCollection']['responses']['200']
  type PostUserRequest = operations['PostUser']['requestBody']
  type PostUserResponse = operations['PostUser']['responses']['201']
  
  type GetUserResponse = operations['GetUser']['responses']['200']
  type PutUserRequest = operations['PutUser']['requestBody']
  type PutUserResponse = operations['PutUser']['responses']['201']
  type DeleteUserResponse = operations['DeleteUser']['responses']['204']
  
  type PostUserPasswordChangeRequest = operations['PostUserPasswordChange']['requestBody']
  type PostUserPasswordChangeResponse = operations['PostUserPasswordChange']['responses']['201']
  
  type PostUserTotpResetResponse = operations['PostUserTotpReset']['responses']['201']
  
  type GetWebhookCollectionRequest = operations['GetWebhookCollection']['parameters']['query']
  
  type GetWebhookCollectionResponse = operations['GetWebhookCollection']['responses']['200']
  type PostWebhookRequest = operations['PostWebhook']['requestBody']
  type PostWebhookResponse = operations['PostWebhook']['responses']['201']
  
  type GetWebhookResponse = operations['GetWebhook']['responses']['200']
  type PutWebhookRequest = operations['PutWebhook']['requestBody']
  type PutWebhookResponse = operations['PutWebhook']['responses']['201']
  
  type GetWebsiteCollectionRequest = operations['GetWebsiteCollection']['parameters']['query']
  
  type GetWebsiteCollectionResponse = operations['GetWebsiteCollection']['responses']['200']
  type PostWebsiteRequest = operations['PostWebsite']['requestBody']
  type PostWebsiteResponse = operations['PostWebsite']['responses']['201']
  
  type GetWebsiteResponse = operations['GetWebsite']['responses']['200']
  type PutWebsiteRequest = operations['PutWebsite']['requestBody']
  type PutWebsiteResponse = operations['PutWebsite']['responses']['201']
  type DeleteWebsiteResponse = operations['DeleteWebsite']['responses']['204']
  
  type GetCustomerSummaryMetricReportResponse = operations['GetCustomerSummaryMetricReport']['responses']['200']
  
  type GetDataExportCollectionResponse = operations['GetDataExportCollection']['responses']['200']
  type PostDataExportRequest = operations['PostDataExport']['requestBody']
  type PostDataExportResponse = operations['PostDataExport']['responses']['201']
  
  type GetDataExportResponse = operations['GetDataExport']['responses']['200']
  type PutDataExportRequest = operations['PutDataExport']['requestBody']
  type PutDataExportResponse = operations['PutDataExport']['responses']['201']
  type DeleteDataExportResponse = operations['DeleteDataExport']['responses']['204']
  
  type GetHistogramTransactionReportRequest = operations['GetHistogramTransactionReport']['parameters']
  
  type GetHistogramTransactionReportResponse = operations['GetHistogramTransactionReport']['responses']['200']
  
  type ExperimentalPostOrganizationRequest = operations['ExperimentalPostOrganization']['requestBody']
  type ExperimentalPostOrganizationResponse = operations['ExperimentalPostOrganization']['responses']['201']
  
  type PatchOrganizationRequest = operations['PatchOrganization']['requestBody']
  type PatchOrganizationResponse = operations['PatchOrganization']['responses']['200']
  
  type GetApiLogSummaryReportRequest = operations['GetApiLogSummaryReport']['parameters']
  
  type GetApiLogSummaryReportResponse = operations['GetApiLogSummaryReport']['responses']['200']
  
  type GetCumulativeSubscriptionReportRequest = operations['GetCumulativeSubscriptionReport']['parameters']
  
  type GetCumulativeSubscriptionReportResponse = operations['GetCumulativeSubscriptionReport']['responses']['200']
  
  type GetDashboardReportRequest = operations['GetDashboardReport']['parameters']
  
  type GetDashboardReportResponse = operations['GetDashboardReport']['responses']['200']
  
  type GetDccMarkupReportRequest = operations['GetDccMarkupReport']['parameters']
  
  type GetDccMarkupReportResponse = operations['GetDccMarkupReport']['responses']['200']
  
  type GetDisputeReportRequest = operations['GetDisputeReport']['parameters']
  
  type GetDisputeReportResponse = operations['GetDisputeReport']['responses']['200']
  
  type GetTriggeredEventReportRequest = operations['GetTriggeredEventReport']['parameters']
  
  type GetTriggeredEventReportResponse = operations['GetTriggeredEventReport']['responses']['200']
  
  type GetTriggeredEventRuleReportRequest = operations['GetTriggeredEventRuleReport']['parameters']
  
  type GetTriggeredEventRuleReportResponse = operations['GetTriggeredEventRuleReport']['responses']['200']
  
  type GetFutureRenewalReportRequest = operations['GetFutureRenewalReport']['parameters']
  
  type GetFutureRenewalReportResponse = operations['GetFutureRenewalReport']['responses']['200']
  
  type GetRenewalSaleReportRequest = operations['GetRenewalSaleReport']['parameters']
  
  type GetRenewalSaleReportResponse = operations['GetRenewalSaleReport']['responses']['200']
  
  type GetRetentionPercentageReportRequest = operations['GetRetentionPercentageReport']['parameters']
  
  type GetRetentionPercentageReportResponse = operations['GetRetentionPercentageReport']['responses']['200']
  
  type GetRetentionValueReportRequest = operations['GetRetentionValueReport']['parameters']
  
  type GetRetentionValueReportResponse = operations['GetRetentionValueReport']['responses']['200']
  
  type GetTransactionRetryReportRequest = operations['GetTransactionRetryReport']['parameters']
  
  type GetTransactionRetryReportResponse = operations['GetTransactionRetryReport']['responses']['200']
  
  type GetSubscriptionCancellationReportRequest = operations['GetSubscriptionCancellationReport']['parameters']
  
  type GetSubscriptionCancellationReportResponse = operations['GetSubscriptionCancellationReport']['responses']['200']
  
  type GetSubscriptionRenewalReportRequest = operations['GetSubscriptionRenewalReport']['parameters']
  
  type GetSubscriptionRenewalReportResponse = operations['GetSubscriptionRenewalReport']['responses']['200']
  
  type GetTimeSeriesTransactionReportRequest = operations['GetTimeSeriesTransactionReport']['parameters']
  
  type GetTimeSeriesTransactionReportResponse = operations['GetTimeSeriesTransactionReport']['responses']['200']
  
  type GetTransactionTimeDisputeReportRequest = operations['GetTransactionTimeDisputeReport']['parameters']
  
  type GetTransactionTimeDisputeReportResponse = operations['GetTransactionTimeDisputeReport']['responses']['200']
  
  type GetTransactionReportRequest = operations['GetTransactionReport']['parameters']
  
  type GetTransactionReportResponse = operations['GetTransactionReport']['responses']['200']
  
  type GetSubscriptionSummaryMetricReportResponse = operations['GetSubscriptionSummaryMetricReport']['responses']['200']
  
  

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
