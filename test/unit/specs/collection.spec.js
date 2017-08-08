import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when I get a collection', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let customers;

    before(async () => {
        try {
            customers = await api.customers.getAll();
        }
        catch(err) {
            console.log(err);
        }
    });
    it('should define a property called total', () => {
        expect(customers.total).to.not.be.undefined;
    });
    it('should define a property called offset', () => {
        expect(customers.offset).to.not.be.undefined;
    });
    it('should define a property called limit', () => {
        expect(customers.limit).to.not.be.undefined;
    });
    it('should define a property called response', () => {
        expect(customers.response).to.not.be.undefined;
    });
    it('should have an array of items', () => {
        expect(customers.items).to.be.an('array');
    });
    it('should have a method named getJSON', () => {
        expect(customers.getJSON).to.be.a('function');
    });
    it('should return a plain JSON object defining items as an array, when using getJSON', () => {
        expect(customers.getJSON().items).to.be.an('array');
    });
    it('should be immutable', () => {
        expect(customers.limit).to.be.frozen;
    });
    it('should return a mutable JSON object when requested', () => {
        expect(customers.getJSON()).to.not.be.frozen;
    });
});
