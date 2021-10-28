import createApiHandler from '../../../src/create-api-handler';
import createApiInstance from '../../../src/create-api-instance';

describe('when I use an API handler', () => {
    const options = {
        version: 1,
        apiEndpoints: {live: '', sandbox: ''},
        apiKey: '000000000',
        isSandbox: false,
        requestTimeout: 1,
        jwt: null
    };
    const apiHandler = createApiHandler({options});
    const api = createApiInstance({apiHandler});


    it('Ignores get params when they are null', async () => {
        const instance = apiHandler.getInstance();
        instance.get = jest.fn();

        api.aml.getAll({firstName: 'Kiko', lastName: 'Rivera', dob: null});

        expect(instance.get).toHaveBeenCalledTimes(1);
        expect(instance.get).toHaveBeenCalledWith('aml', {
            cancelToken: expect.anything(),
            params: { firstName: "Kiko", lastName: "Rivera" }
        }); 
    });
});
