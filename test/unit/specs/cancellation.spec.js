import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';
import {version} from '../../../package.json';
import {cancellation} from '../../../src/index';

const expect = chai.expect;

describe('when I use an API cancellation', () => {

    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});

    it('should allow all requests to be canceled', async () => {
        const reason = 'Cancelled request manually';
        try {
            setTimeout(() => cancellation.cancelAll(reason), 500);
            const requests = [
                api.customers.getAll(),
                api.customers.get({id: 'cancellable-customer-id'}),
            ];
            await Promise.all(requests);
            //this assertion should never run
            expect(true).to.be.equal(false);
        }
        catch (error) {
            expect(error.name).to.be.equal('RebillyCanceledError');
            expect(error.message).to.be.equal(reason);
        }
    });

    it('should allow single request to be canceled', async () => {
        const reason = 'Cancelled request manually';
        try {
            const request = api.customers.get({id: 'cancellable-customer-id'});
            setTimeout(() => request.cancel(reason), 500);
            await request;
            //this assertion should never run
            expect(true).to.be.equal(false);
        }
        catch (error) {
            expect(error.name).to.be.equal('RebillyCanceledError');
            expect(error.message).to.be.equal(reason);
        }
    });
});