export default function PaymentTokensResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`tokens`, params);
        },

        get({token}) {
            return apiHandler.get(`tokens/${token}`);
        },

        create({data}) {
            return apiHandler.post(`tokens`, data);
        },
    };
};
