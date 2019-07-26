export default function EmailNotificationsResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        getAll() {
            return apiHandler.getAll('email-notifications');
        },
    };
};
