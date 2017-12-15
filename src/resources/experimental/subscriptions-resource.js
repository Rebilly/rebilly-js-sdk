export default function SubscriptionsResource({apiHandler}) {
    return {
        async getSubscriptionSummaryMetrics({susbcriptionId = ''} = {}) {
            const params = {
                susbcriptionId,
            };
            return await apiHandler.get(`subscriptions/${susbcriptionId}/summary-metrics`, params);
        }
    };
};
