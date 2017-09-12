/**
 * Simple structure for handling file payloads from the API.
 */
export default class File {
    constructor({data, status, statusText, headers}) {
        this.response = {status, statusText, headers};
        this.data = data;
    }
}
