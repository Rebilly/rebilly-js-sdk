/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function InvoicesResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetInvoiceTimelineCollectionRequest } request
     * @returns { rebilly.GetInvoiceTimelineCollectionResponsePromise } response
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
     * @returns { rebilly.GetInvoiceTimelineResponsePromise } response
     */
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`invoices/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`invoices/${id}/timeline/${messageId}`);
    },
  };
}
