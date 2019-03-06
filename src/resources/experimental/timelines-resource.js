export default function TimelinesResource({apiHandler}) {
    return {
        getActivityFeed({eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return apiHandler.getAll(`activity-feed`, params);
        },

        getTransaction({id = '', eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return apiHandler.getAll(`transactions/${id}/timeline`, params);
        },

        getCustomer({id = '', eventTypes = null, limit = 1000, offset = 0}) {
            const params = {
                eventTypes,
                limit,
                offset
            };

            return apiHandler.getAll(`customers/${id}/timeline`, params);
        }
    };
};
