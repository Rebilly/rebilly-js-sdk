import {csvHeader} from '../request-headers';

export default function WebsitesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`websites`, params);
        },

        downloadCSV({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
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
            return apiHandler.download(`websites`, config);
        },

        get({id}) {
            return apiHandler.get(`websites/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`websites/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`websites/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`websites/${id}`);
        }
    };
};
