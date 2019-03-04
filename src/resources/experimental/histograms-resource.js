export default function HistogramsResource({apiHandler}) {
    return {
        getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', criteria = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                criteria,
            };
            return apiHandler.get(`histograms/transactions`, params);
        }
    };
};
