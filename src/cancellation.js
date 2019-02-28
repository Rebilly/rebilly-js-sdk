import axios from 'axios';

/**
 * RequestsCache.
 *
 */
class RequestsCacheClass {
    constructor() {
        if (!RequestsCacheClass.cache) {
            // {[requestId]: {CachedRequest}, ...}
            RequestsCacheClass.cache = {
                lastCreatedRequestIndex: 0,
                lastCreatedGroupIndex: 0,
                activeGroupIds: [],
                requests: {},
            };
        }
        this.cache = RequestsCacheClass.cache;
    }

    getById(id) {
        return this.cache.requests[id];
    }

    getByGroupId(id) {
        return this.getAll().filter((item) => {
            console.log('get.group.id', id, item);
            return item.groups.includes(id);
        });
    }

    deleteById(id) {
        const item = this.cache.requests[id];
        if (!item) {
            return;
        }
        const groups = item.groups;
        delete this.cache.requests[id];

        // delete group from active list
        groups.forEach(groupId => {
            const groupItems = this.getByGroupId(groupId);
            if (!groupItems.length && this.cache.activeGroupIds.includes(groupId)) {
                this.deleteGroupFromActiveList(groupId);
            }
        });
    }

    deleteGroupItemsByGroupId(id) {
        return this.getByGroupId(id).forEach(({id}) => this.deleteById(id));
    }

    deleteGroupFromActiveList(groupId) {
        // delete group from active list, all new requests will created without that group
        const index = this.cache.activeGroupIds.indexOf(groupId);
        if (index >= 0) {
            this.cache.activeGroupIds.splice(index, 1);
        }
    }

    getAll() {
        return Object.values(this.cache.requests);
    }

    getNewCacheId() {
        this.cache.lastCreatedRequestIndex++;
        return `request-id-${this.cache.lastCreatedRequestIndex}`;
    }

    getNewGroupId() {
        this.cache.lastCreatedGroupIndex++;
        return `group-id-${this.cache.lastCreatedGroupIndex}`;
    }

    getLastGroupId() {
        return `group-id-${this.cache.lastCreatedGroupIndex}`;
    }

    save() {
        const id = this.getNewCacheId();
        const groups = [...this.cache.activeGroupIds];
        const request = new CachedRequest({id, groups});
        this.cache.requests[id] = request;

        return {id, cancelToken: request.cancelToken};
    }

    createGroup() {
        const id = this.getNewGroupId();
        this.cache.activeGroupIds.push(id);
        return id;
    }
}

export const RequestsCache = new RequestsCacheClass();
window.RequestsCache = RequestsCache;
console.log('RequestsCache', RequestsCache);

/**
 * CachedRequest.
 */
class CachedRequest {

    /**
     * @property {string} id
     * @property {array} groups - array of request groups id
     * @property {number} created
     * @property {Canceler} cancel
     * @property {CancelToken} cancelToken
     */
    constructor({id, groups} = {}) {
        this.id = id;
        this.groups = groups || [];
        this.created = new Date().getTime();
        this.cancelSource = axios.CancelToken.source();
        this.cancel = this.cancelSource.cancel;
        this.cancelToken = this.cancelSource.token;
    }
}

/**
 * Cancellation.
 */
export class Cancellation {
    static cancelById = (id, reason) => {
        try {
            RequestsCache.getById(id).cancel(reason);
            RequestsCache.deleteById(id);
        } catch (err) {
            // request doesn't exists
        }
    };

    static cancelAll = (reason) => RequestsCache.getAll()
        .forEach(item => {
            item.cancel(reason);
            RequestsCache.deleteById(item.id);
        });

    static createGroup = () => {
        return RequestsCache.createGroup();
    };

    static saveGroup(id) {
        const groupId = id || RequestsCache.getLastGroupId();
        return RequestsCache.deleteGroupFromActiveList(groupId);
    }

    static cancelGroup = (id, reason) => {
        const groupId = id || RequestsCache.getLastGroupId();
        const items = RequestsCache.getByGroupId(groupId);
        items.forEach(item => item.cancel(reason));
        RequestsCache.deleteGroupItemsByGroupId(id);
    };
}

/**
 * Public cancellation methods (exported in library)
 */
export default {
    cancelAll: Cancellation.cancelAll,
    createGroup: Cancellation.createGroup,
    saveGroup: Cancellation.saveGroup,
    cancelGroup: Cancellation.cancelGroup,
};