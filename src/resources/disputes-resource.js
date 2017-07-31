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

        async get({id}) {
            return await apiHandler.get(`disputes/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`disputes/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`disputes/${id}`, data);
        }
    };
};
