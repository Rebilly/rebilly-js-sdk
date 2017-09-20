import {csvHeader} from '../request-headers';

export default function TrackingResource({apiHandler}) {
    return {
        async getAllApiLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`tracking/api`, params);
        },

        async getAllWebhookTrackingLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`tracking/webhooks`, params);
        },


        async downloadApiLogsCSV({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria
                },
                headers: csvHeader
            };
            return await apiHandler.download(`tracking/api`, config);
        },

        async getApiLog({id}) {
            return await apiHandler.get(`tracking/api/${id}`);
        },


        async getWebhookTrackingLog({id}) {
            return await apiHandler.get(`tracking/webhook/${id}`);
        },


        async getAllSubscriptionLogs({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`tracking/subscriptions`, params);
        },

        async getSubscriptionLog({id}) {
            return await apiHandler.get(`tracking/subscriptions/${id}`);
        },

        async getAllWebhookNotificationLogs({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return await apiHandler.getAll(`tracking/website-webhooks`, params);
        },

        async getWebhookNotificationLog({id}) {
            return await apiHandler.get(`tracking/website-webhooks/${id}`);
        },

        async getAllListsChangesHistory({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`tracking/lists`, params);
        }
    };
};
