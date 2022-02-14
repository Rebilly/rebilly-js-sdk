/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CustomerTimelineEventsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetCustomerTimelineEventCollectionRequest } request
     * @returns { rebilly.GetCustomerTimelineEventCollectionResponsePromise } response
     */
    getCustomerTimelineMessages({
      limit = null,
      offset = null,
      filter = null,
    } = {}) {
      const params = {limit, offset, filter};
      return apiHandler.getAll(`customer-timeline-events`, params);
    },
  };
}
