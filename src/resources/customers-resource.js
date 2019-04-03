import {csvHeader} from '../request-headers';

export default function CustomersResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`customers`, params);
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
            return apiHandler.download(`customers`, config);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`customers/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`customers/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`customers/${id}`, data, params);
        },

        getLeadSource({id}) {
            return apiHandler.get(`customers/${id}/lead-source`);
        },

        createLeadSource({id, data}) {
            return apiHandler.put(`customers/${id}/lead-source`, data);
        },

        updateLeadSource({id, data}) {
            return apiHandler.put(`customers/${id}/lead-source`, data);
        },

        deleteLeadSource({id}) {
            return apiHandler.delete(`customers/${id}/lead-source`);
        },

        getAllUpcomingInvoices({id, limit = null, offset = null, sort = null, filter = null, expand = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                expand,
            };
            return apiHandler.getAll(`customers/${id}/upcoming-invoices`, params);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`customers/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`customers/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`customers/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`customers/${id}/timeline`, '', data);
        },
    };
};
