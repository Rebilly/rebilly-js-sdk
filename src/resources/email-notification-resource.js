export default function EmailNotificationResource({apiHandler}) {
    return {
        async getAllCustomerNotifications() {
            return await apiHandler.getAll(`customer-notifications`);
        },

        async getCustomerNotificationSettings({eventType}) {
            return await apiHandler.get(`customer-notifications/${eventType}`);
        },

        async createCustomerNotificationSettings({eventType, body}) {
            return await apiHandler.put(`customer-notifications/${eventType}`, body);
        },

        async updateCustomerNotificationSettings({eventType, body}) {
            return await apiHandler.put(`customer-notifications/${eventType}`, body);
        },

        async getAllOrderNotifications() {
            return await apiHandler.getAll(`order-notifications`);
        },

        async getOrderNotificationSettings({eventType}) {
            return await apiHandler.get(`order-notifications/${eventType}`);
        },

        async createOrderNotificationSettings({eventType, body}) {
            return await apiHandler.put(`order-notifications/${eventType}`, body);
        },

        async updateOrderNotificationSettings({eventType, body}) {
            return await apiHandler.put(`order-notifications/${eventType}`, body);
        },

        async triggerCustomerNotification({body}) {
            return await apiHandler.post(`previews/customer-notification`, body);
        },

        async triggerOrderNotification({body}) {
            return await apiHandler.post(`previews/order-notification`, body);
        },
    };
};
