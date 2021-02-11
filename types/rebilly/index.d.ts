
type operations = import('./generated').operations
type paths = import('./generated').paths

declare module rebilly {
    
  type Get3DSecureCollectionRequest = operations['Get3DSecureCollection']['parameters']['query']
  
  type Get3DSecureCollectionResponse = Promise<{ items: operations['Get3DSecureCollection']['responses']['200']['application/json']}>
  type Post3DSecureRequest = operations['Post3DSecure']['requestBody']['application/json']
  type Post3DSecureResponse = Promise<{fields: operations['Post3DSecure']['responses']['201']['application/json']}>
  
  type Get3DSecureResponse = Promise<{fields: operations['Get3DSecure']['responses']['200']['application/json']}>
  
  type GetAttachmentCollectionRequest = operations['GetAttachmentCollection']['parameters']['query']
  
  type GetAttachmentCollectionResponse = Promise<{ items: operations['GetAttachmentCollection']['responses']['200']['application/json']}>
  type PostAttachmentRequest = operations['PostAttachment']['requestBody']
  type PostAttachmentResponse = Promise<{fields: operations['PostAttachment']['responses']['201']['application/json']}>
  
  type GetAttachmentResponse = Promise<{fields: operations['GetAttachment']['responses']['200']['application/json']}>
  type PutAttachmentRequest = operations['PutAttachment']['requestBody']
  type PutAttachmentResponse = Promise<{fields: operations['PutAttachment']['responses']['201']['application/json']}>
  type DeleteAttachmentResponse = Promise<{fields: operations['DeleteAttachment']['responses']['204']}>
  
  type GetAuthenticationOptionResponse = Promise<{fields: operations['GetAuthenticationOption']['responses']['200']['application/json']}>
  type PutAuthenticationOptionRequest = operations['PutAuthenticationOption']['requestBody']['application/json']
  type PutAuthenticationOptionResponse = Promise<{fields: operations['PutAuthenticationOption']['responses']['200']['application/json']}>
  
  type GetAuthenticationTokenCollectionRequest = operations['GetAuthenticationTokenCollection']['parameters']['query']
  
  type GetAuthenticationTokenCollectionResponse = Promise<{ items: operations['GetAuthenticationTokenCollection']['responses']['200']['application/json']}>
  type PostAuthenticationTokenRequest = operations['PostAuthenticationToken']['requestBody']['application/json']
  type PostAuthenticationTokenResponse = Promise<{fields: operations['PostAuthenticationToken']['responses']['201']['application/json']}>
  
  type GetAuthenticationTokenVerificationResponse = Promise<{fields: operations['GetAuthenticationTokenVerification']['responses']['200']['application/json']}>
  type DeleteAuthenticationTokenResponse = Promise<{fields: operations['DeleteAuthenticationToken']['responses']['204']}>
  
  type PostAuthenticationTokenExchangeRequest = operations['PostAuthenticationTokenExchange']['requestBody']['application/json']
  type PostAuthenticationTokenExchangeResponse = Promise<{fields: operations['PostAuthenticationTokenExchange']['responses']['201']['application/json']}>
  
  type GetBankAccountCollectionRequest = operations['GetBankAccountCollection']['parameters']['query']
  
  type GetBankAccountCollectionResponse = Promise<{ items: operations['GetBankAccountCollection']['responses']['200']['application/json']}>
  type PostBankAccountRequest = operations['PostBankAccount']['requestBody']['application/json']
  type PostBankAccountResponse = Promise<{fields: operations['PostBankAccount']['responses']['201']['application/json']}>
  
  type GetBankAccountResponse = Promise<{fields: operations['GetBankAccount']['responses']['200']['application/json']}>
  type PutBankAccountRequest = operations['PutBankAccount']['requestBody']['application/json']
  type PutBankAccountResponse = Promise<{fields: operations['PutBankAccount']['responses']['201']['application/json']}>
  type PatchBankAccountRequest = operations['PatchBankAccount']['requestBody']['application/json']
  type PatchBankAccountResponse = Promise<{fields: operations['PatchBankAccount']['responses']['200']['application/json']}>
  
  type PostBankAccountDeactivationResponse = Promise<{fields: operations['PostBankAccountDeactivation']['responses']['201']['application/json']}>
  
  type GetBlocklistCollectionRequest = operations['GetBlocklistCollection']['parameters']['query']
  
  type GetBlocklistCollectionResponse = Promise<{ items: operations['GetBlocklistCollection']['responses']['200']['application/json']}>
  type PostBlocklistRequest = operations['PostBlocklist']['requestBody']
  type PostBlocklistResponse = Promise<{fields: operations['PostBlocklist']['responses']['201']['application/json']}>
  
  type GetBlocklistResponse = Promise<{fields: operations['GetBlocklist']['responses']['200']['application/json']}>
  type PutBlocklistRequest = operations['PutBlocklist']['requestBody']
  type PutBlocklistResponse = Promise<{fields: operations['PutBlocklist']['responses']['201']['application/json']}>
  type DeleteBlocklistResponse = Promise<{fields: operations['DeleteBlocklist']['responses']['204']}>
  
  type GetCouponRedemptionCollectionRequest = operations['GetCouponRedemptionCollection']['parameters']['query']
  
  type GetCouponRedemptionCollectionResponse = Promise<{ items: operations['GetCouponRedemptionCollection']['responses']['200']['application/json']}>
  type PostCouponRedemptionRequest = operations['PostCouponRedemption']['requestBody']['application/json']
  type PostCouponRedemptionResponse = Promise<{fields: operations['PostCouponRedemption']['responses']['201']['application/json']}>
  
  type GetCouponRedemptionResponse = Promise<{fields: operations['GetCouponRedemption']['responses']['200']['application/json']}>
  
  type PostCouponRedemptionCancellationResponse = Promise<{fields: operations['PostCouponRedemptionCancellation']['responses']['201']}>
  
  type GetCouponCollectionRequest = operations['GetCouponCollection']['parameters']['query']
  
  type GetCouponCollectionResponse = Promise<{ items: operations['GetCouponCollection']['responses']['200']['application/json']}>
  type PostCouponRequest = operations['PostCoupon']['requestBody']
  type PostCouponResponse = Promise<{fields: operations['PostCoupon']['responses']['201']['application/json']}>
  
  type GetCouponResponse = Promise<{fields: operations['GetCoupon']['responses']['200']['application/json']}>
  type PutCouponRequest = operations['PutCoupon']['requestBody']
  type PutCouponResponse = Promise<{fields: operations['PutCoupon']['responses']['201']['application/json']}>
  
  type PostCouponExpirationRequest = operations['PostCouponExpiration']['requestBody']['application/json']
  type PostCouponExpirationResponse = Promise<{fields: operations['PostCouponExpiration']['responses']['201']['application/json']}>
  
  type GetCredentialCollectionRequest = operations['GetCredentialCollection']['parameters']['query']
  
  type GetCredentialCollectionResponse = Promise<{ items: operations['GetCredentialCollection']['responses']['200']['application/json']}>
  type PostCredentialRequest = operations['PostCredential']['requestBody']
  type PostCredentialResponse = Promise<{fields: operations['PostCredential']['responses']['201']['application/json']}>
  
  type GetCredentialResponse = Promise<{fields: operations['GetCredential']['responses']['200']['application/json']}>
  type PutCredentialRequest = operations['PutCredential']['requestBody']
  type PutCredentialResponse = Promise<{fields: operations['PutCredential']['responses']['201']['application/json']}>
  type DeleteCredentialResponse = Promise<{fields: operations['DeleteCredential']['responses']['204']}>
  
  type GetCustomFieldCollectionResponse = Promise<{ items: operations['GetCustomFieldCollection']['responses']['200']['application/json']}>
  
  type GetCustomFieldResponse = Promise<{fields: operations['GetCustomField']['responses']['200']['application/json']}>
  type PutCustomFieldRequest = operations['PutCustomField']['requestBody']['application/json']
  type PutCustomFieldResponse = Promise<{fields: operations['PutCustomField']['responses']['201']['application/json']}>
  
  type GetCustomerCollectionRequest = operations['GetCustomerCollection']['parameters']['query']
  
  type GetCustomerCollectionResponse = Promise<{ items: operations['GetCustomerCollection']['responses']['200']['application/json']}>
  type PostCustomerRequest = operations['PostCustomer']['requestBody']
  type PostCustomerResponse = Promise<{fields: operations['PostCustomer']['responses']['201']}>
  
  type GetCustomerResponse = Promise<{fields: operations['GetCustomer']['responses']['200']['application/json']}>
  type PutCustomerRequest = operations['PutCustomer']['requestBody']
  type PutCustomerResponse = Promise<{fields: operations['PutCustomer']['responses']['201']}>
  type DeleteCustomerResponse = Promise<{fields: operations['DeleteCustomer']['responses']['204']}>
  
