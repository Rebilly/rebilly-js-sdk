export default function KycDocumentsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`kyc-documents`, params);
        },

        get({id} = {}) {
            return apiHandler.get(`kyc-documents/${id}`);
        },

        create({data} = {}) {
            return apiHandler.post(`kyc-documents`, data);
        },

        update({id, data} = {}) {
            return apiHandler.patch(`kyc-documents/${id}`, data);
        }
    }
}
