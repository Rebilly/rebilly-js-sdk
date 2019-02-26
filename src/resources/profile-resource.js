const RESOURCE = 'profile';

export default function ProfileResource({apiHandler}) {
    return {
        async get(params) {
            return await apiHandler.get(RESOURCE, params);
        },

        async update({data}, params) {
            return await apiHandler.put(RESOURCE, data, params);
        },

        async updatePassword({data}, params) {
            return await apiHandler.post(`${RESOURCE}/password`, data, {params: {...params}});
        },

        async resetTotp(params) {
            return await apiHandler.post(`${RESOURCE}/totp-reset`, null, {params: {...params}});
        }
    };
}
