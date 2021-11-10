import createApiInstance from '../../../src/create-api-instance';
import createApiTestHandler from '../create-api-test-handler';

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
    const api = createApiInstance({apiHandler});

    it('Ignores get params when they are null', async () => {
        const instance = apiHandler.getInstance();
        instance.get = jest.fn().mockImplementation(instance.get);

        api.customers.getAll({limit: null, filter: 'firstName:Kiko', q: 'Rivera'});

        expect(instance.get).toHaveBeenCalledTimes(1);
        expect(instance.get).toHaveBeenCalledWith('customers', {
            cancelToken: expect.anything(),
            params: {filter: 'firstName:Kiko', q: 'Rivera'}
        });
    });
});
