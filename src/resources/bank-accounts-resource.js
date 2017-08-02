export default function BankAccountsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`bank-accounts`, params);
        },

        async get({id}) {
            return await apiHandler.get(`bank-accounts/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`bank-accounts/${id}`, id, data);
        },

        async deactivate({id}) {
            return await apiHandler.post(`bank-accounts/${id}/deactivation`);
        }
    };
};
