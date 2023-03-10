/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function ApplicationInstancesResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.GetApplicationInstanceResponsePromise } response
     */
    get({applicationId}) {
      return apiHandler.get(`application-instances/${applicationId}`);
    },
    /**
     * @returns { rebilly.PutApplicationInstanceResponsePromise } response
     */
    upsert({applicationId, data}) {
      return apiHandler.put(`application-instances/${applicationId}`, data);
    },
    delete({applicationId}) {
      return apiHandler.delete(`application-instances/${applicationId}`);
    },
    /**
     * @returns { rebilly.GetApplicationInstanceConfigurationResponsePromise } response
     */
    getConfiguration({applicationId}) {
      return apiHandler.get(
        `application-instances/${applicationId}/configuration`
      );
    },
    /**
     * @returns { rebilly.PutApplicationInstanceConfigurationResponsePromise } response
     */
    upsertConfiguration({applicationId, data}) {
      return apiHandler.put(
        `application-instances/${applicationId}/configuration`,
        data
      );
    },
  };
}
