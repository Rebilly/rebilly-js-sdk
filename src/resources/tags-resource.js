
const RESOURCE = 'tags';

export default function TagsResource({apiHandler}) {
    return {
        async getAll({
            limit = null,
            offset = null,
            filter = null,
            q = null,
            sort = null,
            cancel = null,
        } = {}) {
            return apiHandler.getAll(RESOURCE, {
                limit,
                offset,
                filter,
                q,
                sort,
                cancel,
            });
        },

        async create({name}, params) {
            return apiHandler.post(`${RESOURCE}/`, {name}, {params: {...params}});
        },

        async get({tag}, params) {
            return apiHandler.get(`${RESOURCE}/${tag}`, params);
        },

        /**
         * @param tag {String} The tag name
         * @param name {String} New unique tag name
         * @param params {Object} Request parameters
         */
        async update({tag, name}, params) {
            return apiHandler.patch(`${RESOURCE}/${tag}`, {name}, params);
        },

        async delete({tag}, params) {
            return apiHandler.delete(`${RESOURCE}/${tag}`, params);
        },

        async tagCustomers({tag, ids}, params) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers`, {customerIds: ids}, {params: {...params}});
        },

        async tagCustomer({tag, id}, params) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers/${id}`, null, {params: {...params}});
        },

        async untagCustomers({tag, ids}, params) {
            return apiHandler.deleteAll(`${RESOURCE}/${tag}/customers`, {customerIds: ids}, params);
        },

        async untagCustomer({tag, id}, params) {
            return apiHandler.delete(`${RESOURCE}/${tag}/customers/${id}`, params);
        },
    };
}
