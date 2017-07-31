export default function ApiKeysResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort
            };
            return await apiHandler.getAll(`api-keys`, params);
        },

        async get({id}) {
            return await apiHandler.get(`api-keys/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`api-keys/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`api-keys/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`api-keys/${id}`);
        }
    };
};
