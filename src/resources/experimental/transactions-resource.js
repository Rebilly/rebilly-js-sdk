export default function TransactionsResource({apiHandler}) {
    return {
        async reschedule({id = '', data}) {
            return await apiHandler.post(`/experimental/transactions/${id}/reschedule`, data);
        }
    };
};
