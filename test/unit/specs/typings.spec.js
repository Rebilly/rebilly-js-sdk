import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe.only('when I get member', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let memberships;
    before(async () => {
        memberships = await api.memberships.getAll();
    });
    it.only('should not throw error when running without parameters', () => {
        console.log(memberships.response)
    });
});

