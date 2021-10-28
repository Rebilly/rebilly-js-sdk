// @ts-nocheck
import Member from './member';
import paginationHeaders from './pagination-headers';
import deepFreeze from './deep-freeze';

/**
 * A collection of read-only entity members.
 * @example
 * const api = RebillyAPI();
 * const customers = api.customers.getAll();
 * const rawData = customers.getJSON();
 * const totalCount = customers.total;
 */
export default class Collection {
    constructor({data, status, statusText, headers}, config = {}) {
        /**
         * @type {number|null}
         */
        this.limit = null;

        /**
         * @type {number|null}
         */
        this.offset = null;

        /**
         * @type {number|null}
         */
        this.total = null;

        Object.keys(paginationHeaders).forEach((header) => {
            const value = headers[paginationHeaders[header]];
            this[header] = value ? Number(value) : null;
        });

        /**
         * @type {Object}
         */
        this.response = {status, statusText, headers};

        /**
         * @type {Array<Member>}
         */
        this.items = data.map(member => new Member({data: member, status, statusText, headers}));

        /**
         * Original request configuration
         * @type {Object}
         */
        this.config = config;

        deepFreeze(this, {exclude: ['cancelToken']});
    }

    /**
     * Returns a mutable JSON representation of the Collection.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({items: this.items}));
    }
}
