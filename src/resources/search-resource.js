export default function SearchResource({apiHandler}) {
    return {
        get({sort = null, limit = null, offset = null, q = null } = {}) {
            const params = {
                sort,
                limit,
                offset,
                q
            };
            return apiHandler.get('search', params);
        }
    };
};
