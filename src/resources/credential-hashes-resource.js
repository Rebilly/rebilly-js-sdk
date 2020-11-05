export default function CredentialHashesResource({apiHandler}) {
    return {
        getEmailCredential({hash}) {
            return apiHandler.get(`credential-hashes/emails/${hash}`);
        },

        getWebhookCredential({hash}) {
            return apiHandler.get(`credential-hashes/webhooks/${hash}`);
        },

        getMailgunCredential({hash}) {
            return apiHandler.get(`credential-hashes/mailgun/${hash}`);
        },

        getAWSSESCredential({hash}) {
            return apiHandler.get(`credential-hashes/aws-ses/${hash}`);
        },

        getAllExperianCredentials() {
          return apiHandler.getAll(`credential-hashes/experian`);
        },

        getExperianCredential({hash}) {
            return apiHandler.get(`credential-hashes/experian/${hash}`);
        },

        getSendGridCredential({hash}) {
            return apiHandler.get(`credential-hashes/sendgrid/${hash}`);
        },

        getPostmarkCredential({hash}) {
            return apiHandler.get(`credential-hashes/postmark/${hash}`);
        },

        getOAuth2Credential({hash}) {
            return apiHandler.get(`credential-hashes/oauth2/${hash}`);
        },

        getAllOAuth2Credentials() {
            return apiHandler.getAll(`credential-hashes/oauth2`);
        },

        getOAuth2CredentialItems({hash, q = null, params = null}) {
            const {
                limit,
                offset,
                sort,
                filter
            } = params;
            const data = {
                q,
                limit,
                offset,
                sort,
                filter
            };
            return apiHandler.getAll(`credential-hashes/oauth2/${hash}/items`, data);
        },

        updateOAuth2Credential({hash, data}) {
            return apiHandler.patch(`credential-hashes/oauth2/${hash}`, data);
        },

        createEmailCredential({data}) {
            return apiHandler.post(`credential-hashes/emails`, data);
        },

        createWebhookCredential({data}) {
            return apiHandler.post(`credential-hashes/webhooks`, data);
        },

        createMailgunCredential({data}) {
            return apiHandler.post(`credential-hashes/mailgun`, data);
        },

        createAWSSESCredential({data}) {
            return apiHandler.post(`credential-hashes/aws-ses`, data);
        },

        createExperianCredential({data}) {
            return apiHandler.post(`credential-hashes/experian`, data);
        },

        updateExperianCredential({hash, data}) {
            return apiHandler.patch(`credential-hashes/experian/${hash}`, data);
        },

        createSendGridCredential({data}) {
            return apiHandler.post(`credential-hashes/sendgrid`, data);
        },

        createPostmarkCredential({data}) {
            return apiHandler.post(`credential-hashes/postmark`, data);
        },

        createOAuth2Credential({data}) {
            return apiHandler.post(`credential-hashes/oauth2`, data);
        },
    };
};