  type GetCustomerTimelineCustomEventTypeCollectionRequest = operations['GetCustomerTimelineCustomEventTypeCollection']['parameters']['query']
  
  type GetCustomerTimelineCustomEventTypeCollectionResponse = Promise<{ items: operations['GetCustomerTimelineCustomEventTypeCollection']['responses']['200']['application/json']}>
  type PostCustomerTimelineCustomEventTypeRequest = operations['PostCustomerTimelineCustomEventType']['requestBody']['application/json']
  type PostCustomerTimelineCustomEventTypeResponse = Promise<{fields: operations['PostCustomerTimelineCustomEventType']['responses']['201']['application/json']}>
  
  type GetCustomerTimelineCustomEventTypeResponse = Promise<{fields: operations['GetCustomerTimelineCustomEventType']['responses']['200']['application/json']}>
  
  type GetCustomerTimelineEventCollectionRequest = operations['GetCustomerTimelineEventCollection']['parameters']['query']
  
  type GetCustomerTimelineEventCollectionResponse = Promise<{ items: operations['GetCustomerTimelineEventCollection']['responses']['200']['application/json']}>
  
  type GetCustomerLeadSourceResponse = Promise<{fields: operations['GetCustomerLeadSource']['responses']['200']['application/json']}>
  type PutCustomerLeadSourceRequest = operations['PutCustomerLeadSource']['requestBody']['application/json']
  type PutCustomerLeadSourceResponse = Promise<{fields: operations['PutCustomerLeadSource']['responses']['201']['application/json']}>
  type DeleteCustomerLeadSourceResponse = Promise<{fields: operations['DeleteCustomerLeadSource']['responses']['204']}>
  
  type GetCustomerTimelineCollectionRequest = operations['GetCustomerTimelineCollection']['parameters']['query']
  
  type GetCustomerTimelineCollectionResponse = Promise<{ items: operations['GetCustomerTimelineCollection']['responses']['200']['application/json']}>
  type PostCustomerTimelineRequest = operations['PostCustomerTimeline']['requestBody']['application/json']
  type PostCustomerTimelineResponse = Promise<{fields: operations['PostCustomerTimeline']['responses']['201']['application/json']}>
  
  type GetCustomerTimelineResponse = Promise<{fields: operations['GetCustomerTimeline']['responses']['200']['application/json']}>
  type DeleteCustomerTimelineResponse = Promise<{fields: operations['DeleteCustomerTimeline']['responses']['204']}>
  
  type GetCustomerUpcomingInvoiceCollectionRequest = operations['GetCustomerUpcomingInvoiceCollection']['parameters']['query']
  
  type GetCustomerUpcomingInvoiceCollectionResponse = Promise<{ items: operations['GetCustomerUpcomingInvoiceCollection']['responses']['200']['application/json']}>
  
  type GetDisputeCollectionRequest = operations['GetDisputeCollection']['parameters']['query']
  
  type GetDisputeCollectionResponse = Promise<{ items: operations['GetDisputeCollection']['responses']['200']['application/json']}>
  type PostDisputeRequest = operations['PostDispute']['requestBody']
  type PostDisputeResponse = Promise<{fields: operations['PostDispute']['responses']['201']['application/json']}>
  
  type GetDisputeResponse = Promise<{fields: operations['GetDispute']['responses']['200']['application/json']}>
  type PutDisputeRequest = operations['PutDispute']['requestBody']
  type PutDisputeResponse = Promise<{fields: operations['PutDispute']['responses']['201']['application/json']}>
  
  type GetFileCollectionRequest = operations['GetFileCollection']['parameters']['query']
  
  type GetFileCollectionResponse = Promise<{ items: operations['GetFileCollection']['responses']['200']['application/json']}>
  type PostFileRequest = operations['PostFile']['requestBody']['application/json']
  type PostFileResponse = Promise<{fields: operations['PostFile']['responses']['201']['application/json']}>
  
  type GetFileResponse = Promise<{fields: operations['GetFile']['responses']['200']['application/json']}>
  type PutFileRequest = operations['PutFile']['requestBody']['application/json']
  type PutFileResponse = Promise<{fields: operations['PutFile']['responses']['200']['application/json']}>
  type DeleteFileResponse = Promise<{fields: operations['DeleteFile']['responses']['204']}>
  
  type GetFileDownloadResponse = Promise<{fields: operations['GetFileDownload']['responses']['200']['application/json']}>
  
  type GetFileDownloadExtensionResponse = Promise<{fields: operations['GetFileDownloadExtension']['responses']['200']['application/json']}>
  
  type GetInvoiceCollectionRequest = operations['GetInvoiceCollection']['parameters']['query']
  
  type GetInvoiceCollectionResponse = Promise<{ items: operations['GetInvoiceCollection']['responses']['200']['application/json']}>
  type PostInvoiceRequest = operations['PostInvoice']['requestBody']
  type PostInvoiceResponse = Promise<{fields: operations['PostInvoice']['responses']['201']['application/json']}>
  
  type GetInvoiceRequest = operations['GetInvoice']['parameters']
  
  type GetInvoiceResponse = Promise<{fields: operations['GetInvoice']['responses']['200']['application/json']}>
  type PutInvoiceRequest = operations['PutInvoice']['requestBody']
  type PutInvoiceResponse = Promise<{fields: operations['PutInvoice']['responses']['201']['application/json']}>
  
  type PostInvoiceAbandonmentResponse = Promise<{fields: operations['PostInvoiceAbandonment']['responses']['201']['application/json']}>
  
  type PostInvoiceIssuanceRequest = operations['PostInvoiceIssuance']['requestBody']['application/json']
  type PostInvoiceIssuanceResponse = Promise<{fields: operations['PostInvoiceIssuance']['responses']['201']['application/json']}>
  
  type GetInvoiceItemCollectionRequest = operations['GetInvoiceItemCollection']['parameters']['query']
  
  type GetInvoiceItemCollectionResponse = Promise<{ items: operations['GetInvoiceItemCollection']['responses']['200']['application/json']}>
  type PostInvoiceItemRequest = operations['PostInvoiceItem']['requestBody']['application/json']
  type PostInvoiceItemResponse = Promise<{fields: operations['PostInvoiceItem']['responses']['201']['application/json']}>
  
  type PostInvoiceRecalculationResponse = Promise<{fields: operations['PostInvoiceRecalculation']['responses']['201']['application/json']}>
  
  type PostInvoiceReissuanceRequest = operations['PostInvoiceReissuance']['requestBody']['application/json']
  type PostInvoiceReissuanceResponse = Promise<{fields: operations['PostInvoiceReissuance']['responses']['201']['application/json']}>
  
  type GetInvoiceTimelineCollectionRequest = operations['GetInvoiceTimelineCollection']['parameters']['query']
  
  type GetInvoiceTimelineCollectionResponse = Promise<{ items: operations['GetInvoiceTimelineCollection']['responses']['200']['application/json']}>
  type PostInvoiceTimelineRequest = operations['PostInvoiceTimeline']['requestBody']['application/json']
  type PostInvoiceTimelineResponse = Promise<{fields: operations['PostInvoiceTimeline']['responses']['201']['application/json']}>
  
  type GetInvoiceTimelineResponse = Promise<{fields: operations['GetInvoiceTimeline']['responses']['200']['application/json']}>
  type DeleteInvoiceTimelineResponse = Promise<{fields: operations['DeleteInvoiceTimeline']['responses']['204']}>
  
  type GetInvoiceTransactionAllocationCollectionResponse = Promise<{ items: operations['GetInvoiceTransactionAllocationCollection']['responses']['200']['application/json']}>
  
  type PostInvoiceVoidResponse = Promise<{fields: operations['PostInvoiceVoid']['responses']['201']['application/json']}>
  
  type GetKycDocumentCollectionRequest = operations['GetKycDocumentCollection']['parameters']['query']
  
  type GetKycDocumentCollectionResponse = Promise<{ items: operations['GetKycDocumentCollection']['responses']['200']['application/json']}>
  type PostKycDocumentRequest = operations['PostKycDocument']['requestBody']['application/json']
  type PostKycDocumentResponse = Promise<{fields: operations['PostKycDocument']['responses']['201']['application/json']}>
  
  type GetKycDocumentResponse = Promise<{fields: operations['GetKycDocument']['responses']['200']['application/json']}>
  type PutKycDocumentRequest = operations['PutKycDocument']['requestBody']['application/json']
  type PutKycDocumentResponse = Promise<{fields: operations['PutKycDocument']['responses']['201']['application/json']}>
  
  type PostKycDocumentAcceptanceResponse = Promise<{fields: operations['PostKycDocumentAcceptance']['responses']['201']['application/json']}>
  
  type PostKycDocumentRejectionRequest = operations['PostKycDocumentRejection']['requestBody']['application/json']
  type PostKycDocumentRejectionResponse = Promise<{fields: operations['PostKycDocumentRejection']['responses']['201']['application/json']}>
  
