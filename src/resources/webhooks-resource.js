export default function WebhooksResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`webhooks`, params);
        },

        async get({id}) {
            return await apiHandler.get(`webhooks/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`webhooks/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`webhooks/${id}`, data);
        }
    };
};
