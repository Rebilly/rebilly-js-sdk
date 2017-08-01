export default function PaymentCardsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q
            };
            return await apiHandler.getAll(`payment-cards`, params);
        },

        async getAllMatchedRules({id}) {
            return await apiHandler.getAll(`payment-cards/${id}/matched-rules`);
        },

        async get({id}) {
            return await apiHandler.get(`payment-cards/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`payment-cards/${id}`, id, data);
        },

        async authorize({id, data}) {
            return await apiHandler.post(`payment-cards/${id}/authorization`, data);
        },

        async deactivate({id}) {
            return await apiHandler.post(`payment-cards/${id}/deactivation`);
        },

        async getAllMigratable({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`payment-cards-migrations`, params);
        },

        async migrate({data}) {
            return await apiHandler.post(`payment-cards-migrations/migrate`, data);
        }
    };
};
