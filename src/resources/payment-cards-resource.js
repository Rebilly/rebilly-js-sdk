export default function PaymentCardsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`payment-cards`, params);
        },

        get({id}) {
            return apiHandler.get(`payment-cards/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`payment-cards/${id}`, id, data);
        },

        patch({id = '', data}) {
            return apiHandler.patch(`payment-cards/${id}`, data);
        },

        deactivate({id}) {
            return apiHandler.post(`payment-cards/${id}/deactivation`);
        },
    };
};
