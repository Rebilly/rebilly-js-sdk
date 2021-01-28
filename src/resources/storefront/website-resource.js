export default function WebsiteResource({apiHandler}) {
    return {
        get({id = null} = {}) {
            return apiHandler.get(`websites/${id}`);
        },
    }
}
