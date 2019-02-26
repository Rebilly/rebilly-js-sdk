const RESOURCE = 'payment-cards';
const MIGRATION = 'payment-cards-migrations';


export default function PaymentCardsResource({apiHandler}) {
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

        async getAllMatchedRules({id}, params) {
            return await apiHandler.getAll(`${RESOURCE}/${id}/matched-rules`, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async patch({id = '', data}, params) {
            return await apiHandler.patch(`${RESOURCE}/${id}`, data, params);
        },

        async authorize({id, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/authorization`, data, {params: {...params}});
        },

        async deactivate({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/deactivation`, null, {params: {...params}});
        },

        async getAllMigratable({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(MIGRATION, params);
        },

        async migrate({data}, params) {
            return await apiHandler.post(`${MIGRATION}/migrate`, data, {params: {...params}});
        }
    };
}
