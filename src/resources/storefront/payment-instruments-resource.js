/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PaymentInstrumentsResource({apiHandler}) {
  return {
    getAll({
      filter = null,
      sort = null,
      limit = null,
      offset = null,
      q = null,
    } = {}) {
      const params = {filter, sort, limit, offset, q};
      return apiHandler.getAll(`payment-instruments`, params);
    },
    create({data}) {
      return apiHandler.post(`payment-instruments`, data);
    },
    get({id, limit, offset}) {
      const params = {limit, offset};
      return apiHandler.get(`payment-instruments/${id}`, params);
    },
    update({id, data}) {
      return apiHandler.patch(`payment-instruments/${id}`, data);
    },
    deactivate({id}) {
      return apiHandler.post(`payment-instruments/${id}/deactivation`);
    },
  };
}
