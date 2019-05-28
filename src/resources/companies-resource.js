export default function CompaniesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                q
            };
            return apiHandler.getAll(`companies`, params);
        },

        get({id}) {
            return apiHandler.get(`companies/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`companies/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.put(`companies/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`companies/${id}`);
        }
    };
};
