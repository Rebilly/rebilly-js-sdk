import MockRebillyAPI from '../mock-rebilly-js-sdk';


describe('when I get member', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let customer;
    before(async () => {
        customer = await api.customers.get({id: 'f9171662-0585-44ac-a8a1-874c8de9db85'});
    });
    it('should define a property called response', () => {
        expect(customer.response).toBeDefined();
    });
    it('should have an object named `fields`', () => {
        expect(typeof customer.fields).toBe('object');
    });
    it('should have a method named getJSON', () => {
        expect(typeof customer.getJSON).toBe('function');
    });
    it('should return a plain JSON object defining fields as an object, when using getJSON', () => {
        expect(typeof customer.getJSON().fields).toBe('object');
    });
    it('should be immutable', () => {
        expect(Object.isFrozen(customer.fields.firstName)).toBe(true);
    });
    it('should return a mutable JSON object when requested', () => {
        expect(Object.isFrozen(customer.getJSON())).toBe(false);
    });
});

