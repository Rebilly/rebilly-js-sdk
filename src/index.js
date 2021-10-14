// @ts-nocheck
import createApiHandler from './create-api-handler';
import createApiInstance, {createExperimentalApiInstance, createStorefrontApiInstance} from './create-api-instance';
import Errors from './errors';
import cancellation from './cancellation';

const baseEndpoints = {
    live: 'https://api.rebilly.com',
    sandbox: 'https://api-sandbox.rebilly.com',
};
const baseTimeoutMs = 6000;

/**
 * Create an instance of the Rebilly API
 * @typedef {Object} ApiParams
 * @property {string} [apiKey] private API key; if provided will be used for all requests
 * @property {boolean} sandbox whether to use the sandbox endpoint or the live
 * @property {number} timeout timeout in milliseconds
 * @property {string} [organizationId]  Organization identifier in scope of which need to perform request (if not specified, the default organization will be used)
 * @property {Object} [urls] which urls the sdk will use for the base url for live or sandbox modes
 */
export default function RebillyAPI({apiKey = null, sandbox = false, timeout = baseTimeoutMs, organizationId = null, urls = baseEndpoints} = {}) {
    if(!urls.live || !urls.sandbox) {
        throw new Error('RebillyAPI urls config must include a key for both `live` and `sandbox`');
    }
    if(typeof urls.live !== 'string' || typeof urls.sandbox !== 'string') {
        throw new Error('RebillyAPI urls config `live` and `sandbox` must be strings');
    }
    /**
     * Internal configuration options
     * @type {{apiEndpoints: {live: string, sandbox: string}, apiKey: string|null, apiVersion: string, isSandbox: boolean, requestTimeout: number, jwt: string|null, organizationId: string}}
     */
    const options = {
        apiEndpoints: urls,
        apiKey: apiKey,
        apiVersion: '',
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null,
        organizationId: organizationId,
    };

    const apiHandler = createApiHandler({options});
    return createApiInstance({apiHandler});
};

/**
 * Create an instance of the experimental Rebilly API
 * @param {ApiParams} params
 */
function RebillyExperimentalAPI({apiKey = null, sandbox = false, timeout = baseTimeoutMs, organizationId = null, urls = baseEndpoints} = {}) {
    if(!urls.live || !urls.sandbox) {
        throw new Error('RebillyAPI urls config must include a key for both `live` and `sandbox`');
    }
    if(typeof urls.live !== 'string' || typeof urls.sandbox !== 'string') {
        throw new Error('RebillyAPI urls config `live` and `sandbox` must be strings');
    }
    /**
     * Internal configuration options
     * @type {{apiEndpoints: {live: string, sandbox: string}, apiKey: *, isSandbox: boolean, requestTimeout: number, jwt: null}}
     */
    const options = {
        apiEndpoints: urls,
        apiKey: apiKey,
        apiVersion: 'experimental',
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null,
        organizationId: organizationId,
    };

    const apiHandler = createApiHandler({options});

    return createExperimentalApiInstance({apiHandler});
}

/**
 * Create an instance of the storefront API.
 *  @param {ApiParams} params
 */
function RebillyStorefrontAPI({publishableKey = null, jwt = null, sandbox = false, timeout = baseTimeoutMs, organizationId = null, urls = baseEndpoints} = {}) {
    if(!urls.live || !urls.sandbox) {
        throw new Error('RebillyAPI urls config must include a key for both `live` and `sandbox`');
    }
    if(typeof urls.live !== 'string' || typeof urls.sandbox !== 'string') {
        throw new Error('RebillyAPI urls config `live` and `sandbox` must be strings');
    }
    /**
     * Internal configuration options
     * @type {{apiEndpoints: {live: string, sandbox: string}, apiKey: *, isSandbox: boolean, requestTimeout: number, jwt: null}}
     */
    const options = {
        apiEndpoints: urls,
        publishableKey: publishableKey,
        jwt: jwt,
        apiVersion: `storefront`,
        isSandbox: sandbox,
        requestTimeout: timeout,
        organizationId: organizationId,
    };

    const apiHandler = createApiHandler({options});

    apiHandler.setSessionToken(options.jwt);

    return createStorefrontApiInstance({apiHandler});
 }

export {Errors as RebillyErrors, RebillyExperimentalAPI, RebillyStorefrontAPI, cancellation};
