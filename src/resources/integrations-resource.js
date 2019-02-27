export default function IntegrationsResource({apiHandler}) {
    return {
        async getAll(params) {
            return await apiHandler.getAll('integrations', params);
        }
    };
};
