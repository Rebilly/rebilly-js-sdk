const RESOURCE = 'reports';

export default function ReportsResource({apiHandler}) {
    return {
        async getApiLogSummary({aggregationField, periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/api-log-summary`, params);
        },

        async getCumulativeSubscriptionsPlans({periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/cumulative-subscriptions-plans`, params);
        },

        async getCumulativeSubscriptions({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/cumulative-subscriptions`, params);
        },

        async getDccMarkup({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/dcc-markup`, params);
        },

        async getDisputes({aggregationField, periodMonth, limit = null, offset = null, filter = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodMonth,
                limit,
                offset,
                filter,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/disputes`, params);
        },

        async getEventsTriggeredSummary({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel
            };
            return await apiHandler.get(`${RESOURCE}/events-triggered`, params);
        },

        async getRulesMatchedSummary({eventType, periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/events-triggered/${eventType}/rules`, params);
        },

        async getFutureRenewals({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/future-renewals`, params);
        },

        async getRenewalSales({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/renewal-sales`, params);
        },

        async getRetentionPercentage({aggregationField, aggregationPeriod, periodStart, periodEnd, includeSwitchedSubscriptions = null, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
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
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/retention-percentage`, params);
        },

        async getRetentionValue({aggregationField, aggregationPeriod, periodStart, periodEnd, includeRefunds = null, includeDisputes = null, limit = null, offset = null, sort = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
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
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/retention-value`, params);
        },

        async getRetryTransaction({periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/retry-transaction`, params);
        },

        async getStatistics(params) {
            return await apiHandler.get(`${RESOURCE}/statistics`, params);
        },

        async getSubscriptionCancellation({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/subscription-cancellation`, params);
        },

        async getSubscriptionRenewalList({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/subscription-renewal-list`, params);
        },

        async getSubscriptionRenewal({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/subscription-renewal`, params);
        },

        async getTimeSeriesTransaction({periodStart, periodEnd, type, subaggregate, limit = null, offset = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                type,
                subaggregate,
                limit,
                offset,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/time-series-transaction`, params);
        },

        async getTransactionsPlan({periodStart, periodEnd, limit = null, offset = null, tz = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                tz,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/transactions-plan`, params);
        },

        async getTransactionsTimeDispute({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/transactions-time-dispute`, params);
        },

        async getTransactions({aggregationField, periodStart, periodEnd, limit = null, offset = null, filter = null, criteria = null, tz = null, cancel = null} = {}) {
            const params = {
                aggregationField,
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                criteria,
                tz,
                cancel,
            };
            return await apiHandler.get(`${RESOURCE}/transactions`, params);
        },

        async getPaymentsSuccessByDeclineReason({periodStart, periodEnd, limit = null, offset = null, filter = null, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                limit,
                offset,
                filter,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/payments-success-by-decline-reason`, params);
        },

        async getDashboardMetrics({periodStart = null, periodEnd = null, tz = null, metrics = null, segments = {}, cancel = null} = {}) {
            const params = {
                periodStart,
                periodEnd,
                tz,
                segments,
                metrics,
                cancel
            };
            return await apiHandler.getAll(`${RESOURCE}/dashboard`, params);
        },
    };
}
