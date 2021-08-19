/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function AmlResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.GetAmlEntryResponsePromise } response
     */
    getAll({firstName, lastName, dob = null, country = null}) {
      const params = {firstName, lastName, dob, country};
      return apiHandler.getAll(`aml`, params);
    },
  };
}
