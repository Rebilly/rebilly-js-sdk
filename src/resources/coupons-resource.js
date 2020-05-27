export default function CouponsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`coupons`, params);
        },

        get({redemptionCode}) {
            return apiHandler.get(`coupons/${redemptionCode}`);
        },

        create({redemptionCode = '', data}) {
            return apiHandler.create(`coupons/${redemptionCode}`, redemptionCode, data);
        },

        update({redemptionCode, data}) {
            return apiHandler.put(`coupons/${redemptionCode}`, data);
        },

        getAllRedemptions({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`coupons-redemptions`, params);
        },

        getRedemption({id}) {
            return apiHandler.get(`coupons-redemptions/${id}`);
        },

        cancelRedemption({id}) {
            return apiHandler.post(`coupons-redemptions/${id}/cancel`);
        },

        redeem({data}) {
            return apiHandler.post(`coupons-redemptions`, data);
        },

        setExpiration({redemptionCode, data}) {
            return apiHandler.post(`coupons/${redemptionCode}/expiration`, data);
        }
    };
};
