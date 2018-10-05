export default function LocationResource({apiHandler}) {
    return {
        async query() {
            return await apiHandler.get(`location`);
        }
    };
};
