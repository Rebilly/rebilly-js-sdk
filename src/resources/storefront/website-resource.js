export default function WebsiteResource({apiHandler}) {
    return {
        get({id} = {}) {
            return apiHandler.get(`websites/${id}`);
        },
    }
}
