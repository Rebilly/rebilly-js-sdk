export default function EmailMessagesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`email-messages`, params);
        },

        async get({id}) {
            return await apiHandler.get(`email-messages/${id}`);
        },

        async create({data}) {
            return await apiHandler.post(`email-messages`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`email-messages/${id}`);
        },

        async send({id, data={status:'outbox'}}) {
            return await apiHandler.patch(`email-messages/${id}`, data);
        }
    };
};

