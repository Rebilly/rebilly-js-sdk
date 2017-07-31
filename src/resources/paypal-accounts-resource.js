export default function PayPalAccountsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`paypal-accounts`, params);
        },

        async get({id}) {
            return await apiHandler.get(`paypal-accounts/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`paypal-accounts/${id}`, id, data);
        },

        async activate({id, data}) {
            return await apiHandler.post(`paypal-accounts/${id}/activation`, data);
        },

        async deactivate({id}) {
            return await apiHandler.post(`paypal-accounts/${id}/deactivation`);
        }
    };
};
