export default function ApiKeysResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort
            };
            return apiHandler.getAll(`api-keys`, params);
        },

        get({id}) {
            return apiHandler.get(`api-keys/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`api-keys/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`api-keys/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`api-keys/${id}`);
        }
    };
};
