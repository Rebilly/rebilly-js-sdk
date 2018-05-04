export default function HistogramsResource({apiHandler}) {
    return {
        async getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = '', criteria = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric,
                criteria,
            };
            return await apiHandler.get(`histograms/transactions`, params);
        }
    };
};
