// @ts-nocheck
import deepFreeze from './deep-freeze';

/**
 * A single read-only entity member.
 */
export default class Member {
    constructor({data, status, statusText, headers}, config = {}) {
        /**
         * @type {Object}
         */
        this.response = {status, statusText, headers};

        /**
         * @type {Object}
         */
        this.fields = {...data};

        /**
         * Original request configuration
         * @type {Object}
         */
        this.config = config;
        deepFreeze(this, {exclude: ['cancelToken']});
    }

    /**
     * Returns a mutable JSON representation of the Member.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({fields: this.fields}));
    }
}
