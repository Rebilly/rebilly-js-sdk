export default function CheckoutFormsResource({apiHandler}) {
  return {
    get({id} = {}) {
      return apiHandler.get(`checkout-forms/${id}`);
    },
  }
}
