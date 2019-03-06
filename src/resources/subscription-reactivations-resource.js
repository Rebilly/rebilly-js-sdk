export default function SubscriptionReactivationsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`subscription-reactivations`, params);
        },

        get({id}) {
            return apiHandler.get(`subscription-reactivations/${id}`);
        },

        reactivate({data}) {
            return apiHandler.post(`subscription-reactivations`, data);
        }
    };
};
