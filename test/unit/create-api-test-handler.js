import MockAdapter from 'axios-mock-adapter';
import createApiHandler from '../../src/create-api-handler';
import mocks from './mocks';

export default function createApiTestHandler({options}) {
    const apiHandler = createApiHandler({options});
    //get the api handler instance
    const instance = apiHandler.getInstance();
    //setup an adapter on the current instance
    const adapter = new MockAdapter(instance);
    //set up mocks on the current adapter
    Object.values(mocks).forEach(mock => mock({adapter}));
    //apiHandler.setInstance(instance);
    return apiHandler;
};
