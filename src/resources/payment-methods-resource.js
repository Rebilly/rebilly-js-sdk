export default function PaymentMethodsResource({apiHandler}) {
  return {
    getAll() {
      return apiHandler.getAll(`payment-methods`);
    },

    get({apiName}) {
      return apiHandler.get(`payment-methods/${apiName}`);
    },
  };
};
