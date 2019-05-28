export default function IntegrationsResource({apiHandler}) {
    return {
        getAll(params) {
            return apiHandler.getAll('integrations', params);
        },

        get({label, expand = null}) {
            return apiHandler.get(`integrations/${label}`, {expand});
        },
    };
};
