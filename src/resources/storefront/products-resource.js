export default function ProductsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null} = {}) {
            const params = {
                limit,
                offset,
            };
            return apiHandler.getAll(`products`, params);
        },

        get({id} = {}) {
            return apiHandler.get(`products/${id}`);
        },
    }
}
