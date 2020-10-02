export default function PaymentInstrumentsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`payment-instruments`, params);
        },

        get({id}) {
            return apiHandler.get(`payment-instruments/${id}`);
        },

        create({data}) {
            return apiHandler.post(`payment-instruments`, data);
        },

        update({id, data}) {
            return apiHandler.patch(`payment-instruments/${id}`, data);
        },

        deactivate({id}) {
            return apiHandler.post(`payment-instruments/${id}/deactivation`);
        },
    };
};
