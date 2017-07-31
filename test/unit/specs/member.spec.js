import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when I get member', () => {
    const api = new MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let customer;
    before(async () => {
        customer = await api.customers.get({id: 'f9171662-0585-44ac-a8a1-874c8de9db85'});
    });
    it('should define a property called response', () => {
        expect(customer.response).to.not.be.undefined;
    });
    it('should have an object named `fields`', () => {
        expect(customer.fields).to.be.an('object');
    });
    it('should have a method named getJSON', () => {
        expect(customer.getJSON).to.be.a('function');
    });
    it('should return a plain JSON object defining fields as an object, when using getJSON', () => {
        expect(customer.getJSON().fields).to.be.an('object');
    });
    it('should be immutable', () => {
        expect(customer.fields.firstName).to.be.frozen;
    });
    it('should return a mutable JSON object when requested', () => {
        expect(customer.getJSON()).to.not.be.frozen;
    });
});

