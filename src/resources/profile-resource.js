/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function ProfileResource({apiHandler}) {
  return {
    startPermissionsEmulation({data}) {
      return apiHandler.post(`permissions-emulation`, data);
    },
    stopPermissionsEmulation() {
      return apiHandler.delete(`permissions-emulation`);
    },
    /**
     * @returns { rebilly.GetProfileResponsePromise } response
     */
    get() {
      return apiHandler.get(`profile`);
    },
    /**
     * @returns { rebilly.PutProfileResponsePromise } response
     */
    update({data}) {
      return apiHandler.put(`profile`, data);
    },
    updatePassword({data}) {
      return apiHandler.post(`profile/password`, data);
    },
    resetTotp() {
      return apiHandler.post(`profile/totp-reset`);
    },
  };
}
