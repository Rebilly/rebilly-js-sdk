import AccountResource from './account-resource';
import AuthorizationResource from './authorization-resource';
import BillingPortalResource from './billing-portals-resource';
import CheckoutFormResource from './checkout-forms-resource';
import InvoicesResource from './invoices-resource';
import KycDocumentsResource from './kyc-documents-resource';
import KycRequestsResource from './kyc-requests-resource';
import OrdersResource from './orders-resource';
import PaymentInstrumentsResource from './payment-instruments-resource';
import PlansResource from './plans-resource';
import ProductResource from './products-resource';
import PurchaseResource from './purchase-resource';
import TransactionsResource from './transactions-resource';
import WebsitesResource from './websites-resource';

const StorefrontResources = {
  AccountResource,
  AuthorizationResource,
  BillingPortalResource,
  CheckoutFormResource,
  InvoicesResource,
  KycDocumentsResource,
  KycRequestsResource,
  OrdersResource,
  PaymentInstrumentsResource,
  PlansResource,
  ProductResource,
  PurchaseResource,
  TransactionsResource,
  WebsitesResource,
};

export class StorefrontApiInstance {
  constructor({ apiHandler }) {
    this.account = StorefrontResources.AccountResource({ apiHandler });
    this.authorization = StorefrontResources.AuthorizationResource({
      apiHandler,
    });
    this.billingPortal = StorefrontResources.BillingPortalResource({
      apiHandler,
    });
    this.checkoutForm = StorefrontResources.CheckoutFormResource({
      apiHandler,
    });
    this.invoices = StorefrontResources.InvoicesResource({ apiHandler });
    this.kycDocuments = StorefrontResources.KycDocumentsResource({
      apiHandler,
    });
    this.kycRequests = StorefrontResources.KycRequestsResource({ apiHandler });
    this.orders = StorefrontResources.OrdersResource({ apiHandler });
    this.paymentInstruments = StorefrontResources.PaymentInstrumentsResource({
      apiHandler,
    });
    this.plans = StorefrontResources.PlansResource({ apiHandler });
    this.products = StorefrontResources.ProductResource({ apiHandler });
    this.purchase = StorefrontResources.PurchaseResource({ apiHandler });
    this.transactions = StorefrontResources.TransactionsResource({
      apiHandler,
    });
    this.websites = StorefrontResources.WebsitesResource({ apiHandler });

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
  }
}

/** TODO: Update the README.md with the follow once API is ready for public consumption.
 ## Rebilly Storefront API
 The Rebilly Storefront API is available as a tertiary API within the library. Unlike the main API or the Experimental API, this API allows customers to query information from Rebilly.
 Mostly used for customer self-service applications.

 ```js
 import RebillyAPI, {RebillyStorefrontAPI} from 'rebilly-js-sdk';

 const storefrontApi = RebillyStorefrontAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
 ```
 **/