  type PostKycDocumentReviewResponse = Promise<{fields: operations['PostKycDocumentReview']['responses']['201']['application/json']}>
  
  type GetPasswordTokenCollectionRequest = operations['GetPasswordTokenCollection']['parameters']['query']
  
  type GetPasswordTokenCollectionResponse = Promise<{ items: operations['GetPasswordTokenCollection']['responses']['200']['application/json']}>
  type PostPasswordTokenRequest = operations['PostPasswordToken']['requestBody']['application/json']
  type PostPasswordTokenResponse = Promise<{fields: operations['PostPasswordToken']['responses']['201']['application/json']}>
  
  type GetPasswordTokenResponse = Promise<{fields: operations['GetPasswordToken']['responses']['200']['application/json']}>
  type DeletePasswordTokenResponse = Promise<{fields: operations['DeletePasswordToken']['responses']['204']}>
  
  type GetPaymentInstrumentCollectionRequest = operations['GetPaymentInstrumentCollection']['parameters']['query']
  
  type GetPaymentInstrumentCollectionResponse = Promise<{ items: operations['GetPaymentInstrumentCollection']['responses']['200']['application/json']}>
  type PostPaymentInstrumentRequest = operations['PostPaymentInstrument']['requestBody']
  type PostPaymentInstrumentResponse = Promise<{fields: operations['PostPaymentInstrument']['responses']['201']['application/json']}>
  
  type GetPaymentInstrumentResponse = Promise<{fields: operations['GetPaymentInstrument']['responses']['200']['application/json']}>
  type PatchPaymentInstrumentRequest = operations['PatchPaymentInstrument']['requestBody']
  type PatchPaymentInstrumentResponse = Promise<{fields: operations['PatchPaymentInstrument']['responses']['200']['application/json']}>
  
  type PostPaymentInstrumentDeactivationResponse = Promise<{fields: operations['PostPaymentInstrumentDeactivation']['responses']['201']['application/json']}>
  
  type GetPaymentCardCollectionRequest = operations['GetPaymentCardCollection']['parameters']['query']
  
  type GetPaymentCardCollectionResponse = Promise<{ items: operations['GetPaymentCardCollection']['responses']['200']['application/json']}>
  type PostPaymentCardRequest = operations['PostPaymentCard']['requestBody']['application/json']
  type PostPaymentCardResponse = Promise<{fields: operations['PostPaymentCard']['responses']['201']['application/json']}>
  
  type GetPaymentCardResponse = Promise<{fields: operations['GetPaymentCard']['responses']['200']['application/json']}>
  type PutPaymentCardRequest = operations['PutPaymentCard']['requestBody']['application/json']
  type PutPaymentCardResponse = Promise<{fields: operations['PutPaymentCard']['responses']['201']['application/json']}>
  type PatchPaymentCardRequest = operations['PatchPaymentCard']['requestBody']['application/json']
  type PatchPaymentCardResponse = Promise<{fields: operations['PatchPaymentCard']['responses']['200']['application/json']}>
  
  type PostPaymentCardAuthorizationRequest = operations['PostPaymentCardAuthorization']['requestBody']['application/json']
  type PostPaymentCardAuthorizationResponse = Promise<{fields: operations['PostPaymentCardAuthorization']['responses']['201']['application/json']}>
  
  type PostPaymentCardDeactivationResponse = Promise<{fields: operations['PostPaymentCardDeactivation']['responses']['201']['application/json']}>
  
  type GetPaymentMethodCollectionResponse = Promise<{ items: operations['GetPaymentMethodCollection']['responses']['200']['application/json']}>
  
  type GetPaymentMethodResponse = Promise<{fields: operations['GetPaymentMethod']['responses']['200']['application/json']}>
  
  type GetPayPalAccountCollectionRequest = operations['GetPayPalAccountCollection']['parameters']['query']
  
  type GetPayPalAccountCollectionResponse = Promise<{ items: operations['GetPayPalAccountCollection']['responses']['200']['application/json']}>
  type PostPayPalAccountRequest = operations['PostPayPalAccount']['requestBody']['application/json']
  type PostPayPalAccountResponse = Promise<{fields: operations['PostPayPalAccount']['responses']['201']['application/json']}>
  
  type GetPayPalAccountResponse = Promise<{fields: operations['GetPayPalAccount']['responses']['200']['application/json']}>
  type PutPayPalAccountRequest = operations['PutPayPalAccount']['requestBody']['application/json']
  type PutPayPalAccountResponse = Promise<{fields: operations['PutPayPalAccount']['responses']['201']['application/json']}>
  
  type PostPayPalAccountActivationRequest = operations['PostPayPalAccountActivation']['requestBody']['application/json']
  type PostPayPalAccountActivationResponse = Promise<{fields: operations['PostPayPalAccountActivation']['responses']['201']['application/json']}>
  
  type PostPayPalAccountDeactivationResponse = Promise<{fields: operations['PostPayPalAccountDeactivation']['responses']['201']['application/json']}>
  
  type PostPermissionsEmulationRequest = operations['PostPermissionsEmulation']['requestBody']['application/json']
  type PostPermissionsEmulationResponse = Promise<{fields: operations['PostPermissionsEmulation']['responses']['201']['application/json']}>
  type DeletePermissionsEmulationResponse = Promise<{fields: operations['DeletePermissionsEmulation']['responses']['201']['application/json']}>
  
  type GetPlanCollectionRequest = operations['GetPlanCollection']['parameters']['query']
  
  type GetPlanCollectionResponse = Promise<{ items: operations['GetPlanCollection']['responses']['200']['application/json']}>
  type PostPlanRequest = operations['PostPlan']['requestBody']
  type PostPlanResponse = Promise<{fields: operations['PostPlan']['responses']['201']['application/json']}>
  
  type GetPlanResponse = Promise<{fields: operations['GetPlan']['responses']['200']['application/json']}>
  type PutPlanRequest = operations['PutPlan']['requestBody']
  type PutPlanResponse = Promise<{fields: operations['PutPlan']['responses']['201']['application/json']}>
  type DeletePlanResponse = Promise<{fields: operations['DeletePlan']['responses']['204']}>
  
  type GetProductCollectionRequest = operations['GetProductCollection']['parameters']['query']
  
  type GetProductCollectionResponse = Promise<{ items: operations['GetProductCollection']['responses']['200']['application/json']}>
  type PostProductRequest = operations['PostProduct']['requestBody']
  type PostProductResponse = Promise<{fields: operations['PostProduct']['responses']['201']['application/json']}>
  
  type GetProductResponse = Promise<{fields: operations['GetProduct']['responses']['200']['application/json']}>
  type PutProductRequest = operations['PutProduct']['requestBody']
  type PutProductResponse = Promise<{fields: operations['PutProduct']['responses']['201']['application/json']}>
  type DeleteProductResponse = Promise<{fields: operations['DeleteProduct']['responses']['204']}>
  
  type GetSearchRequest = operations['GetSearch']['parameters']
  
  type GetSearchResponse = Promise<{fields: operations['GetSearch']['responses']['200']['application/json']}>
  
  type GetShippingZoneCollectionRequest = operations['GetShippingZoneCollection']['parameters']['query']
  
  type GetShippingZoneCollectionResponse = Promise<{ items: operations['GetShippingZoneCollection']['responses']['200']['application/json']}>
  type PostShippingZoneRequest = operations['PostShippingZone']['requestBody']['application/json']
  type PostShippingZoneResponse = Promise<{fields: operations['PostShippingZone']['responses']['201']['application/json']}>
  
  type GetShippingZoneResponse = Promise<{fields: operations['GetShippingZone']['responses']['200']['application/json']}>
  type PutShippingZoneRequest = operations['PutShippingZone']['requestBody']['application/json']
  type PutShippingZoneResponse = Promise<{fields: operations['PutShippingZone']['responses']['201']['application/json']}>
  type DeleteShippingZoneResponse = Promise<{fields: operations['DeleteShippingZone']['responses']['204']}>
  
  type GetSubscriptionCancellationCollectionRequest = operations['GetSubscriptionCancellationCollection']['parameters']['query']
  
  type GetSubscriptionCancellationCollectionResponse = Promise<{ items: operations['GetSubscriptionCancellationCollection']['responses']['200']['application/json']}>
  type PostSubscriptionCancellationRequest = operations['PostSubscriptionCancellation']['requestBody']
  type PostSubscriptionCancellationResponse = Promise<{fields: operations['PostSubscriptionCancellation']['responses']['201']['application/json']}>
  
  type GetSubscriptionCancellationResponse = Promise<{fields: operations['GetSubscriptionCancellation']['responses']['200']['application/json']}>
  type PutSubscriptionCancellationRequest = operations['PutSubscriptionCancellation']['requestBody']
  type PutSubscriptionCancellationResponse = Promise<{fields: operations['PutSubscriptionCancellation']['responses']['201']['application/json']}>
  type DeleteSubscriptionCancellationResponse = Promise<{fields: operations['DeleteSubscriptionCancellation']['responses']['204']}>
  
