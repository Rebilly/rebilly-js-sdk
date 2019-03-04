export default function BankAccountsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`bank-accounts`, params);
        },

        get({id}) {
            return apiHandler.get(`bank-accounts/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`bank-accounts/${id}`, id, data);
        },

        deactivate({id}) {
            return apiHandler.post(`bank-accounts/${id}/deactivation`);
        }
    };
};
