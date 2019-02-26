const AUTH_OPTIONS = 'authentication-options';
const AUTH_TOKENS = 'authentication-tokens';
const CREDENTIALS = 'credentials';
const PWD_TOKENS = 'password-tokens';

export default function CustomerAuthenticationResource({apiHandler}) {
    return {
        async getAuthOptions(params) {
            return await apiHandler.get(AUTH_OPTIONS, params);
        },

        async updateAuthOptions({data}, params) {
            return await apiHandler.put(AUTH_OPTIONS, data, params);
        },

        async getAllAuthTokens({limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(AUTH_TOKENS, params);
        },

        async verify({token}, params) {
            return await apiHandler.get(`${AUTH_TOKENS}/${token}`, params);
        },

        async login({data}, params) {
            return await apiHandler.post(AUTH_TOKENS, data, {params: {...params}});
        },

        async logout({token}, params) {
            return await apiHandler.delete(`${AUTH_TOKENS}/${token}`, params);
        },

        async getAllCredentials({limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(CREDENTIALS, params);
        },

        async getCredential({id}, params) {
            return await apiHandler.get(`${CREDENTIALS}/${id}`, params);
        },

        async createCredential({id = '', data}, params) {
            return await apiHandler.create(`${CREDENTIALS}/${id}`, id, data, params);
        },

        async updateCredential({id, data}, params) {
            return await apiHandler.put(`${CREDENTIALS}/${id}`, data, params);
        },

        async deleteCredential({id}, params) {
            return await apiHandler.delete(`${CREDENTIALS}/${id}`, params);
        },

        async getAllResetPasswordTokens({limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(PWD_TOKENS, params);
        },

        async getResetPasswordToken({id}, params) {
            return await apiHandler.getAll(`${PWD_TOKENS}/${id}`, params);
        },

        async createResetPasswordToken({data}, params) {
            return await apiHandler.post(PWD_TOKENS, data, {params: {...params}});
        },

        async deleteResetPasswordToken({id}, params) {
            return await apiHandler.delete(`${PWD_TOKENS}/${id}`, params);
        }
    };
}
