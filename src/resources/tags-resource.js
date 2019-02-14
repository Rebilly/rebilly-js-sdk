
const RESOURCE = 'tags';

export default function TagsResource({apiHandler}) {
    return {
        async getAll({
            limit = null,
            offset = null,
            filter = null,
            q = null,
            sort = null,
        } = {}) {
            return apiHandler.getAll(RESOURCE, {
                limit,
                offset,
                filter,
                q,
                sort,
            });
        },

        async create({name}) {
            return apiHandler.post(`${RESOURCE}/`, {name});
        },

        async get ({tag}) {
            return apiHandler.get(`${RESOURCE}/${tag}`);
        },

        /**
         * @param tag {String} The tag name
         * @param name {String} New unique tag name
         */
        async update ({tag, name}) {
            return apiHandler.patch(`${RESOURCE}/${tag}`, {name});
        },

        async delete ({tag}) {
            return apiHandler.delete(`${RESOURCE}/${tag}`);
        },

        async tagCustomers ({tag, ids}) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers`, {customerIds: ids});
        },

        async tagCustomer ({tag, id}) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers/${id}`);
        },

        async untagCustomers ({tag, ids}) {
            return apiHandler.deleteAll(`${RESOURCE}/${tag}/customers`, {customerIds: ids});
        },

        async untagCustomer ({tag, id}) {
            return apiHandler.delete(`${RESOURCE}/${tag}/customers/${id}`);
        },
    };
};