  type GetSubscriptionReactivationCollectionRequest = operations['GetSubscriptionReactivationCollection']['parameters']['query']
  
  type GetSubscriptionReactivationCollectionResponse = Promise<{ items: operations['GetSubscriptionReactivationCollection']['responses']['200']['application/json']}>
  type PostSubscriptionReactivationRequest = operations['PostSubscriptionReactivation']['requestBody']['application/json']
  type PostSubscriptionReactivationResponse = Promise<{fields: operations['PostSubscriptionReactivation']['responses']['201']['application/json']}>
  
  type GetSubscriptionReactivationResponse = Promise<{fields: operations['GetSubscriptionReactivation']['responses']['200']['application/json']}>
  
  type GetSubscriptionCollectionRequest = operations['GetSubscriptionCollection']['parameters']['query']
  
  type GetSubscriptionCollectionResponse = Promise<{ items: operations['GetSubscriptionCollection']['responses']['200']['application/json']}>
  type PostSubscriptionRequest = operations['PostSubscription']['requestBody']
  type PostSubscriptionResponse = Promise<{fields: operations['PostSubscription']['responses']['201']['application/json']}>
  
  type GetSubscriptionRequest = operations['GetSubscription']['parameters']
  
  type GetSubscriptionResponse = Promise<{fields: operations['GetSubscription']['responses']['200']['application/json']}>
  type PutSubscriptionRequest = operations['PutSubscription']['requestBody']
  type PutSubscriptionResponse = Promise<{fields: operations['PutSubscription']['responses']['201']['application/json']}>
  
  type PostSubscriptionPlanChangeRequest = operations['PostSubscriptionPlanChange']['requestBody']['application/json']
  type PostSubscriptionPlanChangeResponse = Promise<{fields: operations['PostSubscriptionPlanChange']['responses']['201']['application/json']}>
  
  type PostSubscriptionInterimInvoiceRequest = operations['PostSubscriptionInterimInvoice']['requestBody']['application/json']
  type PostSubscriptionInterimInvoiceResponse = Promise<{fields: operations['PostSubscriptionInterimInvoice']['responses']['201']['application/json']}>
  
  type GetSubscriptionTimelineCollectionRequest = operations['GetSubscriptionTimelineCollection']['parameters']['query']
  
  type GetSubscriptionTimelineCollectionResponse = Promise<{ items: operations['GetSubscriptionTimelineCollection']['responses']['200']['application/json']}>
  type PostSubscriptionTimelineRequest = operations['PostSubscriptionTimeline']['requestBody']['application/json']
  type PostSubscriptionTimelineResponse = Promise<{fields: operations['PostSubscriptionTimeline']['responses']['201']['application/json']}>
  
  type GetSubscriptionTimelineResponse = Promise<{fields: operations['GetSubscriptionTimeline']['responses']['200']['application/json']}>
  type DeleteSubscriptionTimelineResponse = Promise<{fields: operations['DeleteSubscriptionTimeline']['responses']['204']}>
  
  type GetSubscriptionUpcomingInvoiceCollectionRequest = operations['GetSubscriptionUpcomingInvoiceCollection']['parameters']['query']
  
  type GetSubscriptionUpcomingInvoiceCollectionResponse = Promise<{ items: operations['GetSubscriptionUpcomingInvoiceCollection']['responses']['200']['application/json']}>
  
  type PostUpcomingInvoiceIssuanceRequest = operations['PostUpcomingInvoiceIssuance']['requestBody']['application/json']
  type PostUpcomingInvoiceIssuanceResponse = Promise<{fields: operations['PostUpcomingInvoiceIssuance']['responses']['201']['application/json']}>
  
  type GetTagCollectionRequest = operations['GetTagCollection']['parameters']['query']
  
  type GetTagCollectionResponse = Promise<{ items: operations['GetTagCollection']['responses']['200']['application/json']}>
  type PostTagRequest = operations['PostTag']['requestBody']
  type PostTagResponse = Promise<{fields: operations['PostTag']['responses']['201']['application/json']}>
  
  type GetTagResponse = Promise<{fields: operations['GetTag']['responses']['200']['application/json']}>
  type PatchTagRequest = operations['PatchTag']['requestBody']
  type PatchTagResponse = Promise<{fields: operations['PatchTag']['responses']['200']['application/json']}>
  type DeleteTagResponse = Promise<{fields: operations['DeleteTag']['responses']['204']}>
  
  type PostTagCustomerCollectionRequest = operations['PostTagCustomerCollection']['requestBody']['application/json']
  type PostTagCustomerCollectionResponse = Promise<{ items: operations['PostTagCustomerCollection']['responses']['204']}>
  type DeleteTagCustomerCollectionRequest = operations['DeleteTagCustomerCollection']['requestBody']['application/json']
  type DeleteTagCustomerCollectionResponse = Promise<{ items: operations['DeleteTagCustomerCollection']['responses']['204']}>
  
  type PostTagCustomerResponse = Promise<{fields: operations['PostTagCustomer']['responses']['204']}>
  type DeleteTagCustomerResponse = Promise<{fields: operations['DeleteTagCustomer']['responses']['204']}>
  
  type GetTokenCollectionRequest = operations['GetTokenCollection']['parameters']['query']
  
  type GetTokenCollectionResponse = Promise<{ items: operations['GetTokenCollection']['responses']['200']['application/json']}>
  type PostTokenRequest = operations['PostToken']['requestBody']['application/json']
  type PostTokenResponse = Promise<{fields: operations['PostToken']['responses']['201']['application/json']}>
  
  type GetTokenResponse = Promise<{fields: operations['GetToken']['responses']['200']['application/json']}>
  
  type PostDigitalWalletValidationRequest = operations['PostDigitalWalletValidation']['requestBody']['application/json']
  type PostDigitalWalletValidationResponse = Promise<{fields: operations['PostDigitalWalletValidation']['responses']['201']['application/json']}>
  
  type GetTransactionCollectionRequest = operations['GetTransactionCollection']['parameters']['query']
  
  type GetTransactionCollectionResponse = Promise<{ items: operations['GetTransactionCollection']['responses']['200']['application/json']}>
  type PostTransactionRequest = operations['PostTransaction']['requestBody']
  type PostTransactionResponse = Promise<{fields: operations['PostTransaction']['responses']['201']['application/json']}>
  
  type GetTransactionResponse = Promise<{fields: operations['GetTransaction']['responses']['200']['application/json']}>
  type PatchTransactionRequest = operations['PatchTransaction']['requestBody']
  type PatchTransactionResponse = Promise<{fields: operations['PatchTransaction']['responses']['200']['application/json']}>
  
  type PostPayoutRequest = operations['PostPayout']['requestBody']
  type PostPayoutResponse = Promise<{fields: operations['PostPayout']['responses']['201']['application/json']}>
  
  type PostTransactionCancellationResponse = Promise<{fields: operations['PostTransactionCancellation']['responses']['201']['application/json']}>
  
  type GetTransactionGatewayLogCollectionResponse = Promise<{ items: operations['GetTransactionGatewayLogCollection']['responses']['200']['application/json']}>
  
  type PostTransactionRefundRequest = operations['PostTransactionRefund']['requestBody']['application/json']
  type PostTransactionRefundResponse = Promise<{fields: operations['PostTransactionRefund']['responses']['201']['application/json']}>
  
  type GetTransactionTimelineCollectionRequest = operations['GetTransactionTimelineCollection']['parameters']['query']
  
  type GetTransactionTimelineCollectionResponse = Promise<{ items: operations['GetTransactionTimelineCollection']['responses']['200']['application/json']}>
  type PostTransactionTimelineRequest = operations['PostTransactionTimeline']['requestBody']['application/json']
  type PostTransactionTimelineResponse = Promise<{fields: operations['PostTransactionTimeline']['responses']['201']['application/json']}>
  
  type GetTransactionTimelineResponse = Promise<{fields: operations['GetTransactionTimeline']['responses']['200']['application/json']}>
  type DeleteTransactionTimelineResponse = Promise<{fields: operations['DeleteTransactionTimeline']['responses']['204']}>
  
  type PostActivationResponse = Promise<{fields: operations['PostActivation']['responses']['204']}>
  
  type GetApiKeyCollectionRequest = operations['GetApiKeyCollection']['parameters']['query']
  
  type GetApiKeyCollectionResponse = Promise<{ items: operations['GetApiKeyCollection']['responses']['200']['application/json']}>
  type PostApiKeyRequest = operations['PostApiKey']['requestBody']
  type PostApiKeyResponse = Promise<{fields: operations['PostApiKey']['responses']['201']['application/json']}>
  
