export default function HistogramsResource({apiHandler}) {
    return {
        async getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', criteria = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                criteria,
                cancel,
            };
            return await apiHandler.get(`histograms/transactions`, params);
        }
    };
}
