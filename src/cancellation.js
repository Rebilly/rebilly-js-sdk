import RequestsCache from './requests-cache';

/**
 * Requests cancellation functionality.
 * @static
 */
export class Cancellation {
    /**
     * Cancel single request by request id.
     *
     * @typedef {String} CachedRequestId - unique request id
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
}

/**
 * Public cancellation methods (exported in library)
 */
export default {
    /**
     * @type Cancellation.cancelAll
     */
    cancelAll: (...args) => Cancellation.cancelAll(...args),
};
