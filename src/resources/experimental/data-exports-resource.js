export default function DataExportsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll('data-exports', params);
        },

        async get({id, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.get(`data-exports/${id}`, params);
        },

        async queue({data, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.post('data-exports', data);
        },

        async update ({id, data, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.put(`data-exports/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`data-exports/${id}`);
        }
    };
};
