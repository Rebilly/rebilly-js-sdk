import chai from 'chai';
import createApiTestHandler from '../create-api-test-handler';
import createApiInstance, {createExperimentalApiInstance, createStorefrontApiInstance} from '../../../src/create-api-instance';

const expect = chai.expect;
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
        expect(apiInstance.customers).to.be.an('object');
        expect(apiInstance.account).to.be.an('object');
        expect(apiInstance.apiKeys).to.be.an('object');
        expect(apiInstance.bankAccounts).to.be.an('object');
        expect(apiInstance.blocklists).to.be.an('object');
        expect(apiInstance.checkoutForms).to.be.an('object');
        expect(apiInstance.coupons).to.be.an('object');
        expect(apiInstance.customers).to.be.an('object');
        expect(apiInstance.customerAuthentication).to.be.an('object');
        expect(apiInstance.customFields).to.be.an('object');
        expect(apiInstance.credentialHashes).to.be.an('object');
        expect(apiInstance.disputes).to.be.an('object');
        expect(apiInstance.files).to.be.an('object');
        expect(apiInstance.emailDeliverySettings).to.be.an('object');
        expect(apiInstance.emailMessages).to.be.an('object');
        expect(apiInstance.emailNotifications).to.be.an('object');
        expect(apiInstance.events).to.be.an('object');
        expect(apiInstance.gatewayAccounts).to.be.an('object');
        expect(apiInstance.plaidCredentials).to.be.an('object');
        expect(apiInstance.invoices).to.be.an('object');
        expect(apiInstance.lists).to.be.an('object');
        expect(apiInstance.organizations).to.be.an('object');
        expect(apiInstance.paymentInstruments).to.be.an('object');
        expect(apiInstance.paymentCards).to.be.an('object');
        expect(apiInstance.paymentTokens).to.be.an('object');
        expect(apiInstance.paypalAccounts).to.be.an('object');
        expect(apiInstance.plans).to.be.an('object');
        expect(apiInstance.previews).to.be.an('object');
        expect(apiInstance.products).to.be.an('object');
        expect(apiInstance.profile).to.be.an('object');
        expect(apiInstance.purchase).to.be.an('object');
        expect(apiInstance.shippingZones).to.be.an('object');
        expect(apiInstance.status).to.be.an('object');
        expect(apiInstance.subscriptions).to.be.an('object');
        expect(apiInstance.subscriptionCancellations).to.be.an('object');
        expect(apiInstance.subscriptionReactivations).to.be.an('object');
        expect(apiInstance.tags).to.be.an('object');
        expect(apiInstance.tracking).to.be.an('object');
        expect(apiInstance.transactions).to.be.an('object');
        expect(apiInstance.threeDSecure).to.be.an('object');
        expect(apiInstance.users).to.be.an('object');
        expect(apiInstance.webhooks).to.be.an('object');
        expect(apiInstance.websites).to.be.an('object');
        expect(apiInstance.segments).to.be.an('object');
    });
    it('should expose helper methods', () => {
        expect(apiInstance.setSessionToken).to.be.a('function');
        expect(apiInstance.addRequestInterceptor).to.be.a('function');
        expect(apiInstance.removeRequestInterceptor).to.be.a('function');
        expect(apiInstance.addResponseInterceptor).to.be.a('function');
        expect(apiInstance.removeResponseInterceptor).to.be.a('function');
        expect(apiInstance.setTimeout).to.be.a('function');
        expect(apiInstance.setProxyAgent).to.be.a('function');
        expect(apiInstance.setEndpoints).to.be.a('function');
    });

    it('should expose resource experimental methods', () => {
        expect(apiInstanceExperimental.histograms).to.be.an('object');
        expect(apiInstanceExperimental.reports).to.be.an('object');
        expect(apiInstanceExperimental.customers).to.be.an('object');

    });

    it('should expose resource experimental helper method', () => {
        expect(apiInstanceExperimental.setSessionToken).to.be.a('function');
        expect(apiInstanceExperimental.addRequestInterceptor).to.be.a('function');
        expect(apiInstanceExperimental.removeRequestInterceptor).to.be.a('function');
        expect(apiInstanceExperimental.addResponseInterceptor).to.be.a('function');
        expect(apiInstanceExperimental.removeResponseInterceptor).to.be.a('function');
        expect(apiInstanceExperimental.setTimeout).to.be.a('function');
        expect(apiInstanceExperimental.setProxyAgent).to.be.a('function');
        expect(apiInstanceExperimental.setEndpoints).to.be.a('function');
    });

    it('should expose storefront resource methods', () => {
        expect(apiInstanceStorefront.account).to.be.an('object');
        expect(apiInstanceStorefront.authorization).to.be.an('object');
        expect(apiInstanceStorefront.checkoutForm).to.be.an('object');
        expect(apiInstanceStorefront.invoices).to.be.an('object');
        expect(apiInstanceStorefront.kycDocuments).to.be.an('object');
        expect(apiInstanceStorefront.paymentInstruments).to.be.an('object');
        expect(apiInstanceStorefront.plans).to.be.an('object');
        expect(apiInstanceStorefront.products).to.be.an('object');
        expect(apiInstanceStorefront.purchase).to.be.an('object');
        expect(apiInstanceStorefront.transactions).to.be.an('object');
        expect(apiInstanceStorefront.websites).to.be.an('object');

    });
});
