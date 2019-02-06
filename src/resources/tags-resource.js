
const RESOURCE = 'tags';

export default function TagsResource({apiHandler}) {
    return {
        getAll: async ({
            limit = null,
            offset = null,
            filter = null,
            q = null,
            sort = null,
        } = {}) => apiHandler.getAll(RESOURCE, {
            limit,
            offset,
            filter,
            q,
            sort,
        }),

        create: async ({name}) => apiHandler.post(`${RESOURCE}/`, {name}),

        get: async ({tag}) => apiHandler.get(`${RESOURCE}/${tag}`),

        /**
         * @param tag {String} The tag name
         * @param name {String} New unique tag name
         */
        update: async ({tag, name}) => apiHandler.put(`${RESOURCE}/${tag}`, {name}),

        delete: async ({tag}) => apiHandler.delete(`${RESOURCE}/${tag}`),

        tagCustomers: async ({tag, ids}) => apiHandler.post(
            `${RESOURCE}/${tag}/customers`,
            {customerIds: ids},
        ),

        tagCustomer: async ({tag, id}) => apiHandler.post(`${RESOURCE}/${tag}/customers/${id}`),

        untagCustomers: async ({tag, ids}) => apiHandler.deleteAll(
            `${RESOURCE}/${tag}/customers`,
            {customerIds: ids},
        ),

        untagCustomer: async ({tag, id}) => apiHandler.delete(`${RESOURCE}/${tag}/customers/${id}`),
    };
};
