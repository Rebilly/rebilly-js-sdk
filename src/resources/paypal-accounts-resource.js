export default function PayPalAccountsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`paypal-accounts`, params);
        },

        get({id}) {
            return apiHandler.get(`paypal-accounts/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`paypal-accounts/${id}`, id, data);
        },

        deactivate({id}) {
            return apiHandler.post(`paypal-accounts/${id}/deactivation`);
        }
    };
};
