/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

// @ts-nocheck
import {csvHeader} from '@/request-headers';

export default function TrackingResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetTrackingApiCollectionRequest } request
     * @returns { rebilly.GetTrackingApiCollectionResponsePromise } response
     */
    getAllApiLogs({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
      expand = null,
    } = {}) {
      const params = {limit, offset, sort, filter, q, expand};
      return apiHandler.getAll(`tracking/api`, params);
    },
    /**
     * @returns { rebilly.GetTrackingApiResponsePromise } response
     */
    getApiLog({id}) {
      return apiHandler.get(`tracking/api/${id}`);
    },
    /**
     * @param { rebilly.GetTrackingListCollectionRequest } request
     * @returns { rebilly.GetTrackingListCollectionResponsePromise } response
     */
    getAllListsChangesHistory({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
    } = {}) {
      const params = {limit, offset, sort, filter, q};
      return apiHandler.getAll(`tracking/lists`, params);
    },
    /**
     * @param { rebilly.GetTrackingWebhookCollectionRequest } request
     * @returns { rebilly.GetTrackingWebhookCollectionResponsePromise } response
     */
    getAllWebhookTrackingLogs({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
    } = {}) {
      const params = {limit, offset, sort, filter, q};
      return apiHandler.getAll(`tracking/webhooks`, params);
    },
    /**
     * @returns { rebilly.GetTrackingWebhookResponsePromise } response
     */
    getWebhookTrackingLog({id}) {
      return apiHandler.get(`tracking/webhooks/${id}`);
    },
    resendWebhook({id}) {
      return apiHandler.post(`tracking/webhooks/${id}/resend`);
    },
    downloadApiLogsCSV({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
    } = {}) {
      const config = {
        params: {
          limit,
          offset,
          sort,
          filter,
          q,
        },
        headers: csvHeader,
      };
      return apiHandler.download('tracking/api', config);
    },
  };
}
