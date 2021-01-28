export default function InvoicesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`invoices`, params);
        },

        get({id = null} = {}) {
            return apiHandler.get(`invoices/${id}`);
        },
    }
}
