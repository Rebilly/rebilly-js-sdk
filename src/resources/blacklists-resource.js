export default function BlacklistsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, q = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q,
                filter
            };
            return await apiHandler.getAll(`blacklists`, params);
        },

        async get({id}) {
            return await apiHandler.get(`blacklists/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`blacklists/${id}`, id, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`blacklists/${id}`);
        }
    };
};
