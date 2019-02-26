export default function LocationResource({apiHandler}) {
    return {
        async query(params) {
            return await apiHandler.get(`location`, params);
        }
    };
}
