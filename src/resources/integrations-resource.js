export default function IntegrationsResource({apiHandler}) {
    return {
        getAll(params) {
            return apiHandler.getAll('integrations', params);
        }
    };
};
