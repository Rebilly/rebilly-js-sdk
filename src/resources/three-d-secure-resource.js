export default function ThreeDSecureResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`3dsecure`, params);
        },

        get({id}) {
            return apiHandler.get(`3dsecure/${id}`);
        },

        create({data}) {
            return apiHandler.post(`3dsecure`, data);
        }
    };
};
