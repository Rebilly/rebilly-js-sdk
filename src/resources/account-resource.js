export default function AccountResource({apiHandler}) {
    return {
        signUp({data}) {
            return apiHandler.post(`signup`, data, {authenticate: false});
        },

        signIn({data}) {
            return apiHandler.post(`signin`, data, {authenticate: false});
        },

        logout() {
            return apiHandler.post(`logout`);
        },

        activate({token}) {
            return apiHandler.post(`activation/${token}`, null, {authenticate: false});
        },

        forgotPassword({data}) {
            return apiHandler.post(`forgot-password`, data, {authenticate: false});
        },

        resetSandbox() {
            return apiHandler.post(`reset-sandbox`);
        }
    };
};
