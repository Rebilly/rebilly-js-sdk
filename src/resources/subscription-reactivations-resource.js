/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function SubscriptionReactivationsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetSubscriptionReactivationCollectionRequest } request
     * @returns { rebilly.GetSubscriptionReactivationCollectionResponsePromise } response
     */
    getAll({limit = null, offset = null, filter = null, sort = null} = {}) {
      const params = {limit, offset, filter, sort};
      return apiHandler.getAll(`subscription-reactivations`, params);
    },
    reactivate({data}) {
      return apiHandler.post(`subscription-reactivations`, data);
    },
    /**
     * @returns { rebilly.GetSubscriptionReactivationResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`subscription-reactivations/${id}`);
    },
  };
}
