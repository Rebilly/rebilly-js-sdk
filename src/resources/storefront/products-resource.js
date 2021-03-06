/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function ProductsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.StorefrontGetProductCollectionRequest } request
     * @returns { rebilly.StorefrontGetProductCollectionResponsePromise } response
     */
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q};
      return apiHandler.getAll(`products`, params);
    },
    /**
     * @returns { rebilly.StorefrontGetProductResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`products/${id}`);
    },
  };
}
