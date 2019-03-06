export default function WebhooksResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                filter
            };
            return apiHandler.getAll(`webhooks`, params);
        },

        get({id}) {
            return apiHandler.get(`webhooks/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`webhooks/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`webhooks/${id}`, data);
        }
    };
};
