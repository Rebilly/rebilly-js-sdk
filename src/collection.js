import Member from './member';
import paginationHeaders from './pagination-headers';
import deepFreeze from './deep-freeze';

/**
 * A collection of read-only entity members.
 * @typedef Collection
 * @readonly
 * @prop limit {number}
 * @prop offset {number}
 * @prop total {number}
 * @prop items {Array<Member>}
 * @prop response {Object}
 * @prop getJSON {Function: Object}
 * @example
 * const api = new RebillyAPI();
 * const customers = api.customers.getAll();
 * const rawData = customers.getJSON();
 * const totalCount = customers.total;
 */
export default class Collection {
    constructor({data, status, statusText, headers}) {
        Object.keys(paginationHeaders).forEach(header => this[header] = Number(headers[paginationHeaders[header]]));
        this.response = {status, statusText, headers};
        this.items = data.map(member => new Member({data: member, status, statusText, headers}));
        deepFreeze(this);
    }

    /**
     * Returns a mutable JSON representation of the Collection.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({items: this.items}));
    }
}
