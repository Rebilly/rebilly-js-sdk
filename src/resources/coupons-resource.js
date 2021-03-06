/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CouponsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetCouponRedemptionCollectionRequest } request
     * @returns { rebilly.GetCouponRedemptionCollectionResponsePromise } response
     */
    getAllRedemptions({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
    } = {}) {
      const params = {limit, offset, filter, q, sort};
      return apiHandler.getAll(`coupons-redemptions`, params);
    },
    redeem({data}) {
      return apiHandler.post(`coupons-redemptions`, data);
    },
    /**
     * @returns { rebilly.GetCouponRedemptionResponsePromise } response
     */
    getRedemption({id}) {
      return apiHandler.get(`coupons-redemptions/${id}`);
    },
    cancelRedemption({id}) {
      return apiHandler.post(`coupons-redemptions/${id}/cancel`);
    },
    /**
     * @param { rebilly.GetCouponCollectionRequest } request
     * @returns { rebilly.GetCouponCollectionResponsePromise } response
     */
    getAll({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
    } = {}) {
      const params = {limit, offset, filter, q, sort};
      return apiHandler.getAll(`coupons`, params);
    },
    /**
     * @param { rebilly.CreateCouponRequest } request
     * @returns { rebilly.PostCouponResponsePromise } response
     */
    create({id = '', data}) {
      return apiHandler.create(`coupons/${id}`, id, data);
    },
    /**
     * @returns { rebilly.GetCouponResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`coupons/${id}`);
    },
    /**
     * @returns { rebilly.PutCouponResponsePromise } response
     */
    update({id, data}) {
      return apiHandler.put(`coupons/${id}`, data);
    },
    setExpiration({id, data}) {
      return apiHandler.post(`coupons/${id}/expiration`, data);
    },
  };
}
