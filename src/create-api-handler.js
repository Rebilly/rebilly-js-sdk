// @ts-nocheck
import axios from 'axios';
import Member from './member';
import Collection from './collection';
import File from './file';
import Errors from './errors/errors';
import cloneDeep from 'clone-deep';
import {version} from '../package.json';
import RequestsCache from './requests-cache';
import {Cancellation} from './cancellation';

/**
 * Available types of axios interceptors
 */
export const interceptorTypes = {
    request: 'request',
    response: 'response',
};

/**
 * Verifyes that `type` is one of the `interceptorTypes` or throws an error
 * @param options
 */
export const isInterceptorType = (type) => {
    if (!Object.values(interceptorTypes).includes(type)) {
        throw new Error (`There is no such interceptor type as "${type}"`);
    }

    return true;
};


/**
 * Creates an API handler for the current instance with the provided options.
 * @param options
 * @returns {{addRequestInterceptor: addRequestInterceptor, removeRequestInterceptor: removeRequestInterceptor, addResponseInterceptor: addResponseInterceptor, removeResponseInterceptor: removeResponseInterceptor, setTimeout: setTimeout, setProxyAgent: setProxyAgent, setSessionToken: setSessionToken, setPublishableKey: setPublishableKey, setEndpoints: setEndpoints, getCancellationToken: getCancellationToken, get: get, getAll: getAll, post: post, put: put, patch: patch, delete: del, create: create}}
 */
