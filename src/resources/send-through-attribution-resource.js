export default function SendThroughAttributionResource({apiHandler}) {
    return {
        getAll(eventType, {limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
            };
            return apiHandler.getAll(`send-through-attribution/${eventType}`, params);
        },
    };
};

