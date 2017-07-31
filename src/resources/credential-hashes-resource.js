export default function CredentialHashesResource({apiHandler}) {
    return {
        async getEmailCredential({hash}) {
            return await apiHandler.get(`credential-hashes/emails/${hash}`);
        },

        async getWebhookCredential({hash}) {
            return await apiHandler.get(`credential-hashes/webhooks/${hash}`);
        },

        async createEmailCredential({data}) {
            return await apiHandler.post(`credential-hashes/emails`, data);
        },

        async createWebhookCredential({data}) {
            return await apiHandler.post(`credential-hashes/webhooks`, data);
        }
    };
};
