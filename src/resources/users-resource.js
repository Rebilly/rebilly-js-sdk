/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function UsersResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.GetPasswordResetTokenResponsePromise } response
     */
    getResetPasswordToken({token}) {
      return apiHandler.get(`reset-password/${token}`);
    },
    resetPassword({token, data}) {
      return apiHandler.post(`reset-password/${token}`, data);
    },
    /**
     * @param { rebilly.GetUserCollectionRequest } request
     * @returns { rebilly.GetUserCollectionResponsePromise } response
     */
    getAll({
      limit = null,
      offset = null,
      sort = null,
      filter = null,
      q = null,
    } = {}) {
      const params = {limit, offset, sort, filter, q};
      return apiHandler.getAll(`users`, params);
    },
    /**
     * @param { rebilly.CreateUserRequest } request
     * @returns { rebilly.PostUserResponsePromise } response
     */
    create({id = '', data}) {
      return apiHandler.create(`users/${id}`, id, data);
    },
    /**
     * @returns { rebilly.GetUserResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`users/${id}`);
    },
    /**
     * @returns { rebilly.PutUserResponsePromise } response
     */
    update({id, data}) {
      return apiHandler.put(`users/${id}`, data);
    },
    delete({id}) {
      return apiHandler.delete(`users/${id}`);
    },
    updatePassword({id, data}) {
      return apiHandler.post(`users/${id}/password`, data);
    },
    resetTotp({id}) {
      return apiHandler.post(`users/${id}/totp-reset`);
    },
  };
}
