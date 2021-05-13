import Resources from './resources';
import ExperimentalResources from './resources/experimental';
import StorefrontResources from './resources/storefront';

export class ApiInstance {
    constructor({apiHandler}) {
        this.account = Resources.AccountResource({apiHandler})
        this.aml = Resources.AmlResource({apiHandler})
        this.apiKeys = Resources.ApiKeysResource({apiHandler})
        this.bankAccounts = Resources.BankAccountsResource({apiHandler}),
        this.billingPortals = Resources.BillingPortalsResource({apiHandler}),
        this.blocklists = Resources.BlocklistsResource({apiHandler}),
        this.gatewayAccounts = Resources.GatewayAccountsResource({apiHandler})
        this.broadcastMessages = Resources.BroadcastMessagesResource({apiHandler}),
        this.checkoutForms = Resources.CheckoutFormsResource({apiHandler}),
        this.coupons = Resources.CouponsResource({apiHandler}),
        this.customers = Resources.CustomersResource({apiHandler}),
        this.customerAuthentication = Resources.CustomerAuthenticationResource({apiHandler}),
        this.customFields = Resources.CustomFieldsResource({apiHandler}),
        this.credentialHashes = Resources.CredentialHashesResource({apiHandler}),
        this.disputes = Resources.DisputesResource({apiHandler}),
        this.events = Resources.EventsResource({apiHandler}),
        this.emailDeliverySettings = Resources.EmailDeliverySettingsResource({apiHandler}),
        this.emailMessages = Resources.EmailMessagesResource({apiHandler}),
        this.emailNotifications = Resources.EmailNotificationsResource({apiHandler}),
        this.files = Resources.FilesResource({apiHandler}),
        this.plaidCredentials = Resources.PlaidCredentialsResource({apiHandler}),
        this.integrations = Resources.IntegrationsResource({apiHandler}),
        this.invoices =  Resources.InvoicesResource({apiHandler}),
        this.kycDocuments =  Resources.KycDocumentsResource({apiHandler}),
        this.lists = Resources.ListsResource({apiHandler}),
        this.memberships = Resources.MembershipsResource({apiHandler}),
        this.organizations = Resources.OrganizationsResource({apiHandler}),
        this.paymentInstruments = Resources.PaymentInstrumentsResource({apiHandler}),
        this.paymentMethods = Resources.PaymentMethodsResource({apiHandler}),
        this.paymentCards = Resources.PaymentCardsResource({apiHandler}),
        this.paymentCardsBankNames = Resources.PaymentCardsBankNamesResource({apiHandler}),
        this.paymentTokens = Resources.PaymentTokensResource({apiHandler}),
        this.payouts = Resources.PayoutsResource({apiHandler}),
        this.paypalAccounts = Resources.PayPalAccountsResource({apiHandler}),
        this.plans = Resources.PlansResource({apiHandler}),
        this.previews = Resources.PreviewsResource({apiHandler}),
        this.products = Resources.ProductsResource({apiHandler}),
        this.profile = Resources.ProfileResource({apiHandler}),
        this.purchase = Resources.PurchaseResource({apiHandler}),
        this.search = Resources.SearchResource({apiHandler}),
        this.segments = Resources.SegmentsResource({apiHandler}),
        this.sendThroughAttribution = Resources.SendThroughAttributionResource({apiHandler}),
        this.shippingZones = Resources.ShippingZonesResource({apiHandler}),
        this.status = Resources.StatusResource({apiHandler}),
        this.subscriptions = Resources.SubscriptionsResource({apiHandler}),
        this.subscriptionCancellations = Resources.SubscriptionCancellationsResource({apiHandler}),
        this.subscriptionReactivations = Resources.SubscriptionReactivationsResource({apiHandler}),
        this.tags = Resources.TagsResource({apiHandler}),
        this.tracking = Resources.TrackingResource({apiHandler}),
        this.transactions = Resources.TransactionsResource({apiHandler}),
        this.threeDSecure = Resources.ThreeDSecureResource({apiHandler}),
        this.users = Resources.UsersResource({apiHandler}),
        this.webhooks = Resources.WebhooksResource({apiHandler}),
        this.websites = Resources.WebsitesResource({apiHandler}),

        //expose apiHandler methods to the API instance
        this.addRequestInterceptor = apiHandler.addRequestInterceptor,
        this.removeRequestInterceptor = apiHandler.removeRequestInterceptor,
        this.addResponseInterceptor = apiHandler.addResponseInterceptor,
        this.removeResponseInterceptor = apiHandler.removeResponseInterceptor,
        this.setTimeout = apiHandler.setTimeout,
        this.setProxyAgent = apiHandler.setProxyAgent,
        this.setSessionToken = apiHandler.setSessionToken,
        this.setEndpoints = apiHandler.setEndpoints,
        this.getCancellationToken = apiHandler.getCancellationToken,
        this.generateSignature = apiHandler.generateSignature
    }
}

