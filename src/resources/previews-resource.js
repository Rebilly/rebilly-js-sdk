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
        }
    };
};
