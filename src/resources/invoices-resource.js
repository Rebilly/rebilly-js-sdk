// @ts-nocheck
import {pdfHeader, csvHeader} from '../request-headers';

export default function InvoicesResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetInvoiceCollectionRequest } data
        * @returns { rebilly.GetInvoiceCollectionResponse } response
        */
        // @ts-ignore
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

        /**
        * @param { rebilly.GetInvoiceRequest } data
        * @returns { rebilly.GetInvoiceResponse } response
        */
        get({id = null, expand = null}) {
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

        /**
        * @param { rebilly.PostInvoiceRequest } request
        * @returns { rebilly.PostInvoiceResponse } response
        */
        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`invoices/${id}`, id, data, params);
        },

        /**
        * @param { rebilly.PutInvoiceRequest } request
        * @returns { rebilly.PutInvoiceResponse } response
        */
        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`invoices/${id}`, data, params);
        },

        /**
        * @param { rebilly.PostInvoiceIssuanceDataRequest } request
        * @returns { rebilly.PostInvoiceIssuanceResponse } response
        */
        issue({id = null, data = {}}) {
            return apiHandler.post(`invoices/${id}/issue`, data);
        },

        /**
        * @param { rebilly.PostInvoiceReissuanceDataRequest } request
        * @returns { rebilly.PostInvoiceReissuanceResponse } response
        */
        reissue({id = null, data = {}}) {
            return apiHandler.post(`invoices/${id}/reissue`, data);
        },

        /**
        * @returns { rebilly.PostInvoiceAbandonmentResponse } response
        */
        abandon({id}) {
            return apiHandler.post(`invoices/${id}/abandon`, null);
        },

        /**
        * @returns { rebilly.PostInvoiceVoidResponse } response
        */
        void({id}) {
            return apiHandler.post(`invoices/${id}/void`, null);
        },

        /**
        * @param { rebilly.GetInvoiceItemCollectionRequest } request
        * @returns { rebilly.GetInvoiceItemCollectionResponse } response
        */
        getAllInvoiceItems({id = null, limit = null, offset = null, expand = null}) {
            const params = {
                limit,
                offset,
                expand,
            };
            return apiHandler.getAll(`invoices/${id}/items`, params);
        },

        /**
        * @param { rebilly.PostInvoiceItemDataRequest } request
        * @returns { rebilly.PostInvoiceItemResponse } response
        */
        createInvoiceItem({id, data}) {
            return apiHandler.post(`invoices/${id}/items`, data);
        },

         /**
        * @returns { rebilly.GetCustomerLeadSourceResponse } response
        */
        getLeadSource({id}) {
            return apiHandler.get(`invoices/${id}/lead-source`);
        },

        /**
        * @param { rebilly.PutCustomerLeadSourceDataRequest } request
        * @returns { rebilly.PutCustomerLeadSourceResponse } response
        */
        createLeadSource({id, data}) {
            return apiHandler.put(`invoices/${id}/lead-source`, data);
        },

        /**
        * @param { rebilly.PutCustomerLeadSourceDataRequest } request
        * @returns { rebilly.PutCustomerLeadSourceResponse } response
        */
        updateLeadSource({id, data}) {
            return apiHandler.put(`invoices/${id}/lead-source`, data);
        },

         /**
        * @returns { rebilly.DeleteCustomerLeadSourceResponse } response
        */
        deleteLeadSource({id}) {
            // @ts-ignore
            return apiHandler.delete(`invoices/${id}/lead-source`);
        },

        /**
        * @param { rebilly.GetInvoiceTimelineCollectionRequest } request
        * @returns { rebilly.GetInvoiceTimelineCollectionResponse } response
        */
        getAllTimelineMessages({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`invoices/${id}/timeline`, params);
        },

        /**
        * @returns { rebilly.GetInvoiceTimelineResponse } response
        */
        getTimelineMessage({id = null, messageId = ''} = {}) {
            return apiHandler.get(`invoices/${id}/timeline/${messageId}`);
        },

        /**
        * @returns { rebilly.DeleteCustomerTimelineResponse } response
        */
        deleteTimelineMessage({id, messageId}) {
            // @ts-ignore
            return apiHandler.delete(`invoices/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`invoices/${id}/timeline`, '', data);
        },

        getAllCreditMemos({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };

            return apiHandler.getAll(`invoices/${id}/credit-memos`, params);
        },

        /**
        * @returns { rebilly.GetInvoiceTransactionAllocationCollectionResponse } response
        */
        getAllTransactionAllocations({id = null, limit = null, offset = null}) {
            const params = {
                limit,
                offset,
            };

            return apiHandler.getAll(`invoices/${id}/transaction-allocations`, params);
        },

        //TODO: add types
        applyTransaction({id, transactionId, amount = null}) {
            const data = {
                transactionId,
                amount
            };
            return apiHandler.post(`invoices/${id}/transaction`, data);
        },
    };
};
