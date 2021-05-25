/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {csvHeader} from '@/request-headers';

export default function CustomersResource({apiHandler}) {
  return {
    getAll({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      expand = null,
      fields = null,
      sort = null,
    } = {}) {
      const params = {limit, offset, filter, q, expand, fields, sort};
      return apiHandler.getAll(`customers`, params);
    },
    create({id = '', data, expand = null}) {
      const params = {expand};
      return apiHandler.create(`customers/${id}`, id, data, params);
    },
    get({id, expand = null, fields = null}) {
      const params = {expand, fields};
      return apiHandler.get(`customers/${id}`, params);
    },
    update({id, data, expand = null}) {
      const params = {expand};
      return apiHandler.put(`customers/${id}`, data, params);
    },
    merge({id, targetCustomerId}) {
      return apiHandler.delete(
        `customers/${id}?targetCustomerId=${targetCustomerId}`
      );
    },
    getLeadSource({id}) {
      return apiHandler.get(`customers/${id}/lead-source`);
    },
    createLeadSource({id, data}) {
      return apiHandler.put(`customers/${id}/lead-source`, data);
    },
    updateLeadSource({id, data}) {
      return apiHandler.put(`customers/${id}/lead-source`, data);
    },
    deleteLeadSource({id}) {
      return apiHandler.delete(`customers/${id}/lead-source`);
    },
    getAllTimelineMessages({
      id,
      limit = null,
      offset = null,
      filter = null,
      sort = null,
      q = null,
    }) {
      const params = {limit, offset, filter, sort, q};
      return apiHandler.getAll(`customers/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`customers/${id}/timeline`, data);
    },
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`customers/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`customers/${id}/timeline/${messageId}`);
    },
    getAllUpcomingInvoices({id, expand = null}) {
      const params = {expand};
      return apiHandler.getAll(`customers/${id}/upcoming-invoices`, params);
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
      return apiHandler.download('customers', config);
    },
  };
}
