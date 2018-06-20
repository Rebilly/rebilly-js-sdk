export default function KycDocuments({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q
            };
            return await apiHandler.getAll(`kyc-documents`, params);
        },

        async get({id, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.get(`kyc-documents/${id}`, params);
        },

        async create({data}) {
            return await apiHandler.create(`kyc-documents`, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`kyc-documents/${id}`, data);
        },

        async accept({id}) {
            return await apiHandler.post(`kyc-documents/${id}/acceptance`);
        },

        async reject({id, data}) {
            return await apiHandler.post(`kyc-documents/${id}/rejection`, data);
        }
    };
};
