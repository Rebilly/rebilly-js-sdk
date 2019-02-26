const RESOURCE = 'webhooks';

export default function WebhooksResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        }
    };
}
