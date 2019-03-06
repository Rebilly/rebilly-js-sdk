import CachedRequest from './cached-request';

/**
 * Creates an API requests cache singleton instance.
 */
class RequestsCache {
    constructor() {
        if (RequestsCache.instance) {
            return RequestsCache.instance;
        }

        /**
         * Requests cache object.
         * {
         *  [CachedRequestId]: CachedRequest,
         *  ...
         * }
         * @type {Object}
         */
        this.requests = {};
        RequestsCache.instance = this;
    }

    /**
     * Returns Array with all CachedRequest from the cache.
     *
     * @return {Array}
     */
    getAll() {
        return Object.values(this.requests);
    }

    /**
     * Returns CachedRequest instance from the cache if it exists.
     *
     * @param {CachedRequestId} id
     * @returns {CachedRequest|undefined}
     */
    getById(id) {
        return this.requests[id];
    }

    /**
     * Delete CachedRequest from the cache object if exists.
     *
     * @param {CachedRequestId} id
     * @returns {*}
     */
    deleteById(id) {
        const item = this.requests[id];
        if (!item) {
            return;
        }

        /**
         * Delete CachedRequest from the cache object.
         */
        delete this.requests[id];
    }


    /**
     * Save new request into the cache.
     *
     * @returns {{id:CachedRequestId, cancelToken: CancelToken}}
     */
    save() {

        /**
         * Create CachedRequest instance.
         * @type {CachedRequest}
         */
        const request = new CachedRequest();

        /**
         * Save the request into the cache object.
         * @type {CachedRequest}
         */
        this.requests[request.id] = request;

        /**
         * Returns
         * id: CachedRequestId
         * cancelToken: CancelToken
         */
        return {id: request.id, cancelToken: request.cancelToken};
    }
}

export default new RequestsCache();