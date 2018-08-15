import Resources from './resources';
import ExperimentalResources from './resources/experimental';

/**
 * Create an API instance using the provided API handler.
 * @param apiHandler {Object}
 * @returns {Object}
 */
export default function createApiInstance({apiHandler}) {
    return {
        account: Resources.AccountResource({apiHandler}),
        apiKeys: Resources.ApiKeysResource({apiHandler}),
        bankAccounts: Resources.BankAccountsResource({apiHandler}),
        blacklists: Resources.BlacklistsResource({apiHandler}),
        checkoutPages: Resources.CheckoutPagesResource({apiHandler}),
        contacts: Resources.ContactsResource({apiHandler}),
        coupons: Resources.CouponsResource({apiHandler}),
        customers: Resources.CustomersResource({apiHandler}),
        customerAuthentication: Resources.CustomerAuthenticationResource({apiHandler}),
        customEvents: Resources.CustomEventsResource({apiHandler}),
        customFields: Resources.CustomFieldsResource({apiHandler}),
        credentialHashes: Resources.CredentialHashesResource({apiHandler}),
        disputes: Resources.DisputesResource({apiHandler}),
        events: Resources.EventsResource({apiHandler}),
        emailNotifications: Resources.EmailNotificationsResource({apiHandler}),
        files: Resources.FilesResource({apiHandler}),
        gatewayAccounts: Resources.GatewayAccountsResource({apiHandler}),
        invoices:  Resources.InvoicesResource({apiHandler}),
        kycDocuments:  Resources.KycDocumentsResource({apiHandler}),
        layouts: Resources.LayoutsResource({apiHandler}),
        lists: Resources.ListsResource({apiHandler}),
        notes: Resources.NotesResource({apiHandler}),
        organizations: Resources.OrganizationsResource({apiHandler}),
        paymentCards: Resources.PaymentCardsResource({apiHandler}),
        paymentTokens: Resources.PaymentTokensResource({apiHandler}),
        paypalAccounts: Resources.PayPalAccountsResource({apiHandler}),
        plans: Resources.PlansResource({apiHandler}),
        previews: Resources.PreviewsResource({apiHandler}),
        products: Resources.ProductsResource({apiHandler}),
        profile: Resources.ProfileResource({apiHandler}),
        sessions: Resources.SessionsResource({apiHandler}),
        shippingZones: Resources.ShippingZonesResource({apiHandler}),
        status: Resources.StatusResource({apiHandler}),
        subscriptions: Resources.SubscriptionsResource({apiHandler}),
        subscriptionCancellations: Resources.SubscriptionCancellationsResource({apiHandler}),
        subscriptionReactivations: Resources.SubscriptionReactivationsResource({apiHandler}),
        tracking: Resources.TrackingResource({apiHandler}),
        transactions: Resources.TransactionsResource({apiHandler}),
        threeDSecure: Resources.ThreeDSecureResource({apiHandler}),
        users: Resources.UsersResource({apiHandler}),
        webhooks: Resources.WebhooksResource({apiHandler}),
        websites: Resources.WebsitesResource({apiHandler}),

        //expose apiHandler methods to the API instance
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
    };
}

export function createExperimentalApiInstance({apiHandler}) {
    return {
        customers: ExperimentalResources.CustomersResource({apiHandler}),
        dataExports: ExperimentalResources.DataExportsResource({apiHandler}),
        histograms: ExperimentalResources.HistogramsResource({apiHandler}),
        reports: ExperimentalResources.ReportsResource({apiHandler}),
        subscriptions: ExperimentalResources.SubscriptionsResource({apiHandler}),
        timelines: ExperimentalResources.TimelinesResource({apiHandler}),
        transactions: ExperimentalResources.TransactionsResource({apiHandler}),

        //expose apiHandler methods to the API instance
        addRequestInterceptor: apiHandler.addRequestInterceptor,
        removeRequestInterceptor: apiHandler.removeRequestInterceptor,
        addResponseInterceptor: apiHandler.addResponseInterceptor,
        removeResponseInterceptor: apiHandler.removeResponseInterceptor,
        setTimeout: apiHandler.setTimeout,
        setProxyAgent: apiHandler.setProxyAgent,
        setSessionToken: apiHandler.setSessionToken,
        setEndpoints: apiHandler.setEndpoints,
        getCancellationToken: apiHandler.getCancellationToken
    };
}
