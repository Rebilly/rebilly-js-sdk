import createApiHandler from '../../../src/create-api-handler';
import createApiInstance from '../../../src/create-api-instance';
import sinon, { assert, stub, match } from 'sinon';

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
        instance.get = stub();

        api.aml.getAll({firstName: 'Kiko', lastName: 'Rivera', dob: null});

        assert.calledWith(instance.get, 'aml', match({
            cancelToken: sinon.match.any,
            params: { firstName: "Kiko", lastName: "Rivera" }
        }));
        
        expect(instance.get).calledOnceWith('aml', match({
            cancelToken: sinon.match.any,
            params: { firstName: "Kiko", lastName: "Rivera" }
        }));
    });
});
