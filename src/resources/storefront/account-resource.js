export default function AccountResource({apiHandler}) {
    return {
        get() {
            return apiHandler.get(`account`);
        },

        update({data = null} = {}) {
            return apiHandler.patch(`account`, data);
        },

        register({data = null} = {}) {
            return apiHandler.post(`register`, data);
        },

        changePassword({data = null} = {}) {
            return apiHandler.patch(`account/password`, data);
        },

        requestPasswordReset({data = null} = {}) {
            return apiHandler.post(`account/forgot-password`, data);
        },

        confirmPasswordReset({token = null, data = null} = {}) {
            return apiHandler.post(`account/reset-password/${token}`, data);
        },

        resendEmailVerification({data = null} = {}) {
            return apiHandler.post(`account/resend-verification`, data);
        },

        verifyEmail({token} = {}) {
            return apiHandler.post(`account/verification/${token}`);
        }
    }
};
