export default function PaymentInstruments({apiHandler}) {
    return {
      getAll({limit = null, offset = null} = {}) {
        const params = {
          limit,
          offset,
        };
        return apiHandler.getAll(`payment-instruments`, params);
      },

      create({data} = {}) {
          return apiHandler.post(`payment-instruments`, data);
      },

      get({id} = {}) {
        return apiHandler.get(`payment-instruments/${id}`);
      },

      update({id, data} = {}) {
        return apiHandler.patch(`payment-instruments/${id}`, data);
      },

      deactivate({id} = {}) {
        return apiHandler.post(`payment-instruments/${id}/deactivate`);
      }
    };
};
