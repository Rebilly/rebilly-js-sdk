export default function invoicesMock({adapter}) {
    adapter
        .onPost('/invoices/1234/issue').reply(201)
        .onPut('/invoices/1234').reply(200)
};
