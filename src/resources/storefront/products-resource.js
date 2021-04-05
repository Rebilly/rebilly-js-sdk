/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function ProductsResource({apiHandler}) {
  return {
    getAll({limit = null, offset = null, expand = null} = {}) {
      const params = {limit, offset, expand};
      return apiHandler.getAll(`products`, params);
    },
    get({id}) {
      return apiHandler.get(`products/${id}`);
    },
  };
}
