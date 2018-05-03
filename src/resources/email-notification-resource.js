export default function EmailNotificationResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of email notifications
         * @returns {Promise}
         */
        async getAll() {
            return await apiHandler.getAll('email-notifications');
        },

        /**
         * Retrieve a email notification
         * @param id
         * @returns {Promise}
         */
        async get({id}) {
            return await apiHandler.get(`email-notifications/${id}`);
        },

        /**
         * Create a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        async create({id = '', data}) {
            return await apiHandler.create(`email-notifications/${id}`, id, data);
        },

        /**
         * Update a email notification
         * @param id
         * @param data
         * @returns {Promise}
         */
        async update({id, data}) {
            return await apiHandler.put(`email-notifications/${id}`, data);
        },
    };
};
