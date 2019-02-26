const RESOURCE = 'checkout-pages';

export default function CheckoutPagesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                q,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id, expand = null}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, {expand, ...params});
        },

        async create({id = '', data, expand = null}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, {expand, ...params});
        },

        async update({id, data, expand = null}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, {expand, ...params});
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
