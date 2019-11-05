export default function BroadcastMessagesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`broadcast-messages`, params);
        },

        get({id}) {
            return apiHandler.get(`broadcast-messages/${id}`);
        },

        create({data}) {
            return apiHandler.post(`broadcast-messages`, data);
        },

        update({id, data}) {
            return apiHandler.patch(`broadcast-messages/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`broadcast-messages/${id}`);
        },
    };
};

