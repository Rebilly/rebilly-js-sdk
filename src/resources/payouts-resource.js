export default function PayoutsResource({apiHandler}) {
    return {
        create({
                   amount = null,
                   currency = null,
                   websiteId = null,
                   customerId = null,
                   paymentInstrumentId = null,
                   token = null,
                   methods = null,
               }) {
            return apiHandler.post(`payouts`, {
                amount,
                currency,
                websiteId,
                customerId,
                paymentInstruction: {
                    paymentInstrumentId,
                    token,
                    methods,
                },
            });
        },
    };
};
