/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function CredentialHashesResource({apiHandler}) {
  return {
    createAWSSESCredential({data}) {
      return apiHandler.post(`credential-hashes/aws-ses`, data);
    },
    /**
     * @returns { rebilly.GetAwsSesCredentialHashResponsePromise } response
     */
    getAWSSESCredential({hash}) {
      return apiHandler.get(`credential-hashes/aws-ses/${hash}`);
    },
    updateAWSSESCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/aws-ses/${hash}`, data);
    },
    createEmailCredential({data}) {
      return apiHandler.post(`credential-hashes/emails`, data);
    },
    /**
     * @returns { rebilly.GetEmailCredentialHashResponsePromise } response
     */
    getEmailCredential({hash}) {
      return apiHandler.get(`credential-hashes/emails/${hash}`);
    },
    patchEmailCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/emails/${hash}`, data);
    },
    createMailgunCredential({data}) {
      return apiHandler.post(`credential-hashes/mailgun`, data);
    },
    /**
     * @returns { rebilly.GetMailgunCredentialHashResponsePromise } response
     */
    getMailgunCredential({hash}) {
      return apiHandler.get(`credential-hashes/mailgun/${hash}`);
    },
    patchMailgunCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/mailgun/${hash}`, data);
    },
    /**
     * @param { rebilly.GetOauth2CredentialHashCollectionRequest } request
     * @returns { rebilly.GetOauth2CredentialHashCollectionResponsePromise } response
     */
    getAllOAuth2Credentials({
      filter = null,
      limit = null,
      offset = null,
      sort = null,
      q = null,
    } = {}) {
      const params = {filter, limit, offset, sort, q};
      return apiHandler.getAll(`credential-hashes/oauth2`, params);
    },
    createOAuth2Credential({data}) {
      return apiHandler.post(`credential-hashes/oauth2`, data);
    },
    /**
     * @returns { rebilly.GetOauth2CredentialHashResponsePromise } response
     */
    getOAuth2Credential({hash}) {
      return apiHandler.get(`credential-hashes/oauth2/${hash}`);
    },
    updateOAuth2Credential({hash, data}) {
      return apiHandler.patch(`credential-hashes/oauth2/${hash}`, data);
    },
    /**
     * @param { rebilly.GetOauth2CredentialHashItemCollectionRequest } request
     * @returns { rebilly.GetOauth2CredentialHashItemCollectionResponsePromise } response
     */
    getOAuth2CredentialItems({hash}) {
      return apiHandler.getAll(`credential-hashes/oauth2/${hash}/items`);
    },
    /**
     * @param { rebilly.GetPlaidCredentialCollectionRequest } request
     * @returns { rebilly.GetPlaidCredentialCollectionResponsePromise } response
     */
    getAllPlaidCredentials({
      filter = null,
      limit = null,
      offset = null,
      sort = null,
      q = null,
    } = {}) {
      const params = {filter, limit, offset, sort, q};
      return apiHandler.getAll(`credential-hashes/plaid`, params);
    },
    createPlaidCredential({data}) {
      return apiHandler.post(`credential-hashes/plaid`, data);
    },
    /**
     * @returns { rebilly.GetPlaidCredentialHashResponsePromise } response
     */
    getPlaidCredential({hash}) {
      return apiHandler.get(`credential-hashes/plaid/${hash}`);
    },
    updatePlaidCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/plaid/${hash}`, data);
    },
    createPostmarkCredential({data}) {
      return apiHandler.post(`credential-hashes/postmark`, data);
    },
    /**
     * @returns { rebilly.GetPostmarkCredentialHashResponsePromise } response
     */
    getPostmarkCredential({hash}) {
      return apiHandler.get(`credential-hashes/postmark/${hash}`);
    },
    patchPostmarkCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/postmark/${hash}`, data);
    },
    createSendGridCredential({data}) {
      return apiHandler.post(`credential-hashes/sendgrid`, data);
    },
    /**
     * @returns { rebilly.GetSendGridCredentialHashResponsePromise } response
     */
    getSendGridCredential({hash}) {
      return apiHandler.get(`credential-hashes/sendgrid/${hash}`);
    },
    patchSendGridCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/sendgrid/${hash}`, data);
    },
    createWebhookCredential({data}) {
      return apiHandler.post(`credential-hashes/webhooks`, data);
    },
    /**
     * @returns { rebilly.GetWebhookCredentialHashResponsePromise } response
     */
    getWebhookCredential({hash}) {
      return apiHandler.get(`credential-hashes/webhooks/${hash}`);
    },
    patchWebhookCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/webhooks/${hash}`, data);
    },
    /**
     * @param { rebilly.GetExperianCredentialHashCollectionRequest } request
     * @returns { rebilly.GetExperianCredentialHashCollectionResponsePromise } response
     */
    getAllExperianCredentials({
      filter = null,
      limit = null,
      offset = null,
      sort = null,
      q = null,
    } = {}) {
      const params = {filter, limit, offset, sort, q};
      return apiHandler.getAll(`credential-hashes/experian`, params);
    },
    createExperianCredential({data}) {
      return apiHandler.post(`credential-hashes/experian`, data);
    },
    /**
     * @returns { rebilly.GetExperianCredentialHashResponsePromise } response
     */
    getExperianCredential({hash}) {
      return apiHandler.get(`credential-hashes/experian/${hash}`);
    },
    updateExperianCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/experian/${hash}`, data);
    },
    /**
     * @param { rebilly.GetTaxJarCredentialHashCollectionRequest } request
     * @returns { rebilly.GetTaxJarCredentialHashCollectionResponsePromise } response
     */
    getAllTaxJarCredentials({
      filter = null,
      limit = null,
      offset = null,
      sort = null,
      q = null,
    } = {}) {
      const params = {filter, limit, offset, sort, q};
      return apiHandler.getAll(`credential-hashes/taxjar`, params);
    },
    createTaxJarCredential({data}) {
      return apiHandler.post(`credential-hashes/taxjar`, data);
    },
    /**
     * @returns { rebilly.GetTaxJarCredentialHashResponsePromise } response
     */
    getTaxJarCredential({hash}) {
      return apiHandler.get(`credential-hashes/taxjar/${hash}`);
    },
    updateTaxJarCredential({hash, data}) {
      return apiHandler.patch(`credential-hashes/taxjar/${hash}`, data);
    },
  };
}
