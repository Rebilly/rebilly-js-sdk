export default function OrganizationsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q
            };
            return apiHandler.getAll(`organizations`, params);
        },

        get({id}) {
            return apiHandler.get(`organizations/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`organizations/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`organizations/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`organizations/${id}`);
        }
    };
};
