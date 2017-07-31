export default function ShippingZonesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`shipping-zones`, params);
        },

        async get({id}) {
            return await apiHandler.get(`shipping-zones/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`shipping-zones/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`shipping-zones/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`shipping-zones/${id}`);
        }
    };
};
