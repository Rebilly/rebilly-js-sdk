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
    getAll({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
    } = {}) {
      const params = {limit, offset, filter, q, sort};
      return apiHandler.getAll(`organization-exports`, params);
    },
    create({data}) {
      return apiHandler.post(`organization-exports`, data);
    },
    /**
     * @returns { rebilly.GetOrganizationExportResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`organization-exports/${id}`);
    },
  };
}
