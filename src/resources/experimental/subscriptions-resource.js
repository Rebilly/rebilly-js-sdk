export default function SubscriptionsResource({apiHandler}) {
    return {
        async getSubscriptionSummaryMetrics({subscriptionId = ''} = {}, {cancel}) {
            const params = {
                subscriptionId,
                cancel,
            };
            return await apiHandler.get(`subscriptions/${subscriptionId}/summary-metrics`, params);
        }
    };
}
