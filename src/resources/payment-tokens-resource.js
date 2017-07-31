export default function PaymentTokensResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`tokens`, params);
        },

        async get({id}) {
            return await apiHandler.get(`tokens/${id}`);
        },

        async create({data}) {
            return await apiHandler.post(`tokens`, data);
        },

        async expire({id}) {
            return await apiHandler.post(`tokens/${id}/expiration`);
        }
    };
};
