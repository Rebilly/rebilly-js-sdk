import {csvHeader} from '../request-headers';

const RESOURCE = 'disputes';

export default function DisputesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async getAllMatchedRules({id}, params) {
            return await apiHandler.getAll(`${RESOURCE}/${id}/matched-rules`, params);
        },

        async downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q,
                    criteria,
                    cancel,
                },
                headers: csvHeader
            };
            return await apiHandler.download(RESOURCE, config);
        },

        async get({id, expand = null}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, {expand, ...params});
        },

        async create({id = '', data, expand = null}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, {expand, ...params});
        },

        async update({id, data, expand = null}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, {expand, ...params});
        }
    };
}
