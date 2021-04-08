/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PlansResource({apiHandler}) {
  return {
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
      expand = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q, expand};
      return apiHandler.getAll(`plans`, params);
    },
    create({id = '', data}) {
      return apiHandler.create(`plans/${id}`, id, data);
    },
    get({id}) {
      return apiHandler.get(`plans/${id}`);
    },
    update({id, data}) {
      return apiHandler.put(`plans/${id}`, data);
    },
    delete({id}) {
      return apiHandler.delete(`plans/${id}`);
    },
  };
}
