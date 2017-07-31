export default function EventsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`events`, params);
        },

        async get({eventType}) {
            return await apiHandler.get(`events/${eventType}`);
        },

        async getRules({eventType}) {
            return await apiHandler.get(`events/${eventType}/rules`);
        },

        async createRules({eventType, data}) {
            return await apiHandler.put(`events/${eventType}/rules`, data);
        },

        async updateRules({eventType, data}) {
            return await apiHandler.put(`events/${eventType}/rules`, data);
        },

        async getRulesHistory({eventType, limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return await apiHandler.getAll(`events/${eventType}/rules/history`, params);
        },

        async getRulesVersionNumber({eventType, version}) {
            return await apiHandler.get(`events/${eventType}/rules/history/${version}`);
        },

        async getRulesVersionDetail({eventType, version}) {
            return await apiHandler.get(`events/${eventType}/rules/versions/${version}`);
        }
    };
};
