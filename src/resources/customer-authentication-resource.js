export default function CustomerAuthenticationResource({apiHandler}) {
    return {
        async getAuthOptions() {
            return await apiHandler.get(`authentication-options`);
        },

        async updateAuthOptions({data}) {
            return await apiHandler.put(`authentication-options`, data);
        },

        async getAllAuthTokens({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`authentication-tokens`, params);
        },

        async verify({token}) {
            return await apiHandler.get(`authentication-tokens/${token}`);
        },

        async login({data}) {
            return await apiHandler.post(`authentication-tokens`, data);
        },

        async logout({token}) {
            return await apiHandler.delete(`authentication-tokens/${token}`);
        },

        async getAllCredentials({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`credentials`, params);
        },

        async getCredential({id}) {
            return await apiHandler.get(`credentials/${id}`);
        },

        async createCredential({id = '', data}) {
            return await apiHandler.create(`credentials/${id}`, id, data);
        },

        async updateCredential({id, data}) {
            return await apiHandler.put(`credentials/${id}`, data);
        },

        async deleteCredential({id}) {
            return await apiHandler.delete(`credentials/${id}`);
        },

        async getAllResetPasswordTokens({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`password-tokens`, params);
        },

        async getResetPasswordToken({id}) {
            return await apiHandler.getAll(`password-tokens/${id}`);
        },

        async createResetPasswordToken({data}) {
            return await apiHandler.post(`password-tokens`, data);
        },

        async deleteResetPasswordToken({id}) {
            return await apiHandler.delete(`password-tokens/${id}`);
        }
    };
};
