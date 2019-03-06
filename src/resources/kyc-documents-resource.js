export default function KycDocumentsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q
            };
            return apiHandler.getAll(`kyc-documents`, params);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`kyc-documents/${id}`, params);
        },

        create({data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`kyc-documents`, '', data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`kyc-documents/${id}`, data, params);
        },

        accept({id}) {
            return apiHandler.post(`kyc-documents/${id}/acceptance`);
        },

        reject({id, data}) {
            return apiHandler.post(`kyc-documents/${id}/rejection`, data);
        }
    };
};
