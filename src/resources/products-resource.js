export default function ProductsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                fields
            };
            return apiHandler.getAll(`products`, params);
        },

        get({id}) {
            return apiHandler.get(`products/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`products/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`products/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`products/${id}`);
        }
    };
};
