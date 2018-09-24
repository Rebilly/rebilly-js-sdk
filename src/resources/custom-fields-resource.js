export default function CustomFieldsResource({apiHandler}) {
    return {
        async getAll({resource, limit = null, offset = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                fields,
            };
            return await apiHandler.getAll(`custom-fields/${resource}`, params);
        },

        async get({resource, name}) {
            return await apiHandler.get(`custom-fields/${resource}/${name}`);
        },

        async create({resource, name, data}) {
            return await apiHandler.put(`custom-fields/${resource}/${name}`, data);
        },

        async update({resource, name, data}) {
            return await apiHandler.put(`custom-fields/${resource}/${name}`, data);
        },
    };
};
