/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function TransactionsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetTransactionTimelineCollectionRequest } request
     * @returns { rebilly.GetTransactionTimelineCollectionResponsePromise } response
     */
    getAllTimelineMessages({id, limit = null, offset = null, filter = null}) {
      const params = {limit, offset, filter};
      return apiHandler.getAll(`transactions/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`transactions/${id}/timeline`, data);
    },
    /**
     * @returns { rebilly.GetTransactionTimelineResponsePromise } response
     */
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`transactions/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`transactions/${id}/timeline/${messageId}`);
    },
  };
}
