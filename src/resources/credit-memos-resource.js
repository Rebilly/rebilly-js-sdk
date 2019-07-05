export default function CreditMemosResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`credit-memos`, params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`credit-memos/${id}`, params);
        },

        getAllTransactions({id}) {
            return apiHandler.getAll(`credit-memos/${id}/transactions`);
        },
    };
};
