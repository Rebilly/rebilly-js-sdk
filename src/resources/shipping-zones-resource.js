const RESOURCE = 'shipping-zones';

export default function ShippingZonesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
