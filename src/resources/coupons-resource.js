export default function CouponsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`coupons`, params);
        },

        async get({redemptionCode}) {
            return await apiHandler.get(`coupons/${redemptionCode}`);
        },

        async create({redemptionCode = '', data}) {
            return await apiHandler.create(`coupons/${redemptionCode}`, redemptionCode, data);
        },

        async update({redemptionCode, data}) {
            return await apiHandler.put(`coupons/${redemptionCode}`, data);
        },

        async getAllRedemptions({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`coupons-redemptions`, params);
        },

        async getRedemption({id}) {
            return await apiHandler.get(`coupons-redemptions/${id}`);
        },

        async cancelRedemption({id}) {
            return await apiHandler.post(`coupons-redemptions/${id}/cancel`);
        },

        async redeem({data}) {
            return await apiHandler.post(`coupons-redemptions`, data);
        }
    };
};
