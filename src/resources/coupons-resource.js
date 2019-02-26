const RESOURCE = 'coupons';
const REDEMPTION = 'coupons-redemptions';

export default function CouponsResource({apiHandler}) {
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

        async get({redemptionCode}, params) {
            return await apiHandler.get(`${RESOURCE}/${redemptionCode}`, params);
        },

        async create({redemptionCode = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${redemptionCode}`, redemptionCode, data, params);
        },

        async update({redemptionCode, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${redemptionCode}`, data, params);
        },

        async getAllRedemptions({limit = null, offset = null, sort = null, filter = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(REDEMPTION, params);
        },

        async getRedemption({id}, params) {
            return await apiHandler.get(`${REDEMPTION}/${id}`, params);
        },

        async cancelRedemption({id}, params) {
            return await apiHandler.post(`${REDEMPTION}/${id}/cancel`, null, {params: {...params}});
        },

        async redeem({data}, params) {
            return await apiHandler.post(REDEMPTION, data, {params: {...params}});
        },

        async setExpiry({redemptionCode, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${redemptionCode}/expiration`, data, {params: {...params}});
        }
    };
}
