export default function CustomFieldsResource({apiHandler}) {
    return {
        getAll({resource, limit = null, offset = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                fields,
            };
            return apiHandler.getAll(`custom-fields/${resource}`, params);
        },

        get({resource, name}) {
            return apiHandler.get(`custom-fields/${resource}/${name}`);
        },

        create({resource, name, data}) {
            return apiHandler.put(`custom-fields/${resource}/${name}`, data);
        },

        update({resource, name, data}) {
            return apiHandler.put(`custom-fields/${resource}/${name}`, data);
        },
    };
};
