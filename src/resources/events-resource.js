const RESOURCE = 'events';

export default function EventsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({eventType}, params) {
            return await apiHandler.get(`${RESOURCE}/${eventType}`, params);
        },

        async getRules({eventType}, params) {
            return await apiHandler.get(`${RESOURCE}/${eventType}/rules`, params);
        },

        async createRules({eventType, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${eventType}/rules`, data, params);
        },

        async updateRules({eventType, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${eventType}/rules`, data, params);
        },

        async getRulesHistory({eventType, limit = null, offset = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/${eventType}/rules/history`, params);
        },

        async getRulesVersionNumber({eventType, version}, params) {
            return await apiHandler.get(`${RESOURCE}/${eventType}/rules/history/${version}`, params);
        },

        async getRulesVersionDetail({eventType, version}, params) {
            return await apiHandler.get(`${RESOURCE}/${eventType}/rules/versions/${version}`, params);
        }
    };
}
