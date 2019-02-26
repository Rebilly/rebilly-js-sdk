const RESOURCE = 'sessions';

export default function SessionsResource({apiHandler}) {
    return {
        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        }
    };
}