  type GetApiKeyResponse = Promise<{fields: operations['GetApiKey']['responses']['200']['application/json']}>
  type PutApiKeyRequest = operations['PutApiKey']['requestBody']
  type PutApiKeyResponse = Promise<{fields: operations['PutApiKey']['responses']['201']['application/json']}>
  type DeleteApiKeyResponse = Promise<{fields: operations['DeleteApiKey']['responses']['204']}>
  
  type GetBroadcastMessageCollectionResponse = Promise<{ items: operations['GetBroadcastMessageCollection']['responses']['200']['application/json']}>
  type PostBroadcastMessageRequest = operations['PostBroadcastMessage']['requestBody']['application/json']
  type PostBroadcastMessageResponse = Promise<{fields: operations['PostBroadcastMessage']['responses']['201']['application/json']}>
  
  type GetBroadcastMessageResponse = Promise<{fields: operations['GetBroadcastMessage']['responses']['200']['application/json']}>
  type PatchBroadcastMessageRequest = operations['PatchBroadcastMessage']['requestBody']['application/json']
  type PatchBroadcastMessageResponse = Promise<{fields: operations['PatchBroadcastMessage']['responses']['200']['application/json']}>
  type DeleteBroadcastMessageResponse = Promise<{fields: operations['DeleteBroadcastMessage']['responses']['204']}>
  
  type GetCheckoutFormCollectionResponse = Promise<{ items: operations['GetCheckoutFormCollection']['responses']['200']['application/json']}>
  type PostCheckoutFormRequest = operations['PostCheckoutForm']['requestBody']['application/json']
  type PostCheckoutFormResponse = Promise<{fields: operations['PostCheckoutForm']['responses']['201']['application/json']}>
  
  type GetCheckoutFormResponse = Promise<{fields: operations['GetCheckoutForm']['responses']['200']['application/json']}>
  type PutCheckoutFormRequest = operations['PutCheckoutForm']['requestBody']['application/json']
  type PutCheckoutFormResponse = Promise<{fields: operations['PutCheckoutForm']['responses']['201']['application/json']}>
  type DeleteCheckoutFormResponse = Promise<{fields: operations['DeleteCheckoutForm']['responses']['204']}>
  
  type PostAwsSesCredentialHashRequest = operations['PostAwsSesCredentialHash']['requestBody']['application/json']
  type PostAwsSesCredentialHashResponse = Promise<{fields: operations['PostAwsSesCredentialHash']['responses']['201']['application/json']}>
  
  type GetAwsSesCredentialHashResponse = Promise<{fields: operations['GetAwsSesCredentialHash']['responses']['200']['application/json']}>
  type PatchAwsSesCredentialHashRequest = operations['PatchAwsSesCredentialHash']['requestBody']['application/json']
  type PatchAwsSesCredentialHashResponse = Promise<{fields: operations['PatchAwsSesCredentialHash']['responses']['200']['application/json']}>
  
  type PostEmailCredentialHashRequest = operations['PostEmailCredentialHash']['requestBody']['application/json']
  type PostEmailCredentialHashResponse = Promise<{fields: operations['PostEmailCredentialHash']['responses']['201']['application/json']}>
  
  type GetEmailCredentialHashResponse = Promise<{fields: operations['GetEmailCredentialHash']['responses']['200']['application/json']}>
  type PatchEmailCredentialHashRequest = operations['PatchEmailCredentialHash']['requestBody']['application/json']
  type PatchEmailCredentialHashResponse = Promise<{fields: operations['PatchEmailCredentialHash']['responses']['200']['application/json']}>
  
  type PostMailgunCredentialHashRequest = operations['PostMailgunCredentialHash']['requestBody']['application/json']
  type PostMailgunCredentialHashResponse = Promise<{fields: operations['PostMailgunCredentialHash']['responses']['201']['application/json']}>
  
  type GetMailgunCredentialHashResponse = Promise<{fields: operations['GetMailgunCredentialHash']['responses']['200']['application/json']}>
  type PatchMailgunCredentialHashRequest = operations['PatchMailgunCredentialHash']['requestBody']['application/json']
  type PatchMailgunCredentialHashResponse = Promise<{fields: operations['PatchMailgunCredentialHash']['responses']['200']['application/json']}>
  
  type GetOauth2CredentialHashCollectionResponse = Promise<{ items: operations['GetOauth2CredentialHashCollection']['responses']['200']['application/json']}>
  type PostOauth2CredentialHashRequest = operations['PostOauth2CredentialHash']['requestBody']
  type PostOauth2CredentialHashResponse = Promise<{fields: operations['PostOauth2CredentialHash']['responses']['201']['application/json']}>
  
  type GetOauth2CredentialHashResponse = Promise<{fields: operations['GetOauth2CredentialHash']['responses']['200']['application/json']}>
  type PatchOauth2CredentialHashRequest = operations['PatchOauth2CredentialHash']['requestBody']
  type PatchOauth2CredentialHashResponse = Promise<{fields: operations['PatchOauth2CredentialHash']['responses']['200']['application/json']}>
  
  type GetOauth2CredentialHashItemCollectionResponse = Promise<{ items: operations['GetOauth2CredentialHashItemCollection']['responses']['200']['application/json']}>
  
  type GetPlaidCredentialCollectionRequest = operations['GetPlaidCredentialCollection']['parameters']['query']
  
  type GetPlaidCredentialCollectionResponse = Promise<{ items: operations['GetPlaidCredentialCollection']['responses']['200']['application/json']}>
  type PostPlaidCredentialHashRequest = operations['PostPlaidCredentialHash']['requestBody']['application/json']
  type PostPlaidCredentialHashResponse = Promise<{fields: operations['PostPlaidCredentialHash']['responses']['201']['application/json']}>
  
  type GetPlaidCredentialHashResponse = Promise<{fields: operations['GetPlaidCredentialHash']['responses']['200']['application/json']}>
  type PatchPlaidCredentialHashRequest = operations['PatchPlaidCredentialHash']['requestBody']['application/json']
  type PatchPlaidCredentialHashResponse = Promise<{fields: operations['PatchPlaidCredentialHash']['responses']['200']['application/json']}>
  
  type PostPostmarkCredentialHashRequest = operations['PostPostmarkCredentialHash']['requestBody']['application/json']
  type PostPostmarkCredentialHashResponse = Promise<{fields: operations['PostPostmarkCredentialHash']['responses']['201']['application/json']}>
  
  type GetPostmarkCredentialHashResponse = Promise<{fields: operations['GetPostmarkCredentialHash']['responses']['200']['application/json']}>
  type PatchPostmarkCredentialHashRequest = operations['PatchPostmarkCredentialHash']['requestBody']['application/json']
  type PatchPostmarkCredentialHashResponse = Promise<{fields: operations['PatchPostmarkCredentialHash']['responses']['200']['application/json']}>
  
  type PostSendGridCredentialHashRequest = operations['PostSendGridCredentialHash']['requestBody']['application/json']
  type PostSendGridCredentialHashResponse = Promise<{fields: operations['PostSendGridCredentialHash']['responses']['201']['application/json']}>
  
  type GetSendGridCredentialHashResponse = Promise<{fields: operations['GetSendGridCredentialHash']['responses']['200']['application/json']}>
  type PatchSendGridCredentialHashRequest = operations['PatchSendGridCredentialHash']['requestBody']['application/json']
  type PatchSendGridCredentialHashResponse = Promise<{fields: operations['PatchSendGridCredentialHash']['responses']['200']['application/json']}>
  
  type PostWebhookCredentialHashRequest = operations['PostWebhookCredentialHash']['requestBody']['application/json']
  type PostWebhookCredentialHashResponse = Promise<{fields: operations['PostWebhookCredentialHash']['responses']['201']['application/json']}>
  
  type GetWebhookCredentialHashResponse = Promise<{fields: operations['GetWebhookCredentialHash']['responses']['200']['application/json']}>
  type PatchWebhookCredentialHashRequest = operations['PatchWebhookCredentialHash']['requestBody']['application/json']
  type PatchWebhookCredentialHashResponse = Promise<{fields: operations['PatchWebhookCredentialHash']['responses']['200']['application/json']}>
  
  type GetExperianCredentialHashCollectionResponse = Promise<{ items: operations['GetExperianCredentialHashCollection']['responses']['200']['application/json']}>
  type PostExperianCredentialHashRequest = operations['PostExperianCredentialHash']['requestBody']['application/json']
  type PostExperianCredentialHashResponse = Promise<{fields: operations['PostExperianCredentialHash']['responses']['201']['application/json']}>
  
  type GetExperianCredentialHashResponse = Promise<{fields: operations['GetExperianCredentialHash']['responses']['200']['application/json']}>
  type PatchExperianCredentialHashRequest = operations['PatchExperianCredentialHash']['requestBody']['application/json']
  type PatchExperianCredentialHashResponse = Promise<{fields: operations['PatchExperianCredentialHash']['responses']['200']['application/json']}>
  
