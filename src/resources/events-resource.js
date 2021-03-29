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

        getRulesHistory({eventType = null, limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`events/${eventType}/rules/history`, params);
        },

        getRulesVersionNumber({eventType, version}) {
            return apiHandler.get(`events/${eventType}/rules/history/${version}`);
        },

        getRulesVersionDetail({eventType, version}) {
            return apiHandler.get(`events/${eventType}/rules/versions/${version}`);
        },

        getAllDraftRulesets({eventType = null, filter = null, limit = null, offset = null} = {}) {
            const params = {
                filter,
                limit,
                offset
            };
            return apiHandler.getAll(`events/${eventType}/rules/drafts`, params);
        },

        getDraftRuleset({eventType = null, id = null} = {}) {
            return apiHandler.get(`events/${eventType}/rules/drafts/${id}`);
        },

        createDraftRuleset({eventType = null, data = {}} = {}) {
            return apiHandler.post(`events/${eventType}/rules/drafts`, data);
        },

        updateDraftRuleset({eventType = null, id = null, data = {}} = {}) {
            return apiHandler.put(`events/${eventType}/rules/drafts/${id}`, data);
        },

        deleteDraftRuleset({eventType, id}) {
            return apiHandler.delete(`events/${eventType}/rules/drafts/${id}`);
        }
    };
};
