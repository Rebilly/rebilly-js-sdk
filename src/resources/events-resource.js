export default function EventsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`events`, params);
        },

        get({eventType}) {
            return apiHandler.get(`events/${eventType}`);
        },

        getRules({eventType}) {
            return apiHandler.get(`events/${eventType}/rules`);
        },

        createRules({eventType, data}) {
            return apiHandler.put(`events/${eventType}/rules`, data);
        },

        updateRules({eventType, data}) {
            return apiHandler.put(`events/${eventType}/rules`, data);
        },

        getRulesHistory({eventType, limit = null, offset = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
            };
            return apiHandler.getAll(`events/${eventType}/rules/history`, params);
        },

        getRulesVersionNumber({eventType, version}) {
            return apiHandler.get(`events/${eventType}/rules/history/${version}`);
        },

        getRulesVersionDetail({eventType, version}) {
            return apiHandler.get(`events/${eventType}/rules/versions/${version}`);
        }
    };
};
