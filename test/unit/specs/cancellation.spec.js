import MockRebillyAPI from '../mock-rebilly-js-sdk';
import {version} from '../../../package.json';
import {cancellation} from '../../../src/rebilly-js-sdk';


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
            expect(true).toBe(false);
        }
        catch (error) {
            expect(error.name).toBe('RebillyCanceledError');
            expect(error.message).toBe(reason);
        }
    });

    it('should allow single request to be canceled', async () => {
        const reason = 'Cancelled request manually';
        try {
            const request = api.customers.get({id: 'cancellable-customer-id'});
            setTimeout(() => request.cancel(reason), 500);
            await request;
            //this assertion should never run
            expect(true).toBe(false);
        }
        catch (error) {
            expect(error.name).toBe('RebillyCanceledError');
            expect(error.message).toBe(reason);
        }
    });
});
