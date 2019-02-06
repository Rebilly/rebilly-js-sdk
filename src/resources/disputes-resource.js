import {csvHeader} from '../request-headers';

export default function DisputesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`disputes`, params);
        },

        async getAllMatchedRules({id}) {
            return await apiHandler.getAll(`disputes/${id}/matched-rules`);
        },

        async downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q,
                    criteria
                },
                headers: csvHeader
            };
            return await apiHandler.download(`disputes`, config);
        },

        async get({id, expand = null}) {
            const params = {expand};
            return await apiHandler.get(`disputes/${id}`, params);
        },

        async create({id = '', data, expand = null}) {
            const params = {expand};
            return await apiHandler.create(`disputes/${id}`, id, data, params);
        },

        async update({id, data, expand = null}) {
            const params = {expand};
            return await apiHandler.put(`disputes/${id}`, data, params);
        }
    };
};
