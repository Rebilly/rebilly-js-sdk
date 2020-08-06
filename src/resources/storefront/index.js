import AccountResource from './account-resource';
import AuthorizationResource from './authorization-resource';
import CheckoutFormResource from './checkout-forms-resource';
import InvoicesResource from './invoices-resource';
import KycDocumentsResource from './kyc-documents-resource';
import PaymentInstrumentsResource from './payment-instruments-resource';
import PlansResource from './plans-resource';
import ProductResource from './products-resource';
import PurchaseResource from './purchase-resource';
import TransactionsResource from './transactions-resource';
import WebsiteResource from './website-resource';

const StorefrontResources = {
  AccountResource,
  AuthorizationResource,
  CheckoutFormResource,
  InvoicesResource,
  KycDocumentsResource,
  PaymentInstrumentsResource,
  PlansResource,
  ProductResource,
  PurchaseResource,
  TransactionsResource,
  WebsiteResource
};

export default StorefrontResources;

/** TODO: Update the README.md with the follow once API is ready for public consumption.
 ## Rebilly Storefront API
 The Rebilly Storefront API is available as a tertiary API within the library. Unlike the main API or the Experimental API, this API allows customers to query information from Rebilly.
 Mostly used for customer self-service applications.

 ```js
 import RebillyAPI, {RebillyStorefrontAPI} from 'rebilly-js-sdk';

 const storefrontApi = RebillyStorefrontAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
 ```
 **/
