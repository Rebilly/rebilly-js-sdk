export default function BlacklistsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, q = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q,
                filter
            };
            return apiHandler.getAll(`blacklists`, params);
        },

        get({id}) {
            return apiHandler.get(`blacklists/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`blacklists/${id}`, id, data);
        },

        delete({id}) {
            return apiHandler.delete(`blacklists/${id}`);
        }
    };
};
