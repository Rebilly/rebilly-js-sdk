/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CheckoutFormsResource({apiHandler}) {
  return {
    get({id}) {
      return apiHandler.get(`checkout-forms/${id}`);
    },
  };
}
