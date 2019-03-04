import {pdfHeader, csvHeader} from '../request-headers';

export default function InvoicesResource({apiHandler}) {
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
            return apiHandler.getAll(`invoices`, params);
        },

        getAllMatchedRules({id}) {
            return apiHandler.getAll(`invoices/${id}/matched-rules`);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`invoices/${id}`, params);
        },

        downloadPDF({id}) {
            const config = {
                headers: pdfHeader,
                responseType: 'arraybuffer'
            };
            return apiHandler.download(`invoices/${id}`, config);
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
            return apiHandler.download(`invoices`, config);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`invoices/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`invoices/${id}`, data, params);
        },

        issue({id, data = {}}) {
            return apiHandler.post(`invoices/${id}/issue`, data);
        },

        abandon({id}) {
            return apiHandler.post(`invoices/${id}/abandon`, null);
        },

        void({id}) {
            return apiHandler.post(`invoices/${id}/void`, null);
        },

        getAllInvoiceItems({id, limit = null, offset = null, expand = null}) {
            const params = {
                limit,
                offset,
                expand,
            };
            return apiHandler.getAll(`invoices/${id}/items`, params);
        },

        createInvoiceItem({id, data}) {
            return apiHandler.post(`invoices/${id}/items`, data);
        },

        getLeadSource({id}) {
            return apiHandler.get(`invoices/${id}/lead-source`);
        },

        createLeadSource({id, data}) {
            return apiHandler.put(`invoices/${id}/lead-source`, data);
        },

        updateLeadSource({id, data}) {
            return apiHandler.put(`invoices/${id}/lead-source`, data);
        },

        deleteLeadSource({id}) {
            return apiHandler.delete(`invoices/${id}/lead-source`);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`invoices/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`invoices/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`invoices/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`invoices/${id}/timeline`, '', data);
        },
    };
};
