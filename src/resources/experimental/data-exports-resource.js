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

        async get({id}) {
            return await apiHandler.get(`data-exports/${id}`);
        },

        async queue({data}) {
            return await apiHandler.post('data-exports', data);
        },

        async update ({id, data}) {
            return await apiHandler.put(`data-exports/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`data-exports/${id}`);
        }
    };
};
