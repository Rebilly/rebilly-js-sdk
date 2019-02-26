const RESOURCE = 'subscription-reactivations';

export default function SubscriptionReactivationsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async reactivate({data}, params) {
            return await apiHandler.post(RESOURCE, data, {params: {...params}});
        }
    };
}
