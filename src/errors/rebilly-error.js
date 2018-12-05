export default class RebillyError extends Error {
    constructor({error, name = null}) {
        let {config = null, response = null, request = null, message = null} = error;
        let errorMessage = message || 'Request Error';
        if (response && response.data && response.data.error) {
            errorMessage = response.data.error;
        }
        super(errorMessage);
        this.name = name || 'RebillyError';
        this.response = response;
        this.request = request;
        this.config = config;
        this.status = response && response.status ? response.status : null;
        this.statusText = response && response.statusText ? response.statusText : null;
        this.details = response ? (response.data && response.data.details ? response.data.details : null ) : null;
        this.invalidFields = response ? (response.data && response.data.invalidFields ? response.data.invalidFields : null ) : null;
    }
}
