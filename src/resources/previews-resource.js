export default function PreviewsResource({apiHandler}) {
    return {
        webhook({data}) {
            return apiHandler.post(`previews/webhooks`, data);
        },

        triggerWebhookRuleAction({data}) {
            return apiHandler.post(`previews/rule-actions/trigger-webhook`, data);
        },

        sendEmailRuleAction({data}) {
            return apiHandler.post(`previews/rule-actions/send-email`, data);
        },

        sendEmailNotification({data}) {
            return apiHandler.post(`previews/email-notifications/send-notification`, data);
        },

        previewEmailNotification({data}) {
            return apiHandler.post(`previews/email-notifications/preview-notification`, data);
        },
    };
};
