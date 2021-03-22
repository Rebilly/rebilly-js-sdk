export default function TagsResource({ apiHandler }) {
  return {
    getAll({
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
    } = {}) {
      const params = { limit, offset, filter, q, sort };
      return apiHandler.getAll(`tags`, params);
    },
    create({ data }) {
      return apiHandler.post(`tags`, data);
    },
    get({ tag }) {
      return apiHandler.get(`tags/${tag}`);
    },
    delete({ tag }) {
      return apiHandler.delete(`tags/${tag}`);
    },
    update({ tag, data }) {
      return apiHandler.patch(`tags/${tag}`, data);
    },
    tagCustomers({ tag, data }) {
      return apiHandler.post(`tags/${tag}/customers`, data);
    },
    untagCustomers({ tag, data }) {
      return apiHandler.delete(`tags/${tag}/customers`, data);
    },
    tagCustomer({ tag, customerId }) {
      return apiHandler.post(`tags/${tag}/customers/${customerId}`);
    },
    untagCustomer({ tag, customerId }) {
      return apiHandler.delete(`tags/${tag}/customers/${customerId}`);
    },
  };
}
