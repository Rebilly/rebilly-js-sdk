/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {csvHeader} from '../request-headers';

export default function SubscriptionsResource({apiHandler}) {
  return {
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
      expand = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q, expand};
      return apiHandler.getAll(`subscriptions`, params);
    },
    create({id = '', data, expand = null}) {
      const params = {expand};
      return apiHandler.create(`subscriptions/${id}`, id, data, params);
    },
    get({id, expand = null}) {
      const params = {expand};
      return apiHandler.get(`subscriptions/${id}`, params);
    },
    update({id, data, expand = null}) {
      const params = {expand};
      return apiHandler.put(`subscriptions/${id}`, data, params);
    },
    changePlan({id, data}) {
      return apiHandler.post(`subscriptions/${id}/change-plan`, data);
    },
    createInterimInvoice({id, data}) {
      return apiHandler.post(`subscriptions/${id}/interim-invoice`, data);
    },
    getAllUpcomingInvoices({id, expand = null}) {
      const params = {expand};
      return apiHandler.getAll(`subscriptions/${id}/upcoming-invoices`, params);
    },
    issueUpcomingInvoice({id, invoiceId, data}) {
      return apiHandler.post(
        `subscriptions/${id}/upcoming-invoices/${invoiceId}/issue`,
        data
      );
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
      return apiHandler.getAll(`subscriptions/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`subscriptions/${id}/timeline`, data);
    },
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`subscriptions/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`subscriptions/${id}/timeline/${messageId}`);
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
      return apiHandler.download('subscriptions', config);
    },
  };
}
