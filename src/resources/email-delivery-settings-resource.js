export default function EmailDeliverySettingsResource({apiHandler}) {
    return {
        /**
         * Retrieve the list of email delivery settings
         * @returns {Promise}
         */
        getAll() {
            return apiHandler.getAll('email-delivery-settings');
        },

        /**
         * Create a new address to send from
         * @returns {Promise}
         */
        create({data}) {
            return apiHandler.post('email-delivery-settings', data);
        },

        /**
         * Retrieve a specific delivery setting by ID
         * @returns {Promise}
         */
        get({id}) {
            return apiHandler.get(`email-delivery-settings/${id}`);
        },

        /**
         * Delete a delivery setting by ID
         * @returns {Promise}
         */
        delete({id}) {
            return apiHandler.delete(`email-delivery-settings/${id}`);
        },

        /**
         * Update a delivery setting by ID
         * The Provider field is read-only
         * @returns {Promise}
         */
        update({id, data}) {
            return apiHandler.delete(`email-delivery-settings/${id}`, data);
        },

        /**
         * Verify that a from address is controlled by the User
         * @returns {Promise}
         */
        verify({token, data}) {
            return apiHandler.patch(`verify/email-delivery-settings/${token}`, data);
        },

    };
};
