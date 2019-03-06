export default function LayoutsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`layouts`, params);
        },

        get({id}) {
            return apiHandler.get(`layouts/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`layouts/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`layouts/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`layouts/${id}`);
        }
    };
};
