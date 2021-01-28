import Resources from './resources';
import AccountResource from './resources/account-resource';
import ApiKeysResource from './resources/api-keys-resource';
//import ExperimentalResources from './resources/experimental';
//import StorefrontResources from './resources/storefront';

export class ApiInstance {
    constructor({apiHandler}) {
        this.account = new Resources.AccountResource({apiHandler})
        this.apiKeys = new Resources.ApiKeysResource({apiHandler})
    }
}

/**
* Create an API instance using the provided API handler.
* @returns {ApiInstance} apiInstance
*/
export default function createApiInstance({apiHandler}) {
    // return {
    //     account: new Resources.AccountResource({apiHandler}),
    //     apiKeys: new Resources.ApiKeysResource({apiHandler}),
    // }
    
    return new ApiInstance({apiHandler})
   /* return {
        account: new Resources.AccountResource({apiHandler}),
        /*aml: Resources.AmlResource({apiHandler}),
        bankAccounts: Resources.BankAccountsResource({apiHandler}),
        blocklists: Resources.BlocklistsResource({apiHandler}),
        broadcastMessages: Resources.BroadcastMessagesResource({apiHandler}),
        checkoutForms: Resources.CheckoutFormsResource({apiHandler}),
        coupons: Resources.CouponsResource({apiHandler}),
        customers: Resources.CustomersResource({apiHandler}),
        customerAuthentication: Resources.CustomerAuthenticationResource({apiHandler}),
        customFields: Resources.CustomFieldsResource({apiHandler}),
        credentialHashes: Resources.CredentialHashesResource({apiHandler}),
        creditMemos: Resources.CreditMemosResource({apiHandler}),
        disputes: Resources.DisputesResource({apiHandler}),
        events: Resources.EventsResource({apiHandler}),
        emailDeliverySettings: Resources.EmailDeliverySettingsResource({apiHandler}),
        emailMessages: Resources.EmailMessagesResource({apiHandler}),
        emailNotifications: Resources.EmailNotificationsResource({apiHandler}),
        files: Resources.FilesResource({apiHandler}),
        gatewayAccounts: Resources.GatewayAccountsResource({apiHandler}),
        plaidCredentials: Resources.PlaidCredentialsResource({apiHandler}),
        integrations: Resources.IntegrationsResource({apiHandler}),
        invoices:  Resources.InvoicesResource({apiHandler}),
        kycDocuments:  Resources.KycDocumentsResource({apiHandler}),
        layouts: Resources.LayoutsResource({apiHandler}),
        lists: Resources.ListsResource({apiHandler}),
        memberships: Resources.MembershipsResource({apiHandler}),
        organizations: Resources.OrganizationsResource({apiHandler}),
        paymentInstruments: Resources.PaymentInstrumentsResource({apiHandler}),
        paymentMethods: Resources.PaymentMethodsResource({apiHandler}),
        paymentCards: Resources.PaymentCardsResource({apiHandler}),
        paymentCardsBankNames: Resources.PaymentCardsBankNamesResource({apiHandler}),
        paymentTokens: Resources.PaymentTokensResource({apiHandler}),
        payouts: Resources.PayoutsResource({apiHandler}),
        paypalAccounts: Resources.PayPalAccountsResource({apiHandler}),
        plans: Resources.PlansResource({apiHandler}),
        previews: Resources.PreviewsResource({apiHandler}),
        products: Resources.ProductsResource({apiHandler}),
        profile: Resources.ProfileResource({apiHandler}),
        search: Resources.SearchResource({apiHandler}),
        segments: Resources.SegmentsResource({apiHandler}),
        sendThroughAttribution: Resources.SendThroughAttributionResource({apiHandler}),
        sessions: Resources.SessionsResource({apiHandler}),
        shippingZones: Resources.ShippingZonesResource({apiHandler}),
        status: Resources.StatusResource({apiHandler}),
        subscriptions: Resources.SubscriptionsResource({apiHandler}),
        subscriptionCancellations: Resources.SubscriptionCancellationsResource({apiHandler}),
        subscriptionReactivations: Resources.SubscriptionReactivationsResource({apiHandler}),
        tags: Resources.TagsResource({apiHandler}),
        tracking: Resources.TrackingResource({apiHandler}),
        transactions: Resources.TransactionsResource({apiHandler}),
        threeDSecure: Resources.ThreeDSecureResource({apiHandler}),
        users: Resources.UsersResource({apiHandler}),
        webhooks: Resources.WebhooksResource({apiHandler}),
        websites: Resources.WebsitesResource({apiHandler}),
        */

        //expose apiHandler methods to the API instance
        /*
        addRequestInterceptor: apiHandler.addRequestInterceptor,
        removeRequestInterceptor: apiHandler.removeRequestInterceptor,
        addResponseInterceptor: apiHandler.addResponseInterceptor,
        removeResponseInterceptor: apiHandler.removeResponseInterceptor,
        setTimeout: apiHandler.setTimeout,
        setProxyAgent: apiHandler.setProxyAgent,
        setSessionToken: apiHandler.setSessionToken,
        setEndpoints: apiHandler.setEndpoints,
        getCancellationToken: apiHandler.getCancellationToken,
        generateSignature: apiHandler.generateSignature
        */
    //};
}

