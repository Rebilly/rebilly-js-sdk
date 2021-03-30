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

        get({id} = {}) {
            return apiHandler.get(`transactions/${id}`);
        },

        update({id, data} = {}) {
           return apiHandler.patch(`transactions/${id}`, data);
        }
    }
}
