import {csvHeader} from '../request-headers';

export default function TrackingResource({apiHandler}) {
    return {
        getAllApiLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`tracking/api`, params);
        },

        downloadApiLogsCSV({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
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
            return apiHandler.download(`tracking/api`, config);
        },

        getApiLog({id}) {
            return apiHandler.get(`tracking/api/${id}`);
        },

        getAllSubscriptionLogs({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return apiHandler.getAll(`tracking/subscriptions`, params);
        },

        getSubscriptionLog({id}) {
            return apiHandler.get(`tracking/subscriptions/${id}`);
        },

        getAllWebhookNotificationLogs({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter
            };
            return apiHandler.getAll(`tracking/website-webhooks`, params);
        },

        getWebhookNotificationLog({id}) {
            return apiHandler.get(`tracking/website-webhooks/${id}`);
        },

        getAllListsChangesHistory({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`tracking/lists`, params);
        },

        getAllWebhookTrackingLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`tracking/webhooks`, params);
        },

        getWebhookTrackingLog({id}) {
            return apiHandler.get(`tracking/webhooks/${id}`);
        },

        resendWebhook({id= null} = {}) {
            return apiHandler.post(`tracking/webhooks/${id}/resend`);
        },

        /**
         * Retrieve a list of tracking email notifications
         * @param limit
         * @param offset
         * @param sort
         * @param filter
         * @param criteria
         * @returns {Promise}
         */
        getAllEmailNotifications({limit = null, offset = null, sort = null, filter = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                criteria
            };
            return apiHandler.getAll(`tracking/email-notifications`, params);
        },

        /**
         * Retrieve a tracking email notification with specified identifier string
         * @param id
         * @returns {Promise}
         */
        getEmailNotification({id}) {
            return apiHandler.get(`tracking/email-notifications/${id}`)
        }
    };
};
