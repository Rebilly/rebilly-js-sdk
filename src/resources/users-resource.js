export default function UsersResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`users`, params);
        },

        get({id}) {
            return apiHandler.get(`users/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`users/${id}`, id, data);
        },

        update({id = '', data}) {
            return apiHandler.put(`users/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`users/${id}`);
        },

        updatePassword({id, data}) {
            return apiHandler.post(`users/${id}/password`, data);
        },

        getResetPasswordToken({token}) {
            return apiHandler.get(`reset-password/${token}`);
        },

        resetPassword({token, data}) {
            return apiHandler.post(`reset-password/${token}`, data);
        },

        resetTotp({id}) {
            return apiHandler.post(`users/${id}/totp-reset`);
        }
    };
};
