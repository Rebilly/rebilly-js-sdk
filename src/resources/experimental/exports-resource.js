export default function ExportsResource({apiHandler}) {
    return {
        async getAll({resource, limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`exports/${resource}`, params);
        },

        async get({resource, id}) {
            return await apiHandler.get(`exports/${resource}/${id}`);
        },

        async queue({resource, data}) {
            return await apiHandler.post(`exports/${resource}`, data);
        }
    };
};
