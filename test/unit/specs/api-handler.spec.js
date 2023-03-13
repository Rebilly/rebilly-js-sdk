import createApiTestHandler from '../create-api-test-handler';
import MockRebillyAPI from '../mock-rebilly-js-sdk';
import {version} from '../../../package.json';
import {interceptorTypes, isInterceptorType} from '../../../src/create-api-handler';

describe('when I use an API handler', () => {
    const options = {
        version: 1,
        apiEndpoints: {live: '', sandbox: ''},
        apiKey: '000000000',
        isSandbox: false,
        requestTimeout: 1,
        jwt: null
    };
    const apiHandler = createApiTestHandler({options});
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});

    it('should allow the timeout to be set to a different value', () => {
        const timeout = 1234;
        apiHandler.setTimeout(timeout);
        expect(apiHandler.getInstance().defaults.timeout).toBe(timeout);
    });

    it('should set the Authorization token and delete the API key', () => {
        const token = '12345678';
        apiHandler.setSessionToken(token);
        expect(apiHandler.getInstance().defaults.headers.common['REB-APIKEY']).toBeUndefined();
        expect(apiHandler.getInstance().defaults.headers.common['Authorization']).toBe(`Bearer ${token}`);
        expect(options.apiKey).toBeNull();
        expect(options.jwt).toBe(token);
    });

    it('should have organization prefix if set it up', () => {
        const options = {
            version: 1,
            apiEndpoints: {live: '', sandbox: ''},
            apiKey: '000000000',
            isSandbox: false,
            requestTimeout: 1,
            jwt: null,
            organizationId: 'org-id-123'
        };
        const handler = createApiTestHandler({options});
        expect(handler.getInstance().defaults.baseURL).toContain('/organizations/org-id-123');
    });

    it('should not have organization prefix header if it not set', () => {
        expect(apiHandler.getInstance().defaults.baseURL).not.toContain('/organizations/');
    });

    it('should allow the proxy agent to be set', () => {
        const params = {host: 'testHost', port: 888, auth: {key: 'foo', value: 'bar'}};
        apiHandler.setProxyAgent(params);
        expect(apiHandler.getInstance().defaults.proxy).toEqual(params);
    });

    it('should allow the endpoints to be set', () => {
        apiHandler.setEndpoints({live: 'live-endpoint.rebilly.com', sandbox: 'sandbox-endpoint.rebilly.com'});
        expect(apiHandler.getInstance().defaults.baseURL).toBe('live-endpoint.rebilly.com');
        options.apiVersion = 'experimental';
        options.isSandbox = true;
        apiHandler.setEndpoints({live: 'live-endpoint.rebilly.com', sandbox: 'sandbox-endpoint.rebilly.com'});
        expect(apiHandler.getInstance().defaults.baseURL).toBe('sandbox-endpoint.rebilly.com/experimental');
    });

    it('should return a promise when I call the apiHandler\'s create function with an ID', async () => {
        const invoice = api.invoices.create({id: '1234', data: {}});
        expect(typeof invoice.then).toBe('function');
    });

    it('should return a promise when I make a POST request', async () => {
        const invoice = api.invoices.issue({id: '1234', data: {}});
        expect(typeof invoice.then).toBe('function');
    });

    it('should return a promise when I make a PUT request', () => {
        const invoice = api.invoices.update({id: '1234', data: {}});
        expect(typeof invoice.then).toBe('function');
    });

    it('should return a promise when I make a PATCH request', () => {
        const gatewayAccount = api.gatewayAccounts.update({id: '1234', data: {}});
        expect(typeof gatewayAccount.then).toBe('function');
    });

    it('should return a promise when I make a PATCH request', () => {
        const serviceCredential = api.serviceCredentials.update({type: 'plaid', id: '1234', data: {}});
        expect(typeof serviceCredential.then).toBe('function');
    });

    it('should return a promise when I make a DELETE request', () => {
        const gatewayAccount = api.gatewayAccounts.delete({id: '1234', data: {}});
        expect(typeof gatewayAccount.then).toBe('function');
    });

    it('should not share configuration values between different axios instances', () => {
        //see axios issue https://github.com/mzabriskie/axios/issues/385
        const handlerOne = createApiTestHandler({options});
        const handlerTwo = createApiTestHandler({options});
        handlerOne.setSessionToken('firstToken');
        handlerTwo.setSessionToken('secondToken');
        const firstToken = handlerOne.getInstance().defaults.headers.common['Authorization'];
        const secondToken = handlerTwo.getInstance().defaults.headers.common['Authorization'];
        expect(firstToken).not.toBe(secondToken);
    });

    it('should define an API consumer header based on the package version', () => {
        const headers = apiHandler.getInstance().defaults.headers;
        expect(headers['REB-API-CONSUMER']).toBe(`RebillySDK/JS-SDK ${version}`);
    });

    describe('with interceptors', () => {
        describe('request interceptor', () => {
            it('should return created interceptor ID when intercenptor is added', () => {
                const interceptor = apiHandler.addRequestInterceptor({thenDelegate: () => {}});
                expect(typeof interceptor).toBe('number');
            });
            it('should call axios interceptorManager eject function on interceptor removal', () => {
                const interceptor = apiHandler.addRequestInterceptor({thenDelegate: () => {}});
                vi.spyOn(apiHandler.getInstance().interceptors.request, 'eject');
                apiHandler.removeRequestInterceptor(interceptor);
                expect(apiHandler.getInstance().interceptors.request.eject).toHaveBeenCalledWith(interceptor);
            });
        });
        describe('response interceptor', () => {
            it('should return created interceptor ID when intercenptor is added', () => {
                const interceptor = apiHandler.addResponseInterceptor({thenDelegate: () => {}});
                expect(typeof interceptor).toBe('number');
            });
            it('should call axios interceptorManager eject function on interceptor removal', () => {
                const interceptor = apiHandler.addResponseInterceptor({thenDelegate: () => {}});
                vi.spyOn(apiHandler.getInstance().interceptors.response, 'eject');
                apiHandler.removeResponseInterceptor(interceptor);
                expect(apiHandler.getInstance().interceptors.response.eject).toHaveBeenCalledWith(interceptor);
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
                expect(error.message).toBe('There is no such interceptor type as "madeUpType"');
            }
        });
    });
    describe('when type is one of interceptorTypes', () => {
        it('should return true', () => {
            const result = isInterceptorType(interceptorTypes.request);
            expect(result).toBe(true);
        });
    });
});

