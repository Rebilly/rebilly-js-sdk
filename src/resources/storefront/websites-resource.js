/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function WebsitesResource({apiHandler}) {
  return {
    /**
     * @returns { rebilly.StorefrontGetWebsiteResponsePromise } response
     */
    get({id}) {
      return apiHandler.get(`websites/${id}`);
    },
  };
}
