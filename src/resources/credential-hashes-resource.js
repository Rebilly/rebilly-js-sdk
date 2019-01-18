export default function CredentialHashesResource({apiHandler}) {
    return {
        async getEmailCredential({hash}) {
            return await apiHandler.get(`credential-hashes/emails/${hash}`);
        },

        async getWebhookCredential({hash}) {
            return await apiHandler.get(`credential-hashes/webhooks/${hash}`);
        },

        async getMailgunCredential({hash}) {
            return await apiHandler.get(`credential-hashes/mailgun/${hash}`);
        },

        async getAWSSESCredential({hash}) {
            return await apiHandler.get(`credential-hashes/aws-ses/${hash}`);
        },

        async getSendGridCredential({hash}) {
            return await apiHandler.get(`credential-hashes/sendgrid/${hash}`);
        },

        async getPostmarkCredential({hash}) {
            return await apiHandler.get(`credential-hashes/postmark/${hash}`);
        },

        async getOAuth2Credential({hash}) {
            return await apiHandler.get(`credential-hashes/oauth2/${hash}`);
        },

        async getAllOAuth2Credentials() {
            return await apiHandler.get(`credential-hashes/oauth2`);
        },

        async updateOAuth2Credential({hash, data}) {
            return await apiHandler.patch(`credential-hashes/oauth2/${hash}`, data);
        },

        async createEmailCredential({data}) {
            return await apiHandler.post(`credential-hashes/emails`, data);
        },

        async createWebhookCredential({data}) {
            return await apiHandler.post(`credential-hashes/webhooks`, data);
        },

        async createMailgunCredential({data}) {
            return await apiHandler.post(`credential-hashes/mailgun`, data);
        },

        async createAWSSESCredential({data}) {
            return await apiHandler.post(`credential-hashes/aws-ses`, data);
        },

        async createSendGridCredential({data}) {
            return await apiHandler.post(`credential-hashes/sendgrid`, data);
        },

        async createPostmarkCredential({data}) {
            return await apiHandler.post(`credential-hashes/postmark`, data);
        },

        async createOAuth2Credential({data}) {
            return await apiHandler.post(`credential-hashes/oauth2`, data);
        },
    };
};
