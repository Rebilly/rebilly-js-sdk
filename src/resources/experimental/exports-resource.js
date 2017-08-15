export default function ExportsResource({apiHandler}) {
    return {
        async getAll({resource, sort = null, filter = null, q = null, criteria = null}) {
            const params = {
                sort,
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
