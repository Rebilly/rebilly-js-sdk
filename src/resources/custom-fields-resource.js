export default function CustomFieldsResource({apiHandler}) {
    return {
        async getAll({resource, limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
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

        async delete({resource, name}) {
            return await apiHandler.delete(`custom-fields/${resource}/${name}`);
        }
    };
};
