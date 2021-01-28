export default function KycDocumentsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`kyc-documents`, params);
        },

        get({id = null} = {}) {
            return apiHandler.get(`kyc-documents/${id}`);
        },

        create({data = null} = {}) {
            return apiHandler.post(`kyc-documents`, data);
        },

        update({id = null, data = null} = {}) {
            return apiHandler.patch(`kyc-documents/${id}`, data);
        }
    }
}
