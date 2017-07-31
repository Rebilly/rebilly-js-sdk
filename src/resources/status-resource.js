export default function StatusResource({apiHandler}) {
    return {
        async get() {
            return await apiHandler.get(`status`);
        }
    };
};
