export default function ApiKeysResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetApiKeyCollectionRequest } data
        * @returns { rebilly.GetApiKeyCollectionResponse } collection
        */
        // @ts-ignore
        getAll({limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort
            };
            return apiHandler.getAll(`api-keys`, params);
        },

        /**
        * @returns { rebilly.GetApiKeyResponse } response
        */
        get({id}) {
            return apiHandler.get(`api-keys/${id}`);
        },

        /**
        * @param { rebilly.PostApiKeyDataRequest } data
        * @returns { rebilly.PostApiKeyResponse } response
        */
        create({id = '', data}) {
            return apiHandler.create(`api-keys/${id}`, id, data);
        },

        /**
        * @param { rebilly.PutApiKeyDataRequest } data
        * @returns { rebilly.PutApiKeyResponse} response
        */
        update({id, data}) {
            return apiHandler.put(`api-keys/${id}`, data);
        },

        /**
        * @returns { rebilly.DeleteApiKeyResponse} response
        */
        delete({id}) {
            return apiHandler.delete(`api-keys/${id}`);
        }
    };
};