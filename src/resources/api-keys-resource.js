// @ts-nocheck
export default class ApiKeysResource {
    constructor({apiHandler}) {
        this.apiHandler = apiHandler
    }
        /**
    * @param { rebilly.GetApiKeyCollectionQuery } data
    * @returns { rebilly.GetApiKeyCollectionResponse } collection
    */
    getAll({limit = null, offset = null, sort = null} = {}) {
        const params = {
            limit,
            offset,
            sort
        };
        return this.apiHandler.getAll(`api-keys`, params);
    }

    /**
    * @returns { rebilly.GetApiKeysResponse } response
    */
    get({id}) {
        return this.apiHandler.get(`api-keys/${id}`);
    }

    /**
    * @param { rebilly.PostApiKeyRequest } data
    * @returns { rebilly.PostApiKeyResponse } response
    */
    create({id = '', data}) {
        return this.apiHandler.create(`api-keys/${id}`, id, data);
    }

    /**
    * @param { rebilly.PutApiKeyRequest } data
    * @returns { rebilly.PutApiKeyResponse} response
    */
    update({id, data}) {
        return this.apiHandler.put(`api-keys/${id}`, data);
    }

    /**
    * @returns { rebilly.DeleteApiKeyResponse} response
    */
    delete({id}) {
        return this.apiHandler.delete(`api-keys/${id}`);
    }

};
