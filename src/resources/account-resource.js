export default function AccountResource({apiHandler}) {
    return {
        async signUp({data}) {
            return await apiHandler.post(`signup`, data, {authenticate: false});
        },

        async signIn({data}) {
            return await apiHandler.post(`signin`, data, {authenticate: false});
        },

        async activate({token}) {
            return await apiHandler.post(`activation/${token}`, null, {authenticate: false});
        },

        async forgotPassword({data}) {
            return await apiHandler.post(`forgot-password`, data, {authenticate: false});
        }
    };
};
