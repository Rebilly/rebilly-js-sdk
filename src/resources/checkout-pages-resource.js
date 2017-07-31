export default function CheckoutPagesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                q
            };
            return await apiHandler.getAll(`checkout-pages`, params);
        },

        async get({id}) {
            return await apiHandler.get(`checkout-pages/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`checkout-pages/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`checkout-pages/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`checkout-pages/${id}`);
        }
    };
};
