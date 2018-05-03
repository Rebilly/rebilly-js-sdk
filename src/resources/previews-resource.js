export default function PreviewsResource({apiHandler}) {
    return {
        async webhook({data}) {
            return await apiHandler.post(`previews/webhooks`, data);
        },

        async triggerWebhookRuleAction({data}) {
            return await apiHandler.post(`previews/rule-actions/trigger-webhook`, data);
        },

        async sendEmailRuleAction({data}) {
            return await apiHandler.post(`previews/rule-actions/send-email`, data);
        },

        async sendEmailNotification({data}) {
            return await apiHandler.post(`previews/email-notifications/send-notification`, data);
        },

        async previewEmailNotification({data}) {
            return await apiHandler.post(`previews/email-notifications/preview-notification`, data);
        },
    };
};
