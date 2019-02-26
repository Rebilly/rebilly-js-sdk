export default function SearchResource({apiHandler}) {
    return {
        async get({filter = null, q = null, cancel = null} = {}) {
            const params = {
                filter,
                q,
                cancel,
            };
            return await apiHandler.get('search', params);
        }
    };
}
