export default function PlansResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, expand = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                expand,
            };
            return apiHandler.getAll(`plans`, params);
        },

        get({id}) {
            return apiHandler.get(`plans/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`plans/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`plans/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`plans/${id}`);
        }
    };
};
