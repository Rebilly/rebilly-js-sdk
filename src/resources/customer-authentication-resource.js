export default function CustomerAuthenticationResource({apiHandler}) {
    return {
        getAuthOptions() {
            return apiHandler.get(`authentication-options`);
        },

        updateAuthOptions({data}) {
            return apiHandler.put(`authentication-options`, data);
        },

        getAllAuthTokens({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`authentication-tokens`, params);
        },

        verify({token}) {
            return apiHandler.get(`authentication-tokens/${token}`);
        },

        login({data}) {
            return apiHandler.post(`authentication-tokens`, data);
        },

        exchangeToken({token, data}) {
            return apiHandler.post(`authentication-tokens/${token}`, data, {authenticate: false});
        },

        logout({token}) {
            return apiHandler.delete(`authentication-tokens/${token}`);
        },

        getAllCredentials({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`credentials`, params);
        },

        getCredential({id}) {
            return apiHandler.get(`credentials/${id}`);
        },

        createCredential({id = '', data}) {
            return apiHandler.create(`credentials/${id}`, id, data);
        },

        updateCredential({id, data}) {
            return apiHandler.put(`credentials/${id}`, data);
        },

        deleteCredential({id}) {
            return apiHandler.delete(`credentials/${id}`);
        },

        getAllResetPasswordTokens({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`password-tokens`, params);
        },

        getResetPasswordToken({id}) {
            return apiHandler.getAll(`password-tokens/${id}`);
        },

        createResetPasswordToken({data}) {
            return apiHandler.post(`password-tokens`, data);
        },

        deleteResetPasswordToken({id}) {
            return apiHandler.delete(`password-tokens/${id}`);
        }
    };
};
