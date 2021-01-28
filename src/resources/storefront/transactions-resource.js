export default function TransactionsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`transactions`, params);
        },

        get({id = null} = {}) {
            return apiHandler.get(`transactions/${id}`);
        },

        update({id = null, data = null} = {}) {
           return apiHandler.patch(`transactions/${id}`, data);
        }
    }
}
