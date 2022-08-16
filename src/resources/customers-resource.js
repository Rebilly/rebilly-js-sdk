/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {csvHeader} from '@/request-headers';

export default function CustomersResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetCustomerCollectionRequest } request
     * @returns { rebilly.GetCustomerCollectionResponsePromise } response
     */
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
    /**
     * @param { rebilly.CreateCustomerRequest } request
     * @returns { rebilly.PostCustomerResponsePromise } response
     */
    create({id = '', data, expand = null}) {
      const params = {expand};
      return apiHandler.create(`customers/${id}`, id, data, params);
    },
    /**
     * @returns { rebilly.GetCustomerResponsePromise } response
     */
    get({id, expand = null, fields = null}) {
      const params = {expand, fields};
      return apiHandler.get(`customers/${id}`, params);
    },
    /**
     * @returns { rebilly.PutCustomerResponsePromise } response
     */
    update({id, data, expand = null}) {
      const params = {expand};
      return apiHandler.put(`customers/${id}`, data, params);
    },
    merge({id, targetCustomerId}) {
      return apiHandler.delete(
        `customers/${id}?targetCustomerId=${targetCustomerId}`
      );
    },
    /**
     * @param { rebilly.GetCustomerAmlEntryCollectionRequest } request
     * @returns { rebilly.GetCustomerAmlEntryCollectionResponsePromise } response
     */
    getAml({id}) {
      return apiHandler.getAll(`customers/${id}/aml`);
    },
    /**
     * @returns { rebilly.GetCustomerLeadSourceResponsePromise } response
     */
    getLeadSource({id}) {
      return apiHandler.get(`customers/${id}/lead-source`);
    },
    /**
     * @returns { rebilly.PutCustomerLeadSourceResponsePromise } response
     */
    createLeadSource({id, data}) {
      return apiHandler.put(`customers/${id}/lead-source`, data);
    },
    /**
     * @returns { rebilly.PutCustomerLeadSourceResponsePromise } response
     */
    updateLeadSource({id, data}) {
      return apiHandler.put(`customers/${id}/lead-source`, data);
    },
    deleteLeadSource({id}) {
      return apiHandler.delete(`customers/${id}/lead-source`);
    },
    /**
     * @param { rebilly.GetCustomerTimelineCollectionRequest } request
     * @returns { rebilly.GetCustomerTimelineCollectionResponsePromise } response
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
      return apiHandler.getAll(`customers/${id}/timeline`, params);
    },
    createTimelineComment({id, data}) {
      return apiHandler.post(`customers/${id}/timeline`, data);
    },
    /**
     * @returns { rebilly.GetCustomerTimelineResponsePromise } response
     */
    getTimelineMessage({id, messageId}) {
      return apiHandler.get(`customers/${id}/timeline/${messageId}`);
    },
    deleteTimelineMessage({id, messageId}) {
      return apiHandler.delete(`customers/${id}/timeline/${messageId}`);
    },
    /**
     * @param { rebilly.GetCustomerUpcomingInvoiceCollectionRequest } request
     * @returns { rebilly.GetCustomerUpcomingInvoiceCollectionResponsePromise } response
     */
    getAllUpcomingInvoices({id, expand = null}) {
      const params = {expand};
      return apiHandler.getAll(`customers/${id}/upcoming-invoices`, params);
    },
    /**
     * @returns { rebilly.GetCustomerEddScoreResponsePromise } response
     */
    getCustomerEddScore({id}) {
      return apiHandler.get(`customers/${id}/edd-score`);
    },
    patchCustomerEddScore({id, data}) {
      return apiHandler.patch(`customers/${id}/edd-score`, data);
    },
    /**
     * @param { rebilly.GetEddTimelineCollectionRequest } request
     * @returns { rebilly.GetEddTimelineCollectionResponsePromise } response
     */
    getEddTimelineCollection({
      id,
      limit = null,
      offset = null,
      filter = null,
      sort = null,
      q = null,
    }) {
      const params = {limit, offset, filter, sort, q};
      return apiHandler.getAll(`customers/${id}/edd-timeline`, params);
    },
    createEddTimelineComment({id, data}) {
      return apiHandler.post(`customers/${id}/edd-timeline`, data);
    },
    /**
     * @returns { rebilly.GetEddSearchResultsResponsePromise } response
     */
    getAllEddSearchResults({id, limit = null, offset = null}) {
      const params = {limit, offset};
      return apiHandler.get(`customers/${id}/edd-search-results`, params);
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
