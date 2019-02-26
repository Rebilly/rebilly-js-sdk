const RESOURCE = 'users';
const RESET_PASSWORD = 'reset-password';

export default function UsersResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id = '', data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        },

        async updatePassword({id, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/password`, data, {params: {...params}});
        },

        async getResetPasswordToken({token}, params) {
            return await apiHandler.get(`${RESET_PASSWORD}/${token}`, params);
        },

        async resetPassword({token, data}, params) {
            return await apiHandler.post(`${RESET_PASSWORD}/${token}`, data, {params: {...params}});
        },

        async resetTotp({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/totp-reset`, null, {params: {...params}});
        }
    };
}
