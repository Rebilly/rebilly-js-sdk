const RESOURCE = 'email-notifications';

export default function EmailNotificationsResource({apiHandler}) {
    return {
        /**
         * Retrieve a list of email notifications
         * @param params {Object} Request parameters
         * @returns {Promise}
         */
        async getAll(params) {
            return await apiHandler.getAll(RESOURCE, params);
        },

        /**
         * Retrieve a email notification
         * @param id
         * @param params {Object} Request parameters
         * @returns {Promise}
         */
        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        /**
         * Create a email notification
         * @param id
         * @param data
         * @param params {Object} Request parameters
         * @returns {Promise}
         */
        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        /**
         * Update a email notification
         * @param id
         * @param data
         * @param params {Object} Request parameters
         * @returns {Promise}
         */
        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },
    };
}
