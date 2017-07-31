import libraryVersion from '../../version';
import createApiTestHandler from './create-api-test-handler';
import createApiInstance from '../../src/create-api-instance';

/**
 * Create a mock instance of the Rebilly API for unit testing
 * @param apiKey {string}
 * @param version {string}
 * @param sandbox {boolean}
 * @param timeout {number}
 * @constructor
 */
export default function MockRebillyAPI({apiKey = null, version = null, sandbox = false, timeout = 6000} = {}) {
    const baseEndpoints = {live: 'live-url', sandbox: 'sandbox-url'};

    /**
     * Internal configuration options
     * @type {{version: string, apiKey: string|null, apiVersion: string, isSandbox: boolean, requestTimeout: number, jwt: string|null}}
     */
    const options = {
        version: libraryVersion,
        apiEndpoints: baseEndpoints,
        apiKey: apiKey,
        apiVersion: version,
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null
    };

    const apiHandler = createApiTestHandler({options});
    return createApiInstance({apiHandler});
};
