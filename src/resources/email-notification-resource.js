export default function EmailNotificationResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of customer email notifications
         * @returns {Promise}
         */
        async getAllCustomerNotifications() {
            return await apiHandler.getAll(`customer-notifications`);
        },

        /**
         * Retrieve a customer email notification settings
         * @param eventType
         * @returns {Promise}
         */
        async getCustomerNotificationSettings({eventType}) {
            return await apiHandler.get(`customer-notifications/${eventType}`);
        },

        /**
         * Create Customer Email notification settings for specified event
         * @param eventType
         * @param body
         * @returns {Promise}
         */
        async createCustomerNotificationSettings({eventType, body}) {
            return await apiHandler.put(`customer-notifications/${eventType}`, body);
        },

        /**
         * Update Customer Email notification settings for specified event
         * @param eventType
         * @param body
         * @returns {Promise}
         */
        async updateCustomerNotificationSettings({eventType, body}) {
            return await apiHandler.put(`customer-notifications/${eventType}`, body);
        },

        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        async getAllOrderNotifications() {
            return await apiHandler.getAll(`order-notifications`);
        },

        /**
         * Retrieve an order email notification settings
         * @param eventType
         * @returns {Promise}
         */
        async getOrderNotificationSettings({eventType}) {
            return await apiHandler.get(`order-notifications/${eventType}`);
        },

        /**
         * Create Order Email notification settings for specified event
         * @param eventType
         * @param body
         * @returns {Promise}
         */
        async createOrderNotificationSettings({eventType, body}) {
            return await apiHandler.put(`order-notifications/${eventType}`, body);
        },

        /**
         * Update Order Email notification settings for specified event
         * @param eventType
         * @param body
         * @returns {Promise}
         */
        async updateOrderNotificationSettings({eventType, body}) {
            return await apiHandler.put(`order-notifications/${eventType}`, body);
        },

        /**
         * Trigger a test Customer Email Notification
         * @param body
         * @returns {Promise}
         */
        async triggerCustomerNotification({body}) {
            return await apiHandler.post(`previews/customer-notification`, body);
        },

        /**
         * Trigger a test Order Email Notification
         * @param body
         * @returns {Promise}
         */
        async triggerOrderNotification({body}) {
            return await apiHandler.post(`previews/order-notification`, body);
        },
    };
};
