export default function StatusResource({apiHandler}) {
    return {
        async get(params) {
            return await apiHandler.get(`status`, params);
        }
    };
}
