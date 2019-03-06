
const RESOURCE = 'tags';

export default function TagsResource({apiHandler}) {
    return {
        getAll({
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

        create({name}) {
            return apiHandler.post(`${RESOURCE}/`, {name});
        },

        get ({tag}) {
            return apiHandler.get(`${RESOURCE}/${tag}`);
        },

        /**
         * @param tag {String} The tag name
         * @param name {String} New unique tag name
         */
        update ({tag, name}) {
            return apiHandler.patch(`${RESOURCE}/${tag}`, {name});
        },

        delete ({tag}) {
            return apiHandler.delete(`${RESOURCE}/${tag}`);
        },

        tagCustomers ({tag, ids}) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers`, {customerIds: ids});
        },

        tagCustomer ({tag, id}) {
            return apiHandler.post(`${RESOURCE}/${tag}/customers/${id}`);
        },

        untagCustomers ({tag, ids}) {
            return apiHandler.deleteAll(`${RESOURCE}/${tag}/customers`, {customerIds: ids});
        },

        untagCustomer ({tag, id}) {
            return apiHandler.delete(`${RESOURCE}/${tag}/customers/${id}`);
        },
    };
};
