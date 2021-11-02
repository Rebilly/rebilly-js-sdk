/**
 * This file was auto-generated by rebilly-sdk-generator.
 * Do not make direct changes to this file.
 */

import AccountResource from './account-resource';
import AmlResource from './aml-resource';
import ApiKeysResource from './api-keys-resource';
import BalanceTransactionsResource from './balance-transactions-resource';
import BillingPortalsResource from './billing-portals-resource';
import BlocklistsResource from './blocklists-resource';
import BroadcastMessagesResource from './broadcast-messages-resource';
import CheckoutFormsResource from './checkout-forms-resource';
import CouponsResource from './coupons-resource';
import CredentialHashesResource from './credential-hashes-resource';
import CustomFieldsResource from './custom-fields-resource';
import CustomerAuthenticationResource from './customer-authentication-resource';
import CustomersResource from './customers-resource';
import DisputesResource from './disputes-resource';
import EmailDeliverySettingsResource from './email-delivery-settings-resource';
import EmailMessagesResource from './email-messages-resource';
import EmailNotificationsResource from './email-notifications-resource';
import EventsResource from './events-resource';
import FeesResource from './fees-resource';
import FilesResource from './files-resource';
import GatewayAccountsResource from './gateway-accounts-resource';
import IntegrationsResource from './integrations-resource';
import InvoicesResource from './invoices-resource';
import KycDocumentsResource from './kyc-documents-resource';
import KycRequestsResource from './kyc-requests-resource';
import ListsResource from './lists-resource';
import MembershipsResource from './memberships-resource';
import OrganizationsResource from './organizations-resource';
import PaymentCardsBankNamesResource from './payment-cards-bank-names-resource';
import PaymentInstrumentsResource from './payment-instruments-resource';
import PaymentMethodsResource from './payment-methods-resource';
import PaymentTokensResource from './payment-tokens-resource';
import PayoutsResource from './payouts-resource';
import PlansResource from './plans-resource';
import PreviewsResource from './previews-resource';
import ProductsResource from './products-resource';
import ProfileResource from './profile-resource';
import PurchaseResource from './purchase-resource';
import RolesResource from './roles-resource';
import SearchResource from './search-resource';
import SegmentsResource from './segments-resource';
import SendThroughAttributionResource from './send-through-attribution-resource';
import ShippingZonesResource from './shipping-zones-resource';
import StatusResource from './status-resource';
import SubscriptionCancellationsResource from './subscription-cancellations-resource';
import SubscriptionReactivationsResource from './subscription-reactivations-resource';
import SubscriptionsResource from './subscriptions-resource';
import TagsResource from './tags-resource';
import TrackingResource from './tracking-resource';
import TransactionsResource from './transactions-resource';
import UsersResource from './users-resource';
import WebhooksResource from './webhooks-resource';
import WebsitesResource from './websites-resource';

export class ApiInstance {
  constructor({apiHandler}) {
    this.account = AccountResource({apiHandler});
    this.aml = AmlResource({apiHandler});
    this.apiKeys = ApiKeysResource({apiHandler});
    this.balanceTransactions = BalanceTransactionsResource({apiHandler});
    this.billingPortals = BillingPortalsResource({apiHandler});
    this.blocklists = BlocklistsResource({apiHandler});
    this.broadcastMessages = BroadcastMessagesResource({apiHandler});
    this.checkoutForms = CheckoutFormsResource({apiHandler});
    this.coupons = CouponsResource({apiHandler});
    this.credentialHashes = CredentialHashesResource({apiHandler});
    this.customFields = CustomFieldsResource({apiHandler});
    this.customerAuthentication = CustomerAuthenticationResource({apiHandler});
    this.customers = CustomersResource({apiHandler});
    this.disputes = DisputesResource({apiHandler});
    this.emailDeliverySettings = EmailDeliverySettingsResource({apiHandler});
    this.emailMessages = EmailMessagesResource({apiHandler});
    this.emailNotifications = EmailNotificationsResource({apiHandler});
    this.events = EventsResource({apiHandler});
    this.fees = FeesResource({apiHandler});
    this.files = FilesResource({apiHandler});
    this.gatewayAccounts = GatewayAccountsResource({apiHandler});
    this.integrations = IntegrationsResource({apiHandler});
    this.invoices = InvoicesResource({apiHandler});
    this.kycDocuments = KycDocumentsResource({apiHandler});
    this.kycRequests = KycRequestsResource({apiHandler});
    this.lists = ListsResource({apiHandler});
    this.memberships = MembershipsResource({apiHandler});
    this.organizations = OrganizationsResource({apiHandler});
    this.paymentCardsBankNames = PaymentCardsBankNamesResource({apiHandler});
    this.paymentInstruments = PaymentInstrumentsResource({apiHandler});
    this.paymentMethods = PaymentMethodsResource({apiHandler});
    this.paymentTokens = PaymentTokensResource({apiHandler});
    this.payouts = PayoutsResource({apiHandler});
    this.plans = PlansResource({apiHandler});
    this.previews = PreviewsResource({apiHandler});
    this.products = ProductsResource({apiHandler});
    this.profile = ProfileResource({apiHandler});
    this.purchase = PurchaseResource({apiHandler});
    this.roles = RolesResource({apiHandler});
    this.search = SearchResource({apiHandler});
    this.segments = SegmentsResource({apiHandler});
    this.sendThroughAttribution = SendThroughAttributionResource({apiHandler});
    this.shippingZones = ShippingZonesResource({apiHandler});
    this.status = StatusResource({apiHandler});
    this.subscriptionCancellations = SubscriptionCancellationsResource({
      apiHandler,
    });
    this.subscriptionReactivations = SubscriptionReactivationsResource({
      apiHandler,
    });
    this.subscriptions = SubscriptionsResource({apiHandler});
    this.tags = TagsResource({apiHandler});
    this.tracking = TrackingResource({apiHandler});
    this.transactions = TransactionsResource({apiHandler});
    this.users = UsersResource({apiHandler});
    this.webhooks = WebhooksResource({apiHandler});
    this.websites = WebsitesResource({apiHandler});

    //expose apiHandler methods to the API instance
    this.addRequestInterceptor = apiHandler.addRequestInterceptor;
    this.removeRequestInterceptor = apiHandler.removeRequestInterceptor;
    this.addResponseInterceptor = apiHandler.addResponseInterceptor;
    this.removeResponseInterceptor = apiHandler.removeResponseInterceptor;
    this.setTimeout = apiHandler.setTimeout;
    this.setProxyAgent = apiHandler.setProxyAgent;
    this.setSessionToken = apiHandler.setSessionToken;
    this.setPublishableKey = apiHandler.setPublishableKey;
    this.setEndpoints = apiHandler.setEndpoints;
    this.getCancellationToken = apiHandler.getCancellationToken;
    this.generateSignature = apiHandler.generateSignature;
  }
}
