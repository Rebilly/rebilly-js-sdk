export default function EmailMessagesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`email-messages`, params);
        },

        get({id}) {
            return apiHandler.get(`email-messages/${id}`);
        },

        create({data}) {
            return apiHandler.post(`email-messages`, data);
        },

        delete({id}) {
            return apiHandler.delete(`email-messages/${id}`);
        },

        send({id, data={status:'outbox'}}) {
            return apiHandler.patch(`email-messages/${id}`, data);
        }
    };
};

