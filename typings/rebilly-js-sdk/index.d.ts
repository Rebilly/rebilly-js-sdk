declare module "resources/account-resource" {
    export default function AccountResource({ apiHandler }: {
        apiHandler: any;
    }): {
        signUp({ data }: rebilly.PostSignupRequestDataRequest): rebilly.PostSignupRequestResponse;
        signIn({ data }: rebilly.PostSigninRequestDataRequest): rebilly.PostSigninRequestResponse;
        logout(): rebilly.PostLogoutRequestResponse;
        activate({ token }: {
            token: any;
        }): rebilly.PostActivationResponse;
        forgotPassword({ data }: rebilly.PostForgotPasswordRequestDataRequest): rebilly.PostForgotPasswordRequestResponse;
        resetSandbox(): any;
    };
}
declare module "resources/aml-resource" {
    export default function AmlResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ firstName, lastName, dob, country }: {
            firstName: any;
            lastName: any;
            dob?: any;
            country?: any;
        }): any;
    };
}
declare module "resources/api-keys-resource" {
    export default function ApiKeysResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort }?: rebilly.GetApiKeyCollectionRequest): rebilly.GetApiKeyCollectionResponse;
        get({ id }: {
            id: any;
        }): rebilly.GetApiKeyResponse;
        create({ id, data }: rebilly.PostApiKeyDataRequest): rebilly.PostApiKeyResponse;
        update({ id, data }: rebilly.PutApiKeyDataRequest): rebilly.PutApiKeyResponse;
        delete({ id }: {
            id: any;
        }): rebilly.DeleteApiKeyResponse;
    };
}
declare module "resources/bank-accounts-resource" {
    export default function BankAccountsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: rebilly.GetBankAccountCollectionRequest): rebilly.GetBankAccountCollectionResponse;
        get({ id }: {
            id: any;
        }): rebilly.GetBankAccountResponse;
        create({ id, data }: rebilly.PostBankAccountDataRequest): rebilly.PostBankAccountResponse;
        patch({ id, data }: rebilly.PutBankAccountDataRequest): rebilly.PutBankAccountResponse;
        deactivate({ id }: {
            id: any;
        }): rebilly.PostBankAccountDeactivationResponse;
    };
}
declare module "resources/blocklists-resource" {
    export default function BlocklistsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, q, filter }?: rebilly.GetBlocklistCollectionRequest): rebilly.GetBlocklistCollectionResponse;
        get({ id }: {
            id: any;
        }): rebilly.GetBlocklistResponse;
        create({ id, data }: rebilly.PostBlocklistDataRequest): rebilly.PostBlocklistResponse;
        delete({ id }: {
            id: any;
        }): rebilly.DeleteBlocklistResponse;
    };
}
declare module "resources/broadcast-messages-resource" {
    export default function BroadcastMessagesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/checkout-forms-resource" {
    export default function CheckoutFormsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        create({ id, data, expand }: {
            id?: string;
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/coupons-resource" {
    export default function CouponsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        getAllRedemptions({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        getRedemption({ id }: {
            id: any;
        }): any;
        cancelRedemption({ id }: {
            id: any;
        }): any;
        redeem({ data }: {
            data: any;
        }): any;
        setExpiration({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/credential-hashes-resource" {
    export default function CredentialHashesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getEmailCredential({ hash }: {
            hash: any;
        }): any;
        getWebhookCredential({ hash }: {
            hash: any;
        }): any;
        getMailgunCredential({ hash }: {
            hash: any;
        }): any;
        getAWSSESCredential({ hash }: {
            hash: any;
        }): any;
        getAllExperianCredentials(): any;
        getExperianCredential({ hash }: {
            hash: any;
        }): any;
        getSendGridCredential({ hash }: {
            hash: any;
        }): any;
        getPostmarkCredential({ hash }: {
            hash: any;
        }): any;
        getOAuth2Credential({ hash }: {
            hash: any;
        }): any;
        getAllOAuth2Credentials(): any;
        getOAuth2CredentialItems({ hash, q, params }: {
            hash: any;
            q?: any;
            params?: any;
        }): any;
        updateOAuth2Credential({ hash, data }: {
            hash: any;
            data: any;
        }): any;
        createEmailCredential({ data }: {
            data: any;
        }): any;
        createWebhookCredential({ data }: {
            data: any;
        }): any;
        createMailgunCredential({ data }: {
            data: any;
        }): any;
        createAWSSESCredential({ data }: {
            data: any;
        }): any;
        createExperianCredential({ data }: {
            data: any;
        }): any;
        updateExperianCredential({ hash, data }: {
            hash: any;
            data: any;
        }): any;
        createSendGridCredential({ data }: {
            data: any;
        }): any;
        createPostmarkCredential({ data }: {
            data: any;
        }): any;
        createOAuth2Credential({ data }: {
            data: any;
        }): any;
    };
}
declare module "resources/credit-memos-resource" {
    export default function CreditMemosResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        getAllTransactions({ id }: {
            id: any;
        }): any;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): any;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): any;
        createTimelineComment({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/customer-authentication-resource" {
    export default function CustomerAuthenticationResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAuthOptions(): any;
        updateAuthOptions({ data }: {
            data: any;
        }): any;
        getAllAuthTokens({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        verify({ token }: {
            token: any;
        }): any;
        login({ data }: {
            data: any;
        }): any;
        exchangeToken({ token, data }: {
            token: any;
            data: any;
        }): any;
        logout({ token }: {
            token: any;
        }): any;
        getAllCredentials({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        getCredential({ id }: {
            id: any;
        }): any;
        createCredential({ id, data }: {
            id?: string;
            data: any;
        }): any;
        updateCredential({ id, data }: {
            id: any;
            data: any;
        }): any;
        deleteCredential({ id }: {
            id: any;
        }): any;
        getAllResetPasswordTokens({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        getResetPasswordToken({ id }: {
            id: any;
        }): any;
        createResetPasswordToken({ data }: {
            data: any;
        }): any;
        deleteResetPasswordToken({ id }: {
            id: any;
        }): any;
    };
}
declare module "request-headers" {
    export namespace csvHeader {
        const Accept: string;
    }
    export namespace pdfHeader {
        const Accept_1: string;
        export { Accept_1 as Accept };
    }
}
declare module "resources/customers-resource" {
    export default function CustomersResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria, fields }?: rebilly.GetCustomerCollectionRequest): rebilly.GetCustomerCollectionResponse;
        downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand, fields }: {
            id: any;
            expand?: any;
            fields?: any;
        }): rebilly.GetCustomerResponse;
        create({ id, data, expand }: {
            id?: string;
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
        merge({ id, targetId }: {
            id: any;
            targetId?: string;
        }): any;
        getLeadSource({ id }: {
            id: any;
        }): any;
        createLeadSource({ id, data }: {
            id: any;
            data: any;
        }): any;
        updateLeadSource({ id, data }: {
            id: any;
            data: any;
        }): any;
        deleteLeadSource({ id }: {
            id: any;
        }): any;
        getAllUpcomingInvoices({ id, limit, offset, sort, filter, expand }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            expand?: any;
        }): any;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): any;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): any;
        createTimelineComment({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/custom-fields-resource" {
    export default function CustomFieldsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ resource, limit, offset, fields }?: {
            resource?: any;
            limit?: any;
            offset?: any;
            fields?: any;
        }): any;
        get({ resource, name }: {
            resource: any;
            name: any;
        }): any;
        create({ resource, name, data }: {
            resource: any;
            name: any;
            data: any;
        }): any;
        update({ resource, name, data }: {
            resource: any;
            name: any;
            data: any;
        }): any;
    };
}
declare module "resources/disputes-resource" {
    export default function DisputesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        create({ id, data, expand }: {
            id?: string;
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
    };
}
declare module "resources/email-delivery-settings-resource" {
    export default function EmailDeliverySettingsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): Promise<any>;
        create({ data }: {
            data: any;
        }): Promise<any>;
        get({ id }: {
            id: any;
        }): Promise<any>;
        delete({ id }: {
            id: any;
        }): Promise<any>;
        update({ id, data }: {
            id: any;
            data: any;
        }): Promise<any>;
        verify({ token, data }: {
            token: any;
            data: any;
        }): Promise<any>;
        resendVerification({ id }: {
            id: any;
        }): Promise<any>;
    };
}
declare module "resources/email-messages-resource" {
    export default function EmailMessagesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
        send({ id, data }: {
            id: any;
            data?: {
                status: string;
            };
        }): any;
    };
}
declare module "resources/email-notifications-resource" {
    export default function EmailNotificationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll(): Promise<any>;
    };
}
declare module "resources/events-resource" {
    export default function EventsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ eventType }: {
            eventType: any;
        }): any;
        getRules({ eventType }: {
            eventType: any;
        }): any;
        createRules({ eventType, data }: {
            eventType: any;
            data: any;
        }): any;
        updateRules({ eventType, data }: {
            eventType: any;
            data: any;
        }): any;
        getRulesHistory({ eventType, limit, offset }?: {
            eventType?: any;
            limit?: any;
            offset?: any;
        }): any;
        getRulesVersionNumber({ eventType, version }: {
            eventType: any;
            version: any;
        }): any;
        getRulesVersionDetail({ eventType, version }: {
            eventType: any;
            version: any;
        }): any;
    };
}
declare module "resources/files-resource" {
    export default function FilesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        upload({ fileObject }: {
            fileObject: any;
        }): any;
        uploadAndUpdate({ fileObject, data }: {
            fileObject: any;
            data?: {
                description: string;
                tags: string[];
            };
        }): Promise<any>;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
        detachAndDelete({ id }: {
            id: any;
        }): Promise<any>;
        download({ id }: {
            id: any;
        }): any;
        getAllAttachments({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        getAttachment({ id }: {
            id: any;
        }): any;
        updateAttachment({ id, data }: {
            id: any;
            data: any;
        }): any;
        attach({ data }: {
            data: any;
        }): any;
        detach({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/gateway-accounts-resource" {
    export default function GatewayAccountsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria, fields }?: rebilly.GetGatewayAccountCollectionRequest): rebilly.GetGatewayAccountCollectionResponse;
        get({ id }: {
            id: any;
        }): rebilly.GetGatewayAccountCollectionResponse;
        create({ id, data }: rebilly.PostGatewayAccountDataRequest): rebilly.PostGatewayAccountResponse;
        update({ id, data }: rebilly.PutGatewayAccountDataRequest): rebilly.PutGatewayAccountResponse;
        delete({ id }: {
            id: any;
        }): rebilly.DeleteGatewayAccountResponse;
        enable({ id }: {
            id: any;
        }): rebilly.PostGatewayAccountEnablementResponse;
        disable({ id }: {
            id: any;
        }): rebilly.PostGatewayAccountDisablementResponse;
        close({ id }: {
            id: any;
        }): rebilly.PostGatewayAccountClosureResponse;
        checkCredentials({ id }: {
            id: any;
        }): any;
        getAllDowntimeSchedules({ id, limit, offset, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            filter?: any;
        }): rebilly.GetGatewayAccountDowntimeScheduleCollectionResponse;
        getDowntimeSchedule({ id, downtimeScheduleId }: {
            id: any;
            downtimeScheduleId: any;
        }): any;
        createDowntimeSchedule({ id, data }: rebilly.PostGatewayAccountDowntimeScheduleDataRequest): rebilly.PostGatewayAccountDowntimeScheduleResponse;
        updateDowntimeSchedule({ id, downtimeScheduleId, data }: rebilly.PutGatewayAccountDowntimeScheduleDataRequest): rebilly.PutGatewayAccountDowntimeScheduleResponse;
        deleteDowntimeSchedule({ id, downtimeScheduleId }: {
            id: any;
            downtimeScheduleId: any;
        }): rebilly.DeleteGatewayAccountDowntimeScheduleResponse;
        getAllVolumeLimits({ id }: {
            id: any;
        }): rebilly.GetGatewayAccountLimitCollectionResponse;
        getVolumeLimit({ id, volumeLimitId }: {
            id: any;
            volumeLimitId: any;
        }): rebilly.GetGatewayAccountLimitResponse;
        createVolumeLimit({ id, volumeLimitId, data }: rebilly.PutGatewayAccountLimitDataRequest): rebilly.PutGatewayAccountLimitResponse;
        updateVolumeLimit({ id, volumeLimitId, data }: rebilly.PutGatewayAccountLimitDataRequest): rebilly.PutGatewayAccountLimitResponse;
        deleteVolumeLimit({ id, volumeLimitId }: {
            id: any;
            volumeLimitId: any;
        }): rebilly.DeleteGatewayAccountLimitResponse;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: rebilly.GetGatewayAccountTimelineCollectionRequest): rebilly.GetGatewayAccountTimelineCollectionResponse;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): rebilly.GetGatewayAccountTimelineResponse;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): rebilly.DeleteGatewayAccountTimelineResponse;
        createTimelineComment({ id, data }: rebilly.PostGatewayAccountTimelineRequest): rebilly.PostGatewayAccountTimelineResponse;
    };
}
declare module "resources/integrations-resource" {
    export default function IntegrationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll(params: any): any;
        get({ service, expand }: {
            service: any;
            expand?: any;
        }): any;
    };
}
declare module "resources/invoices-resource" {
    export default function InvoicesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: rebilly.GetInvoiceCollectionRequest): rebilly.GetInvoiceCollectionResponse;
        get({ id, expand }: rebilly.GetInvoiceRequest): rebilly.GetInvoiceResponse;
        downloadPDF({ id }: {
            id: any;
        }): any;
        downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        create({ id, data, expand }: rebilly.PostInvoiceRequest): rebilly.PostInvoiceResponse;
        update({ id, data, expand }: rebilly.PutInvoiceRequest): rebilly.PutInvoiceResponse;
        issue({ id, data }: rebilly.PostInvoiceIssuanceDataRequest): rebilly.PostInvoiceIssuanceResponse;
        reissue({ id, data }: rebilly.PostInvoiceReissuanceDataRequest): rebilly.PostInvoiceReissuanceResponse;
        abandon({ id }: {
            id: any;
        }): rebilly.PostInvoiceAbandonmentResponse;
        void({ id }: {
            id: any;
        }): rebilly.PostInvoiceVoidResponse;
        getAllInvoiceItems({ id, limit, offset, expand }: rebilly.GetInvoiceItemCollectionRequest): rebilly.GetInvoiceItemCollectionResponse;
        createInvoiceItem({ id, data }: rebilly.PostInvoiceItemDataRequest): rebilly.PostInvoiceItemResponse;
        getLeadSource({ id }: {
            id: any;
        }): rebilly.GetCustomerLeadSourceResponse;
        createLeadSource({ id, data }: rebilly.PutCustomerLeadSourceDataRequest): rebilly.PutCustomerLeadSourceResponse;
        updateLeadSource({ id, data }: rebilly.PutCustomerLeadSourceDataRequest): rebilly.PutCustomerLeadSourceResponse;
        deleteLeadSource({ id }: {
            id: any;
        }): rebilly.DeleteCustomerLeadSourceResponse;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: rebilly.GetInvoiceTimelineCollectionRequest): rebilly.GetInvoiceTimelineCollectionResponse;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): rebilly.GetInvoiceTimelineResponse;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): rebilly.DeleteCustomerTimelineResponse;
        createTimelineComment({ id, data }: {
            id: any;
            data: any;
        }): any;
        getAllCreditMemos({ id, limit, offset, sort, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getAllTransactionAllocations({ id, limit, offset }: {
            id?: any;
            limit?: any;
            offset?: any;
        }): rebilly.GetInvoiceTransactionAllocationCollectionResponse;
        applyTransaction({ id, transactionId, amount }: {
            id: any;
            transactionId: any;
            amount?: any;
        }): any;
    };
}
declare module "resources/kyc-documents-resource" {
    export default function KycDocumentsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        create({ data, expand }: {
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
        accept({ id }: {
            id: any;
        }): any;
        reject({ id, data }: {
            id: any;
            data: any;
        }): any;
        review({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/lists-resource" {
    export default function ListsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria, fields }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
            fields?: any;
        }): any;
        get({ id, version }: {
            id: any;
            version?: string;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/memberships-resource" {
    export default function MembershipsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, filter, sort }?: {
            limit?: any;
            offset?: any;
            filter?: any;
            sort?: any;
        }): any;
        get({ organizationId, userId }: {
            organizationId: any;
            userId: any;
        }): any;
        create({ organizationId, userId, data }: {
            organizationId: any;
            userId: any;
            data: any;
        }): any;
        update({ organizationId, userId, data }: {
            organizationId: any;
            userId: any;
            data: any;
        }): any;
        delete({ organizationId, userId }: {
            organizationId: any;
            userId: any;
        }): any;
    };
}
declare module "resources/organizations-resource" {
    export default function OrganizationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/payment-cards-bank-names-resource" {
    export default function PaymentCardsBankNamesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
    };
}
declare module "resources/payment-cards-resource" {
    export default function PaymentCardsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        patch({ id, data }: {
            id?: string;
            data: any;
        }): any;
        authorize({ id, data }: {
            id: any;
            data: any;
        }): any;
        deactivate({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/payment-instruments-resource" {
    export default function PaymentInstrumentsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        deactivate({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/payment-methods-resource" {
    export default function PaymentMethodsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll(): any;
        get({ apiName }: {
            apiName: any;
        }): any;
    };
}
declare module "resources/payment-tokens-resource" {
    export default function PaymentTokensResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
    };
}
declare module "resources/payouts-resource" {
    export default function PayoutsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        create({ amount, currency, websiteId, customerId, paymentInstrumentId, token, methods, requestId, description, }: {
            amount?: any;
            currency?: any;
            websiteId?: any;
            customerId?: any;
            paymentInstrumentId?: any;
            token?: any;
            methods?: any;
            requestId: any;
            description: any;
        }): any;
    };
}
declare module "resources/paypal-accounts-resource" {
    export default function PayPalAccountsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        activate({ id, data }: {
            id: any;
            data: any;
        }): any;
        deactivate({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/plaid-credentials-resource" {
    export default function PlaidCredentialsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, fields }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            fields?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/plans-resource" {
    export default function PlansResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria, expand }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
            expand?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/previews-resource" {
    export default function PreviewsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        webhook({ data }: {
            data: any;
        }): any;
        triggerWebhookRuleAction({ data }: {
            data: any;
        }): any;
        sendEmailRuleAction({ data }: {
            data: any;
        }): any;
        sendEmailNotification({ data }: {
            data: any;
        }): any;
        previewEmailNotification({ data }: {
            data: any;
        }): any;
    };
}
declare module "resources/products-resource" {
    export default function ProductsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, fields }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            fields?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/profile-resource" {
    export default function ProfileResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get(): any;
        update({ data }: {
            data: any;
        }): any;
        updatePassword({ data }: {
            data: any;
        }): any;
        resetTotp(): any;
        startPermissionsEmulation({ data }: {
            data: any;
        }): any;
        stopPermissionsEmulation(): any;
    };
}
declare module "resources/search-resource" {
    export default function SearchResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get({ filter, q }?: {
            filter?: any;
            q?: any;
        }): any;
    };
}
declare module "resources/segments-resource" {
    export default function SegmentsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria, expand }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
            expand?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/send-through-attribution-resource" {
    export default function SendThroughAttributionResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll(eventType: any, { limit, offset, sort }?: {
            limit?: any;
            offset?: any;
            sort?: any;
        }): any;
    };
}
declare module "resources/sessions-resource" {
    export default function SessionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/shipping-zones-resource" {
    export default function ShippingZonesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/status-resource" {
    export default function StatusResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get(): any;
    };
}
declare module "resources/subscription-cancellations-resource" {
    export default function SubscriptionCancellationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/subscription-reactivations-resource" {
    export default function SubscriptionReactivationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        reactivate({ data }: {
            data: any;
        }): any;
    };
}
declare module "resources/subscriptions-resource" {
    export default function SubscriptionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        create({ id, data, expand }: {
            id?: string;
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
        cancel({ id, data }: {
            id: any;
            data: any;
        }): Promise<any>;
        changePlan({ id, data }: {
            id: any;
            data: any;
        }): any;
        getAllUpcomingInvoices({ id, limit, offset, sort, filter, expand }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            expand?: any;
        }): any;
        issueUpcomingInvoice({ id, invoiceId, data }: {
            id: any;
            invoiceId: any;
            data?: {};
        }): any;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): any;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): any;
        createTimelineComment({ id, data }: {
            id: any;
            data: any;
        }): any;
        createInterimInvoice({ id, data }: {
            id: any;
            data?: {};
        }): any;
    };
}
declare module "resources/tags-resource" {
    export default function TagsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, filter, q, sort, }?: {
            limit?: any;
            offset?: any;
            filter?: any;
            q?: any;
            sort?: any;
        }): any;
        create({ name }: {
            name: any;
        }): any;
        get({ tag }: {
            tag: any;
        }): any;
        update({ tag, name }: {
            tag: any;
            name: any;
        }): any;
        delete({ tag }: {
            tag: any;
        }): any;
        tagCustomers({ tag, ids }: {
            tag: any;
            ids: any;
        }): any;
        tagCustomer({ tag, id }: {
            tag: any;
            id: any;
        }): any;
        untagCustomers({ tag, ids }: {
            tag: any;
            ids: any;
        }): any;
        untagCustomer({ tag, id }: {
            tag: any;
            id: any;
        }): any;
    };
}
declare module "resources/three-d-secure-resource" {
    export default function ThreeDSecureResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ data }: {
            data: any;
        }): any;
    };
}
declare module "resources/tracking-resource" {
    export default function TrackingResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAllApiLogs({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        downloadApiLogsCSV({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        getApiLog({ id }: {
            id: any;
        }): any;
        getAllSubscriptionLogs({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getSubscriptionLog({ id }: {
            id: any;
        }): any;
        getAllWebhookNotificationLogs({ limit, offset, sort, filter }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getWebhookNotificationLog({ id }: {
            id: any;
        }): any;
        getAllListsChangesHistory({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        getAllWebhookTrackingLogs({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        getWebhookTrackingLog({ id }: {
            id: any;
        }): any;
        resendWebhook({ id }?: {
            id?: any;
        }): any;
        getAllEmailNotifications({ limit, offset, sort, filter, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            criteria?: any;
        }): Promise<any>;
        getEmailNotification({ id }: {
            id: any;
        }): Promise<any>;
    };
}
declare module "resources/transactions-resource" {
    export default function TransactionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        create({ data, expand }: {
            data: any;
            expand?: any;
        }): any;
        patch({ id, data }: {
            id: any;
            data: any;
        }): any;
        cancel({ id }: {
            id: any;
        }): any;
        refund({ id, data }: {
            id: any;
            data: any;
        }): any;
        getGatewayLogs({ id }: {
            id: any;
        }): any;
        getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
            id?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
        }): any;
        getTimelineMessage({ id, messageId }?: {
            id?: any;
            messageId?: string;
        }): any;
        deleteTimelineMessage({ id, messageId }: {
            id: any;
            messageId: any;
        }): any;
        createTimelineComment({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/users-resource" {
    export default function UsersResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id?: string;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
        updatePassword({ id, data }: {
            id: any;
            data: any;
        }): any;
        getResetPasswordToken({ token }: {
            token: any;
        }): any;
        resetPassword({ token, data }: {
            token: any;
            data: any;
        }): any;
        resetTotp({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/webhooks-resource" {
    export default function WebhooksResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, filter }?: {
            limit?: any;
            offset?: any;
            filter?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
    };
}
declare module "resources/websites-resource" {
    export default function WebsitesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        downloadCSV({ limit, offset, sort, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id }: {
            id: any;
        }): any;
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
        update({ id, data }: {
            id: any;
            data: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/index" {
    export default Resources;
    namespace Resources {
        export { AccountResource };
        export { AmlResource };
        export { ApiKeysResource };
        export { BankAccountsResource };
        export { BlocklistsResource };
        export { BroadcastMessagesResource };
        export { CheckoutFormsResource };
        export { CouponsResource };
        export { CredentialHashesResource };
        export { CreditMemosResource };
        export { CustomerAuthenticationResource };
        export { CustomersResource };
        export { CustomFieldsResource };
        export { DisputesResource };
        export { EmailDeliverySettingsResource };
        export { EmailMessagesResource };
        export { EmailNotificationsResource };
        export { EventsResource };
        export { FilesResource };
        export { GatewayAccountsResource };
        export { IntegrationsResource };
        export { InvoicesResource };
        export { KycDocumentsResource };
        export { ListsResource };
        export { MembershipsResource };
        export { OrganizationsResource };
        export { PaymentCardsBankNamesResource };
        export { PaymentCardsResource };
        export { PaymentInstrumentsResource };
        export { PaymentMethodsResource };
        export { PaymentTokensResource };
        export { PayoutsResource };
        export { PayPalAccountsResource };
        export { PlaidCredentialsResource };
        export { PlansResource };
        export { PreviewsResource };
        export { ProductsResource };
        export { ProfileResource };
        export { SearchResource };
        export { SegmentsResource };
        export { SendThroughAttributionResource };
        export { SessionsResource };
        export { ShippingZonesResource };
        export { StatusResource };
        export { SubscriptionCancellationsResource };
        export { SubscriptionReactivationsResource };
        export { SubscriptionsResource };
        export { TagsResource };
        export { ThreeDSecureResource };
        export { TrackingResource };
        export { TransactionsResource };
        export { UsersResource };
        export { WebhooksResource };
        export { WebsitesResource };
    }
    import AccountResource from "resources/account-resource";
    import AmlResource from "resources/aml-resource";
    import ApiKeysResource from "resources/api-keys-resource";
    import BankAccountsResource from "resources/bank-accounts-resource";
    import BlocklistsResource from "resources/blocklists-resource";
    import BroadcastMessagesResource from "resources/broadcast-messages-resource";
    import CheckoutFormsResource from "resources/checkout-forms-resource";
    import CouponsResource from "resources/coupons-resource";
    import CredentialHashesResource from "resources/credential-hashes-resource";
    import CreditMemosResource from "resources/credit-memos-resource";
    import CustomerAuthenticationResource from "resources/customer-authentication-resource";
    import CustomersResource from "resources/customers-resource";
    import CustomFieldsResource from "resources/custom-fields-resource";
    import DisputesResource from "resources/disputes-resource";
    import EmailDeliverySettingsResource from "resources/email-delivery-settings-resource";
    import EmailMessagesResource from "resources/email-messages-resource";
    import EmailNotificationsResource from "resources/email-notifications-resource";
    import EventsResource from "resources/events-resource";
    import FilesResource from "resources/files-resource";
    import GatewayAccountsResource from "resources/gateway-accounts-resource";
    import IntegrationsResource from "resources/integrations-resource";
    import InvoicesResource from "resources/invoices-resource";
    import KycDocumentsResource from "resources/kyc-documents-resource";
    import ListsResource from "resources/lists-resource";
    import MembershipsResource from "resources/memberships-resource";
    import OrganizationsResource from "resources/organizations-resource";
    import PaymentCardsBankNamesResource from "resources/payment-cards-bank-names-resource";
    import PaymentCardsResource from "resources/payment-cards-resource";
    import PaymentInstrumentsResource from "resources/payment-instruments-resource";
    import PaymentMethodsResource from "resources/payment-methods-resource";
    import PaymentTokensResource from "resources/payment-tokens-resource";
    import PayoutsResource from "resources/payouts-resource";
    import PayPalAccountsResource from "resources/paypal-accounts-resource";
    import PlaidCredentialsResource from "resources/plaid-credentials-resource";
    import PlansResource from "resources/plans-resource";
    import PreviewsResource from "resources/previews-resource";
    import ProductsResource from "resources/products-resource";
    import ProfileResource from "resources/profile-resource";
    import SearchResource from "resources/search-resource";
    import SegmentsResource from "resources/segments-resource";
    import SendThroughAttributionResource from "resources/send-through-attribution-resource";
    import SessionsResource from "resources/sessions-resource";
    import ShippingZonesResource from "resources/shipping-zones-resource";
    import StatusResource from "resources/status-resource";
    import SubscriptionCancellationsResource from "resources/subscription-cancellations-resource";
    import SubscriptionReactivationsResource from "resources/subscription-reactivations-resource";
    import SubscriptionsResource from "resources/subscriptions-resource";
    import TagsResource from "resources/tags-resource";
    import ThreeDSecureResource from "resources/three-d-secure-resource";
    import TrackingResource from "resources/tracking-resource";
    import TransactionsResource from "resources/transactions-resource";
    import UsersResource from "resources/users-resource";
    import WebhooksResource from "resources/webhooks-resource";
    import WebsitesResource from "resources/websites-resource";
}
declare module "resources/experimental/customers-resource" {
    export default function CustomersResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getCustomerLifetimeSummaryMetrics({ customerId }?: {
            customerId?: string;
        }): any;
    };
}
declare module "resources/experimental/data-exports-resource" {
    export default function DataExportsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            expand?: any;
            filter?: any;
            q?: any;
            criteria?: any;
        }): any;
        get({ id, expand }: {
            id: any;
            expand?: any;
        }): any;
        queue({ data, expand }: {
            data: any;
            expand?: any;
        }): any;
        update({ id, data, expand }: {
            id: any;
            data: any;
            expand?: any;
        }): any;
        delete({ id }: {
            id: any;
        }): any;
    };
}
declare module "resources/experimental/histograms-resource" {
    export default function HistogramsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getTransactionHistogramReport({ periodStart, periodEnd, aggregationField, aggregationPeriod, metric, filter, tz }?: {
            periodStart?: string;
            periodEnd?: string;
            aggregationField?: string;
            aggregationPeriod?: string;
            metric?: string;
            filter?: any;
            tz?: any;
        }): any;
    };
}
declare module "resources/experimental/reports-resource" {
    export default function ReportsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getApiLogSummary({ aggregationField, periodStart, periodEnd, limit, offset, tz }?: {
            aggregationField?: any;
            periodStart?: any;
            periodEnd?: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getCumulativeSubscriptions({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
            aggregationField: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getDccMarkup({ aggregationField, periodStart, periodEnd, limit, offset, filter, tz }?: {
            aggregationField: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            tz?: any;
        }): any;
        getDisputes({ aggregationField, periodMonth, limit, offset, filter, tz }?: {
            aggregationField: any;
            periodMonth: any;
            limit?: any;
            offset?: any;
            filter?: any;
            tz?: any;
        }): any;
        getEventsTriggeredSummary({ periodStart, periodEnd, limit, offset, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getRulesMatchedSummary({ eventType, periodStart, periodEnd, limit, offset, tz }?: {
            eventType: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getFutureRenewals({ periodStart, periodEnd, limit, offset, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getRenewalSales({ periodStart, periodEnd, limit, offset, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getRetentionPercentage({ aggregationField, aggregationPeriod, periodStart, periodEnd, includeSwitchedSubscriptions, limit, offset, filter, criteria, tz }?: {
            aggregationField: any;
            aggregationPeriod: any;
            periodStart: any;
            periodEnd: any;
            includeSwitchedSubscriptions?: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getRetentionValue({ aggregationField, aggregationPeriod, periodStart, periodEnd, includeRefunds, includeDisputes, limit, offset, sort, filter, criteria, tz }?: {
            aggregationField: any;
            aggregationPeriod: any;
            periodStart: any;
            periodEnd: any;
            includeRefunds?: any;
            includeDisputes?: any;
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getRetryTransaction({ periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getSubscriptionCancellation({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
            aggregationField: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getSubscriptionRenewalList({ periodStart, periodEnd, limit, offset, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getSubscriptionRenewal({ periodStart, periodEnd, limit, offset, tz }?: {
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            tz?: any;
        }): any;
        getTimeSeriesTransaction({ periodStart, periodEnd, type, subaggregate, limit, offset }?: {
            periodStart: any;
            periodEnd: any;
            type: any;
            subaggregate: any;
            limit?: any;
            offset?: any;
        }): any;
        getTransactionsTimeDispute({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
            aggregationField: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getTransactions({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
            aggregationField: any;
            periodStart: any;
            periodEnd: any;
            limit?: any;
            offset?: any;
            filter?: any;
            criteria?: any;
            tz?: any;
        }): any;
        getDashboardMetrics({ periodStart, periodEnd, tz, metrics, segments }?: {
            periodStart?: any;
            periodEnd?: any;
            tz?: any;
            metrics?: any;
            segments?: {};
        }): any;
    };
}
declare module "resources/experimental/subscriptions-resource" {
    export default function SubscriptionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getSubscriptionSummaryMetrics({ subscriptionId }?: {
            subscriptionId?: string;
        }): any;
    };
}
declare module "resources/experimental/timelines-resource" {
    export default function TimelinesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getActivityFeed({ eventTypes, limit, offset }: {
            eventTypes?: any;
            limit?: number;
            offset?: number;
        }): any;
        getTransaction({ id, eventTypes, limit, offset }: {
            id?: string;
            eventTypes?: any;
            limit?: number;
            offset?: number;
        }): any;
        getCustomer({ id, eventTypes, limit, offset }: {
            id?: string;
            eventTypes?: any;
            limit?: number;
            offset?: number;
        }): any;
    };
}
declare module "resources/experimental/transactions-resource" {
    export default function TransactionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        reschedule({ id, data }: {
            id?: string;
            data: any;
        }): any;
    };
}
declare module "resources/experimental/location-resource" {
    export default function LocationResource({ apiHandler }: {
        apiHandler: any;
    }): {
        query(): any;
    };
}
declare module "resources/experimental/organizations-resource" {
    export default function OrganizationsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        create({ id, data }: {
            id?: string;
            data: any;
        }): any;
    };
}
declare module "resources/experimental/index" {
    export default ExperimentalResources;
    namespace ExperimentalResources {
        export { CustomersResource };
        export { DataExportsResource };
        export { HistogramsResource };
        export { OrganizationsResource };
        export { ReportsResource };
        export { SubscriptionsResource };
        export { TimelinesResource };
        export { TransactionsResource };
        export { LocationResource };
    }
    import CustomersResource from "resources/experimental/customers-resource";
    import DataExportsResource from "resources/experimental/data-exports-resource";
    import HistogramsResource from "resources/experimental/histograms-resource";
    import OrganizationsResource from "resources/experimental/organizations-resource";
    import ReportsResource from "resources/experimental/reports-resource";
    import SubscriptionsResource from "resources/experimental/subscriptions-resource";
    import TimelinesResource from "resources/experimental/timelines-resource";
    import TransactionsResource from "resources/experimental/transactions-resource";
    import LocationResource from "resources/experimental/location-resource";
}
declare module "resources/storefront/account-resource" {
    export default function AccountResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get(): any;
        update({ data }?: {
            data?: any;
        }): any;
        register({ data }?: {
            data?: any;
        }): any;
        changePassword({ data }?: {
            data?: any;
        }): any;
        requestPasswordReset({ data }?: {
            data?: any;
        }): any;
        confirmPasswordReset({ token, data }?: {
            token?: any;
            data?: any;
        }): any;
        resendEmailVerification({ data }?: {
            data?: any;
        }): any;
        verifyEmail({ token }?: {
            token?: any;
        }): any;
    };
}
declare module "resources/storefront/authorization-resource" {
    export default function AuthorizationResource({ apiHandler }: {
        apiHandler: any;
    }): {
        login({ data }?: {
            data?: any;
        }): any;
        logout(): any;
    };
}
declare module "resources/storefront/checkout-forms-resource" {
    export default function CheckoutFormsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/invoices-resource" {
    export default function InvoicesResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/kyc-documents-resource" {
    export default function KycDocumentsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
        create({ data }?: {
            data?: any;
        }): any;
        update({ id, data }?: {
            id?: any;
            data?: any;
        }): any;
    };
}
declare module "resources/storefront/payment-instruments-resource" {
    export default function PaymentInstruments({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        create({ data }?: {
            data?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
        update({ id, data }?: {
            id?: any;
            data?: any;
        }): any;
        deactivate({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/plans-resource" {
    export default function PlansResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/products-resource" {
    export default function ProductsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset }?: {
            limit?: any;
            offset?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/purchase-resource" {
    export default function PurchaseResource({ apiHandler }: {
        apiHandler: any;
    }): {
        purchase({ data }?: {
            data?: {};
        }): any;
        preview({ data }?: {
            data?: {};
        }): any;
        readyToPay({ data }?: {
            data?: {};
        }): any;
    };
}
declare module "resources/storefront/transactions-resource" {
    export default function TransactionsResource({ apiHandler }: {
        apiHandler: any;
    }): {
        getAll({ limit, offset, sort, filter, q }?: {
            limit?: any;
            offset?: any;
            sort?: any;
            filter?: any;
            q?: any;
        }): any;
        get({ id }?: {
            id?: any;
        }): any;
        update({ id, data }?: {
            id?: any;
            data?: any;
        }): any;
    };
}
declare module "resources/storefront/website-resource" {
    export default function WebsiteResource({ apiHandler }: {
        apiHandler: any;
    }): {
        get({ id }?: {
            id?: any;
        }): any;
    };
}
declare module "resources/storefront/index" {
    export default StorefrontResources;
    namespace StorefrontResources {
        export { AccountResource };
        export { AuthorizationResource };
        export { CheckoutFormResource };
        export { InvoicesResource };
        export { KycDocumentsResource };
        export { PaymentInstrumentsResource };
        export { PlansResource };
        export { ProductResource };
        export { PurchaseResource };
        export { TransactionsResource };
        export { WebsiteResource };
    }
    import AccountResource from "resources/storefront/account-resource";
    import AuthorizationResource from "resources/storefront/authorization-resource";
    import CheckoutFormResource from "resources/storefront/checkout-forms-resource";
    import InvoicesResource from "resources/storefront/invoices-resource";
    import KycDocumentsResource from "resources/storefront/kyc-documents-resource";
    import PaymentInstrumentsResource from "resources/storefront/payment-instruments-resource";
    import PlansResource from "resources/storefront/plans-resource";
    import ProductResource from "resources/storefront/products-resource";
    import PurchaseResource from "resources/storefront/purchase-resource";
    import TransactionsResource from "resources/storefront/transactions-resource";
    import WebsiteResource from "resources/storefront/website-resource";
}
declare module "create-api-instance" {
    export default function createApiInstance({ apiHandler }: {
        apiHandler: any;
    }): ApiInstance;
    export function createExperimentalApiInstance({ apiHandler }: {
        apiHandler: any;
    }): ExperimentalApiInstance;
    export function createStorefrontApiInstance({ apiHandler }: {
        apiHandler: any;
    }): StorefrontApiInstance;
    export class ApiInstance {
        constructor({ apiHandler }: {
            apiHandler: any;
        });
        account: {
            signUp({ data }: rebilly.PostSignupRequestDataRequest): rebilly.PostSignupRequestResponse;
            signIn({ data }: rebilly.PostSigninRequestDataRequest): rebilly.PostSigninRequestResponse;
            logout(): rebilly.PostLogoutRequestResponse;
            activate({ token }: {
                token: any;
            }): rebilly.PostActivationResponse;
            forgotPassword({ data }: rebilly.PostForgotPasswordRequestDataRequest): rebilly.PostForgotPasswordRequestResponse;
            resetSandbox(): any;
        };
        aml: {
            getAll({ firstName, lastName, dob, country }: {
                firstName: any;
                lastName: any;
                dob?: any;
                country?: any;
            }): any;
        };
        apiKeys: {
            getAll({ limit, offset, sort }?: {
                limit?: number;
                offset?: number;
            }): rebilly.GetApiKeyCollectionResponse;
            get({ id }: {
                id: any;
            }): rebilly.GetApiKeyResponse;
            create({ id, data }: rebilly.PostApiKeyDataRequest): rebilly.PostApiKeyResponse;
            update({ id, data }: rebilly.PutApiKeyDataRequest): rebilly.PutApiKeyResponse;
            delete({ id }: {
                id: any;
            }): rebilly.DeleteApiKeyResponse;
        };
        bankAccounts: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: number;
                offset?: number;
            }): rebilly.GetBankAccountCollectionResponse;
            get({ id }: {
                id: any;
            }): rebilly.GetBankAccountResponse;
            create({ id, data }: rebilly.PostBankAccountDataRequest): rebilly.PostBankAccountResponse;
            patch({ id, data }: rebilly.PutBankAccountDataRequest): rebilly.PutBankAccountResponse;
            deactivate({ id }: {
                id: any;
            }): rebilly.PostBankAccountDeactivationResponse;
        };
        blocklists: {
            getAll({ limit, offset, sort, q, filter }?: {
                limit?: number;
                offset?: number;
            }): rebilly.GetBlocklistCollectionResponse;
            get({ id }: {
                id: any;
            }): rebilly.GetBlocklistResponse;
            create({ id, data }: rebilly.PostBlocklistDataRequest): rebilly.PostBlocklistResponse;
            delete({ id }: {
                id: any;
            }): rebilly.DeleteBlocklistResponse;
        };
        gatewayAccounts: {
            getAll({ limit, offset, sort, filter, q, criteria, fields }?: {
                limit?: number;
                offset?: number;
            }): rebilly.GetGatewayAccountCollectionResponse;
            get({ id }: {
                id: any;
            }): rebilly.GetGatewayAccountCollectionResponse;
            create({ id, data }: rebilly.PostGatewayAccountDataRequest): rebilly.PostGatewayAccountResponse;
            update({ id, data }: rebilly.PutGatewayAccountDataRequest): rebilly.PutGatewayAccountResponse;
            delete({ id }: {
                id: any;
            }): rebilly.DeleteGatewayAccountResponse;
            enable({ id }: {
                id: any;
            }): rebilly.PostGatewayAccountEnablementResponse;
            disable({ id }: {
                id: any;
            }): rebilly.PostGatewayAccountDisablementResponse;
            close({ id }: {
                id: any;
            }): rebilly.PostGatewayAccountClosureResponse;
            checkCredentials({ id }: {
                id: any;
            }): any;
            getAllDowntimeSchedules({ id, limit, offset, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                filter?: any;
            }): rebilly.GetGatewayAccountDowntimeScheduleCollectionResponse;
            getDowntimeSchedule({ id, downtimeScheduleId }: {
                id: any;
                downtimeScheduleId: any;
            }): any;
            createDowntimeSchedule({ id, data }: rebilly.PostGatewayAccountDowntimeScheduleDataRequest): rebilly.PostGatewayAccountDowntimeScheduleResponse;
            updateDowntimeSchedule({ id, downtimeScheduleId, data }: rebilly.PutGatewayAccountDowntimeScheduleDataRequest): rebilly.PutGatewayAccountDowntimeScheduleResponse;
            deleteDowntimeSchedule({ id, downtimeScheduleId }: {
                id: any;
                downtimeScheduleId: any;
            }): rebilly.DeleteGatewayAccountDowntimeScheduleResponse;
            getAllVolumeLimits({ id }: {
                id: any;
            }): rebilly.GetGatewayAccountLimitCollectionResponse;
            getVolumeLimit({ id, volumeLimitId }: {
                id: any;
                volumeLimitId: any;
            }): rebilly.GetGatewayAccountLimitResponse;
            createVolumeLimit({ id, volumeLimitId, data }: rebilly.PutGatewayAccountLimitDataRequest): rebilly.PutGatewayAccountLimitResponse;
            updateVolumeLimit({ id, volumeLimitId, data }: rebilly.PutGatewayAccountLimitDataRequest): rebilly.PutGatewayAccountLimitResponse;
            deleteVolumeLimit({ id, volumeLimitId }: {
                id: any;
                volumeLimitId: any;
            }): rebilly.DeleteGatewayAccountLimitResponse;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                limit?: number;
                offset?: number;
                filter?: string;
            }): rebilly.GetGatewayAccountTimelineCollectionResponse;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): rebilly.GetGatewayAccountTimelineResponse;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): rebilly.DeleteGatewayAccountTimelineResponse;
            createTimelineComment({ id, data }: {
                id?: string;
                type?: "gateway-account-created" | "gateway-account-changed" | "gateway-account-enabled" | "gateway-account-disabled" | "gateway-account-down" | "gateway-account-up" | "gateway-account-closed" | "gateway-account-limit-reached" | "gateway-account-limit-reset";
                triggeredBy?: "rebilly" | "app" | "direct-api";
                message?: string;
                extraData?: {
                    actions?: {
                        action?: "resend-email" | "redemption-cancel";
                    }[];
                    tables?: {
                        type?: "two-columns" | "three-columns";
                        title?: string;
                        footer?: string;
                    }[];
                    author?: {
                        userFullName?: string;
                        userId?: string;
                    };
                    mentions?: {
                        [key: string]: string;
                    };
                    links?: {
                        resourceType?: "dispute" | "invoice" | "subscription" | "transaction" | "kyc-document" | "email-message" | "credit-memo" | "coupon";
                        resourceId?: string;
                        placeholder?: string;
                    }[];
                };
                occurredTime?: string;
                _links?: ({
                    href: string;
                } & {
                    rel: "self";
                })[];
            }): rebilly.PostGatewayAccountTimelineResponse;
        };
        broadcastMessages: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        checkoutForms: {
            getAll({ limit, offset, sort, expand, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            create({ id, data, expand }: {
                id?: string;
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        coupons: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            getAllRedemptions({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            getRedemption({ id }: {
                id: any;
            }): any;
            cancelRedemption({ id }: {
                id: any;
            }): any;
            redeem({ data }: {
                data: any;
            }): any;
            setExpiration({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        customers: {
            getAll({ limit, offset, sort, expand, filter, q, criteria, fields }?: {
                limit?: number;
                offset?: number;
                filter?: string;
                q?: string;
                expand?: string;
                fields?: string;
                sort?: string[];
            }): rebilly.GetCustomerCollectionResponse;
            downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand, fields }: {
                id: any;
                expand?: any;
                fields?: any;
            }): rebilly.GetCustomerResponse;
            create({ id, data, expand }: {
                id?: string;
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
            merge({ id, targetId }: {
                id: any;
                targetId?: string;
            }): any;
            getLeadSource({ id }: {
                id: any;
            }): any;
            createLeadSource({ id, data }: {
                id: any;
                data: any;
            }): any;
            updateLeadSource({ id, data }: {
                id: any;
                data: any;
            }): any;
            deleteLeadSource({ id }: {
                id: any;
            }): any;
            getAllUpcomingInvoices({ id, limit, offset, sort, filter, expand }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                expand?: any;
            }): any;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): any;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): any;
            createTimelineComment({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        customerAuthentication: {
            getAuthOptions(): any;
            updateAuthOptions({ data }: {
                data: any;
            }): any;
            getAllAuthTokens({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            verify({ token }: {
                token: any;
            }): any;
            login({ data }: {
                data: any;
            }): any;
            exchangeToken({ token, data }: {
                token: any;
                data: any;
            }): any;
            logout({ token }: {
                token: any;
            }): any;
            getAllCredentials({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            getCredential({ id }: {
                id: any;
            }): any;
            createCredential({ id, data }: {
                id?: string;
                data: any;
            }): any;
            updateCredential({ id, data }: {
                id: any;
                data: any;
            }): any;
            deleteCredential({ id }: {
                id: any;
            }): any;
            getAllResetPasswordTokens({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            getResetPasswordToken({ id }: {
                id: any;
            }): any;
            createResetPasswordToken({ data }: {
                data: any;
            }): any;
            deleteResetPasswordToken({ id }: {
                id: any;
            }): any;
        };
        customFields: {
            getAll({ resource, limit, offset, fields }?: {
                resource?: any;
                limit?: any;
                offset?: any;
                fields?: any;
            }): any;
            get({ resource, name }: {
                resource: any;
                name: any;
            }): any;
            create({ resource, name, data }: {
                resource: any;
                name: any;
                data: any;
            }): any;
            update({ resource, name, data }: {
                resource: any;
                name: any;
                data: any;
            }): any;
        };
        credentialHashes: {
            getEmailCredential({ hash }: {
                hash: any;
            }): any;
            getWebhookCredential({ hash }: {
                hash: any;
            }): any;
            getMailgunCredential({ hash }: {
                hash: any;
            }): any;
            getAWSSESCredential({ hash }: {
                hash: any;
            }): any;
            getAllExperianCredentials(): any;
            getExperianCredential({ hash }: {
                hash: any;
            }): any;
            getSendGridCredential({ hash }: {
                hash: any;
            }): any;
            getPostmarkCredential({ hash }: {
                hash: any;
            }): any;
            getOAuth2Credential({ hash }: {
                hash: any;
            }): any;
            getAllOAuth2Credentials(): any;
            getOAuth2CredentialItems({ hash, q, params }: {
                hash: any;
                q?: any;
                params?: any;
            }): any;
            updateOAuth2Credential({ hash, data }: {
                hash: any;
                data: any;
            }): any;
            createEmailCredential({ data }: {
                data: any;
            }): any;
            createWebhookCredential({ data }: {
                data: any;
            }): any;
            createMailgunCredential({ data }: {
                data: any;
            }): any;
            createAWSSESCredential({ data }: {
                data: any;
            }): any;
            createExperianCredential({ data }: {
                data: any;
            }): any;
            updateExperianCredential({ hash, data }: {
                hash: any;
                data: any;
            }): any;
            createSendGridCredential({ data }: {
                data: any;
            }): any;
            createPostmarkCredential({ data }: {
                data: any;
            }): any;
            createOAuth2Credential({ data }: {
                data: any;
            }): any;
        };
        creditMemos: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            getAllTransactions({ id }: {
                id: any;
            }): any;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): any;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): any;
            createTimelineComment({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        disputes: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            create({ id, data, expand }: {
                id?: string;
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
        };
        events: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ eventType }: {
                eventType: any;
            }): any;
            getRules({ eventType }: {
                eventType: any;
            }): any;
            createRules({ eventType, data }: {
                eventType: any;
                data: any;
            }): any;
            updateRules({ eventType, data }: {
                eventType: any;
                data: any;
            }): any;
            getRulesHistory({ eventType, limit, offset }?: {
                eventType?: any;
                limit?: any;
                offset?: any;
            }): any;
            getRulesVersionNumber({ eventType, version }: {
                eventType: any;
                version: any;
            }): any;
            getRulesVersionDetail({ eventType, version }: {
                eventType: any;
                version: any;
            }): any;
        };
        emailDeliverySettings: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): Promise<any>;
            create({ data }: {
                data: any;
            }): Promise<any>;
            get({ id }: {
                id: any;
            }): Promise<any>;
            delete({ id }: {
                id: any;
            }): Promise<any>;
            update({ id, data }: {
                id: any;
                data: any;
            }): Promise<any>;
            verify({ token, data }: {
                token: any;
                data: any;
            }): Promise<any>;
            resendVerification({ id }: {
                id: any;
            }): Promise<any>;
        };
        emailMessages: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
            send({ id, data }: {
                id: any;
                data?: {
                    status: string;
                };
            }): any;
        };
        emailNotifications: {
            getAll(): Promise<any>;
        };
        files: {
            getAll({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            upload({ fileObject }: {
                fileObject: any;
            }): any;
            uploadAndUpdate({ fileObject, data }: {
                fileObject: any;
                data?: {
                    description: string;
                    tags: string[];
                };
            }): Promise<any>;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
            detachAndDelete({ id }: {
                id: any;
            }): Promise<any>;
            download({ id }: {
                id: any;
            }): any;
            getAllAttachments({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            getAttachment({ id }: {
                id: any;
            }): any;
            updateAttachment({ id, data }: {
                id: any;
                data: any;
            }): any;
            attach({ data }: {
                data: any;
            }): any;
            detach({ id }: {
                id: any;
            }): any;
        };
        plaidCredentials: {
            getAll({ limit, offset, sort, filter, q, fields }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                fields?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        integrations: {
            getAll(params: any): any;
            get({ service, expand }: {
                service: any;
                expand?: any;
            }): any;
        };
        invoices: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: number;
                offset?: number;
            }): rebilly.GetInvoiceCollectionResponse;
            get({ id, expand }: {
                header: {
                    Accept?: "application/json" | "application/pdf";
                };
            }): rebilly.GetInvoiceResponse;
            downloadPDF({ id }: {
                id: any;
            }): any;
            downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            create({ id, data, expand }: {}): rebilly.PostInvoiceResponse;
            update({ id, data, expand }: {}): rebilly.PutInvoiceResponse;
            issue({ id, data }: rebilly.PostInvoiceIssuanceDataRequest): rebilly.PostInvoiceIssuanceResponse;
            reissue({ id, data }: rebilly.PostInvoiceReissuanceDataRequest): rebilly.PostInvoiceReissuanceResponse;
            abandon({ id }: {
                id: any;
            }): rebilly.PostInvoiceAbandonmentResponse;
            void({ id }: {
                id: any;
            }): rebilly.PostInvoiceVoidResponse;
            getAllInvoiceItems({ id, limit, offset, expand }: {
                limit?: number;
                offset?: number;
            }): rebilly.GetInvoiceItemCollectionResponse;
            createInvoiceItem({ id, data }: rebilly.PostInvoiceItemDataRequest): rebilly.PostInvoiceItemResponse;
            getLeadSource({ id }: {
                id: any;
            }): rebilly.GetCustomerLeadSourceResponse;
            createLeadSource({ id, data }: rebilly.PutCustomerLeadSourceDataRequest): rebilly.PutCustomerLeadSourceResponse;
            updateLeadSource({ id, data }: rebilly.PutCustomerLeadSourceDataRequest): rebilly.PutCustomerLeadSourceResponse;
            deleteLeadSource({ id }: {
                id: any;
            }): rebilly.DeleteCustomerLeadSourceResponse;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                limit?: number;
                offset?: number;
                filter?: string;
            }): rebilly.GetInvoiceTimelineCollectionResponse;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): rebilly.GetInvoiceTimelineResponse;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): rebilly.DeleteCustomerTimelineResponse;
            createTimelineComment({ id, data }: {
                id: any;
                data: any;
            }): any;
            getAllCreditMemos({ id, limit, offset, sort, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getAllTransactionAllocations({ id, limit, offset }: {
                id?: any;
                limit?: any;
                offset?: any;
            }): rebilly.GetInvoiceTransactionAllocationCollectionResponse;
            applyTransaction({ id, transactionId, amount }: {
                id: any;
                transactionId: any;
                amount?: any;
            }): any;
        };
        kycDocuments: {
            getAll({ limit, offset, sort, expand, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            create({ data, expand }: {
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
            accept({ id }: {
                id: any;
            }): any;
            reject({ id, data }: {
                id: any;
                data: any;
            }): any;
            review({ id }: {
                id: any;
            }): any;
        };
        lists: {
            getAll({ limit, offset, sort, filter, q, criteria, fields }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
                fields?: any;
            }): any;
            get({ id, version }: {
                id: any;
                version?: string;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        memberships: {
            getAll({ limit, offset, filter, sort }?: {
                limit?: any;
                offset?: any;
                filter?: any;
                sort?: any;
            }): any;
            get({ organizationId, userId }: {
                organizationId: any;
                userId: any;
            }): any;
            create({ organizationId, userId, data }: {
                organizationId: any;
                userId: any;
                data: any;
            }): any;
            update({ organizationId, userId, data }: {
                organizationId: any;
                userId: any;
                data: any;
            }): any;
            delete({ organizationId, userId }: {
                organizationId: any;
                userId: any;
            }): any;
        };
        organizations: {
            getAll({ limit, offset, sort, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        paymentInstruments: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            deactivate({ id }: {
                id: any;
            }): any;
        };
        paymentMethods: {
            getAll(): any;
            get({ apiName }: {
                apiName: any;
            }): any;
        };
        paymentCards: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            patch({ id, data }: {
                id?: string;
                data: any;
            }): any;
            authorize({ id, data }: {
                id: any;
                data: any;
            }): any;
            deactivate({ id }: {
                id: any;
            }): any;
        };
        paymentCardsBankNames: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
        };
        paymentTokens: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
        };
        payouts: {
            create({ amount, currency, websiteId, customerId, paymentInstrumentId, token, methods, requestId, description, }: {
                amount?: any;
                currency?: any;
                websiteId?: any;
                customerId?: any;
                paymentInstrumentId?: any;
                token?: any;
                methods?: any;
                requestId: any;
                description: any;
            }): any;
        };
        paypalAccounts: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            activate({ id, data }: {
                id: any;
                data: any;
            }): any;
            deactivate({ id }: {
                id: any;
            }): any;
        };
        plans: {
            getAll({ limit, offset, sort, filter, q, criteria, expand }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
                expand?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        previews: {
            webhook({ data }: {
                data: any;
            }): any;
            triggerWebhookRuleAction({ data }: {
                data: any;
            }): any;
            sendEmailRuleAction({ data }: {
                data: any;
            }): any;
            sendEmailNotification({ data }: {
                data: any;
            }): any;
            previewEmailNotification({ data }: {
                data: any;
            }): any;
        };
        products: {
            getAll({ limit, offset, sort, filter, q, fields }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                fields?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        profile: {
            get(): any;
            update({ data }: {
                data: any;
            }): any;
            updatePassword({ data }: {
                data: any;
            }): any;
            resetTotp(): any;
            startPermissionsEmulation({ data }: {
                data: any;
            }): any;
            stopPermissionsEmulation(): any;
        };
        search: {
            get({ filter, q }?: {
                filter?: any;
                q?: any;
            }): any;
        };
        segments: {
            getAll({ limit, offset, sort, filter, q, criteria, expand }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
                expand?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        sendThroughAttribution: {
            getAll(eventType: any, { limit, offset, sort }?: {
                limit?: any;
                offset?: any;
                sort?: any;
            }): any;
        };
        sessions: {
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        shippingZones: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        status: {
            get(): any;
        };
        subscriptions: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            create({ id, data, expand }: {
                id?: string;
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
            cancel({ id, data }: {
                id: any;
                data: any;
            }): Promise<any>;
            changePlan({ id, data }: {
                id: any;
                data: any;
            }): any;
            getAllUpcomingInvoices({ id, limit, offset, sort, filter, expand }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                expand?: any;
            }): any;
            issueUpcomingInvoice({ id, invoiceId, data }: {
                id: any;
                invoiceId: any;
                data?: {};
            }): any;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): any;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): any;
            createTimelineComment({ id, data }: {
                id: any;
                data: any;
            }): any;
            createInterimInvoice({ id, data }: {
                id: any;
                data?: {};
            }): any;
        };
        subscriptionCancellations: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        subscriptionReactivations: {
            getAll({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            reactivate({ data }: {
                data: any;
            }): any;
        };
        tags: {
            getAll({ limit, offset, filter, q, sort, }?: {
                limit?: any;
                offset?: any;
                filter?: any;
                q?: any;
                sort?: any;
            }): any;
            create({ name }: {
                name: any;
            }): any;
            get({ tag }: {
                tag: any;
            }): any;
            update({ tag, name }: {
                tag: any;
                name: any;
            }): any;
            delete({ tag }: {
                tag: any;
            }): any;
            tagCustomers({ tag, ids }: {
                tag: any;
                ids: any;
            }): any;
            tagCustomer({ tag, id }: {
                tag: any;
                id: any;
            }): any;
            untagCustomers({ tag, ids }: {
                tag: any;
                ids: any;
            }): any;
            untagCustomer({ tag, id }: {
                tag: any;
                id: any;
            }): any;
        };
        tracking: {
            getAllApiLogs({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            downloadApiLogsCSV({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            getApiLog({ id }: {
                id: any;
            }): any;
            getAllSubscriptionLogs({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getSubscriptionLog({ id }: {
                id: any;
            }): any;
            getAllWebhookNotificationLogs({ limit, offset, sort, filter }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getWebhookNotificationLog({ id }: {
                id: any;
            }): any;
            getAllListsChangesHistory({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            getAllWebhookTrackingLogs({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            getWebhookTrackingLog({ id }: {
                id: any;
            }): any;
            resendWebhook({ id }?: {
                id?: any;
            }): any;
            getAllEmailNotifications({ limit, offset, sort, filter, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                criteria?: any;
            }): Promise<any>;
            getEmailNotification({ id }: {
                id: any;
            }): Promise<any>;
        };
        transactions: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            downloadCSV({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            create({ data, expand }: {
                data: any;
                expand?: any;
            }): any;
            patch({ id, data }: {
                id: any;
                data: any;
            }): any;
            cancel({ id }: {
                id: any;
            }): any;
            refund({ id, data }: {
                id: any;
                data: any;
            }): any;
            getGatewayLogs({ id }: {
                id: any;
            }): any;
            getAllTimelineMessages({ id, limit, offset, sort, filter }?: {
                id?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
            }): any;
            getTimelineMessage({ id, messageId }?: {
                id?: any;
                messageId?: string;
            }): any;
            deleteTimelineMessage({ id, messageId }: {
                id: any;
                messageId: any;
            }): any;
            createTimelineComment({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        threeDSecure: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ data }: {
                data: any;
            }): any;
        };
        users: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id?: string;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
            updatePassword({ id, data }: {
                id: any;
                data: any;
            }): any;
            getResetPasswordToken({ token }: {
                token: any;
            }): any;
            resetPassword({ token, data }: {
                token: any;
                data: any;
            }): any;
            resetTotp({ id }: {
                id: any;
            }): any;
        };
        webhooks: {
            getAll({ limit, offset, filter }?: {
                limit?: any;
                offset?: any;
                filter?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
        };
        websites: {
            getAll({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            downloadCSV({ limit, offset, sort, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id }: {
                id: any;
            }): any;
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
            update({ id, data }: {
                id: any;
                data: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        addRequestInterceptor: any;
        removeRequestInterceptor: any;
        addResponseInterceptor: any;
        removeResponseInterceptor: any;
        setTimeout: any;
        setProxyAgent: any;
        setSessionToken: any;
        setEndpoints: any;
        getCancellationToken: any;
        generateSignature: any;
    }
    export class ExperimentalApiInstance {
        constructor({ apiHandler }: {
            apiHandler: any;
        });
        customers: {
            getCustomerLifetimeSummaryMetrics({ customerId }?: {
                customerId?: string;
            }): any;
        };
        dataExports: {
            getAll({ limit, offset, sort, expand, filter, q, criteria }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                expand?: any;
                filter?: any;
                q?: any;
                criteria?: any;
            }): any;
            get({ id, expand }: {
                id: any;
                expand?: any;
            }): any;
            queue({ data, expand }: {
                data: any;
                expand?: any;
            }): any;
            update({ id, data, expand }: {
                id: any;
                data: any;
                expand?: any;
            }): any;
            delete({ id }: {
                id: any;
            }): any;
        };
        histograms: {
            getTransactionHistogramReport({ periodStart, periodEnd, aggregationField, aggregationPeriod, metric, filter, tz }?: {
                periodStart?: string;
                periodEnd?: string;
                aggregationField?: string;
                aggregationPeriod?: string;
                metric?: string;
                filter?: any;
                tz?: any;
            }): any;
        };
        organizations: {
            create({ id, data }: {
                id?: string;
                data: any;
            }): any;
        };
        reports: {
            getApiLogSummary({ aggregationField, periodStart, periodEnd, limit, offset, tz }?: {
                aggregationField?: any;
                periodStart?: any;
                periodEnd?: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getCumulativeSubscriptions({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
                aggregationField: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getDccMarkup({ aggregationField, periodStart, periodEnd, limit, offset, filter, tz }?: {
                aggregationField: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                tz?: any;
            }): any;
            getDisputes({ aggregationField, periodMonth, limit, offset, filter, tz }?: {
                aggregationField: any;
                periodMonth: any;
                limit?: any;
                offset?: any;
                filter?: any;
                tz?: any;
            }): any;
            getEventsTriggeredSummary({ periodStart, periodEnd, limit, offset, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getRulesMatchedSummary({ eventType, periodStart, periodEnd, limit, offset, tz }?: {
                eventType: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getFutureRenewals({ periodStart, periodEnd, limit, offset, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getRenewalSales({ periodStart, periodEnd, limit, offset, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getRetentionPercentage({ aggregationField, aggregationPeriod, periodStart, periodEnd, includeSwitchedSubscriptions, limit, offset, filter, criteria, tz }?: {
                aggregationField: any;
                aggregationPeriod: any;
                periodStart: any;
                periodEnd: any;
                includeSwitchedSubscriptions?: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getRetentionValue({ aggregationField, aggregationPeriod, periodStart, periodEnd, includeRefunds, includeDisputes, limit, offset, sort, filter, criteria, tz }?: {
                aggregationField: any;
                aggregationPeriod: any;
                periodStart: any;
                periodEnd: any;
                includeRefunds?: any;
                includeDisputes?: any;
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getRetryTransaction({ periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getSubscriptionCancellation({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
                aggregationField: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getSubscriptionRenewalList({ periodStart, periodEnd, limit, offset, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getSubscriptionRenewal({ periodStart, periodEnd, limit, offset, tz }?: {
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                tz?: any;
            }): any;
            getTimeSeriesTransaction({ periodStart, periodEnd, type, subaggregate, limit, offset }?: {
                periodStart: any;
                periodEnd: any;
                type: any;
                subaggregate: any;
                limit?: any;
                offset?: any;
            }): any;
            getTransactionsTimeDispute({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
                aggregationField: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getTransactions({ aggregationField, periodStart, periodEnd, limit, offset, filter, criteria, tz }?: {
                aggregationField: any;
                periodStart: any;
                periodEnd: any;
                limit?: any;
                offset?: any;
                filter?: any;
                criteria?: any;
                tz?: any;
            }): any;
            getDashboardMetrics({ periodStart, periodEnd, tz, metrics, segments }?: {
                periodStart?: any;
                periodEnd?: any;
                tz?: any;
                metrics?: any;
                segments?: {};
            }): any;
        };
        subscriptions: {
            getSubscriptionSummaryMetrics({ subscriptionId }?: {
                subscriptionId?: string;
            }): any;
        };
        timelines: {
            getActivityFeed({ eventTypes, limit, offset }: {
                eventTypes?: any;
                limit?: number;
                offset?: number;
            }): any;
            getTransaction({ id, eventTypes, limit, offset }: {
                id?: string;
                eventTypes?: any;
                limit?: number;
                offset?: number;
            }): any;
            getCustomer({ id, eventTypes, limit, offset }: {
                id?: string;
                eventTypes?: any;
                limit?: number;
                offset?: number;
            }): any;
        };
        transactions: {
            reschedule({ id, data }: {
                id?: string;
                data: any;
            }): any;
        };
        location: {
            query(): any;
        };
        addRequestInterceptor: any;
        removeRequestInterceptor: any;
        addResponseInterceptor: any;
        removeResponseInterceptor: any;
        setTimeout: any;
        setProxyAgent: any;
        setSessionToken: any;
        setEndpoints: any;
        getCancellationToken: any;
    }
    export class StorefrontApiInstance {
        constructor({ apiHandler }: {
            apiHandler: any;
        });
        account: {
            get(): any;
            update({ data }?: {
                data?: any;
            }): any;
            register({ data }?: {
                data?: any;
            }): any;
            changePassword({ data }?: {
                data?: any;
            }): any;
            requestPasswordReset({ data }?: {
                data?: any;
            }): any;
            confirmPasswordReset({ token, data }?: {
                token?: any;
                data?: any;
            }): any;
            resendEmailVerification({ data }?: {
                data?: any;
            }): any;
            verifyEmail({ token }?: {
                token?: any;
            }): any;
        };
        authorization: {
            login({ data }?: {
                data?: any;
            }): any;
            logout(): any;
        };
        checkoutForm: {
            get({ id }?: {
                id?: any;
            }): any;
        };
        invoices: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
        };
        kycDocuments: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
            create({ data }?: {
                data?: any;
            }): any;
            update({ id, data }?: {
                id?: any;
                data?: any;
            }): any;
        };
        paymentInstruments: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            create({ data }?: {
                data?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
            update({ id, data }?: {
                id?: any;
                data?: any;
            }): any;
            deactivate({ id }?: {
                id?: any;
            }): any;
        };
        plans: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
        };
        products: {
            getAll({ limit, offset }?: {
                limit?: any;
                offset?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
        };
        purchase: {
            purchase({ data }?: {
                data?: {};
            }): any;
            preview({ data }?: {
                data?: {};
            }): any;
            readyToPay({ data }?: {
                data?: {};
            }): any;
        };
        transactions: {
            getAll({ limit, offset, sort, filter, q }?: {
                limit?: any;
                offset?: any;
                sort?: any;
                filter?: any;
                q?: any;
            }): any;
            get({ id }?: {
                id?: any;
            }): any;
            update({ id, data }?: {
                id?: any;
                data?: any;
            }): any;
        };
        website: {
            get({ id }?: {
                id?: any;
            }): any;
        };
        addRequestInterceptor: any;
        removeRequestInterceptor: any;
        addResponseInterceptor: any;
        removeResponseInterceptor: any;
        setTimeout: any;
        setProxyAgent: any;
        setSessionToken: any;
        setPublishableKey: any;
        setEndpoints: any;
        getCancellationToken: any;
    }
}
declare module "deep-freeze" {
    export default function deepFreeze(obj: any, { exclude }?: any[]): any;
}
declare module "member" {
    export default class Member {
        constructor({ data, status, statusText, headers }: {
            data: any;
            status: any;
            statusText: any;
            headers: any;
        }, config?: {});
        response: {
            status: any;
            statusText: any;
            headers: any;
        };
        fields: any;
        config: {};
        getJSON(): any;
    }
    export type Member = any;
}
declare module "pagination-headers" {
    export default paginationHeaders;
    namespace paginationHeaders {
        const limit: string;
        const offset: string;
        const total: string;
    }
}
declare module "collection" {
    export default class Collection {
        constructor({ data, status, statusText, headers }: {
            data: any;
            status: any;
            statusText: any;
            headers: any;
        }, config?: {});
        response: {
            status: any;
            statusText: any;
            headers: any;
        };
        items: any;
        config: {};
        getJSON(): any;
    }
    export type Collection = any;
}
declare module "file" {
    export default class File {
        constructor({ data, status, statusText, headers }: {
            data: any;
            status: any;
            statusText: any;
            headers: any;
        }, config?: {});
        response: {
            status: any;
            statusText: any;
            headers: any;
        };
        data: any;
        config: {};
    }
}
declare module "errors/rebilly-error" {
    export default class RebillyError extends Error {
        constructor({ error, name }: {
            error: any;
            name?: any;
        });
        response: any;
        request: any;
        config: any;
        status: any;
        statusText: any;
        details: any;
        invalidFields: any;
    }
}
declare module "errors/index" {
    export default Errors;
    namespace Errors {
        export { RebillyError };
        export { RebillyRequestError };
        export { RebillyValidationError };
        export { RebillyNotFoundError };
        export { RebillyConflictError };
        export { RebillyForbiddenError };
        export { RebillyMethodNotAllowedError };
        export { RebillyTimeoutError };
        export { RebillyCanceledError };
    }
    import RebillyError from "errors/rebilly-error";
    class RebillyRequestError extends RebillyError {
        constructor(error: any);
    }
    class RebillyValidationError extends RebillyError {
        constructor(error: any);
    }
    class RebillyNotFoundError extends RebillyError {
        constructor(error: any);
    }
    class RebillyConflictError extends RebillyError {
        constructor(error: any);
    }
    class RebillyForbiddenError extends RebillyError {
        constructor(error: any);
    }
    class RebillyMethodNotAllowedError extends RebillyError {
        constructor(error: any);
    }
    class RebillyTimeoutError extends RebillyError {
        constructor(error: any);
    }
    class RebillyCanceledError extends RebillyError {
        constructor(error: any);
    }
}
declare module "cached-request" {
    export default class CachedRequest {
        constructor({ id, created }?: {
            id?: any;
            created?: any;
        });
        id: any;
        created: any;
        cancelSource: import("axios").CancelTokenSource;
        cancel: any;
        cancelToken: import("axios").CancelToken;
    }
    export type CachedRequestId = string;
    export type CachedRequest = any;
}
declare module "requests-cache" {
    var _default: RequestsCache;
    export default _default;
    class RequestsCache {
        requests: any;
        getAll(): any[];
        getById(id: any): CachedRequest | undefined;
        deleteById(id: any): any;
        save(): {
            id: any;
            cancelToken: any;
        };
    }
    import CachedRequest from "cached-request";
}
declare module "cancellation" {
    export class Cancellation {
        static cancelById: (id: any, reason?: string) => void;
        static cancelAll: (reason?: string) => any;
    }
    namespace _default {
        import cancelAll = Cancellation.cancelAll;
        export { cancelAll };
    }
    export default _default;
}
declare module "create-api-handler" {
    export default function createApiHandler({ options }: {
        options: any;
    }): {
        addRequestInterceptor: ({ thenDelegate, catchDelegate }: Function) => number;
        removeRequestInterceptor: (interceptor: number) => void;
        addResponseInterceptor: ({ thenDelegate, catchDelegate }: Function) => number;
        removeResponseInterceptor: (interceptor: number) => void;
        setTimeout: (timeout: any) => void;
        setProxyAgent: ({ host, port, auth }: string) => void;
        setSessionToken: (token?: any) => void;
        setPublishableKey: (key?: any) => void;
        setEndpoints: ({ live, sandbox }: string) => void;
        getCancellationToken: any;
        get: (url: string, params?: any | undefined) => Member;
        getAll: (url: string, params: any) => Collection;
        post: (url: string, data: any, options?: any) => Member;
        put: (url: string, data: any, params?: {}) => Member;
        patch: (url: string, data: any) => Member;
        delete: (url: string) => null | any;
        create: (url: string, id: string, data: any, params?: {}) => Member;
    };
    export namespace interceptorTypes {
        const request: string;
        const response: string;
    }
    export function isInterceptorType(type: any): boolean;
    import Member from "member";
    import Collection from "collection";
}
declare module "rebilly-js-sdk" {
    export default function RebillyAPI({ apiKey, sandbox, timeout, organizationId, urls }?: {
        apiKey?: any;
        sandbox?: boolean;
        timeout?: number;
        organizationId?: any;
        urls?: {
            live: string;
            sandbox: string;
        };
    }): import("create-api-instance").ApiInstance;
    export type ApiParams = {
        apiKey?: string;
        sandbox: boolean;
        timeout: number;
        organizationId?: string;
        urls?: object;
    };
    import Errors from "errors";
    export function RebillyExperimentalAPI({ apiKey, sandbox, timeout, organizationId, urls }?: ApiParams): import("create-api-instance").ExperimentalApiInstance;
    export function RebillyStorefrontAPI({ publishableKey, jwt, sandbox, timeout, organizationId, urls }?: ApiParams): import("create-api-instance").StorefrontApiInstance;
    import cancellation from "cancellation";
    export { Errors as RebillyErrors, cancellation };
}