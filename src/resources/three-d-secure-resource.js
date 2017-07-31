export default function ThreeDSecureResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`3dsecure`, params);
        },

        async get({id}) {
            return await apiHandler.get(`3dsecure/${id}`);
        },

        async create({data}) {
            return await apiHandler.post(`3dsecure`, data);
        }
    };
};
