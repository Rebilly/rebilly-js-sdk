/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function AuthorizationResource({apiHandler}) {
    return {
      login({data}) {
        return apiHandler.post(`login`, data);
      },
      logout() {
        return apiHandler.post(`logout`);
      },
    };
  }
