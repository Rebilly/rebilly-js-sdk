import {csvHeader} from '../request-headers';

export default function WebsitesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`websites`, params);
        },

        async downloadCSV({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
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
            return await apiHandler.download(`websites`, config);
        },

        async get({id}) {
            return await apiHandler.get(`websites/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`websites/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`websites/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`websites/${id}`);
        }
    };
};
