export default function OrganizationsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q
            };
            return await apiHandler.getAll(`organizations`, params);
        },

        async get({id}) {
            return await apiHandler.get(`organizations/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`organizations/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`organizations/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`organizations/${id}`);
        }
    };
};
