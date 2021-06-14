/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PaymentTokensResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetTokenCollectionRequest } request
     * @returns { rebilly.GetTokenCollectionResponsePromise } response
     */
    getAll({limit = null, offset = null} = {}) {
      const params = {limit, offset};
      return apiHandler.getAll(`tokens`, params);
    },
    create({data}) {
      return apiHandler.post(`tokens`, data);
    },
    /**
     * @returns { rebilly.GetTokenResponsePromise } response
     */
    get({token}) {
      return apiHandler.get(`tokens/${token}`);
    },
  };
}
