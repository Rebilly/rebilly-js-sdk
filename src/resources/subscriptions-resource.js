import {csvHeader} from '../request-headers';

export default function SubscriptionsResource({apiHandler}) {
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
            return apiHandler.getAll(`subscriptions`, params);
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

        /**
         * Use resource `subscriptionCancellations` instead.
         * @deprecated
         * @param id
         * @param data
         * @returns {Promise<any>}
         */
        cancel({id, data}) {
            return apiHandler.post(`subscriptions/${id}/cancel`, data);
        },

        changePlan({id, data}) {
            return apiHandler.post(`subscriptions/${id}/change-plan`, data);
        },

        getAllUpcomingInvoices({id = null, limit = null, offset = null, sort = null, filter = null, expand = null} = {}) {
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

        getAllTimelineMessages({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`subscriptions/${id}/timeline`, params);
        },

        getTimelineMessage({id = null, messageId = ''} = {}) {
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
