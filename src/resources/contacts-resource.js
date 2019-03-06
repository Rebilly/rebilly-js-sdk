import {csvHeader} from '../request-headers';

export default function ContactsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`contacts`, params);
        },

        downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
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
            return apiHandler.download(`contacts`, config);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`contacts/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`contacts/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`contacts/${id}`, data, params);
        },

        delete({id}) {
            return apiHandler.delete(`contacts/${id}`);
        }
    };
};
