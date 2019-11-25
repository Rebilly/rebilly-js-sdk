export default function SendThroughAttributionResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`send-through-attribution`, params);
        },
    };
};

