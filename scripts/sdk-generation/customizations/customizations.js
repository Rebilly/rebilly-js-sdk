// We could also use an x-data in openApi but I prefer to have the definition closer to the place where it is generated to avoid delay/complexity
//Should we have one special for storefront???
const customFunctionNames = {
    //Authentication Resource
    "/authentication-options": {get: 'getAuthOptions', put: 'updateAuthOptions'},
    "/authentication-tokens/{token}/exchange":  'exchangeToken',
    "/authentication-tokens": {get: 'getAllAuthTokens', post: "login"},
    "/authentication-tokens/{token}": {get: 'verify', delete: "logout"},
    '/credentials': {get: 'getAllCredentials', post: 'createCredential'}, 
    '/credentials/{id}': {
        get: 'getCredential',
        put: 'updateCredential', 
        delete: 'deleteCredential', 
        post: 'createCredential' 
    }, 
    '/password-tokens': {get: 'getAllResetPasswordTokens', post: 'createResetPasswordToken'},
    '/password-tokens/{id}': {get: 'getResetPasswordToken', delete: 'deleteResetPasswordToken'},

    //Customer Resource
    '/customers/{id}': {delete: 'merge', post: 'create'},
    '/customers/{id}/lead-source': {
        get: 'getLeadSource', 
        put: 'createLeadSource',
        alias: {verb: 'put', name: 'updateLeadSource'},
        delete: 'deleteLeadSource'
    },
    '/customers/{id}/upcoming-invoices': 'getAllUpcomingInvoices',
    '/customers/{id}/timeline': {get: 'getAllTimelineMessages', post: 'createTimelineComment'},
    '/customers/{id}/timeline/{messageId}': {get: 'getTimelineMessage', delete: 'deleteTimelineMessage'},

    //Files Resource
    '/attachments': {get: 'getAllAttachments', post: 'attach'},
    '/attachments/{id}': {get: 'getAttachment', put: 'updateAttachment', delete: 'detach'},
    '/files': {post: 'upload', get: 'getAll'},
    '/files/{id}/download': 'download',

    //Invoices resource
    '/invoices/{id}/issue': 'issue',
    '/invoices/{id}/reissue': 'reissue',
    '/invoices/{id}/abandon': 'abandon',
    '/invoices/{id}/void': 'void',
    '/invoices/{id}/items': {get: 'getAllInvoiceItems', post: 'createInvoiceItem'},
    '/invoices/{id}/lead-source': {
        get: 'getLeadSource', 
        put: 'createLeadSource',
        alias: {verb: 'put', name: 'updateLeadSource'},
        delete: 'deleteLeadSource'
    },
    '/invoices/{id}/timeline': {get: 'getAllTimelineMessages', post: 'createTimelineComment'},
    '/invoices/{id}/timeline/{messageId}': {get: 'getTimelineMessage', delete: 'deleteTimelineMessage'},
    '/invoices/{id}/transaction-allocations': 'getAllTransactionAllocations',
    '/invoices/{id}/transaction': 'applyTransaction',
    '/invoices/{id}/recalculate': 'recalculate',

    //kyc-documents
    '/kyc-documents/{id}/acceptance': 'accept',
    '/kyc-documents/{id}/rejection': 'reject',
    '/kyc-documents/{id}/review': 'review',

    //Payment cards
    '/payment-cards/{id}': {post: 'create', patch: 'patch'},
    '/payment-cards/{id}/deactivation': 'deactivate',

    //PaymentInstruments
    '/payment-instruments/{id}/deactivation': 'deactivate',
    
    //PaypalAccounts
    '/paypal-accounts/{id}/deactivation': 'deactivate',
    '/paypal-accounts/{id}/activation': 'activate',

    //SubscriptionReactivations
    '/subscription-reactivations': {get: 'getAll', post: 'reactivate'},

    //Subscriptions
    '/subscriptions/{id}/cancel': 'cancel',
    '/subscriptions/{id}/change-plan': 'changePlan',
    '/subscriptions/{id}/upcoming-invoices': 'getAllUpcomingInvoices',
    '/subscriptions/{id}/upcoming-invoices/{invoiceId}/issue': 'issueUpcomingInvoice',
    '/subscriptions/{id}/timeline': {
        get: 'getAllTimelineMessages',
        post: 'createTimelineComment'
    },
    '/subscriptions/{id}/timeline/{messageId}': {
        get: 'getTimelineMessage',
        delete: 'deleteTimelineMessage'
    },
    '/subscriptions/{id}/interim-invoice': 'createInterimInvoice',
    
    //Tags
    '/tags/{tag}/customers': {
        post: 'tagCustomers',
        delete : 'untagCustomers'
    },
    '/tags/{tag}/customers/{customerId}': {
        post: 'tagCustomer',
        delete : 'untagCustomer'
    },
    
    //Purchase resource
    '/ready-to-pay': 'readyToPay',
    
    //Bank account
    '/bank-accounts/{id}': {get: 'get', patch: 'patch'},
    '/bank-accounts/{id}/deactivation': 'deactivate',

    //TODO: unit test this case:
    '/coupons-redemptions': {get: 'getAllRedemptions', post: 'redeem'},
    '/coupons-redemptions/{id}': 'getRedemption',
    '/coupons-redemptions/{id}/cancel': 'cancelRedemption',
    '/coupons/{id}/expiration': 'setExpiration',

  
    //Storefront
    "/account/password": "changePassword",
    "/account/forgot-password": "requestPasswordReset",
    "/account/reset-password/{token}": "confirmPasswordReset",
    "/account/resend-verification": "resendEmailVerification",
    "/account/verification/{token}": "verifyEmail",
  };

const newLineAndTab = '\n  '

// Paths starting with these keys belong to a resource with the custom name given by the value
const customResourceNames = {
    '/3dsecure': 'ThreeDSecure',
    '/authentication': 'CustomerAuthentication',
    '/authentication-options': 'CustomerAuthentication',
    '/authentication-tokens': 'CustomerAuthentication',
    '/attachments': 'Files',
    '/files': 'Files',
    '/coupons': 'Coupons',
    '/coupons-redemptions': 'Coupons',
    '/credentials': 'CustomerAuthentication',
    '/customer-timeline-custom-events': 'Todo',
    '/customer-timeline-events': 'Timelines',
    '/password-tokens': 'CustomerAuthentication',
    '/permissions-emulation': 'Profile',
    '/tokens': 'PaymentTokens',
    '/digital-wallets': 'Todo',
    '/activation': 'Todo',
    '/email-delivery-setting-verifications': 'EmailDeliverySettings',
    '/forgot-password': 'Account',
    '/grid-segments': 'Segments',
    '/logout': 'Account',
    '/reset-password': 'Account',
    '/signin': 'Account',
    '/signup': 'Account',
    '/experimental/organizations': 'Todo',

    //Storefront
    '/register': 'Account',
    
    '/login': 'Authorization',
    //TODO: find easy way to override in the context of Storefront
    // '/logout': 'Authorization',

    '/preview-purchase': 'Purchase',
    '/ready-to-pay': 'Purchase'
};

const storefrontCustomResourceNames = {

};

// This functions have explicit parameter request structure instead of using the generic data parameter
const functionsWithExplicitRequestFields = {
    // key is resourcePath
    //value is function verb
    '/invoices/{id}/transaction': 'post',
    '/payouts': 'post',
    '/tags/{tag}/customers': 'post',
};

module.exports = {
    customFunctionNames,
    customResourceNames,
    functionsWithExplicitRequestFields
}
