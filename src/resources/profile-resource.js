export default function ProfileResource({apiHandler}) {
    return {
        get() {
            return apiHandler.get(`profile`);
        },

        update({data}) {
            return apiHandler.put(`profile`, data);
        },

        updatePassword({data}) {
            return apiHandler.post(`profile/password`, data);
        },

        resetTotp() {
            return apiHandler.post(`profile/totp-reset`);
        }
    };
};
