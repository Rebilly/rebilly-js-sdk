const RESOURCE = 'data-exports';

export default function DataExportsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id, expand = null}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, {expand, ...params});
        },

        async queue({data, expand = null}, params) {
            return await apiHandler.post('data-exports', data, {params: {expand, ...params}});
        },

        async update ({id, data, expand = null}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, {expand, ...params});
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
