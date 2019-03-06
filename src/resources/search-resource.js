export default function SearchResource({apiHandler}) {
    return {
        get({filter = null, q = null} = {}) {
            const params = {
                filter,
                q
            };
            return apiHandler.get('search', params);
        }
    };
};
