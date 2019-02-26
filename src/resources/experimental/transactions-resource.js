export default function TransactionsResource({apiHandler}) {
    return {
        async reschedule({id = '', data}, params) {
            return await apiHandler.post(`transactions/${id}/reschedule`, data, params);
        }
    };
}
