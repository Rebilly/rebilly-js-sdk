import {pdfHeader, csvHeader} from '../request-headers';

export default function InvoicesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`invoices`, params);
        },

        async getAllMatchedRules({id}) {
            return await apiHandler.getAll(`invoices/${id}/matched-rules`);
        },

        async get({id, expand = null}) {
            const params = {expand};
            return await apiHandler.get(`invoices/${id}`, params);
        },

        async downloadPDF({id}) {
            const config = {
                headers: pdfHeader,
                responseType: 'arraybuffer'
            };
            return await apiHandler.download(`invoices/${id}`, config);
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
            return await apiHandler.download(`invoices`, config);
        },

        async create({id = '', data, expand = null}) {
            const params = {expand};
            return await apiHandler.create(`invoices/${id}`, id, data, params);
        },

        async update({id, data, expand = null}) {
            const params = {expand};
            return await apiHandler.put(`invoices/${id}`, data, params);
        },

        async issue({id, data = {}}) {
            return await apiHandler.post(`invoices/${id}/issue`, data);
        },

        async abandon({id}) {
            return await apiHandler.post(`invoices/${id}/abandon`, null);
        },

        async void({id}) {
            return await apiHandler.post(`invoices/${id}/void`, null);
        },

        async getAllInvoiceItems({id, limit = null, offset = null}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`invoices/${id}/items`, params);
        },

        async createInvoiceItem({id, data}) {
            return await apiHandler.post(`invoices/${id}/items`, data);
        },

        async getLeadSource({id}) {
            return await apiHandler.get(`invoices/${id}/lead-source`);
        },

        async createLeadSource({id, data}) {
            return await apiHandler.put(`invoices/${id}/lead-source`, data);
        },

        async updateLeadSource({id, data}) {
            return await apiHandler.put(`invoices/${id}/lead-source`, data);
        },

        async deleteLeadSource({id}) {
            return await apiHandler.delete(`invoices/${id}/lead-source`);
        }
    };
};
