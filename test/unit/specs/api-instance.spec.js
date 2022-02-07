import createApiTestHandler from '../create-api-test-handler';
import createApiInstance, {createExperimentalApiInstance, createStorefrontApiInstance} from '../../../src/create-api-instance';

const options = {
    version: 1,
    apiEndpoints: {live: 'new-live-url', sandbox: 'new-sandbox-url'},
    apiKey: '0123456789',
    isSandbox: false,
    requestTimeout: 1,
    jwt: null
};
const apiHandler = createApiTestHandler({options});
const apiInstance = createApiInstance({apiHandler});
const apiInstanceExperimental = createExperimentalApiInstance({apiHandler});
const apiInstanceStorefront = createStorefrontApiInstance({apiHandler});

describe('when I create an API instance', () => {
    it('should expose resource methods', () => {
        expect(typeof apiInstance.customers).toBe('object');
        expect(typeof apiInstance.account).toBe('object');
        expect(typeof apiInstance.apiKeys).toBe('object');
        expect(typeof apiInstance.blocklists).toBe('object');
        expect(typeof apiInstance.checkoutForms).toBe('object');
        expect(typeof apiInstance.coupons).toBe('object');
        expect(typeof apiInstance.customers).toBe('object');
        expect(typeof apiInstance.customerAuthentication).toBe('object');
        expect(typeof apiInstance.customFields).toBe('object');
        expect(typeof apiInstance.credentialHashes).toBe('object');
        expect(typeof apiInstance.disputes).toBe('object');
        expect(typeof apiInstance.files).toBe('object');
        expect(typeof apiInstance.emailDeliverySettings).toBe('object');
        expect(typeof apiInstance.emailMessages).toBe('object');
        expect(typeof apiInstance.emailNotifications).toBe('object');
        expect(typeof apiInstance.events).toBe('object');
        expect(typeof apiInstance.gatewayAccounts).toBe('object');
        expect(typeof apiInstance.invoices).toBe('object');
        expect(typeof apiInstance.lists).toBe('object');
        expect(typeof apiInstance.organizations).toBe('object');
        expect(typeof apiInstance.paymentInstruments).toBe('object');
        expect(typeof apiInstance.paymentTokens).toBe('object');
        expect(typeof apiInstance.plans).toBe('object');
        expect(typeof apiInstance.previews).toBe('object');
        expect(typeof apiInstance.products).toBe('object');
        expect(typeof apiInstance.profile).toBe('object');
        expect(typeof apiInstance.purchase).toBe('object');
        expect(typeof apiInstance.shippingZones).toBe('object');
        expect(typeof apiInstance.status).toBe('object');
        expect(typeof apiInstance.subscriptions).toBe('object');
        expect(typeof apiInstance.subscriptionCancellations).toBe('object');
        expect(typeof apiInstance.subscriptionReactivations).toBe('object');
        expect(typeof apiInstance.tags).toBe('object');
        expect(typeof apiInstance.tracking).toBe('object');
        expect(typeof apiInstance.transactions).toBe('object');
        expect(typeof apiInstance.users).toBe('object');
        expect(typeof apiInstance.webhooks).toBe('object');
        expect(typeof apiInstance.websites).toBe('object');
        expect(typeof apiInstance.segments).toBe('object');
    });
    it('should expose helper methods', () => {
        expect(typeof apiInstance.setSessionToken).toBe('function');
        expect(typeof apiInstance.addRequestInterceptor).toBe('function');
        expect(typeof apiInstance.removeRequestInterceptor).toBe('function');
        expect(typeof apiInstance.addResponseInterceptor).toBe('function');
        expect(typeof apiInstance.removeResponseInterceptor).toBe('function');
        expect(typeof apiInstance.setTimeout).toBe('function');
        expect(typeof apiInstance.setProxyAgent).toBe('function');
        expect(typeof apiInstance.setEndpoints).toBe('function');
    });

    it('should expose resource experimental methods', () => {
        expect(typeof apiInstanceExperimental.histograms).toBe('object');
        expect(typeof apiInstanceExperimental.reports).toBe('object');
        expect(typeof apiInstanceExperimental.customers).toBe('object');

    });

    it('should expose resource experimental helper method', () => {
        expect(typeof apiInstanceExperimental.setSessionToken).toBe('function');
        expect(typeof apiInstanceExperimental.addRequestInterceptor).toBe('function');
        expect(typeof apiInstanceExperimental.removeRequestInterceptor).toBe('function');
        expect(typeof apiInstanceExperimental.addResponseInterceptor).toBe('function');
        expect(typeof apiInstanceExperimental.removeResponseInterceptor).toBe('function');
        expect(typeof apiInstanceExperimental.setTimeout).toBe('function');
        expect(typeof apiInstanceExperimental.setProxyAgent).toBe('function');
        expect(typeof apiInstanceExperimental.setEndpoints).toBe('function');
    });

    it('should expose storefront resource methods', () => {
        expect(typeof apiInstanceStorefront.account).toBe('object');
        expect(typeof apiInstanceStorefront.authorization).toBe('object');
        expect(typeof apiInstanceStorefront.checkoutForm).toBe('object');
        expect(typeof apiInstanceStorefront.invoices).toBe('object');
        expect(typeof apiInstanceStorefront.kycDocuments).toBe('object');
        expect(typeof apiInstanceStorefront.paymentInstruments).toBe('object');
        expect(typeof apiInstanceStorefront.plans).toBe('object');
        expect(typeof apiInstanceStorefront.products).toBe('object');
        expect(typeof apiInstanceStorefront.purchase).toBe('object');
        expect(typeof apiInstanceStorefront.transactions).toBe('object');
        expect(typeof apiInstanceStorefront.websites).toBe('object');

    });
});
