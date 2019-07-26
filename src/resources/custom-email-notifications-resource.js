export default function CustomEmailNotificationsResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        getAll() {
            return apiHandler.getAll('custom-email-notifications');
        },
    };
};
