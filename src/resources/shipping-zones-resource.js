export default function ShippingZonesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return apiHandler.getAll(`shipping-zones`, params);
        },

        get({id}) {
            return apiHandler.get(`shipping-zones/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`shipping-zones/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`shipping-zones/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`shipping-zones/${id}`);
        }
    };
};
