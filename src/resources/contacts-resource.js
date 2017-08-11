import {csvHeader} from '../request-headers';

export default function ContactsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
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

        async get({id}) {
            return await apiHandler.get(`contacts/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`contacts/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`contacts/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`contacts/${id}`);
        }
    };
};
