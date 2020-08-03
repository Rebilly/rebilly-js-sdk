export default function CheckoutFormsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                q
            };
            return apiHandler.getAll(`checkout-forms`, params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`checkout-forms/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`checkout-forms/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`checkout-forms/${id}`, data, params);
        },

        delete({id}) {
            return apiHandler.delete(`checkout-forms/${id}`);
        }
    };
};
