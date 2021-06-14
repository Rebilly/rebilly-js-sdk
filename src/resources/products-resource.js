/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function ProductsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetProductCollectionRequest } request
     * @returns { rebilly.GetProductCollectionResponse } response
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
     * @param { rebilly.CreateProductRequest } request
     * @returns { rebilly.PostProductResponse } response
     */
    create({id = '', data}) {
      return apiHandler.create(`products/${id}`, id, data);
    },
    /**
     * @returns { rebilly.GetProductResponse } response
     */
    get({id}) {
      return apiHandler.get(`products/${id}`);
    },
    /**
     * @returns { rebilly.PutProductResponse } response
     */
    update({id, data}) {
      return apiHandler.put(`products/${id}`, data);
    },
    delete({id}) {
      return apiHandler.delete(`products/${id}`);
    },
  };
}
