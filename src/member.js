// import deepFreeze from './deep-freeze';

/**
 * A single read-only entity member.
 * @typedef Member
 * @readonly
 * @prop response {Object}
 * @prop fields {Object}
 * @prop getJSON {Function: Object}
 * @prop config {Object} original request configuration
 */
export default class Member {
    constructor({data, status, statusText, headers}, config = {}) {
        this.response = {status, statusText, headers};
        this.fields = {...data};
        this.config = config;
        // temporary solution for Firefox
        // deepFreeze(this);
    }

    /**
     * Returns a mutable JSON representation of the Member.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({fields: this.fields}));
    }
}
