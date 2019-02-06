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

        async get({id, expand = null}) {
            const params = {expand};
            return await apiHandler.get(`checkout-pages/${id}`, params);
        },

        async create({id = '', data, expand = null}) {
            const params = {expand};
            return await apiHandler.create(`checkout-pages/${id}`, id, data, params);
        },

        async update({id, data, expand = null}) {
            const params = {expand};
            return await apiHandler.put(`checkout-pages/${id}`, data, params);
        },

        async delete({id}) {
            return await apiHandler.delete(`checkout-pages/${id}`);
        }
    };
};
