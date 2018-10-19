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
        }
    };
};
