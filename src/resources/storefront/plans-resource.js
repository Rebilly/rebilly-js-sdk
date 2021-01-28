export default function PlansResource({apiHandler}) {
  return {
    getAll({limit = null, offset = null} = {}) {
      const params = {
        limit,
        offset,
      };
      return apiHandler.getAll(`plans`, params);
    },

    get({id = null} = {}) {
      return apiHandler.get(`plans/${id}`);
    },
  }
}
