export default function ExportSchedulesResource({apiHandler}) {
    return {
        async getAll({resource, limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`export-schedules/${resource}`, params);
        },

        async get({resource, id}) {
            return await apiHandler.get(`export-schedules/${resource}/${id}`);
        },

        async create({resource, data}) {
            return await apiHandler.post(`export-schedules/${resource}`, data);
        },

        async update({resource, id, data}) {
            return await apiHandler.put(`export-schedules/${resource}/${id}`, data);
        },

        async delete({resource, id}) {
            return await apiHandler.delete(`export-schedules/${resource}/${id}`);
        }
    };
};
