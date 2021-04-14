/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {csvHeader} from '../request-headers';

export default function TransactionsResource({apiHandler}) {
  return {
    getAll({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
      expand = null,
    } = {}) {
      const params = {limit, offset, filter, q, sort, expand};
      return apiHandler.getAll(`transactions`, params);
    },
    create({data, expand = null}) {
      const params = {expand};
      return apiHandler.post(`transactions`, data, params);
    },
    get({id, expand = null}) {
      const params = {expand};
      return apiHandler.get(`transactions/${id}`, params);
    },
    patch({id, data}) {
      return apiHandler.patch(`transactions/${id}`, data);
    },
    cancel({id}) {
      return apiHandler.post(`transactions/${id}/cancel`);
    },
    getGatewayLogs({id}) {
      return apiHandler.getAll(`transactions/${id}/gateway-logs`);
    },
    query({id}) {
      return apiHandler.post(`transactions/${id}/query`);
    },
    update({id, data}) {
      return apiHandler.post(`transactions/${id}/update`, data);
    },
    refund({id, data}) {
      return apiHandler.post(`transactions/${id}/refund`, data);
    },
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
      return apiHandler.download('transactions', config);
    },
  };
}
