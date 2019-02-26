export default function AccountResource({apiHandler}) {
    return {
        async signUp({data}, params) {
            return await apiHandler.post(`signup`, data, {authenticate: false, params: {...params}});
        },

        async signIn({data}, params) {
            return await apiHandler.post(`signin`, data, {authenticate: false, params: {...params}});
        },

        async logout(params) {
            return await apiHandler.post(`logout`, null, {params: {...params}});
        },

        async activate({token}, params) {
            return await apiHandler.post(`activation/${token}`, null, {authenticate: false, params: {...params}});
        },

        async forgotPassword({data}, params) {
            return await apiHandler.post(`forgot-password`, data, {authenticate: false, params: {...params}});
        },

        async resetSandbox(params) {
            return await apiHandler.post(`reset-sandbox`, null, {params: {...params}});
        }
    };
}
