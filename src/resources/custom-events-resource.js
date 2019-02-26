const RESOURCE = 'custom-events';

export default function CustomEventsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, fields = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                fields,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        },

        async getRules({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/rules`, params);
        },

        async createRules({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}/rules`, data, params);
        },

        async updateRules({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}/rules`, data, params);
        },

        async getRulesHistory({id, limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/${id}/rules/history`, params);
        },

        async getRulesVersionNumber({id, version}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/rules/history/${version}`, params);
        },

        async getRulesVersionDetail({id, version}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/rules/versions/${version}`, params);
        },

        async getAllScheduled({limit = null, offset = null, cancel = null}  = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(`queue/${RESOURCE}`, params);
        },

        async getScheduled({id}, params) {
            return await apiHandler.get(`queue/${RESOURCE}/${id}`, params);
        },

        async deleteScheduled({id}, params) {
            return await apiHandler.delete(`queue/${RESOURCE}/${id}`, params);
        }
    };
}
