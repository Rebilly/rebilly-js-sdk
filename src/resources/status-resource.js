/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function StatusResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.GetStatusResponsePromise } response
     */
    get() {
      return apiHandler.get(`status`);
    },
  };
}
