import {csvHeader} from '../request-headers';

export default function ContactsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`contacts`, params);
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
            return await apiHandler.download(`contacts`, config);
        },

        async get({id, expand = null}) {
            const params = {expand};
            return await apiHandler.get(`contacts/${id}`, params);
        },

        async create({id = '', data, expand = null}) {
            const params = {expand};
            return await apiHandler.create(`contacts/${id}`, id, data, params);
        },

        async update({id, data, expand = null}) {
            const params = {expand};
            return await apiHandler.put(`contacts/${id}`, data, params);
        },

        async delete({id}) {
            return await apiHandler.delete(`contacts/${id}`);
        }
    };
};
