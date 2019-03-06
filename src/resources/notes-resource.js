export default function NotesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return apiHandler.getAll(`notes`, params);
        },

        get({id}) {
            return apiHandler.get(`notes/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`notes/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`notes/${id}`, data);
        }
    };
};
