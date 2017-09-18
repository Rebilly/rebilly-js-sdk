import Errors from '../../../src/errors';
import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when using the Errors object', () => {
    it('should expose different Rebilly error types', () => {
        expect(Errors).to.be.a('object');
        expect(Errors).to.have.property('RebillyError');
        expect(Errors).to.have.property('RebillyRequestError');
        expect(Errors).to.have.property('RebillyValidationError');
        expect(Errors).to.have.property('RebillyNotFoundError');
        expect(Errors).to.have.property('RebillyConflictError');
        expect(Errors).to.have.property('RebillyForbiddenError');
        expect(Errors).to.have.property('RebillyMethodNotAllowedError');
        expect(Errors).to.have.property('RebillyTimeoutError');
        expect(Errors).to.have.property('RebillyCanceledError');
    });
});

describe('when throwing errors', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});

    it('should create an instance with default properties', () => {
        try {
            throw new Errors.RebillyError({error: {message: 'base error'}});
        } catch (err) {
            expect(err.message).to.be.equal('base error');
            expect(err.name).to.be.equal('RebillyError');
            expect(err.response).to.be.equal(null);
            expect(err.request).to.be.equal(null);
            expect(err.config).to.be.equal(null);
            expect(err.status).to.be.equal(null);
            expect(err.statusText).to.be.equal(null);
            expect(err.details).to.be.equal(null);
        }
    });

    it('should use the response error as the error message', () => {
        const response = {data: {error: 'Not Found'}};
        try {
            throw new Errors.RebillyNotFoundError ({response});
        } catch (err) {
            expect(err.message).to.be.equal(response.data.error);
            expect(err.name).to.be.equal('RebillyNotFoundError');
            expect(err.response).to.be.deep.equal(response);
        }
    });

    it('should return the response status code when present', () => {
        const response = {
            data: {error: 'Generic Error', details: ['Wrong format']},
            status: 422,
            statusText: 'Generic Error'
        };
        try {
            throw new Errors.RebillyValidationError({response});
        } catch (err) {
            expect(err.message).to.be.equal(response.data.error);
            expect(err.name).to.be.equal('RebillyValidationError');
            expect(err.response).to.be.deep.equal(response);
            expect(err.status).to.be.equal(response.status);
        }
    });

    it('should return the response status text when present', () => {
        const response = {
            data: {error: 'Generic Error', details: ['Conflict']},
            status: 409,
            statusText: 'Generic Error'
        };
        try {
            throw new Errors.RebillyConflictError({response});
        } catch (err) {
            expect(err.message).to.be.equal(response.data.error);
            expect(err.name).to.be.equal('RebillyConflictError');
            expect(err.response).to.be.deep.equal(response);
            expect(err.statusText).to.be.equal(response.statusText);
        }
    });

    it('should return the error details text when present', () => {
        const response = {
            data: {error: 'Generic Error', details: ['Not Allowed']},
            status: 405,
            statusText: 'Generic Error'
        };
        try {
            throw new Errors.RebillyMethodNotAllowedError({response});
        } catch (err) {
            expect(err.message).to.be.equal(response.data.error);
            expect(err.name).to.be.equal('RebillyMethodNotAllowedError');
            expect(err.response).to.be.deep.equal(response);
            expect(err.statusText).to.be.equal(response.statusText);
        }
    });

    it('should detect a network error and return the correct type', async () => {
        try {
            await api.customers.get({id: 'network-error-customer-id'});
        } catch (error) {
            expect(error.name).to.be.equal('RebillyRequestError');
        }
    });

    it('should detect a timeout and return the correct error type', async () => {
        try {
            await api.customers.get({id: 'timeout-customer-id'});
        } catch (error) {
            expect(error.name).to.be.equal('RebillyTimeoutError');
        }
    });

    it('should expose the error name for any given error type', () => {
        expect(Errors.RebillyNotFoundError.name).to.be.equal('RebillyNotFoundError');
        expect(Errors.RebillyCanceledError.name).to.be.equal('RebillyCanceledError');
    });
});

