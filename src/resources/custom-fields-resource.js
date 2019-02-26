const RESOURCE = 'custom-fields';

export default function CustomFieldsResource({apiHandler}) {
    return {
        async getAll({resource, limit = null, offset = null, fields = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                fields,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/${resource}`, params);
        },

        async get({resource, name}, params) {
            return await apiHandler.get(`${RESOURCE}/${resource}/${name}`, params);
        },

        async create({resource, name, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${resource}/${name}`, data, params);
        },

        async update({resource, name, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${resource}/${name}`, data, params);
        },
    };
}
