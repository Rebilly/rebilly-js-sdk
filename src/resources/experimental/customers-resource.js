export default function CustomersResource({apiHandler}) {
    return {
        async getCustomerLifetimeSummaryMetrics({customerId = ''} = {}, {cancel}) {
            const params = {
                customerId,
                cancel,
            };
            return await apiHandler.get(`customers/${customerId}/summary-metrics`, params);
        }
    };
}
