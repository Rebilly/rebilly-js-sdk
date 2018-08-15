export default function SubscriptionReactivationsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`subscription-reactivations`, params);
        },

        async get({id}) {
            return await apiHandler.get(`subscription-reactivations/${id}`);
        },

        async reactivate({data}) {
            return await apiHandler.post(`subscription-reactivations`, data);
        }
    };
};
