export default function MembershipsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
            };
            return apiHandler.getAll(`memberships`, params);
        },
    };
};
