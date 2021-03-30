export default function AccountResource({apiHandler}) {
    return {
        get() {
            return apiHandler.get(`account`);
        },

        update({data} = {}) {
            return apiHandler.patch(`account`, data);
        },

        register({data} = {}) {
            return apiHandler.post(`register`, data);
        },

        changePassword({data} = {}) {
            return apiHandler.patch(`account/password`, data);
        },

        requestPasswordReset({data} = {}) {
            return apiHandler.post(`account/forgot-password`, data);
        },

        confirmPasswordReset({token, data} = {}) {
            return apiHandler.post(`account/reset-password/${token}`, data);
        },

        resendEmailVerification({data} = {}) {
            return apiHandler.post(`account/resend-verification`, data);
        },

        verifyEmail({token} = {}) {
            return apiHandler.post(`account/verification/${token}`);
        }
    }
};
