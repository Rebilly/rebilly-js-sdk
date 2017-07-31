export default function ListsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`lists`, params);
        },

        async get({id, version = ''}) {
            return await apiHandler.get(`lists/${id}/${version}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`lists/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`lists/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`lists/${id}`);
        }
    };
};
