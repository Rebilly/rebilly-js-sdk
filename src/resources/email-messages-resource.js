const RESOURCE = 'email-messages';

export default function EmailMessagesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({data}, params) {
            return await apiHandler.post(RESOURCE, data, null, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        },

        async send({id, data={status:'outbox'}}, params) {
            return await apiHandler.patch(`${RESOURCE}/${id}`, data, params);
        }
    };
}

