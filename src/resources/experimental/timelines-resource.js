export default function TimelinesResource({apiHandler}) {
    return {
        async getActivityFeed({eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return await apiHandler.getAll(`activity-feed`, params);
        },

        async getTransaction({id = '', eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return await apiHandler.getAll(`transactions/${id}/timeline`, params);
        },

        async getCustomer({id = '', eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return await apiHandler.getAll(`customers/${id}/timeline`, params);
        }
    };
};