describe('when creating a member', () => {
    const options = {
        apiEndpoints: {live: '', sandbox: ''},
    };
    const apiHandler = createApiTestHandler({options});
    let axiosInstance;
    beforeEach(() => {
        axiosInstance = apiHandler.getInstance();
        vi.spyOn(axiosInstance, 'post').mockReturnValue(Promise.resolve({statusText: 201, data: {}}));
        vi.spyOn(axiosInstance, 'put').mockReturnValue(Promise.resolve({statusText: 200, data: {}}));
    });
    afterEach(() => {
        vi.resetAllMocks();
    });

    it('should post a new entity when id is not passed to create method', async () => {
        const id = '';
        const data = {websiteId: 'www.test.com'};
        const params = null;

        await apiHandler.create(`customers/${id}`, id, data, params);

        expect(axiosInstance.post).toHaveBeenCalledTimes(1);
        expect(axiosInstance.post).toHaveBeenCalledWith('customers/', data, {cancelToken: expect.anything()});
    });

    it('should put an existent entity when id is provided', async () => {
        const id = 'existingId';
        const data = {websiteId: 'www.test.com'};

        await apiHandler.create(`customers/${id}`, id, data);

        expect(axiosInstance.put).toHaveBeenCalledTimes(1);
        expect(axiosInstance.put).toHaveBeenCalledWith('customers/existingId', data, {params: {}, cancelToken: expect.anything()});
    });
});
