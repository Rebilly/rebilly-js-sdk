export default function SessionsResource({apiHandler}) {
    return {
        get({id}) {
            return apiHandler.get(`sessions/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`sessions/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`sessions/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`sessions/${id}`);
        }
    };
};
