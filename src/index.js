import createApiHandler from './create-api-handler';
import createApiInstance, {createExperimentalApiInstance} from './create-api-instance';
import Errors from './errors';

const baseApiVersion = 'v2.1';
const baseEndpoints = {
    live: 'https://api.rebilly.com',
    sandbox: 'https://api-sandbox.rebilly.com'
};
const baseTimeoutMs = 6000;

/**
 * Create an instance of the Rebilly API
 * @param apiKey {string} private API key; if provided will be used for all requests
 * @param version {string} specify a different version of the API to use than the current stable release
 * @param sandbox {boolean} whether to use the sandbox endpoint or the live
 * @param timeout {number} timeout in milliseconds
 * @returns {{account, apiKeys, bankAccounts, blacklists, checkoutPages, coupons, customers, customerAuthentication, customEvents, customFields, credentialHashes, disputes, events, files, gatewayAccounts, invoices, layouts, lists, notes, organizations, paymentCards, paymentTokens, paypalAccounts, plans, previews, products, profile, sessions, shippingZones, status, subscriptions, tracking, transactions, threeDSecure, users, webhooks, websites, addRequestInterceptor, removeRequestInterceptor, addResponseInterceptor, removeResponseInterceptor, setTimeout, setProxyAgent, setSessionToken, setEndpoints, getCancellationToken}}
 * @constructor
 */
export default function RebillyAPI({apiKey = null, version = baseApiVersion, sandbox = false, timeout = baseTimeoutMs} = {}) {
    /**
     * Internal configuration options
     * @type {{apiKey: string|null, apiVersion: string, isSandbox: boolean, requestTimeout: number, jwt: string|null}}
     */
    const options = {
        apiEndpoints: baseEndpoints,
        apiKey: apiKey,
        apiVersion: version,
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null
    };

    const apiHandler = createApiHandler({options});
    return createApiInstance({apiHandler});
};

/**
 * Create an instance of the experimental Rebilly API
 * @param apiKey {string} private API key; if provided will be used for all requests
 * @param sandbox {boolean} whether to use the sandbox endpoint or the live
 * @param timeout {number} timeout in milliseconds
 * @returns {{histograms, reports, customers, setEndpoints, setTimeout}}
 * @constructor
 */
function RebillyExperimentalAPI({apiKey = null, sandbox = false, timeout = baseTimeoutMs} = {}) {
    /**
     * Internal configuration options
     * @type {{apiEndpoints: {live: string, sandbox: string}, apiKey: *, isSandbox: boolean, requestTimeout: number, jwt: null}}
     */
    const options = {
        apiEndpoints: baseEndpoints,
        apiKey: apiKey,
        apiVersion: 'experimental',
        isSandbox: sandbox,
        requestTimeout: timeout,
        jwt: null
    };

    const apiHandler = createApiHandler({options});
    return createExperimentalApiInstance({apiHandler});
}

export {Errors as RebillyErrors, RebillyExperimentalAPI};
