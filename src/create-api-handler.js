import axios from 'axios';
import Member from './member';
import Collection from './collection';
import Errors from './errors';
import _ from 'underscore.deepclone';

/**
 * Creates an API handler for the current instance with the provided options.
 * @param options
 * @returns {{addRequestInterceptor: addRequestInterceptor, removeRequestInterceptor: removeRequestInterceptor, addResponseInterceptor: addResponseInterceptor, removeResponseInterceptor: removeResponseInterceptor, setTimeout: setTimeout, setProxyAgent: setProxyAgent, setSessionToken: setSessionToken, setApiConsumer: setApiConsumer, setEndpoints: setEndpoints, getCancellationToken: getCancellationToken, get: get, getAll: getAll, post: post, put: put, patch: patch, delete: del, create: create}}
 */
export default function createApiHandler({options}) {
    const instance = createInstance();

    /**
     * Create an Axios instance for Rebilly.
     */
    function createInstance() {
        const instance = axios.create(getInstanceOptions());
        //clone axios defaults to prevent shared configurations throughout all instances
        //see axios bug https://github.com/mzabriskie/axios/issues/385
        instance.defaults = _.deepClone(axios.defaults);
        return instance;
    }

    /**
     * Get the current Axios instance for this API handler.
     * @returns {Object} axios instance
     */
    function getInstance() {
        return instance;
    }

    /**
     * Generate the minimum configuration options for the current Axios instance.
     * @returns {Object}
     */
    function getInstanceOptions() {
        return {
            baseURL: getBaseURL(),
            timeout: options.requestTimeout,
            headers: getRequestHeaders()
        }
    }

    /**
     * Get the base URL for API calls for the current environment selection (live/sandbox) including the version.
     * @returns {string}
     */
    function getBaseURL() {
        const url = options.isSandbox ? options.apiEndpoints.sandbox : options.apiEndpoints.live;
        return `${url}/${options.apiVersion}`;
    }

    /**
     * Generate the request headers at instantiation with the `REB-APIKEY` if present.
     * @returns {Object}
     */
    function getRequestHeaders() {
        if (options.apiKey) {
            return {
                'REB-APIKEY': options.apiKey
            };
        }
        return {};
    }

    /**
     * Define the default timeout delay in milliseconds for the current API instance.
     * @param timeout number timeout delay in milliseconds
     */
    function setTimeout(timeout) {
        options.requestTimeout = Number(timeout);
        instance.defaults.timeout = options.requestTimeout;
    }

    /**
     * Define a consumer identification Header string for use with Rebilly. This allows you to identify your app in the API logs.
     * @param consumerId {string} a string to identify your application or plugin request
     * @example
     * const api = new RebillyAPI();
     * api.setApiConsumer('Acme Application v1.0.1');
     */
    function setApiConsumer(consumerId) {
        instance.defaults.headers.common['REB-API-CONSUMER'] = consumerId;
    }

    /**
     * Use a JWT session token to identify API request. This removes the private API key header if present.
     * @param token string
     */
    function setSessionToken(token) {
        options.apiKey = null;
        options.jwt = token;
        delete instance.defaults.headers.common['REB-APIKEY'];
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    /**
     * Define a proxy for the current API instance.
     * @param host {string}
     * @param port {number}
     * @param auth {Object}
     * @prop auth.username {string}
     * @prop auth.password {string}
     */
    function setProxyAgent({host, port, auth}) {
        instance.defaults.proxy = {
            host,
            port,
            auth
        };
    }

    /**
     * Update the endpoints URL for live, sandbox or both environments in the current API instance's active URL.
     * @param live {string}
     * @param sandbox
     * @example
     * const api = new RebillyAPI();
     * api.setEndpoints({live: 'https://api-test.rebilly.com'});
     */
    function setEndpoints({live = null, sandbox = null}) {
        if (live) {
            options.apiEndpoints.live = live;
        }
        if (sandbox) {
            options.apiEndpoints.sandbox = sandbox;
        }
        //after changing the endpoints, update the Axios instance URL too
        instance.defaults.baseURL = getBaseURL();
    }

    /**
     * Returns a cancellation token for the active instance.
     * @ignore
     */
    function getCancellationToken() {
        throw 'Method not implemented';
    }

    /**
     * Adds a request interceptor to the current API instance.
     * @param thenDelegate {Function} defines the delegate logic to run when the request is completed
     * @param catchDelegate {Function} (optional) defines a callback to run before the catch block of the request is executed for this interceptor
     */
    function addRequestInterceptor({thenDelegate, catchDelegate = () => {}}) {
        instance.interceptors.request.use(thenDelegate, catchDelegate);
    }

    /**
     * Removes a specific request interceptor from the current API instance.
     * @param interceptor {Function} defines the interceptor delegate to remove
     */
    function removeRequestInterceptor(interceptor) {
        instance.interceptors.request.eject(interceptor);
    }

    /**
     * Adds a request response to the current API instance.
     * @param thenDelegate {Function} defines the delegate logic to run before the response is completed
     * @param catchDelegate {Function} (optional) defines a callback to run before the catch block of the response is executed for this interceptor
     */
    function addResponseInterceptor({thenDelegate, catchDelegate = () => {}}) {
        instance.interceptors.response.use(thenDelegate, catchDelegate);
    }

    /**
     * Removes a specific response interceptor from the current API instance.
     * @param interceptor {Function} defines the interceptor delegate to remove
     */
    function removeResponseInterceptor(interceptor) {
        instance.interceptors.response.eject(interceptor);
    }

    /**
     * Wraps an Axios request to handle both the response and errors and return wrapped objects.
     * @param request {Promise}
     * @param isCollection {boolean} defines whether the request is done to a collection or a member of the API
     * @returns {Promise.<*>}
     */
    async function wrapRequest(request, {isCollection = false} = {}) {
        try {
            const response = await request;
            return processResponse(response, isCollection)
        }
        catch (error) {
            return processError(error);
        }
    }

    /**
     * Creates a Member or Collection from the response based on the type flag `isCollection`.
     * @param response {Object} raw API response
     * @param isCollection {boolean}
     * @returns {Member|Collection}
     */
    function processResponse(response, isCollection) {
        if (isCollection) {
            return new Collection(response);
        }
        return new Member(response);
    }

    /**
     * Throws an instance of a Rebilly Error from the base Axios error.
     * @param error {Object}
     */
    function processError(error) {
        if (error.response) {
            switch (Number(error.response.status)) {
                case 401: //unauthorized
                    throw new Errors.RebillyForbiddenError(error);
                case 404: //not found
                    throw new Errors.RebillyNotFoundError(error);
                case 405: //method not allowed
                    throw new Errors.RebillyMethodNotAllowedError(error);
                case 409: //conflict
                    throw new Errors.RebillyConflictError(error);
                case 422: //validation error
                    throw new Errors.RebillyValidationError(error);
                default:
                    //for anything else we will use the default error
                    throw new Errors.RebillyRequestError(error);
            }
        }
        else if (error.code === 'ECONNABORTED') {
            throw new Errors.RebillyTimeoutError(error);
        }
        else {
            throw new Errors.RebillyRequestError(error);
        }
    }

    /**
     * Remove null or empty string parameters from the provided configuration parameters and return only defined values.
     * @param configuration {object}
     * @returns {Object}
     */
    function cleanUpParameters(configuration) {
        if (configuration.params !== undefined) {
            configuration.params = Object
                .keys(configuration.params)
                .filter(key => configuration.params[key] !== null && configuration.params[key] !== '')
                .reduce((cleaned, key) => {
                    cleaned[key] = configuration.params[key];
                    return cleaned;
                }, {});
        }
        return configuration;
    }

    /**
     * Trigger a GET request on the target URL and return the member received in the response.
     * @param url {string}
     * @param params {Object=}
     * @returns {Member} member
     */
    function get(url, params = {}) {
        return wrapRequest(instance.get(url, cleanUpParameters({params})));
    }

    /**
     * Trigger a GET request on the target URL and return the collection received in the response.
     * @param url {string}
     * @param params {Object}
     * @returns {Collection} collection
     */
    function getAll(url, params) {
        return wrapRequest(instance.get(url, cleanUpParameters({params})), {isCollection: true});
    }

    /**
     * Trigger a POST request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @param flags {Object}
     * @returns {Member} member
     */
    function post(url, data, flags = {}) {
        let config = {};
        //enable support for POST without authentication, specifically for login, sign up and other guest actions
        if (flags.authenticate === false) {
            //copy headers from default config
            config = {headers: {...instance.defaults.headers}};
            //temporarily remove authentication headers
            delete config.headers.common['REB-APIKEY'];
            delete config.headers.common['Authorization'];
        }
        return wrapRequest(instance.post(url, data, config));
    }

    /**
     * Trigger a PUT request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @returns {Member} member
     */
    function put(url, data) {
        return wrapRequest(instance.put(url, data));
    }

    /**
     * Trigger a PATCH request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @returns {Member} member
     */
    function patch(url, data) {
        return wrapRequest(instance.patch(url, data));
    }

    /**
     * Trigger a DELETE request on the target URL.
     * @param url {string}
     * @returns {null|*}
     */
    function del(url) {
        return wrapRequest(instance.delete(url));
    }

    /**
     * Create a new member for the current resource using the data payload if no ID is provided, otherwise verify if the ID already exists and create the member with the specified ID. Throws RebillyInvalidOperationError if the ID already exists.
     * @param url {string}
     * @param id {string}
     * @param data {Object}
     * @throws Errors.RebillyConflictError
     * @returns {Member} member
     */
    async function create(url, id, data) {
        if (id === '') {
            return wrapRequest(instance.post(url, data));
        }
        else {
            try {
                const item = await wrapRequest(instance.get(url));
                if (item.response.status === 200) {
                    throw new Errors.RebillyConflictError({message: 'Member already exists. Please use a different ID.'});
                }
            }
            catch (error) {
                if (error.name === 'RebillyNotFoundError') {
                    return wrapRequest(instance.put(url, data));
                }
                return error;
            }
        }
    }

    /**
     * Trigger a get call to the specified URL without converting the response into a Member. Use the config object to specify headers and desired response type.
     * @link https://github.com/mzabriskie/axios#request-config
     * @param url {string}
     * @param config {Object}
     * @returns {Promise.<*>}
     */
    async function download(url, config) {
        try {
            const response = await instance.get(url, cleanUpParameters(config));
            return {
                response: {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers
                },
                data: response.data
            };
        }
        catch (error) {
            return processError(error);
        }
    }

    return {
        getInstance,
        addRequestInterceptor,
        removeRequestInterceptor,
        addResponseInterceptor,
        removeResponseInterceptor,
        setTimeout,
        setProxyAgent,
        setSessionToken,
        setApiConsumer,
        setEndpoints,
        getCancellationToken,
        get,
        getAll,
        post,
        put,
        patch,
        delete: del,
        create,
        download
    };
};