  type VerifyEmailDeliverySettingsResponse = Promise<{fields: operations['VerifyEmailDeliverySettings']['responses']['200']['application/json']}>
  
  type GetEmailDeliverySettingCollectionResponse = Promise<{ items: operations['GetEmailDeliverySettingCollection']['responses']['200']['application/json']}>
  type PostEmailDeliverySettingRequest = operations['PostEmailDeliverySetting']['requestBody']['application/json']
  type PostEmailDeliverySettingResponse = Promise<{fields: operations['PostEmailDeliverySetting']['responses']['201']['application/json']}>
  
  type GetEmailDeliverySettingResponse = Promise<{fields: operations['GetEmailDeliverySetting']['responses']['200']['application/json']}>
  type PatchEmailDeliverySettingsRequest = operations['PatchEmailDeliverySettings']['requestBody']['application/json']
  type PatchEmailDeliverySettingsResponse = Promise<{fields: operations['PatchEmailDeliverySettings']['responses']['200']['application/json']}>
  type DeleteEmailDeliverySettingResponse = Promise<{fields: operations['DeleteEmailDeliverySetting']['responses']['204']}>
  
  type ResendEmailDeliverySettingVerificationResponse = Promise<{fields: operations['ResendEmailDeliverySettingVerification']['responses']['200']['application/json']}>
  
  type GetEmailMessageCollectionResponse = Promise<{ items: operations['GetEmailMessageCollection']['responses']['200']['application/json']}>
  type PostEmailMessageRequest = operations['PostEmailMessage']['requestBody']['application/json']
  type PostEmailMessageResponse = Promise<{fields: operations['PostEmailMessage']['responses']['201']['application/json']}>
  
  type GetEmailMessageResponse = Promise<{fields: operations['GetEmailMessage']['responses']['200']['application/json']}>
  type PatchEmailMessageRequest = operations['PatchEmailMessage']['requestBody']['application/json']
  type PatchEmailMessageResponse = Promise<{fields: operations['PatchEmailMessage']['responses']['200']['application/json']}>
  type DeleteEmailMessageResponse = Promise<{fields: operations['DeleteEmailMessage']['responses']['204']}>
  
  type GetEmailNotificationCollectionResponse = Promise<{ items: operations['GetEmailNotificationCollection']['responses']['200']['application/json']}>
  
  type GetEventCollectionResponse = Promise<{ items: operations['GetEventCollection']['responses']['200']['application/json']}>
  
  type GetEventResponse = Promise<{fields: operations['GetEvent']['responses']['200']['application/json']}>
  
  type GetEventRuleCollectionResponse = Promise<{ items: operations['GetEventRuleCollection']['responses']['200']['application/json']}>
  type PutEventRuleCollectionRequest = operations['PutEventRuleCollection']['requestBody']
  type PutEventRuleCollectionResponse = Promise<{ items: operations['PutEventRuleCollection']['responses']['200']['application/json']}>
  
  type GetEventRuleHistoryCollectionRequest = operations['GetEventRuleHistoryCollection']['parameters']['query']
  
  type GetEventRuleHistoryCollectionResponse = Promise<{ items: operations['GetEventRuleHistoryCollection']['responses']['200']['application/json']}>
  
  type GetEventRuleHistoryVersionRequest = operations['GetEventRuleHistoryVersion']['parameters']
  
  type GetEventRuleHistoryVersionResponse = Promise<{fields: operations['GetEventRuleHistoryVersion']['responses']['200']['application/json']}>
  
  type GetEventRuleVersionRequest = operations['GetEventRuleVersion']['parameters']
  
  type GetEventRuleVersionResponse = Promise<{fields: operations['GetEventRuleVersion']['responses']['200']['application/json']}>
  
  type PostForgotPasswordRequestRequest = operations['PostForgotPasswordRequest']['requestBody']['application/json']
  type PostForgotPasswordRequestResponse = Promise<{fields: operations['PostForgotPasswordRequest']['responses']['204']}>
  
  type GetGatewayAccountCollectionRequest = operations['GetGatewayAccountCollection']['parameters']['query']
  
  type GetGatewayAccountCollectionResponse = Promise<{ items: operations['GetGatewayAccountCollection']['responses']['200']['application/json']}>
  type PostGatewayAccountRequest = operations['PostGatewayAccount']['requestBody']
  type PostGatewayAccountResponse = Promise<{fields: operations['PostGatewayAccount']['responses']['201']['application/json']}>
  
  type GetGatewayAccountResponse = Promise<{fields: operations['GetGatewayAccount']['responses']['200']['application/json']}>
  type PutGatewayAccountRequest = operations['PutGatewayAccount']['requestBody']
  type PutGatewayAccountResponse = Promise<{fields: operations['PutGatewayAccount']['responses']['201']['application/json']}>
  type PatchGatewayAccountRequest = operations['PatchGatewayAccount']['requestBody']
  type PatchGatewayAccountResponse = Promise<{fields: operations['PatchGatewayAccount']['responses']['200']['application/json']}>
  type DeleteGatewayAccountResponse = Promise<{fields: operations['DeleteGatewayAccount']['responses']['204']}>
  
  type PostGatewayAccountClosureResponse = Promise<{fields: operations['PostGatewayAccountClosure']['responses']['201']['application/json']}>
  
  type PostGatewayAccountDisablementResponse = Promise<{fields: operations['PostGatewayAccountDisablement']['responses']['201']['application/json']}>
  
  type GetGatewayAccountDowntimeScheduleCollectionRequest = operations['GetGatewayAccountDowntimeScheduleCollection']['parameters']['query']
  
