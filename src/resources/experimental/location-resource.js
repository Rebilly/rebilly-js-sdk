export default function LocationResource({apiHandler}) {
    return {
        query() {
            return apiHandler.get(`location`);
        }
    };
};
