// @ts-nocheck
import axios from 'axios';
import {nanoid} from 'nanoid/non-secure';
import deepFreeze from './deep-freeze';

/**
 * @typedef {String} CachedRequestId - unique request id
 */

/**
 * Cached request object.
 * Used in {@link RequestsCache}
 * @readonly
 */
export default class CachedRequest {
    constructor({id=null, created=null} = {}) {
        /**
         * Request Id
         * @type {CachedRequestId}
         */
        this.id = id || nanoid();

        /**
         * Created time
         * @type {number}
         */
        this.created = created || new Date().getTime();

        this.cancelSource = axios.CancelToken.source();

        /**
         * Cancel function, axios Canceler.
         * please don't forget to delete request
         * from the cache after cancellation
         *
         * see {@link Cancellation.cancelById}
         * @type {Canceler}
         */
        this.cancel = this.cancelSource.cancel;

        /**
         * Axios CancelToken
         * @type {CancelToken}
         */
        this.cancelToken = this.cancelSource.token;
        deepFreeze(this, {exclude: ['cancelSource', 'cancelToken', 'cancel']});
    }
}

