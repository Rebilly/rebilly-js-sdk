import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when I get a collection', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let customers;

    before(async () => {
        customers = await api.customers.getAll();
    });
    it('should define a property called total', () => {
        expect(customers.total).toBeDefined();
    });
    it('should define a property called offset', () => {
        expect(customers.offset).toBeDefined();
    });
    it('should define a property called limit', () => {
        expect(customers.limit).toBeDefined();
    });
    it('should define a property called response', () => {
        expect(customers.response).toBeDefined();
    });
    it('should have an array of items', () => {
        expect(Array.isArray(customers.items)).toBe(true);
    });
    it('should have a method named getJSON', () => {
        expect(typeof customers.getJSON).toBe('function');
    });
    it('should return a plain JSON object defining items as an array, when using getJSON', () => {
        expect(Array.isArray(customers.getJSON().items)).toBe(true);
    });
    it('should be immutable', () => {
        expect(Object.isFrozen(customers.limit)).toBe(true);
    });
    it('should return a mutable JSON object when requested', () => {
        expect(Object.isFrozen(customers.getJSON())).toBe(false);
    });
});
