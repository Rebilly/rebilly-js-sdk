export default function PaymentInstruments({apiHandler}) {
    return {
      getAll({limit = null, offset = null} = {}) {
        const params = {
          limit,
          offset,
        };
        return apiHandler.getAll(`payment-instruments`, params);
      },

      create({data = null} = {}) {
          return apiHandler.post(`payment-instruments`, data);
      },

      get({id = null}  = {}) {
        return apiHandler.get(`payment-instruments/${id}`);
      },

      update({id = null, data = null} = {}) {
        return apiHandler.patch(`payment-instruments/${id}`, data);
      },

      deactivate({id = null}  = {}) {
        return apiHandler.post(`payment-instruments/${id}/deactivate`);
      }
    };
};
