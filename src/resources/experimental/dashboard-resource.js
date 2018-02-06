export default function DashboardResource({apiHandler}) {
    return {
        async getDashboardMetrics({periodStart = null, periodEnd = null, criteria = null, tz = 0, data} = {}) {
            const params = {
                periodStart,
                periodEnd,
                criteria,
                tz
            };
            return await apiHandler.post(`dashboard`, data, {params});
        },
    };
};
