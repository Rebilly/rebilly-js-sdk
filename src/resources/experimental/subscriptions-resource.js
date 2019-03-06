export default function SubscriptionsResource({apiHandler}) {
    return {
        getSubscriptionSummaryMetrics({subscriptionId = ''} = {}) {
            const params = {
                subscriptionId,
            };
            return apiHandler.get(`subscriptions/${subscriptionId}/summary-metrics`, params);
        }
    };
};
