export default function CustomersResource({apiHandler}) {
    return {
        getCustomerLifetimeSummaryMetrics({customerId = ''} = {}) {
            const params = {
                customerId,
            };
            return apiHandler.get(`customers/${customerId}/summary-metrics`, params);
        }
    };
};
