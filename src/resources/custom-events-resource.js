export default function CustomEventsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                fields,
            };
            return apiHandler.getAll(`custom-events`, params);
        },

        get({id}) {
            return apiHandler.get(`custom-events/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`custom-events/${id}`, id, data);
        },

        delete({id}) {
            return apiHandler.delete(`custom-events/${id}`);
        },

        getRules({id}) {
            return apiHandler.get(`custom-events/${id}/rules`);
        },

        createRules({id, data}) {
            return apiHandler.put(`custom-events/${id}/rules`, data);
        },

        updateRules({id, data}) {
            return apiHandler.put(`custom-events/${id}/rules`, data);
        },

        getRulesHistory({id, limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`custom-events/${id}/rules/history`, params);
        },

        getRulesVersionNumber({id, version}) {
            return apiHandler.get(`custom-events/${id}/rules/history/${version}`);
        },

        getRulesVersionDetail({id, version}) {
            return apiHandler.get(`custom-events/${id}/rules/versions/${version}`);
        },

        getAllScheduled({limit = null, offset = null}  = {}) {
            const params = {
                limit,
                offset
            };
            return apiHandler.getAll(`queue/custom-events`, params);
        },

        getScheduled({id}) {
            return apiHandler.get(`queue/custom-events/${id}`);
        },

        deleteScheduled({id}) {
            return apiHandler.delete(`queue/custom-events/${id}`);
        }
    };
};
