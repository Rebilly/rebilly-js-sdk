/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function KycRequestsResource({apiHandler}) {
  return {
    getAll({limit = null, offset = null, filter = null, sort = null} = {}) {
      const params = {limit, offset, filter, sort};
      return apiHandler.getAll(`kyc-requests`, params);
    },
    create({data}) {
      return apiHandler.post(`kyc-requests`, data);
    },
    get({id}) {
      return apiHandler.get(`kyc-requests/${id}`);
    },
    delete({id}) {
      return apiHandler.delete(`kyc-requests/${id}`);
    },
    update({id, data}) {
      return apiHandler.patch(`kyc-requests/${id}`, data);
    },
  };
}
