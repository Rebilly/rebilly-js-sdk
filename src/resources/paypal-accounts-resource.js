const RESOURCE = 'paypal-accounts';

export default function PayPalAccountsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async activate({id, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/activation`, data, {params: {...params}});
        },

        async deactivate({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/deactivation`, null, {params: {...params}});
        }
    };
}
