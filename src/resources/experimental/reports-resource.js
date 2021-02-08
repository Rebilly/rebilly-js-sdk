// @ts-nocheck
export default function ReportsResource({apiHandler}) {
    return {
        getApiLogSummary({aggregationField = null, periodStart = null, periodEnd = null, limit = null, offset = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/api-log-summary`, params);
        },

        getCumulativeSubscriptions({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/cumulative-subscriptions`, params);
        },

        getDccMarkup({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                tz
            };
            return apiHandler.get(`reports/dcc-markup`, params);
        },

        getDisputes({aggregationField, periodMonth, limit = null, offset = null, filter = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodMonth,
                limit,
                offset,
                filter,
                tz
            };
            return apiHandler.get(`reports/disputes`, params);
        },

        getEventsTriggeredSummary({periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/events-triggered`, params);
        },

        getRulesMatchedSummary({eventType, periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/events-triggered/${eventType}/rules`, params);
        },

        getFutureRenewals({periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/future-renewals`, params);
        },

        getRenewalSales({periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/renewal-sales`, params);
        },

        getRetentionPercentage({aggregationField, aggregationPeriod, periodStart, periodEnd, includeSwitchedSubscriptions = null, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                aggregationPeriod,
                periodStart,
                periodEnd,
                includeSwitchedSubscriptions,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/retention-percentage`, params);
        },

        getRetentionValue({aggregationField, aggregationPeriod, periodStart, periodEnd, includeRefunds = null, includeDisputes = null, limit = null, offset = null, sort = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                aggregationPeriod,
                periodStart,
                periodEnd,
                includeRefunds,
                includeDisputes,
                limit,
                offset,
                sort,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/retention-value`, params);
        },

        getRetryTransaction({periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/retry-transaction`, params);
        },

        getSubscriptionCancellation({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/subscription-cancellation`, params);
        },

        getSubscriptionRenewalList({periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.getAll(`reports/subscription-renewal-list`, params);
        },

        getSubscriptionRenewal({periodStart, periodEnd, limit = null, offset = null, tz = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz
            };
            return apiHandler.get(`reports/subscription-renewal`, params);
        },

        getTimeSeriesTransaction({periodStart, periodEnd, type, subaggregate, limit = null, offset = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                type,
                subaggregate,
                limit,
                offset
            };
            return apiHandler.get(`reports/time-series-transaction`, params);
        },

        getTransactionsTimeDispute({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/transactions-time-dispute`, params);
        },

        getTransactions({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz
            };
            return apiHandler.get(`reports/transactions`, params);
        },

        getDashboardMetrics({periodStart = null, periodEnd = null, tz = null, metrics = null, segments = {}} = {}) {
            const params = {
                periodStart,
                periodEnd,
                tz,
                segments,
                metrics
            };
            return apiHandler.getAll(`reports/dashboard`, params);
        },
    };
};
