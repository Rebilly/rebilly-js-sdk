export default function CheckoutPagesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                q
            };
            return apiHandler.getAll(`checkout-pages`, params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`checkout-pages/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`checkout-pages/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`checkout-pages/${id}`, data, params);
        },

        delete({id}) {
            return apiHandler.delete(`checkout-pages/${id}`);
        }
    };
};