  type GetGatewayAccountDowntimeScheduleCollectionResponse = Promise<{ items: operations['GetGatewayAccountDowntimeScheduleCollection']['responses']['200']['application/json']}>
  type PostGatewayAccountDowntimeScheduleRequest = operations['PostGatewayAccountDowntimeSchedule']['requestBody']
  type PostGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['PostGatewayAccountDowntimeSchedule']['responses']['201']['application/json']}>
  
  type GetGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['GetGatewayAccountDowntimeSchedule']['responses']['200']['application/json']}>
  type PutGatewayAccountDowntimeScheduleRequest = operations['PutGatewayAccountDowntimeSchedule']['requestBody']
  type PutGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['PutGatewayAccountDowntimeSchedule']['responses']['200']['application/json']}>
  type DeleteGatewayAccountDowntimeScheduleResponse = Promise<{fields: operations['DeleteGatewayAccountDowntimeSchedule']['responses']['204']}>
  
  type PostGatewayAccountEnablementResponse = Promise<{fields: operations['PostGatewayAccountEnablement']['responses']['201']['application/json']}>
  
  type GetGatewayAccountLimitCollectionRequest = operations['GetGatewayAccountLimitCollection']['parameters']['query']
  
  type GetGatewayAccountLimitCollectionResponse = Promise<{ items: operations['GetGatewayAccountLimitCollection']['responses']['200']['application/json']}>
  
  type GetGatewayAccountLimitResponse = Promise<{fields: operations['GetGatewayAccountLimit']['responses']['200']['application/json']}>
  type PutGatewayAccountLimitRequest = operations['PutGatewayAccountLimit']['requestBody']['application/json']
  type PutGatewayAccountLimitResponse = Promise<{fields: operations['PutGatewayAccountLimit']['responses']['200']['application/json']}>
  type DeleteGatewayAccountLimitResponse = Promise<{fields: operations['DeleteGatewayAccountLimit']['responses']['204']}>
  
  type GetGatewayAccountTimelineCollectionRequest = operations['GetGatewayAccountTimelineCollection']['parameters']['query']
  
  type GetGatewayAccountTimelineCollectionResponse = Promise<{ items: operations['GetGatewayAccountTimelineCollection']['responses']['200']['application/json']}>
  type PostGatewayAccountTimelineRequest = operations['PostGatewayAccountTimeline']['requestBody']['application/json']
  type PostGatewayAccountTimelineResponse = Promise<{fields: operations['PostGatewayAccountTimeline']['responses']['201']['application/json']}>
  
  type GetGatewayAccountTimelineResponse = Promise<{fields: operations['GetGatewayAccountTimeline']['responses']['200']['application/json']}>
  type DeleteGatewayAccountTimelineResponse = Promise<{fields: operations['DeleteGatewayAccountTimeline']['responses']['204']}>
  
  type GetGridSegmentCollectionRequest = operations['GetGridSegmentCollection']['parameters']['query']
  
  type GetGridSegmentCollectionResponse = Promise<{ items: operations['GetGridSegmentCollection']['responses']['200']['application/json']}>
  type PostGridSegmentRequest = operations['PostGridSegment']['requestBody']
  type PostGridSegmentResponse = Promise<{fields: operations['PostGridSegment']['responses']['201']['application/json']}>
  
  type GetGridSegmentResponse = Promise<{fields: operations['GetGridSegment']['responses']['200']['application/json']}>
  type PutGridSegmentRequest = operations['PutGridSegment']['requestBody']['application/json']
  type PutGridSegmentResponse = Promise<{fields: operations['PutGridSegment']['responses']['200']['application/json']}>
  type DeleteGridSegmentResponse = Promise<{fields: operations['DeleteGridSegment']['responses']['204']}>
  
  type GetIntegrationCollectionResponse = Promise<{ items: operations['GetIntegrationCollection']['responses']['200']['application/json']}>
  
  type GetIntegrationResponse = Promise<{fields: operations['GetIntegration']['responses']['200']['application/json']}>
  
  type GetListCollectionRequest = operations['GetListCollection']['parameters']['query']
  
  type GetListCollectionResponse = Promise<{ items: operations['GetListCollection']['responses']['200']['application/json']}>
  type PostListRequest = operations['PostList']['requestBody']
  type PostListResponse = Promise<{fields: operations['PostList']['responses']['201']['application/json']}>
  
  type GetListResponse = Promise<{fields: operations['GetList']['responses']['200']['application/json']}>
  type PutListRequest = operations['PutList']['requestBody']
  type PutListResponse = Promise<{fields: operations['PutList']['responses']['201']['application/json']}>
  type DeleteListResponse = Promise<{fields: operations['DeleteList']['responses']['204']}>
  
  type GetListVersionResponse = Promise<{fields: operations['GetListVersion']['responses']['200']['application/json']}>
  
  type PostLogoutRequestResponse = Promise<{fields: operations['PostLogoutRequest']['responses']['204']}>
  
  type GetMembershipCollectionRequest = operations['GetMembershipCollection']['parameters']['query']
  
  type GetMembershipCollectionResponse = Promise<{ items: operations['GetMembershipCollection']['responses']['200']['application/json']}>
  
  type GetMembershipResponse = Promise<{fields: operations['GetMembership']['responses']['200']['application/json']}>
  type PutMembershipRequest = operations['PutMembership']['requestBody']['application/json']
  type PutMembershipResponse = Promise<{fields: operations['PutMembership']['responses']['201']['application/json']}>
  type DeleteMembershipResponse = Promise<{fields: operations['DeleteMembership']['responses']['204']}>
  
  type GetOrganizationCollectionRequest = operations['GetOrganizationCollection']['parameters']['query']
  
  type GetOrganizationCollectionResponse = Promise<{ items: operations['GetOrganizationCollection']['responses']['200']['application/json']}>
  type PostOrganizationRequest = operations['PostOrganization']['requestBody']
  type PostOrganizationResponse = Promise<{fields: operations['PostOrganization']['responses']['201']['application/json']}>
  
  type GetOrganizationResponse = Promise<{fields: operations['GetOrganization']['responses']['200']['application/json']}>
  type PutOrganizationRequest = operations['PutOrganization']['requestBody']
  type PutOrganizationResponse = Promise<{fields: operations['PutOrganization']['responses']['201']['application/json']}>
  type DeleteOrganizationResponse = Promise<{fields: operations['DeleteOrganization']['responses']['204']}>
  
  type GetPaymentCardBankNameCollectionRequest = operations['GetPaymentCardBankNameCollection']['parameters']['query']
  
  type GetPaymentCardBankNameCollectionResponse = Promise<{ items: operations['GetPaymentCardBankNameCollection']['responses']['200']['application/json']}>
  
  type PostPreviewRuleActionEmailSendingRequest = operations['PostPreviewRuleActionEmailSending']['requestBody']['application/json']
  type PostPreviewRuleActionEmailSendingResponse = Promise<{fields: operations['PostPreviewRuleActionEmailSending']['responses']['200']['application/json']}>
  
  type PostPreviewRuleActionWebhookTriggerRequest = operations['PostPreviewRuleActionWebhookTrigger']['requestBody']['application/json']
  type PostPreviewRuleActionWebhookTriggerResponse = Promise<{fields: operations['PostPreviewRuleActionWebhookTrigger']['responses']['200']['application/json']}>
  
  type PostPreviewWebhookRequest = operations['PostPreviewWebhook']['requestBody']
  type PostPreviewWebhookResponse = Promise<{fields: operations['PostPreviewWebhook']['responses']['204']}>
  
  type GetProfileResponse = Promise<{fields: operations['GetProfile']['responses']['200']['application/json']}>
  type PutProfileRequest = operations['PutProfile']['requestBody']['application/json']
  type PutProfileResponse = Promise<{fields: operations['PutProfile']['responses']['200']['application/json']}>
  
  type PostProfilePasswordChangeRequest = operations['PostProfilePasswordChange']['requestBody']
  type PostProfilePasswordChangeResponse = Promise<{fields: operations['PostProfilePasswordChange']['responses']['201']['application/json']}>
  
  type PostProfileTotpResetResponse = Promise<{fields: operations['PostProfileTotpReset']['responses']['201']['application/json']}>
  
  type GetPasswordResetTokenResponse = Promise<{fields: operations['GetPasswordResetToken']['responses']['200']['application/json']}>
  type PostPasswordResetRequest = operations['PostPasswordReset']['requestBody']['application/json']
  type PostPasswordResetResponse = Promise<{fields: operations['PostPasswordReset']['responses']['201']['application/json']}>
  
  type GetSendThroughAttributionCollectionResponse = Promise<{ items: operations['GetSendThroughAttributionCollection']['responses']['200']['application/json']}>
  
  type PostSigninRequestRequest = operations['PostSigninRequest']['requestBody']['application/json']
  type PostSigninRequestResponse = Promise<{fields: operations['PostSigninRequest']['responses']['201']['application/json']}>
  
  type PostSignupRequestRequest = operations['PostSignupRequest']['requestBody']['application/json']
  type PostSignupRequestResponse = Promise<{fields: operations['PostSignupRequest']['responses']['201']['application/json']}>
  
  type GetStatusResponse = Promise<{fields: operations['GetStatus']['responses']['200']['application/json']}>
  
  type GetTrackingApiCollectionRequest = operations['GetTrackingApiCollection']['parameters']['query']
  
  type GetTrackingApiCollectionResponse = Promise<{ items: operations['GetTrackingApiCollection']['responses']['200']['application/json']}>
  
  type GetTrackingApiResponse = Promise<{fields: operations['GetTrackingApi']['responses']['200']['application/json']}>
  
  type GetTrackingListCollectionRequest = operations['GetTrackingListCollection']['parameters']['query']
  
  type GetTrackingListCollectionResponse = Promise<{ items: operations['GetTrackingListCollection']['responses']['200']['application/json']}>
  
  type GetTrackingWebhookCollectionRequest = operations['GetTrackingWebhookCollection']['parameters']['query']
  
  type GetTrackingWebhookCollectionResponse = Promise<{ items: operations['GetTrackingWebhookCollection']['responses']['200']['application/json']}>
  
  type GetTrackingWebhookResponse = Promise<{fields: operations['GetTrackingWebhook']['responses']['200']['application/json']}>
  
  type GetTrackingWebhookHistoryCollectionResponse = Promise<{ items: operations['GetTrackingWebhookHistoryCollection']['responses']['200']['application/json']}>
  
  type PostTrackingWebhookResendRequestResponse = Promise<{fields: operations['PostTrackingWebhookResendRequest']['responses']['204']}>
  
  type GetUserCollectionRequest = operations['GetUserCollection']['parameters']['query']
  
  type GetUserCollectionResponse = Promise<{ items: operations['GetUserCollection']['responses']['200']['application/json']}>
  type PostUserRequest = operations['PostUser']['requestBody']
  type PostUserResponse = Promise<{fields: operations['PostUser']['responses']['201']['application/json']}>
  
  type GetUserResponse = Promise<{fields: operations['GetUser']['responses']['200']['application/json']}>
  type PutUserRequest = operations['PutUser']['requestBody']
  type PutUserResponse = Promise<{fields: operations['PutUser']['responses']['201']['application/json']}>
  type DeleteUserResponse = Promise<{fields: operations['DeleteUser']['responses']['204']}>
  
  type PostUserPasswordChangeRequest = operations['PostUserPasswordChange']['requestBody']
  type PostUserPasswordChangeResponse = Promise<{fields: operations['PostUserPasswordChange']['responses']['201']['application/json']}>
  
  type PostUserTotpResetResponse = Promise<{fields: operations['PostUserTotpReset']['responses']['201']['application/json']}>
  
  type GetWebhookCollectionRequest = operations['GetWebhookCollection']['parameters']['query']
  
  type GetWebhookCollectionResponse = Promise<{ items: operations['GetWebhookCollection']['responses']['200']['application/json']}>
  type PostWebhookRequest = operations['PostWebhook']['requestBody']
  type PostWebhookResponse = Promise<{fields: operations['PostWebhook']['responses']['201']['application/json']}>
  
  type GetWebhookResponse = Promise<{fields: operations['GetWebhook']['responses']['200']['application/json']}>
  type PutWebhookRequest = operations['PutWebhook']['requestBody']
  type PutWebhookResponse = Promise<{fields: operations['PutWebhook']['responses']['201']['application/json']}>
  
  type GetWebsiteCollectionRequest = operations['GetWebsiteCollection']['parameters']['query']
  
  type GetWebsiteCollectionResponse = Promise<{ items: operations['GetWebsiteCollection']['responses']['200']['application/json']}>
  type PostWebsiteRequest = operations['PostWebsite']['requestBody']
  type PostWebsiteResponse = Promise<{fields: operations['PostWebsite']['responses']['201']['application/json']}>
  
  type GetWebsiteResponse = Promise<{fields: operations['GetWebsite']['responses']['200']['application/json']}>
  type PutWebsiteRequest = operations['PutWebsite']['requestBody']
  type PutWebsiteResponse = Promise<{fields: operations['PutWebsite']['responses']['201']['application/json']}>
  type DeleteWebsiteResponse = Promise<{fields: operations['DeleteWebsite']['responses']['204']}>
  
  type GetCustomerSummaryMetricReportResponse = Promise<{fields: operations['GetCustomerSummaryMetricReport']['responses']['200']['application/json']}>
  
  type GetDataExportCollectionResponse = Promise<{ items: operations['GetDataExportCollection']['responses']['200']['application/json']}>
  type PostDataExportRequest = operations['PostDataExport']['requestBody']
  type PostDataExportResponse = Promise<{fields: operations['PostDataExport']['responses']['201']['application/json']}>
  
  type GetDataExportResponse = Promise<{fields: operations['GetDataExport']['responses']['200']['application/json']}>
  type PutDataExportRequest = operations['PutDataExport']['requestBody']
  type PutDataExportResponse = Promise<{fields: operations['PutDataExport']['responses']['201']['application/json']}>
  type DeleteDataExportResponse = Promise<{fields: operations['DeleteDataExport']['responses']['204']}>
  
  type GetHistogramTransactionReportRequest = operations['GetHistogramTransactionReport']['parameters']
  
  type GetHistogramTransactionReportResponse = Promise<{fields: operations['GetHistogramTransactionReport']['responses']['200']['application/json']}>
  
  type ExperimentalPostOrganizationRequest = operations['ExperimentalPostOrganization']['requestBody']
  type ExperimentalPostOrganizationResponse = Promise<{fields: operations['ExperimentalPostOrganization']['responses']['201']['application/json']}>
  
  type PatchOrganizationRequest = operations['PatchOrganization']['requestBody']
  type PatchOrganizationResponse = Promise<{fields: operations['PatchOrganization']['responses']['200']['application/json']}>
  
  type GetApiLogSummaryReportRequest = operations['GetApiLogSummaryReport']['parameters']
  
  type GetApiLogSummaryReportResponse = Promise<{fields: operations['GetApiLogSummaryReport']['responses']['200']['application/json']}>
  
  type GetCumulativeSubscriptionReportRequest = operations['GetCumulativeSubscriptionReport']['parameters']
  
  type GetCumulativeSubscriptionReportResponse = Promise<{fields: operations['GetCumulativeSubscriptionReport']['responses']['200']['application/json']}>
  
  type GetDashboardReportRequest = operations['GetDashboardReport']['parameters']
  
  type GetDashboardReportResponse = Promise<{fields: operations['GetDashboardReport']['responses']['200']['application/json']}>
  
  type GetDccMarkupReportRequest = operations['GetDccMarkupReport']['parameters']
  
  type GetDccMarkupReportResponse = Promise<{fields: operations['GetDccMarkupReport']['responses']['200']['application/json']}>
  
  type GetDisputeReportRequest = operations['GetDisputeReport']['parameters']
  
  type GetDisputeReportResponse = Promise<{fields: operations['GetDisputeReport']['responses']['200']['application/json']}>
  
  type GetTriggeredEventReportRequest = operations['GetTriggeredEventReport']['parameters']
  
  type GetTriggeredEventReportResponse = Promise<{fields: operations['GetTriggeredEventReport']['responses']['200']['application/json']}>
  
  type GetTriggeredEventRuleReportRequest = operations['GetTriggeredEventRuleReport']['parameters']
  
  type GetTriggeredEventRuleReportResponse = Promise<{fields: operations['GetTriggeredEventRuleReport']['responses']['200']['application/json']}>
  
  type GetFutureRenewalReportRequest = operations['GetFutureRenewalReport']['parameters']
  
  type GetFutureRenewalReportResponse = Promise<{fields: operations['GetFutureRenewalReport']['responses']['200']['application/json']}>
  
  type GetRenewalSaleReportRequest = operations['GetRenewalSaleReport']['parameters']
  
  type GetRenewalSaleReportResponse = Promise<{fields: operations['GetRenewalSaleReport']['responses']['200']['application/json']}>
  
  type GetRetentionPercentageReportRequest = operations['GetRetentionPercentageReport']['parameters']
  
  type GetRetentionPercentageReportResponse = Promise<{fields: operations['GetRetentionPercentageReport']['responses']['200']['application/json']}>
  
  type GetRetentionValueReportRequest = operations['GetRetentionValueReport']['parameters']
  
  type GetRetentionValueReportResponse = Promise<{fields: operations['GetRetentionValueReport']['responses']['200']['application/json']}>
  
  type GetTransactionRetryReportRequest = operations['GetTransactionRetryReport']['parameters']
  
  type GetTransactionRetryReportResponse = Promise<{fields: operations['GetTransactionRetryReport']['responses']['200']['application/json']}>
  
  type GetSubscriptionCancellationReportRequest = operations['GetSubscriptionCancellationReport']['parameters']
  
  type GetSubscriptionCancellationReportResponse = Promise<{fields: operations['GetSubscriptionCancellationReport']['responses']['200']['application/json']}>
  
  type GetSubscriptionRenewalReportRequest = operations['GetSubscriptionRenewalReport']['parameters']
  
  type GetSubscriptionRenewalReportResponse = Promise<{fields: operations['GetSubscriptionRenewalReport']['responses']['200']['application/json']}>
  
  type GetTimeSeriesTransactionReportRequest = operations['GetTimeSeriesTransactionReport']['parameters']
  
  type GetTimeSeriesTransactionReportResponse = Promise<{fields: operations['GetTimeSeriesTransactionReport']['responses']['200']['application/json']}>
  
  type GetTransactionTimeDisputeReportRequest = operations['GetTransactionTimeDisputeReport']['parameters']
  
  type GetTransactionTimeDisputeReportResponse = Promise<{fields: operations['GetTransactionTimeDisputeReport']['responses']['200']['application/json']}>
  
  type GetTransactionReportRequest = operations['GetTransactionReport']['parameters']
  
  type GetTransactionReportResponse = Promise<{fields: operations['GetTransactionReport']['responses']['200']['application/json']}>
  
  type GetSubscriptionSummaryMetricReportResponse = Promise<{fields: operations['GetSubscriptionSummaryMetricReport']['responses']['200']['application/json']}>
  
  

  //TODO: 
  // Decided if we remove these superfluous Response "data wrappers"
  type PostApiKeyDataRequest = {id: String, data: PostApiKeyRequest};
  
  type PutApiKeyDataRequest = {id: String, data: PutApiKeyRequest};
  
  type PostGatewayAccountDataRequest = {id: String, data: PostGatewayAccountRequest};
  
  type PutGatewayAccountDataRequest = {id: String, data: PutGatewayAccountRequest};
  
  type PutGatewayAccountLimitDataRequest = {id: String, volumeLimitId: String, data: PutGatewayAccountLimitRequest};
  
  type PutGatewayAccountDowntimeScheduleDataRequest = {id: String, downtimeScheduleId: String, data: PutGatewayAccountDowntimeScheduleRequest};
  
  type PostGatewayAccountDowntimeScheduleDataRequest = {id: String, data: PostGatewayAccountDowntimeScheduleRequest};
  
  type PutBankAccountDataRequest = {id: String, data: PutBankAccountRequest};
  
  type PostBankAccountDataRequest = {id: String, data: PostBankAccountRequest};
  
  type PostForgotPasswordRequestDataRequest = {data: PostForgotPasswordRequestRequest};
  
  type PostSigninRequestDataRequest = {data: PostSigninRequestRequest};
  
  type PostSignupRequestDataRequest = {data: PostSignupRequestRequest};
  
  type PostInvoiceIssuanceDataRequest = {id: String, data: PostInvoiceIssuanceRequest};
  
  type PostInvoiceReissuanceDataRequest = {id: String, data: PostInvoiceReissuanceRequest};
  
  type PostInvoiceItemDataRequest = {id: String, data: PostInvoiceItemRequest};
  
  type PutCustomerLeadSourceDataRequest = {id: String, data: PutCustomerLeadSourceRequest};
  
  type PostBlocklistDataRequest = {id: String, data: PostBlocklistRequest};

}
