export default function DataExportsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll('data-exports', params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`data-exports/${id}`, params);
        },

        queue({data, expand = null}) {
            const params = {expand};
            return apiHandler.post('data-exports', data, params);
        },

        update ({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`data-exports/${id}`, data, params);
        },

        delete({id}) {
            return apiHandler.delete(`data-exports/${id}`);
        }
    };
};
