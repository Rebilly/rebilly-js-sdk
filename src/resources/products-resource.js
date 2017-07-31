export default function ProductsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`products`, params);
        },

        async get({id}) {
            return await apiHandler.get(`products/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`products/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`products/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`products/${id}`);
        }
    };
};
