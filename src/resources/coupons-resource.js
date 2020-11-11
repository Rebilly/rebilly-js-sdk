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

        get({id}) {
            return apiHandler.get(`coupons/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`coupons/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`coupons/${id}`, data);
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

        setExpiration({id, data}) {
            return apiHandler.post(`coupons/${id}/expiration`, data);
        }
    };
};
