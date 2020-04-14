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
        aml: Resources.AmlResource({apiHandler}),
        apiKeys: Resources.ApiKeysResource({apiHandler}),
        bankAccounts: Resources.BankAccountsResource({apiHandler}),
        blacklists: Resources.BlacklistsResource({apiHandler}),
        broadcastMessages: Resources.BroadcastMessagesResource({apiHandler}),
        checkoutPages: Resources.CheckoutPagesResource({apiHandler}),
        coupons: Resources.CouponsResource({apiHandler}),
        customers: Resources.CustomersResource({apiHandler}),
        customerAuthentication: Resources.CustomerAuthenticationResource({apiHandler}),
        customEvents: Resources.CustomEventsResource({apiHandler}),
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
        integrations: Resources.IntegrationsResource({apiHandler}),
        invoices:  Resources.InvoicesResource({apiHandler}),
        kycDocuments:  Resources.KycDocumentsResource({apiHandler}),
        layouts: Resources.LayoutsResource({apiHandler}),
        lists: Resources.ListsResource({apiHandler}),
        memberships: Resources.MembershipsResource({apiHandler}),
        notes: Resources.NotesResource({apiHandler}),
        organizations: Resources.OrganizationsResource({apiHandler}),
        paymentCards: Resources.PaymentCardsResource({apiHandler}),
        paymentCardsBankNames: Resources.PaymentCardsBankNamesResource({apiHandler}),
        paymentTokens: Resources.PaymentTokensResource({apiHandler}),
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
        organizations: ExperimentalResources.OrganizationsResource({apiHandler}),
        reports: ExperimentalResources.ReportsResource({apiHandler}),
        subscriptions: ExperimentalResources.SubscriptionsResource({apiHandler}),
        timelines: ExperimentalResources.TimelinesResource({apiHandler}),
        transactions: ExperimentalResources.TransactionsResource({apiHandler}),
        location: ExperimentalResources.LocationResource({apiHandler}),

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
