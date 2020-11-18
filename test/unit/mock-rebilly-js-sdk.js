import createApiTestHandler from './create-api-test-handler';
import createApiInstance from '../../src/create-api-instance';

/**
 * Create a mock instance of the Rebilly API for unit testing
 * @param apiKey {string}
 * @param sandbox {boolean}
 * @param timeout {number}
 * @param organizationId {string}
 * @constructor
 */
export default function MockRebillyAPI({apiKey = null, sandbox = false, timeout = 6000, organizationId = null} = {}) {
    const baseEndpoints = {live: 'live-url', sandbox: 'sandbox-url'};

    /**
     * Internal configuration options
     * @type {{apiKey: string|null, isSandbox: boolean, requestTimeout: number, jwt: string|null, organizationId: string|null}}
     */
    const options = {
        apiEndpoints: baseEndpoints,
        apiKey: apiKey,
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null,
        organizationId: organizationId
    };

    const apiHandler = createApiTestHandler({options});
    return createApiInstance({apiHandler});
};
