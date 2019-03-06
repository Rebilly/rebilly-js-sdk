export default function SubscriptionCancellationsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`subscription-cancellations`, params);
        },

        get({id}) {
            return apiHandler.get(`subscription-cancellations/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`subscription-cancellations/${id}`, id, data);
        },

        delete({id}) {
            return apiHandler.delete(`subscription-cancellations/${id}`);
        }
    };
};
