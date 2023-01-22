/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PayoutRequestsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.StorefrontGetPayoutRequestCollectionRequest } request
     * @returns { rebilly.StorefrontGetPayoutRequestCollectionResponsePromise } response
     */
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q};
      return apiHandler.getAll(`payout-requests`, params);
    },
    /**
     * @returns { rebilly.StorefrontGetPayoutRequestResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`payout-requests/${id}`);
    },
    update({id, data}) {
      return apiHandler.patch(`payout-requests/${id}`, data);
    },
  };
}
