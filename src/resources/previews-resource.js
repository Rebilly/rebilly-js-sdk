const RESOURCE = 'previews';

export default function PreviewsResource({apiHandler}) {
    return {
        async webhook({data}, params) {
            return await apiHandler.post(`${RESOURCE}/webhooks`, data, {params: {...params}});
        },

        async triggerWebhookRuleAction({data}, params) {
            return await apiHandler.post(`${RESOURCE}/rule-actions/trigger-webhook`, data, {params: {...params}});
        },

        async sendEmailRuleAction({data}, params) {
            return await apiHandler.post(`${RESOURCE}/rule-actions/send-email`, data, {params: {...params}});
        },

        async sendEmailNotification({data}, params) {
            return await apiHandler.post(`${RESOURCE}/email-notifications/send-notification`, data, {params: {...params}});
        },

        async previewEmailNotification({data}, params) {
            return await apiHandler.post(`${RESOURCE}/email-notifications/preview-notification`, data, {params: {...params}});
        },
    };
}
