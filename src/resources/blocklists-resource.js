/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function BlocklistsResource({apiHandler}) {
  return {
    /**
     * @param { rebilly.GetBlocklistCollectionRequest } request
     * @returns { rebilly.GetBlocklistCollectionResponsePromise } response
     */
    getAll({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
    } = {}) {
      const params = {limit, offset, sort, filter, q};
      return apiHandler.getAll(`blocklists`, params);
    },
    /**
     * @param { rebilly.CreateBlocklistRequest } request
     * @returns { rebilly.PostBlocklistResponsePromise } response
     */
    create({id = '', data}) {
      return apiHandler.create(`blocklists/${id}`, id, data);
    },
    /**
     * @returns { rebilly.GetBlocklistResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`blocklists/${id}`);
    },
    delete({id}) {
      return apiHandler.delete(`blocklists/${id}`);
    },
  };
}
