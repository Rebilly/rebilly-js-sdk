
const RESOURCE = '3dsecure';

export default function ThreeDSecureResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({data}, params) {
            return await apiHandler.post(RESOURCE, data, {params: {...params}});
        }
    };
}
