import RequestsCache from './requests-cache';

/**
 * Requests cancellation functionality.
 * @static
 */
export class Cancellation {
    /**
     * Cancel single request by request id.
     *
     * @param {CachedRequestId} id
     * @param {string} [reason]
     */
    static cancelById = (id, reason) => {
        try {
            // Call the request cancel method
            RequestsCache.getById(id).cancel(reason);

            // Delete the request from the cache
            RequestsCache.deleteById(id);
        } catch (err) {
            // request doesn't exists
        }
    };

    /**
     * Cancel All requests.
     *
     * @param {string} [reason]
     * @return {*}
     *
     * @example
     * // import cancellation
     * import {cancellation} from 'rebilly-js-sdk'
     *
     * // create some requests
     *
     * // cancel all active requests
     * cancellation.cancelAll();
     */
    static cancelAll = (reason) => RequestsCache.getAll()
        .forEach(item => {
            item.cancel(reason);
            RequestsCache.deleteById(item.id);
        });

    /**
     * Create new active group for requests.
     * The previous groups will be active,
     * so you only added 1 new id in the active group ids array
     * see {@link RequestsCache.activeCacheGroupIds}
     */
    static createGroup = () => {
        return RequestsCache.createGroup();
    };

    /**
     * Save group by group id.
     * Two different ways to stopping the requests.
     * 1. You can work with groups without the ids argument (simple createGroup then cancelGroup).
     * 2. You can work with groups with groupId argument.
     * see {@link Cancellation.cancelGroup}
     *
     * @param {CachedRequestGroupId} groupId
     * @return {*}
     */
    static saveGroup(groupId) {
        const id = groupId || RequestsCache.getLastGroupId();
        return RequestsCache.disableGroup(id);
    }

    /**
     * Cancel group.
     * Two different ways to stopping the requests.
     * 1. You can work with groups without the ids argument (simple createGroup then cancelGroup).
     * 2. You can work with groups with groupId argument.
     *
     * Case 1 (simple)
     * @example
     * import {cancellation} from 'rebilly-js-sdk'
     *
     * // create a requests-1
     * cancellation.createGroup()
     * // create a requests-2
     * cancellation.cancelGroup() // WARNING! the method is cancelGroup
     * // create a requests-3
     *
     * // will cancelled only the requests-2
     *
     *
     * Case 2 (complex)
     * @example
     *
     * import {cancellation} from 'rebilly-js-sdk'
     *
     * // create a requests-1
     * const groupId1 = cancellation.createGroup()
     * // create a requests-2
     * const groupId2 = cancellation.createGroup()
     * // create a requests-3
     * cancellation.saveGroup(groupId1)
     * cancellation.saveGroup(groupId2)
     *
     * // then you will able to use 2 options
     *
     * // cancel requests-2 and requests-3
     * cancellation.cancelGroup(groupId1)
     *
     * // cancel only the requests-3
     * cancellation.cancelGroup(groupId2)
     *
     * @param {String} reason
     * @param {CachedRequestGroupId} [groupId=RequestsCache.getLastGroupId()]
     * @return {*}
     */
    static cancelGroup = (reason, groupId) => {
        const id = groupId || RequestsCache.getLastGroupId();
        const items = RequestsCache.getByGroupId(id);
        items.forEach(item => {
            item.cancel(reason);
            RequestsCache.deleteById(item.id);
        });
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