/**
* Create an API instance using the provided API handler.
* @returns {ApiInstance} apiInstance
*/
export default function createApiInstance({apiHandler}) {
    return new ApiInstance({apiHandler});
}

export class ExperimentalApiInstance {
    constructor({apiHandler}) {
        this.customers = ExperimentalResources.CustomersResource({apiHandler}),
        this.dataExports = ExperimentalResources.DataExportsResource({apiHandler}),
        this.histograms = ExperimentalResources.HistogramsResource({apiHandler}),
        this.reports = ExperimentalResources.ReportsResource({apiHandler}),
        this.subscriptions = ExperimentalResources.SubscriptionsResource({apiHandler}),
        this.timelines = ExperimentalResources.TimelinesResource({apiHandler}),
        this.location = ExperimentalResources.LocationResource({apiHandler}),
        // expose apiHandler methods to the API instance
        this.addRequestInterceptor = apiHandler.addRequestInterceptor,
        this.removeRequestInterceptor = apiHandler.removeRequestInterceptor,
        this.addResponseInterceptor = apiHandler.addResponseInterceptor,
        this.removeResponseInterceptor = apiHandler.removeResponseInterceptor,
        this.setTimeout = apiHandler.setTimeout,
        this.setProxyAgent = apiHandler.setProxyAgent,
        this.setSessionToken = apiHandler.setSessionToken,
        this.setEndpoints = apiHandler.setEndpoints,
        this.getCancellationToken = apiHandler.getCancellationToken
    }
}

/**
* Create an experimental API instance using the provided API handler.
* @returns {ExperimentalApiInstance} experimentalApiInstance
*/
export function createExperimentalApiInstance({apiHandler}) {
    return new ExperimentalApiInstance({apiHandler});
}

export class StorefrontApiInstance {
    constructor({apiHandler}) {
        this.account = StorefrontResources.AccountResource({apiHandler}),
        this.authorization = StorefrontResources.AuthorizationResource({apiHandler}),
        this.checkoutForm = StorefrontResources.CheckoutFormResource({apiHandler}),
        this.invoices = StorefrontResources.InvoicesResource({apiHandler}),
        this.kycDocuments = StorefrontResources.KycDocumentsResource({apiHandler}),
        this.paymentInstruments = StorefrontResources.PaymentInstrumentsResource({apiHandler}),
        this.plans = StorefrontResources.PlansResource({apiHandler}),
        this.products = StorefrontResources.ProductResource({apiHandler}),
        this.purchase = StorefrontResources.PurchaseResource({apiHandler}),
        this.transactions = StorefrontResources.TransactionsResource({apiHandler}),
        this.websites = StorefrontResources.WebsitesResource({apiHandler}),
        
        //expose apiHandler methods to the API instance
        this.addRequestInterceptor = apiHandler.addRequestInterceptor,
        this.removeRequestInterceptor = apiHandler.removeRequestInterceptor,
        this.addResponseInterceptor = apiHandler.addResponseInterceptor,
        this.removeResponseInterceptor = apiHandler.removeResponseInterceptor,
        this.setTimeout = apiHandler.setTimeout,
        this.setProxyAgent = apiHandler.setProxyAgent,
        this.setSessionToken = apiHandler.setSessionToken,
        this.setPublishableKey = apiHandler.setPublishableKey,
        this.setEndpoints = apiHandler.setEndpoints,
        this.getCancellationToken = apiHandler.getCancellationToken
    }
}

/**
* Create an Storefront API instance using the provided API handler.
* @returns {StorefrontApiInstance} storefrontApiInstance
*/
export function createStorefrontApiInstance({apiHandler}) {
    return new StorefrontApiInstance({apiHandler})
}
