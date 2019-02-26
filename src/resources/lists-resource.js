const RESOURCE = 'lists';

export default function ListsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                fields,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id, version = ''}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/${version}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
