export default function SubscriptionsResource({apiHandler}) {
    return {
        async getSubscriptionSummaryMetrics({subscriptionId = ''} = {}) {
            const params = {
                subscriptionId,
            };
            return await apiHandler.get(`subscriptions/${subscriptionId}/summary-metrics`, params);
        }
    };
};