// export class ExperimentalApiInstance {
//     constructor({apiHandler}) {
//         // expose apiHandler methods to the API instance
//         this.addRequestInterceptor = apiHandler.addRequestInterceptor
//     }
// }

/**
 * @typedef {Object} ExperimentalApiInstance
 * @property {Function} addRequestInterceptor
 */

/**
* Create an experimental API instance using the provided API handler.
* @returns {ExperimentalApiInstance} experimentalApiInstance
*/
export function createExperimentalApiInstance({apiHandler}) {
    return { 
        addRequestInterceptor: apiHandler.addRequestInterceptor
    }
    // return new ExperimentalApiInstance({apiHandler});
//     return {
//         // customers: ExperimentalResources.CustomersResource({apiHandler}),
//         // dataExports: ExperimentalResources.DataExportsResource({apiHandler}),
//         // histograms: ExperimentalResources.HistogramsResource({apiHandler}),
//         // organizations: ExperimentalResources.OrganizationsResource({apiHandler}),
//         // reports: ExperimentalResources.ReportsResource({apiHandler}),
//         // subscriptions: ExperimentalResources.SubscriptionsResource({apiHandler}),
//         // timelines: ExperimentalResources.TimelinesResource({apiHandler}),
//         // transactions: ExperimentalResources.TransactionsResource({apiHandler}),
//         // location: ExperimentalResources.LocationResource({apiHandler}),

//         // //expose apiHandler methods to the API instance
//         // addRequestInterceptor: apiHandler.addRequestInterceptor,
//         // removeRequestInterceptor: apiHandler.removeRequestInterceptor,
//         // addResponseInterceptor: apiHandler.addResponseInterceptor,
//         // removeResponseInterceptor: apiHandler.removeResponseInterceptor,
//         // setTimeout: apiHandler.setTimeout,
//         // setProxyAgent: apiHandler.setProxyAgent,
//         // setSessionToken: apiHandler.setSessionToken,
//         // setEndpoints: apiHandler.setEndpoints,
//         // getCancellationToken: apiHandler.getCancellationToken
//     };
}

export function createStorefrontApiInstance({apiHandler}) {
    return {
        // account: StorefrontResources.AccountResource({apiHandler}),
        // authorization: StorefrontResources.AuthorizationResource({apiHandler}),
        // checkoutForm: StorefrontResources.CheckoutFormResource({apiHandler}),
        // invoices: StorefrontResources.InvoicesResource({apiHandler}),
        // kycDocuments: StorefrontResources.KycDocumentsResource({apiHandler}),
        // paymentInstruments: StorefrontResources.PaymentInstrumentsResource({apiHandler}),
        // plans: StorefrontResources.PlansResource({apiHandler}),
        // products: StorefrontResources.ProductResource({apiHandler}),
        // purchase: StorefrontResources.PurchaseResource({apiHandler}),
        // transactions: StorefrontResources.TransactionsResource({apiHandler}),
        // website: StorefrontResources.WebsiteResource({apiHandler}),

        // //expose apiHandler methods to the API instance
        // addRequestInterceptor: apiHandler.addRequestInterceptor,
        // removeRequestInterceptor: apiHandler.removeRequestInterceptor,
        // addResponseInterceptor: apiHandler.addResponseInterceptor,
        // removeResponseInterceptor: apiHandler.removeResponseInterceptor,
        // setTimeout: apiHandler.setTimeout,
        // setProxyAgent: apiHandler.setProxyAgent,
        // setSessionToken: apiHandler.setSessionToken,
        // setPublishableKey: apiHandler.setPublishableKey,
        // setEndpoints: apiHandler.setEndpoints,
        // getCancellationToken: apiHandler.getCancellationToken
    }
}
