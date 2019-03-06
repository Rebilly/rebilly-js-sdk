export default function EmailNotificationsResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        getAll() {
            return apiHandler.getAll('email-notifications');
        },

        /**
         * Retrieve a email notification
         * @param id
         * @returns {Promise}
         */
        get({id}) {
            return apiHandler.get(`email-notifications/${id}`);
        },

        /**
         * Create a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        create({id = '', data}) {
            return apiHandler.create(`email-notifications/${id}`, id, data);
        },

        /**
         * Update a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        update({id, data}) {
            return apiHandler.put(`email-notifications/${id}`, data);
        },
    };
};
