export default function MembershipsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, filter = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
                sort,
            };
            return apiHandler.getAll(`memberships`, params);
        },
        get({organizationId, userId}) {
            return apiHandler.get(`memberships/${organizationId}/${userId}`);
        },
        create({organizationId, userId, data}) {
            return apiHandler.put(`memberships/${organizationId}/${userId}`, data);
        },
        update({organizationId, userId, data}) {
            return apiHandler.put(`memberships/${organizationId}/${userId}`, data);
        },
        delete({organizationId, userId}) {
            return apiHandler.delete(`memberships/${organizationId}/${userId}`);
        },
    };
};
