import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import createApiTestHandler from '../create-api-test-handler';
import MockRebillyAPI from '../mock-rebilly-js-sdk';
import {version} from '../../../package.json';
import {interceptorTypes, isInterceptorType} from '../../../src/create-api-handler';

const expect = chai.expect;
chai.use(sinonChai);

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

    it('should set the Authorization token and delete the API key', () => {
        const token = '12345678';
        apiHandler.setSessionToken(token);
        expect(apiHandler.getInstance().defaults.headers.common['REB-APIKEY']).to.be.undefined;
        expect(apiHandler.getInstance().defaults.headers.common['Authorization']).to.equal(`Bearer ${token}`);
        expect(options.apiKey).to.be.null;
        expect(options.jwt).to.equal(token);
    });

    it('should have Organization-Id header if set it up', () => {
        const options = {
            version: 1,
            apiEndpoints: {live: '', sandbox: ''},
            apiKey: '000000000',
            apiVersion: 'v1',
            isSandbox: false,
            requestTimeout: 1,
            jwt: null,
            organizationId: 'org-id-123'
        };
        const handler = createApiTestHandler({options});
        expect(handler.getInstance().defaults.headers['Organization-Id']).to.equal('org-id-123');
    });

    it('should not have Organization-Id header if it not set', () => {
        expect(apiHandler.getInstance().defaults.headers['Organization-Id']).to.be.an('undefined');
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

    it('should return a promise when I make a PATCH request', () => {
        const plaidCredential = api.plaidCredentials.update({id: '1234', data: {}});
        expect(plaidCredential.then).to.be.a('function');
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

    it('should define an API consumer header based on the package version', () => {
        const headers = apiHandler.getInstance().defaults.headers;
        expect(headers['REB-API-CONSUMER']).to.be.equal(`RebillySDK/JS-SDK ${version}`);
    });

    describe('with interceptors', () => {
        describe('request interceptor', () => {
            it('should return created interceptor ID when intercenptor is added', () => {
                const interceptor = apiHandler.addRequestInterceptor({thenDelegate: () => {}});
                expect(interceptor).to.be.a('number');
            });
            it('should call axios interceptorManager eject function on interceptor removal', () => {
                const interceptor = apiHandler.addRequestInterceptor({thenDelegate: () => {}});
                sinon.spy(apiHandler.getInstance().interceptors.request, 'eject');
                apiHandler.removeRequestInterceptor(interceptor);
                expect(apiHandler.getInstance().interceptors.request.eject).to.have.been.calledWith(interceptor);
            });
        });
        describe('response interceptor', () => {
            it('should return created interceptor ID when intercenptor is added', () => {
                const interceptor = apiHandler.addResponseInterceptor({thenDelegate: () => {}});
                expect(interceptor).to.be.a('number');
            });
            it('should call axios interceptorManager eject function on interceptor removal', () => {
                const interceptor = apiHandler.addResponseInterceptor({thenDelegate: () => {}});
                sinon.spy(apiHandler.getInstance().interceptors.response, 'eject');
                apiHandler.removeResponseInterceptor(interceptor);
                expect(apiHandler.getInstance().interceptors.response.eject).to.have.been.calledWith(interceptor);
            });
        });
    });
});

describe('the #isInterceptorType function', () => {
    describe('when type is not one of interceptorTypes', () => {
        it('should throw an error', () => {
            try {
                isInterceptorType('madeUpType');
            } catch (error) {
                expect(error.message).to.be.equal('There is no such interceptor type as "madeUpType"');
            }
        });
    });
    describe('when type is one of interceptorTypes', () => {
        it('should return true', () => {
            const result = isInterceptorType(interceptorTypes.request);
            expect(result).to.be.true;
        });
    });
});
