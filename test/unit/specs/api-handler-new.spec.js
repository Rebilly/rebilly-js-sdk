import createApiHandler from '../../../src/create-api-handler';
import createApiInstance from '../../../src/create-api-instance';
import sinon from 'sinon';

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
        instance.get = sinon.stub();

        api.aml.getAll({firstName: 'Kiko', lastName: 'Rivera', dob: null});

        sinon.assert.calledWith(instance.get, 'aml', sinon.match({
            cancelToken: sinon.match.any,
            params: { firstName: "Kiko", lastName: "Rivera" }
        }));
        
        expect(instance.get).calledOnceWith('aml', sinon.match({
            cancelToken: sinon.match.any,
            params: { firstName: "Kiko", lastName: "Rivera" }
        }));
    });
});
