export default function serviceCredentialsMock({adapter}) {
    adapter
        .onPatch('/service-credentials/plaid/1234').reply(200);
};
