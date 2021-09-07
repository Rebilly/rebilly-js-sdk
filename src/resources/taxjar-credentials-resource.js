export default function TaxJarCredentialsResource({apiHandler}) {
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
            return apiHandler.getAll(`credential-hashes/taxjar`, params);
        },

        get({id}) {
            return apiHandler.get(`credential-hashes/taxjar/${id}`);
        },

        create({data}) {
            return apiHandler.post(`credential-hashes/taxjar`, data);
        },

        update({id, data}) {
            return apiHandler.patch(`credential-hashes/taxjar/${id}`, data);
        },
    };
};
