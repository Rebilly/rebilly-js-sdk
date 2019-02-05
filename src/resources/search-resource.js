export default function SearchResource({apiHandler}) {
    return {
        async get({filter = null, q = null} = {}) {
            const params = {
                filter,
                q
            };
            return await apiHandler.get('search', params);
        }
    };
};
