/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CashierCustomPropertySetsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetCashierCustomPropertySetCollectionRequest } request
     * @returns { rebilly.GetCashierCustomPropertySetCollectionResponsePromise } response
     */
    getAll({limit = null, offset = null, filter = null, sort = null} = {}) {
      const params = {limit, offset, filter, sort};
      return apiHandler.getAll(`cashier-custom-property-sets`, params);
    },
    /**
     * @param { rebilly.CreateCashierCustomPropertySetRequest } request
     * @returns { rebilly.PostCashierCustomPropertySetResponsePromise } response
     */
    create({id = '', data}) {
      return apiHandler.create(`cashier-custom-property-sets/${id}`, id, data);
    },
    /**
     * @returns { rebilly.GetCashierCustomPropertySetResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`cashier-custom-property-sets/${id}`);
    },
    /**
     * @returns { rebilly.PutCashierCustomPropertySetResponsePromise } response
     */
    update({id, data}) {
      return apiHandler.put(`cashier-custom-property-sets/${id}`, data);
    },
    delete({id}) {
      return apiHandler.delete(`cashier-custom-property-sets/${id}`);
    },
  };
}
