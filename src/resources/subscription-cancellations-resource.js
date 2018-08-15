export default function SubscriptionCancellationsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`subscription-cancellations`, params);
        },

        async get({id}) {
            return await apiHandler.get(`subscription-cancellations/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`subscription-cancellations/${id}`, id, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`subscription-cancellations/${id}`);
        }
    };
};
