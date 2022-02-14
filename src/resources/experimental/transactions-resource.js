export default function TransactionsResource({apiHandler}) {
  return {
    getAllTimelineMessages({id, limit = null, offset = null, filter = null}) {
      const params = {limit, offset, filter};
      return apiHandler.getAll(`transactions/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`transactions/${id}/timeline`, data);
    },
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`transactions/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`transactions/${id}/timeline/${messageId}`);
    },
  };
}
