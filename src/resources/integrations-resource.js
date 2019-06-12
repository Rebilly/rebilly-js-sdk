export default function IntegrationsResource({apiHandler}) {
    return {
        getAll(params) {
            return apiHandler.getAll('integrations', params);
        },

        get({service, expand = null}) {
            return apiHandler.get(`integrations/${service}`, {expand});
        },
    };
};
