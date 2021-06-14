/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {pdfHeader, csvHeader} from '@/request-headers';

export default function InvoicesResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetInvoiceCollectionRequest } request
     * @returns { rebilly.GetInvoiceCollectionResponse } response
     */
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
      expand = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q, expand};
      return apiHandler.getAll(`invoices`, params);
    },
    /**
     * @param { rebilly.CreateInvoiceRequest } request
     * @returns { rebilly.PostInvoiceResponse } response
     */
    create({id = '', data, expand = null}) {
      const params = {expand};
      return apiHandler.create(`invoices/${id}`, id, data, params);
    },
    /**
     * @returns { rebilly.GetInvoiceResponse } response
     */
    get({id, expand = null}) {
      const params = {expand};
      return apiHandler.get(`invoices/${id}`, params);
    },
    /**
     * @returns { rebilly.PutInvoiceResponse } response
     */
    update({id, data, expand = null}) {
      const params = {expand};
      return apiHandler.put(`invoices/${id}`, data, params);
    },
    /**
     * @param { rebilly.GetInvoiceItemCollectionRequest } request
     * @returns { rebilly.GetInvoiceItemCollectionResponse } response
     */
    getAllInvoiceItems({id, limit = null, offset = null, expand = null}) {
      const params = {limit, offset, expand};
      return apiHandler.getAll(`invoices/${id}/items`, params);
    },
    createInvoiceItem({id, data}) {
      return apiHandler.post(`invoices/${id}/items`, data);
    },
    issue({id, data}) {
      return apiHandler.post(`invoices/${id}/issue`, data);
    },
    abandon({id}) {
      return apiHandler.post(`invoices/${id}/abandon`);
    },
    void({id}) {
      return apiHandler.post(`invoices/${id}/void`);
    },
    recalculate({id}) {
      return apiHandler.post(`invoices/${id}/recalculate`);
    },
    reissue({id, data}) {
      return apiHandler.post(`invoices/${id}/reissue`, data);
    },
    /**
     * @param { rebilly.GetInvoiceTransactionAllocationCollectionRequest } request
     * @returns { rebilly.GetInvoiceTransactionAllocationCollectionResponse } response
     */
    getAllTransactionAllocations({id, limit = null, offset = null}) {
      const params = {limit, offset};
      return apiHandler.getAll(
        `invoices/${id}/transaction-allocations`,
        params
      );
    },
    applyTransaction({id, data}) {
      return apiHandler.post(`invoices/${id}/transaction`, data);
    },
    /**
     * @param { rebilly.GetInvoiceTimelineCollectionRequest } request
     * @returns { rebilly.GetInvoiceTimelineCollectionResponse } response
     */
    getAllTimelineMessages({
      id,
      limit = null,
      offset = null,
      filter = null,
      sort = null,
      q = null,
    }) {
      const params = {limit, offset, filter, sort, q};
      return apiHandler.getAll(`invoices/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`invoices/${id}/timeline`, data);
    },
    /**
     * @returns { rebilly.GetInvoiceTimelineResponse } response
     */
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`invoices/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`invoices/${id}/timeline/${messageId}`);
    },
    downloadCSV({
      limit = null,
      offset = null,
      sort = null,
      expand = null,
      filter = null,
      q = null,
    } = {}) {
      const config = {
        params: {
          limit,
          offset,
          sort,
          expand,
          filter,
          q,
        },
        headers: csvHeader,
      };
      return apiHandler.download('invoices', config);
    },
    downloadPDF({id}) {
      const config = {
        headers: pdfHeader,
        responseType: 'arraybuffer',
      };
      return apiHandler.download(`invoices/${id}`, config);
    },
  };
}
