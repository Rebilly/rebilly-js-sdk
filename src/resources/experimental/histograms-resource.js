export default function HistogramsResource({apiHandler}) {
    return {
        getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', filter = '', criteria = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                filter,
                criteria,
            };
            return apiHandler.get(`histograms/transactions`, params);
        }
    };
};
