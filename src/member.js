import deepFreeze from './deep-freeze';

/**
 * A single read-only entity member.
 * @typedef Member
 * @readonly
 * @prop response {Object}
 * @prop fields {Object}
 * @prop getJSON {Function: Object}
 */
export default class Member {
    constructor({data, status, statusText, headers}) {
        this.response = {status, statusText, headers};
        this.fields = {...data};
        deepFreeze(this);
    }

    /**
     * Returns a mutable JSON representation of the Member.
     * @returns {Object}
     */
    getJSON() {
        return JSON.parse(JSON.stringify({fields: this.fields}));
    }
}
