export default function SendThroughAttributionResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
            };
            return apiHandler.getAll(`send-through-attribution`, params);
        },
    };
};

