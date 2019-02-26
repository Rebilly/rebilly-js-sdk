import {csvHeader} from '../request-headers';

const RESOURCE = 'tracking';

export default function TrackingResource({apiHandler}) {
    return {
        async getAllApiLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/api`, params);
        },

        async downloadApiLogsCSV({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    filter,
                    q,
                    criteria,
                    cancel,
                },
                headers: csvHeader
            };
            return await apiHandler.download(`${RESOURCE}/api`, config);
        },

        async getApiLog({id}, params) {
            return await apiHandler.get(`${RESOURCE}/api/${id}`, params);
        },

        async getAllSubscriptionLogs({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/subscriptions`, params);
        },

        async getSubscriptionLog({id}, params) {
            return await apiHandler.get(`${RESOURCE}/subscriptions/${id}`, params);
        },

        async getAllWebhookNotificationLogs({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/website-webhooks`, params);
        },

        async getWebhookNotificationLog({id}, params) {
            return await apiHandler.get(`${RESOURCE}/website-webhooks/${id}`, params);
        },

        async getAllListsChangesHistory({limit = null, offset = null, sort = null, filter = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/lists`, params);
        },

        async getAllWebhookTrackingLogs({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/webhooks`, params);
        },

        async getWebhookTrackingLog({id}, params) {
            return await apiHandler.get(`${RESOURCE}/webhooks/${id}`, params);
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
        async getAllEmailNotifications({limit = null, offset = null, sort = null, filter = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/email-notifications`, params);
        },

        /**
         * Retrieve a tracking email notification with specified identifier string
         * @param id
         * @returns {Promise}
         */
        async getEmailNotification({id}, params) {
            return await apiHandler.get(`${RESOURCE}/email-notifications/${id}`, params)
        }
    };
}
