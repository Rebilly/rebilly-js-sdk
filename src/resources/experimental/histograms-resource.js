export default function HistogramsResource({apiHandler}) {
    return {
        getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', filter = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                filter,
                tz,
            };
            return apiHandler.get(`histograms/transactions`, params);
        },
    };
};
