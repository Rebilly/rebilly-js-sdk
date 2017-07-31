export default function LayoutsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`layouts`, params);
        },

        async get({id}) {
            return await apiHandler.get(`layouts/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`layouts/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`layouts/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`layouts/${id}`);
        }
    };
};
