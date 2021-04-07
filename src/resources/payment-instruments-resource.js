/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function PaymentInstrumentsResource({apiHandler}) {
    return {
      getAll({limit = null, offset = null, expand = null} = {}) {
        const params = {limit, offset, expand};
        return apiHandler.getAll(`payment-instruments`, params);
      },
      create({data}) {
        return apiHandler.post(`payment-instruments`, data);
      },
      get({id}) {
        return apiHandler.get(`payment-instruments/${id}`);
      },
      update({id, data}) {
        return apiHandler.patch(`payment-instruments/${id}`, data);
      },
      deactivate({id}) {
        return apiHandler.post(`payment-instruments/${id}/deactivation`);
      },
    };
  }
  