export default function createApiHandler({options}) {
    const instance = createInstance();

    /**
     * Create an Axios instance for Rebilly.
     * @returns {AxiosInstance}
     */
    function createInstance() {
        return axios.create(getInstanceOptions());
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
        return `${url}/${options.apiVersion || ''}`;
    }

    /**
     * Generate the request headers at instantiation with the `REB-APIKEY` and/or `Organization-Id` if present.
     * @returns {Object}
     */
    function getRequestHeaders() {
        const headers = {
            'REB-API-CONSUMER': `RebillySDK/JS-SDK ${version}`
        };
        if (options.apiKey) {
            headers['REB-APIKEY'] = options.apiKey;
        }
        if (options.organizationId) {
            headers['Organization-Id'] = options.organizationId;
        }
        return headers;
    }

    /**
     * Return a clone of the axios instance headers to prevent shared configuration between all instances.
     * Affects axios 0.16.2.
     * @link https://github.com/mzabriskie/axios/issues/385
     * @returns {*}
     */
    function cloneInstanceHeaders() {
        //axios instance share their configuration as of 0.16.2
        //see axios issue https://github.com/mzabriskie/axios/issues/385
        return cloneDeep(instance.defaults.headers);
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
     * Use a JWT session token to identify API request. This removes the private API key header if present.
     * @param token string
     */
    function setSessionToken(token = options.jwt) {
        const headers = cloneInstanceHeaders();
        options.apiKey = null;
        options.jwt = token;
        delete headers.common['REB-APIKEY'];
        headers.common['Authorization'] = `Bearer ${token}`;
        instance.defaults.headers = headers;
    }

    function setPublishableKey(key = options.publishableKey) {
      const headers = cloneInstanceHeaders();
      options.publishableKey = key;
      headers.common['Authorization'] = `${key}`;
      instance.defaults.headers = headers;
    }

    /**
     * Define a proxy for the current API instance.
     * @param args {Object}
     * @param args.host {string}
     * @param args.port {number}
     * @param args.auth {Object}
     * @param args.auth.username {string}
     * @param args.auth.password {string}
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
     * @param args {Object}
     * @param args.live {string}
     * @param args.sandbox {string}
     * @example
     * const api = RebillyAPI();
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
     * Adds a interceptor to the current API instance.
     * @param type {String} interceptor type (`request`/`response`)
     * @param delegates {Object}
     * @param delegates.thenDelegate {Function} defines the delegate logic to run when the request is completed
     * @param delegates.catchDelegate {Function} (optional) defines a callback to run before the catch block of the request is executed for this interceptor
     * @return {Number} An ID used to remove interceptor later
     */
    function addInterceptor(type, {thenDelegate, catchDelegate = () => {}}) {
        return isInterceptorType(type) && instance.interceptors[interceptorTypes[type]].use(thenDelegate, catchDelegate);
    }

    /**
     * Removes a specific interceptor from the current API instance.
     * @param type interceptor type (`request`/`response`)
     * @param interceptor {Number} defines the interceptor delegate to remove (the ID that was returned by addInterceptor)
     */
    function removeInterceptor(type, interceptor) {
        return isInterceptorType(type) && instance.interceptors[interceptorTypes[type]].eject(interceptor);
    }

    /**
     * Adds a request interceptor to the current API instance.
     * @param args {Object}
     * @param args.thenDelegate {Function} defines the delegate logic to run when the request is completed
     * @param args.catchDelegate {Function} (optional) defines a callback to run before the catch block of the request is executed for this interceptor
     * @return {Number} An ID used to remove interceptor later
     */
    function addRequestInterceptor({thenDelegate, catchDelegate = () => {}}) {
        return addInterceptor(interceptorTypes.request, {thenDelegate, catchDelegate});
    }

    /**
     * Removes a specific request interceptor from the current API instance.
     * @param interceptor {Number} defines the interceptor delegate to remove (the ID that was returned by `addRequestInterceptor`)
     */
    function removeRequestInterceptor(interceptor) {
        removeInterceptor(interceptorTypes.request, interceptor);
    }

    /**
     * Adds a request response to the current API instance.
     * @param args {Object}
     * @param args.thenDelegate {Function} defines the delegate logic to run before the response is completed
     * @param args.catchDelegate {Function} (optional) defines a callback to run before the catch block of the response is executed for this interceptor
     * @return {Number} An ID used to remove interceptor later
     */
    function addResponseInterceptor({thenDelegate, catchDelegate = () => {}}) {
        return addInterceptor(interceptorTypes.response, {thenDelegate, catchDelegate});
    }

    /**
     * Removes a specific response interceptor from the current API instance.
     * @param interceptor {Number} defines the interceptor delegate to remove (the ID that was returned by `addResponseInterceptor`)
     */
    function removeResponseInterceptor(interceptor) {
        removeInterceptor(interceptorTypes.response, interceptor);
    }

    /**
     * Wraps an Axios request to handle both the response and errors and return wrapped objects.
     * @param args {Object}
     * @param args.request {Function}
     * @param args.isCollection {boolean} defines whether the request is done to a collection or a member of the API
     * @param args.config {Object} a hash of parameters or configuration options to
     * apply to the request after cleanup
     * @returns {Promise.<*>}
     */
    function wrapRequest({request, isCollection, config}) {
        const cleanedConfig = getRequestConfig(config);
        const {id, cancelToken} = RequestsCache.save();

        cleanedConfig.cancelToken = cancelToken;

        const handler = async function () {
            try {
                const response = await request(cleanedConfig);
                return processResponse({response, isCollection, config: cleanedConfig});
            }
            catch (error) {
                return processError({error, config: cleanedConfig});
            } finally {
                RequestsCache.deleteById(id);
            }
        };
        const promise = handler();
        // expose cancellation method to the Promise instance
        promise.cancel = reason => Cancellation.cancelById(id, reason);
        return promise;
    }

    /**
     * Creates a Member or Collection from the response based on the type flag `isCollection`.
     * @param args {Object}
     * @param args.response {Object} raw API response
     * @param args.isCollection {boolean}
     * @param args.config {Object} original request configuration
     * @returns {Member|Collection}
     */
    function processResponse({response, isCollection, config}) {
        if (isCollection) {
            return new Collection(response, config);
        }
        return new Member(response, config);
    }

    /**
     * Throws an instance of a Rebilly Error from the base Axios error.
     * @param args {Object}
     * @param args.error {Object}
     */
    function processError({error}) {
        // The request was manually cancelled by a token.
        if (axios.isCancel(error)) {
            throw new Errors.RebillyCanceledError(error);
        }

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

        if (error.code === 'ECONNABORTED') {
            throw new Errors.RebillyTimeoutError(error);
        }

        throw new Errors.RebillyRequestError(error);
    }

    /**
     * Remove null or empty string parameters from the provided configuration parameters and return only defined values.
     * @param configuration {Object}
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
     * Combines parameters with other configurations settings for all requests. If present the cancellation token will be injected.
     * @param configuration
     * @returns {Object}
     */
    function getRequestConfig(configuration = {}) {
        const config = cleanUpParameters(configuration);
        return {...config};
    }

    /**
     * Trigger a GET request on the target URL and return the member received in the response.
     * @param url {string}
     * @param params {Object}
     * @returns {Member} member
     */
    function get(url, params = {}) {
        return wrapRequest({
            request: config => instance.get(url, config),
            config: {params},
        });
    }

    /**
     * Trigger a GET request on the target URL and return the collection received in the response.
     * @param url {string}
     * @param params {Object}
     * @returns {Collection} collection
     */
    function getAll(url, params) {
        return wrapRequest({
            request: config => instance.get(url, config),
            config: {params},
            isCollection: true,
        });
    }

    /**
     * Trigger a POST request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @param options {Object}
     * @returns {Member} member
     */
    function post(url, data, options = {}) {
        let configuration = {};
        //enable support for POST without authentication, specifically for login, sign up and other guest actions
        if (options.authenticate === false) {
            //copy headers from default config
            configuration = {headers: cloneInstanceHeaders()};
            //temporarily remove authentication headers
            delete configuration.headers.common['REB-APIKEY'];
            delete configuration.headers.common['Authorization'];
        }
        // allow param definition for particular POST cases
        if (options.params) {
            configuration.params = {...options.params};
        }
        return wrapRequest({
            request: config => instance.post(url, data, config),
            config: configuration,
        });
    }

    /**
     * Trigger a PUT request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @param params? {Object}
     * @returns {Member} member
     */
    function put(url, data, params = {}) {
        return wrapRequest({
            request: config => instance.put(url, data, config),
            config: {params},
        });
    }

    /**
     * Trigger a PATCH request on the target URL with the provided data payload, and return the member received in the response.
     * @param url {string}
     * @param data {Object}
     * @returns {Member} member
     */
    function patch(url, data) {
        return wrapRequest({
            request: config => instance.patch(url, data, config),
            config: {},
        });
    }

    /**
     * Trigger a DELETE request on the target URL.
     * @param url {string}
     * @returns {null|*}
     */
    function del(url) {
        return wrapRequest({
            request: config => instance.delete(url, config),
            config: {},
        });
    }

    /**
     * Trigger a DELETE request on the target URL with provided payload.
     * @param url {string}
     * @param data {Object}
     * @returns {null|*}
     */
    function deleteAll(url, data) {
        return wrapRequest({
            request: config => instance.delete(url, config),
            config: {data: {...data}},
        });
    }

    /**
     * Create a new member for the current resource using the data payload if no ID is provided, otherwise verify if the ID already exists and create the member with the specified ID. Throws RebillyInvalidOperationError if the ID already exists.
     * @param url {string}
     * @param id {string}
     * @param data {Object}
     * @param params? {Object}
     * @throws Errors.RebillyConflictError
     * @returns {Member} member
     */
    async function create(url, id, data, params = {}) {
        if (id === '') {
            return post(url, data, {params});
        }
        else {
            try {
                const item = await get(url);
                if (item.response.status === 200) {
                    throw new Errors.RebillyConflictError({message: 'Member already exists. Please use a different ID.'});
                }
            }
            catch (error) {
                if (error.name === 'RebillyNotFoundError') {
                    return put(url, data, params);
                }
                //throw unexpected errors
                throw error;
            }
        }
    }

    /**
     * Returns a File by triggering a get call to the specified URL without converting the response into a Member. Use the config object to specify headers and desired response type.
     * @link https://github.com/mzabriskie/axios#request-config
     * @param url {string}
     * @param config {Object}
     * @returns {Promise.<*>}
     */
    async function download(url, config) {
        const cleanedConfig = getRequestConfig(config);
        try {
            const response = await instance.get(url, cleanedConfig);
            return new File(response, cleanedConfig);
        }
        catch (error) {
            return processError({error, config: cleanedConfig});
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
        setPublishableKey,
        setEndpoints,
        get,
        getAll,
        post,
        put,
        patch,
        delete: del,
        deleteAll,
        create,
        download
    };
};
