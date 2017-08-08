export default function CustomEventsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null} = {}) {
            const params = {
                limit,
                offset,
                sort
            };
            return await apiHandler.getAll(`custom-events`, params);
        },

        async get({id}) {
            return await apiHandler.get(`custom-events/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`custom-events/${id}`, id, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`custom-events/${id}`);
        },

        async getRules({id}) {
            return await apiHandler.get(`custom-events/${id}/rules`);
        },

        async createRules({id, data}) {
            return await apiHandler.put(`custom-events/${id}/rules`, data);
        },

        async updateRules({id, data}) {
            return await apiHandler.put(`custom-events/${id}/rules`, data);
        },

        async getRulesHistory({id, limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`custom-events/${id}/rules/history`, params);
        },

        async getRulesVersionNumber({id, version}) {
            return await apiHandler.get(`custom-events/${id}/rules/history/${version}`);
        },

        async getRulesVersionDetail({id, version}) {
            return await apiHandler.get(`custom-events/${id}/rules/versions/${version}`);
        },

        async getAllScheduled({limit = null, offset = null}  = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`queue/custom-events`, params);
        },

        async getScheduled({id}) {
            return await apiHandler.get(`queue/custom-events/${id}`);
        },

        async deleteScheduled({id}) {
            return await apiHandler.delete(`queue/custom-events/${id}`);
        }
    };
};
