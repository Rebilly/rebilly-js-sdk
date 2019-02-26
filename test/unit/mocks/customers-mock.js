import {createMockHeaders} from '../utils';

export default function customersMock({adapter}) {
    const customers = [
        {
            "id": "f9171662-0585-44ac-a8a1-874c8de9db85",
            "email": "gael_salazar65@gmail.com",
            "firstName": "Gael",
            "lastName": "Salazar",
            "ipAddress": "215.38.48.236",
            "defaultCardId": "198994f1-c92c-4e95-8073-4ee089d16f40",
            "defaultCard": "198994f1-c92c-4e95-8073-4ee089d16f40",
            "createdTime": "2017-05-26 18:59:50",
            "updatedTime": "2017-05-26 18:59:51",
            "customFields": {},
            "primaryAddress": {
                "firstName": "Gael",
                "lastName": "Salazar",
                "organization": null,
                "address": null,
                "address2": null,
                "city": null,
                "region": null,
                "postalCode": null,
                "country": null,
                "phoneNumbers": [],
                "emails": [{
                    "label": "main",
                    "value": "gael_salazar65@gmail.com",
                    "primary": true
                }]
            },
            "defaultPaymentInstrument": {
                "method": "payment-card",
                "paymentCardId": "198994f1-c92c-4e95-8073-4ee089d16f40"
            }
        },
        {
            "id": "3fc5cead-4ca4-4e41-b59a-aee9adb6d825",
            "email": "carolinarobbins1954@gmail.com",
            "firstName": "Carolina",
            "lastName": "Robbins",
            "ipAddress": "229.56.144.104",
            "defaultCardId": "6a338a15-b3f2-4c21-ba1c-d77c2f0d484e",
            "defaultCard": "6a338a15-b3f2-4c21-ba1c-d77c2f0d484e",
            "createdTime": "2017-05-26 18:59:52",
            "updatedTime": "2017-05-26 18:59:54",
            "customFields": {},
            "primaryAddress": {
                "firstName": "Carolina",
                "lastName": "Robbins",
                "organization": null,
                "address": null,
                "address2": null,
                "city": null,
                "region": null,
                "postalCode": null,
                "country": null,
                "phoneNumbers": [],
                "emails": [{
                    "label": "main",
                    "value": "carolinarobbins1954@gmail.com",
                    "primary": true
                }]
            },
            "defaultPaymentInstrument": {
                "method": "payment-card",
                "paymentCardId": "6a338a15-b3f2-4c21-ba1c-d77c2f0d484e"
            }
        }
    ];
    const headers = createMockHeaders({total: customers.length});

    adapter
        .onGet('/customers').reply(200, customers, headers)
        .onGet('/customers/f9171662-0585-44ac-a8a1-874c8de9db85').reply(() => [200, customers[0]])
        //delayed response for a specific ID
        .onGet('/customers/cancellable-customer-id').reply(() => new Promise((resolve) => setTimeout(() => resolve([200, customers[1]]), 1000)));
    //special cases
    adapter.onGet('/customers/timeout-customer-id').timeout();
    adapter.onGet('/customers/network-error-customer-id').networkError();

}
