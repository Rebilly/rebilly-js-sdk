export default function PlaidCredentialsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                fields,
            };
            return apiHandler.getAll(`credential-hashes/plaid`, params);
        },

        get({id}) {
            return apiHandler.get(`credential-hashes/plaid/${id}`);
        },

        create({data}) {
            return apiHandler.post(`credential-hashes/plaid`, data);
        },

        update({id, data}) {
            return apiHandler.patch(`credential-hashes/plaid/${id}`, data);
        },
    };
};
