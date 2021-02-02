export default function BankAccountsResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetBankAccountCollectionRequest } data
        * @returns { rebilly.GetBankAccountCollectionResponse } collection
        */
        // @ts-ignore
        getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return apiHandler.getAll(`bank-accounts`, params);
        },

        /**
        * @returns { rebilly.GetBankAccountResponse } response
        */
        get({id}) {
            return apiHandler.get(`bank-accounts/${id}`);
        },

        /**
        * @param { rebilly.PostBankAccountDataRequest } data
        * @returns { rebilly.PostBankAccountResponse } response
        */
        create({id = '', data}) {
            return apiHandler.create(`bank-accounts/${id}`, id, data);
        },

        /**
        * @param { rebilly.PutBankAccountDataRequest } data
        * @returns { rebilly.PutBankAccountResponse } response
        */
        patch({id = '', data}) {
            return apiHandler.patch(`bank-accounts/${id}`, data);
        },

        /**
        * @returns { rebilly.PostBankAccountDeactivationResponse } response
        */
        deactivate({id}) {
            return apiHandler.post(`bank-accounts/${id}/deactivation`);
        }
    };
};
