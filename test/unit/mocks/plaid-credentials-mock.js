export default function plaidCredentialsMock({adapter}) {
    adapter
        .onPatch('/credential-hashes/plaid/1234').reply(200);
};
