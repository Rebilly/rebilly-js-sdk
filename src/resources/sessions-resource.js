export default function SessionsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`sessions`, params);
        },

        async get({id}) {
            return await apiHandler.get(`sessions/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`sessions/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`sessions/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`sessions/${id}`);
        }
    };
};
