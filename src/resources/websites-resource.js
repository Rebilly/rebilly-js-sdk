import {csvHeader} from '../request-headers';

const RESOURCE = 'websites';

export default function WebsitesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
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

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
