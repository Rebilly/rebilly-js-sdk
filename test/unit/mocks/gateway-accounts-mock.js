export default function gatewayAccountsMock({adapter}) {
    adapter
        .onPatch('/gateway-accounts/1234').reply(200)
        .onDelete('gateway-accounts/1234').reply(204);
}
