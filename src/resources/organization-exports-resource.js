/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function OrganizationExportsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetOrganizationExportCollectionRequest } request
     * @returns { rebilly.GetOrganizationExportCollectionResponsePromise } response
     */
    getAll({limit = null, offset = null, filter = null, q = null} = {}) {
      const params = {limit, offset, filter, q};
      return apiHandler.getAll(`organization-exports`, params);
    },
    create() {
      return apiHandler.post(`organization-exports`);
    },
    /**
     * @returns { rebilly.GetOrganizationExportResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`organization-exports/${id}`);
    },
  };
}
