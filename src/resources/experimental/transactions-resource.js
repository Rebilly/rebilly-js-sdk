export default function TransactionsResource({apiHandler}) {
    return {
        async reschedule({id = '', data}) {
            return await apiHandler.post(`transactions/${id}/reschedule`, data);
        }
    };
};
