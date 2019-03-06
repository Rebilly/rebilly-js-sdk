export default function ListsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                fields
            };
            return apiHandler.getAll(`lists`, params);
        },

        get({id, version = ''}) {
            return apiHandler.get(`lists/${id}/${version}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`lists/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`lists/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`lists/${id}`);
        }
    };
};
