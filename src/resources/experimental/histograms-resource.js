export default function HistogramsResource({apiHandler}) {
    return {
        async getTransactionHistogramReport({periodStart = '', periodEnd = '', aggregationField = '', aggregationPeriod = '', metric = ''} = {}) {
            const params = {
                periodStart,
                periodEnd,
                aggregationField,
                aggregationPeriod,
                metric
            };
            return await apiHandler.get(`histograms/transactions`, params);
        }
    };
};
