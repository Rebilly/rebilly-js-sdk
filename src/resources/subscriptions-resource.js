import {csvHeader} from '../request-headers';

export default function SubscriptionsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q
            };
            return apiHandler.getAll(`subscriptions`, params);
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
            return apiHandler.download(`subscriptions`, config);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`subscriptions/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`subscriptions/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`subscriptions/${id}`, data, params);
        },

        changePlan({id, data}) {
            return apiHandler.post(`subscriptions/${id}/change-plan`, data);
        },

        getAllUpcomingInvoices({id, limit = null, offset = null, sort = null, filter = null, expand = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                expand,
            };
            return apiHandler.getAll(`subscriptions/${id}/upcoming-invoices`, params);
        },

        issueUpcomingInvoice({id, invoiceId, data = {}}) {
            return apiHandler.post(`subscriptions/${id}/upcoming-invoices/${invoiceId}/issue`, data);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`subscriptions/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`subscriptions/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`subscriptions/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`subscriptions/${id}/timeline`, '', data);
        },
        createInterimInvoice({id, data = {}}) {
            return apiHandler.post(`subscriptions/${id}/interim-invoice`, data);
        }
    };
};
