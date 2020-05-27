export default function PaymentTokensResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`tokens`, params);
        },

        get({id}) {
            return apiHandler.get(`tokens/${id}`);
        },

        create({data}) {
            return apiHandler.post(`tokens`, data);
        },
    };
};
