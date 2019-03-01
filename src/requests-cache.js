import shortid from 'shortid';
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
         * Current active request group ids see {@link Cancellation.createGroup} {@link CachedRequestGroupId}
         * All new requests will created with group ids.
         * All active groups at the time of creation of the requests
         * will passed to the request instance.
         *
         * After that you will able to stop requests by group id.
         * One request can be exists in multiple groups.
         * @type {Array}
         */
        this.activeCacheGroupIds = [];

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
     * Returns the last active group id.
     * see {@link Cancellation.createGroup} {@link CachedRequestGroupId}
     *
     * @return {CachedRequestGroupId|undefined}
     */
    getLastGroupId() {
        return this.activeCacheGroupIds[this.activeCacheGroupIds.length - 1];
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
     * Returns CachedRequest instances array from the cache by the Group id.
     * @param {CachedRequestGroupId} id
     * @returns {array}
     */
    getByGroupId(id) {
        return this.getAll().filter(({groups}) => groups.includes(id));
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
         * Request groups array, see {@link CachedRequest.groups}
         * @type {array}
         */
        const requestGroups = item.groups;

        /**
         * Delete CachedRequest from the cache object.
         */
        delete this.requests[id];

        /**
         * In case, if one of the request groups is active
         * and that's the last request in that group
         * you should to remove that group from the active list
         */
        requestGroups.forEach(groupId => {
            const groupItems = this.getByGroupId(groupId);
            if (!groupItems.length && this.activeCacheGroupIds.includes(groupId)) {
                this.disableGroup(groupId);
            }
        });
    }

    /**
     * Remove the group from the active groups list.
     *
     * @param {CachedRequestGroupId} groupId
     * @returns {*}
     */
    disableGroup(groupId) {
        this.activeCacheGroupIds = this.activeCacheGroupIds.filter(id => id !== groupId);
    }

    /**
     * Save new request into the cache.
     *
     * @returns {{id:CachedRequestId, cancelToken: CancelToken}}
     */
    save() {
        /**
         * Clone active groups list.
         * @type {Array}
         */
        const groups = [...this.activeCacheGroupIds];

        /**
         * Create CachedRequest instance.
         * @type {CachedRequest}
         */
        const request = new CachedRequest({groups});

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

    /**
     * @typedef {string} CachedRequestGroupId
     */

    /**
     * @returns {CachedRequestGroupId}
     */
    createGroup() {
        const id = shortid.generate();
        this.activeCacheGroupIds.push(id);
        return id;
    }
}

export default new RequestsCache();