export default function CustomersResource({apiHandler}) {
    return {
        async getCustomerLifetimeSummaryMetrics({customerId = ''} = {}) {
            const params = {
                customerId,
            };
            return await apiHandler.get(`customers/${customerId}/summary-metrics`, params);
        }
    };
};
