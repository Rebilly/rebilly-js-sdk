import chai from 'chai';
import createApiTestHandler from '../create-api-test-handler';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when I use an API handler', () => {
    const options = {
        version: 1,
        apiEndpoints: {live: '', sandbox: ''},
        apiKey: '000000000',
        apiVersion: 'v1',
        isSandbox: false,
        requestTimeout: 1,
        jwt: null
    };
    const apiHandler = createApiTestHandler({options});
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});

    it('should allow the timeout to be set to a different value', () => {
        const timeout = 1234;
        apiHandler.setTimeout(timeout);
        expect(apiHandler.getInstance().defaults.timeout).to.equal(timeout);
    });

    it('should allow the API consumer to be set to a different value', () => {
        const consumer = 'Rebilly Tests';
        apiHandler.setApiConsumer(consumer);
        expect(apiHandler.getInstance().defaults.headers.common['REB-API-CONSUMER']).to.equal(consumer);
    });

    it('should set the Authorization token and delete the API key', () => {
        const token = '12345678';
        apiHandler.setSessionToken(token);
        expect(apiHandler.getInstance().defaults.headers.common['REB-APIKEY']).to.be.undefined;
        expect(apiHandler.getInstance().defaults.headers.common['Authorization']).to.equal(`Bearer ${token}`);
        expect(options.apiKey).to.be.null;
        expect(options.jwt).to.equal(token);
    });

    it('should allow the proxy agent to be set', () => {
        const params = {host: 'testHost', port: 888, auth: {key: 'foo', value: 'bar'}};
        apiHandler.setProxyAgent(params);
        expect(apiHandler.getInstance().defaults.proxy).to.deep.equal(params);
    });

    it('should allow the endpoints to be set', () => {
        apiHandler.setEndpoints({live: 'live-endpoint.rebilly.com', sandbox: 'sandbox-endpoint.rebilly.com'});
        expect(apiHandler.getInstance().defaults.baseURL).to.equal('live-endpoint.rebilly.com/v1');
        options.apiVersion = 'v2';
        options.isSandbox = true;
        apiHandler.setEndpoints({live: 'live-endpoint.rebilly.com', sandbox: 'sandbox-endpoint.rebilly.com'});
        expect(apiHandler.getInstance().defaults.baseURL).to.equal('sandbox-endpoint.rebilly.com/v2');
    });

    it('should return a promise when I call the apiHandler\'s create function with an ID', async () => {
        const invoice = api.invoices.create({id: '1234', data: {}});
        expect(invoice.then).to.be.a('function');
    });

    it('should return a promise when I make a POST request', async () => {
        const invoice = api.invoices.issue({id: '1234', data: {}});
        expect(invoice.then).to.be.a('function');
    });

    it('should return a promise when I make a PUT request', () => {
        const invoice = api.invoices.update({id: '1234', data: {}});
        expect(invoice.then).to.be.a('function');
    });

    it('should return a promise when I make a PATCH request', () => {
        const gatewayAccount = api.gatewayAccounts.update({id: '1234', data: {}});
        expect(gatewayAccount.then).to.be.a('function');
    });

    it('should return a promise when I make a DELETE request', () => {
        const gatewayAccount = api.gatewayAccounts.delete({id: '1234', data: {}});
        expect(gatewayAccount.then).to.be.a('function');
    });

    it('should not share configuration values between different axios instances', () => {
        //see axios issue https://github.com/mzabriskie/axios/issues/385
        const handlerOne = createApiTestHandler({options});
        const handlerTwo = createApiTestHandler({options});
        handlerOne.setSessionToken('firstToken');
        handlerTwo.setSessionToken('secondToken');
        const firstToken = handlerOne.getInstance().defaults.headers.common['Authorization'];
        const secondToken = handlerTwo.getInstance().defaults.headers.common['Authorization'];
        expect(firstToken).to.not.be.equal(secondToken);
    });
});
