import axios from 'axios';
import shortid from 'shortid';
import deepFreeze from './deep-freeze';

/**
 * @typedef {String} CachedRequestId - unique request id
 */

/**
 * Cached request object.
 * Used in {@link RequestsCache}
 *
 * @typedef CachedRequest
 * @readonly
 *
 * @prop {CachedRequestId} id - request id
 * @prop {number} created - created time
 * @prop {Canceler} cancel - cancel function, axios Canceler
 * @prop {CancelToken} cancelToken - axios CancelToken
 */
export default class CachedRequest {
    constructor({id, created} = {}) {
        this.id = id || shortid.generate();
        this.created = created || new Date().getTime();

        this.cancelSource = axios.CancelToken.source();

        /**
         * please don't forget delete request
         * from the cache after cancellation
         *
         * see {@link Cancellation.cancelById}
         * @type {Canceler}
         */
        this.cancel = this.cancelSource.cancel;
        this.cancelToken = this.cancelSource.token;
        deepFreeze(this, {exclude: ['cancelSource', 'cancelToken', 'cancel']});
    }
}