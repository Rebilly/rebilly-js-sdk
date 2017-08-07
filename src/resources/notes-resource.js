export default function NotesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`notes`, params);
        },

        async get({id}) {
            return await apiHandler.get(`notes/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`notes/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`notes/${id}`, data);
        }
    };
};
