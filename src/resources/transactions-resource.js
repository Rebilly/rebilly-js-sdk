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
    create({data}) {
      return apiHandler.post(`transactions`, data);
    },
    get({id}) {
      return apiHandler.get(`transactions/${id}`);
    },
    update({id, data}) {
      return apiHandler.post(`transactions/${id}/update`, data);
    },
    cancel({id}) {
      return apiHandler.post(`transactions/${id}/cancel`);
    },
    getGatewayLogs({id = null} = {}) {
      return apiHandler.getAll(`transactions/${id}/gateway-logs`);
    },
    query({id}) {
      return apiHandler.post(`transactions/${id}/query`);
    },
    refund({id, data}) {
      return apiHandler.post(`transactions/${id}/refund`, data);
    },
    getAllTimelineMessages({
      id = null,
      limit = null,
      offset = null,
      filter = null,
      expand = null,
    } = {}) {
      const params = {limit, offset, filter, expand};
      return apiHandler.getAll(`transactions/${id}/timeline`, params);
    },
    createTimelineMessage({id, data}) {
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
