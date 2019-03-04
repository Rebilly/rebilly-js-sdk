export default function TransactionsResource({apiHandler}) {
    return {
        reschedule({id = '', data}) {
            return apiHandler.post(`transactions/${id}/reschedule`, data);
        }
    };
};
