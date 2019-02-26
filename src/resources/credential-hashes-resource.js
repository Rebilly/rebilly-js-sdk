const RESOURCE = 'credential-hashes';

export default function CredentialHashesResource({apiHandler}) {
    return {
        async getEmailCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/emails/${hash}`, params);
        },

        async getWebhookCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/webhooks/${hash}`, params);
        },

        async getMailgunCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/mailgun/${hash}`, params);
        },

        async getAWSSESCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/aws-ses/${hash}`, params);
        },

        async getSendGridCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/sendgrid/${hash}`, params);
        },

        async getPostmarkCredential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/postmark/${hash}`, params);
        },

        async getOAuth2Credential({hash}, params) {
            return await apiHandler.get(`${RESOURCE}/oauth2/${hash}`, params);
        },

        async getAllOAuth2Credentials(params) {
            return await apiHandler.get(`${RESOURCE}/oauth2`, params);
        },

        async updateOAuth2Credential({hash, data}, params) {
            return await apiHandler.patch(`${RESOURCE}/oauth2/${hash}`, data, params);
        },

        async createEmailCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/emails`, data, {params: {...params}});
        },

        async createWebhookCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/webhooks`, data, {params: {...params}});
        },

        async createMailgunCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/mailgun`, data, {params: {...params}});
        },

        async createAWSSESCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/aws-ses`, data), {params: {...params}};
        },

        async createSendGridCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/sendgrid`, data, {params: {...params}});
        },

        async createPostmarkCredential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/postmark`, data, {params: {...params}});
        },

        async createOAuth2Credential({data}, params) {
            return await apiHandler.post(`${RESOURCE}/oauth2`, data, {params: {...params}});
        },
    };
}
