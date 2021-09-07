import Errors from '../../../src/errors';
import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when using the Errors object', () => {
    it('should expose different Rebilly error types', () => {
        expect(typeof Errors).toBe('object');
        expect(Errors).toHaveProperty('RebillyError');
        expect(Errors).toHaveProperty('RebillyRequestError');
        expect(Errors).toHaveProperty('RebillyValidationError');
        expect(Errors).toHaveProperty('RebillyNotFoundError');
        expect(Errors).toHaveProperty('RebillyConflictError');
        expect(Errors).toHaveProperty('RebillyForbiddenError');
        expect(Errors).toHaveProperty('RebillyMethodNotAllowedError');
        expect(Errors).toHaveProperty('RebillyTimeoutError');
        expect(Errors).toHaveProperty('RebillyCanceledError');
    });
});

describe('when throwing errors', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});

    it('should create an instance with default properties', () => {
        try {
            throw new Errors.RebillyError({error: {message: 'base error'}});
        } catch (err) {
            expect(err.message).toBe('base error');
            expect(err.name).toBe('RebillyError');
            expect(err.response).toBe(null);
            expect(err.request).toBe(null);
            expect(err.config).toBe(null);
            expect(err.status).toBe(null);
            expect(err.statusText).toBe(null);
            expect(err.details).toBe(null);
        }
    });

    it('should use the response error as the error message', () => {
        const response = {data: {error: 'Not Found'}};
        try {
            throw new Errors.RebillyNotFoundError ({response});
        } catch (err) {
            expect(err.message).toBe(response.data.error);
            expect(err.name).toBe('RebillyNotFoundError');
            expect(err.response).toEqual(response);
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
            expect(err.message).toBe(response.data.error);
            expect(err.name).toBe('RebillyValidationError');
            expect(err.response).toEqual(response);
            expect(err.status).toBe(response.status);
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
            expect(err.message).toBe(response.data.error);
            expect(err.name).toBe('RebillyConflictError');
            expect(err.response).toEqual(response);
            expect(err.statusText).toBe(response.statusText);
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
            expect(err.message).toBe(response.data.error);
            expect(err.name).toBe('RebillyMethodNotAllowedError');
            expect(err.response).toEqual(response);
            expect(err.statusText).toBe(response.statusText);
        }
    });

    it('should detect a network error and return the correct type', async () => {
        try {
            await api.customers.get({id: 'network-error-customer-id'});
        } catch (error) {
            expect(error.name).toBe('RebillyRequestError');
        }
    });

    it('should detect a timeout and return the correct error type', async () => {
        try {
            await api.customers.get({id: 'timeout-customer-id'});
        } catch (error) {
            expect(error.name).toBe('RebillyTimeoutError');
        }
    });

    it('should expose the error name for any given error type', () => {
        expect(Errors.RebillyNotFoundError.name).toBe('RebillyNotFoundError');
        expect(Errors.RebillyCanceledError.name).toBe('RebillyCanceledError');
    });
});

