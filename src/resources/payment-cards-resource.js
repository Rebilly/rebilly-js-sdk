/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PaymentCardsResource({apiHandler}) {
    return {
      getAll({
        limit = null,
        offset = null,
        filter = null,
        sort = null,
        q = null,
        expand = null,
      } = {}) {
        const params = {limit, offset, filter, sort, q, expand};
        return apiHandler.getAll(`payment-cards`, params);
      },
      create({id = '', data}) {
        return apiHandler.create(`payment-cards/${id}`, id, data);
      },
      get({id}) {
        return apiHandler.get(`payment-cards/${id}`);
      },
      update({id, data}) {
        return apiHandler.put(`payment-cards/${id}`, data);
      },
      patch({id, data}) {
        return apiHandler.patch(`payment-cards/${id}`, data);
      },
      deactivate({id}) {
        return apiHandler.post(`payment-cards/${id}/deactivation`);
      },
    };
  }
  