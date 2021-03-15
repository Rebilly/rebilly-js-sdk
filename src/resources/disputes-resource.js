import {csvHeader} from '../request-headers';

export default function DisputesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
            };
            return apiHandler.getAll(`disputes`, params);
        },

        downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q
                },
                headers: csvHeader
            };
            return apiHandler.download(`disputes`, config);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`disputes/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`disputes/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`disputes/${id}`, data, params);
        }
    };
};
