export default function StatusResource({apiHandler}) {
    return {
        get() {
            return apiHandler.get(`status`);
        }
    };
};
