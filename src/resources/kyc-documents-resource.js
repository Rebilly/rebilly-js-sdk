const RESOURCE = 'kyc-documents';

export default function KycDocumentsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, cancel = null,} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id, expand = null}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, {expand, ...params});
        },

        async create({data, expand = null}, params) {
            return await apiHandler.create(RESOURCE, '', data, {expand, ...params});
        },

        async update({id, data, expand = null}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, {expand, ...params});
        },

        async accept({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/acceptance`, null, {params: {...params}});
        },

        async reject({id, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/rejection`, data, {params: {...params}});
        }
    };
}
