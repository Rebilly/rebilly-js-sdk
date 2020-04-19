export default function HistogramsResource({apiHandler}) {
    return {
        getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', filter = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                filter,
            };
            return apiHandler.get(`histograms/transactions`, params);
        }
    };
};
