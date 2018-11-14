# Previews <small>`:::js api.previews`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Preview the result of event triggered actions like webhooks and emails both globally and in the Rules Engine.

!!! tip "Testing Webhooks"
    We recommend [RequestBin][goto-requestbin] for testing webhooks. It collects your requests and lets you inspect them using a unique URL.

## webhook
<div class="method"><code><strong>webhook</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Preview a global webhook. You must create a credential hash prior to previewing the webhook.

> See [credentialHashes.createWebhookCredential][goto-hashes]

> See [api.webhooks][goto-webhooks]

**Example**

```js
// first build the webhook data including
// the credential hash
const data = {
    eventsFilter: [],
    status: 'active',
    method: 'POST',
    headers: {},
    // requestb.in is a great tool for
    // previewing webhooks
    url: 'https://requestb.in/1lmf8481',
    // created prior to the test
    credentialHash: 'dcf6e32f2daee457a1db8ce5fdfbe200'
};

const request = await api.previews.webhooks({data});
// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## triggerWebhookRuleAction
<div class="method"><code><strong>triggerWebhookRuleAction</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Preview a webhook part of an action within an event rule. You must create a credential hash prior to previewing the webhook.

A webhook action can be part of a [system event][goto-events] or [custom event][goto-custom-events].

> See [credentialHashes.createWebhookCredential][goto-hashes]

**Example**

```js
// first build the webhook data including
// the credential hash
const data = {
    body: JSON.stringify({hello: 'world'}),
    status: 'active',
    method: 'POST',
    headers: {},
    query: {},
    // requestb.in is a great tool for
    // previewing webhooks
    url: 'https://requestb.in/1lmf8481',
    // created prior to the test
    credentialHash: 'dcf6e32f2daee457a1db8ce5fdfbe200'
};

const webhook = await api.previews.triggerWebhookRuleAction({data});
```


**Returns**

A member exposing the test webhook fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## sendEmailRuleAction
<div class="method"><code><strong>sendEmailRuleAction</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Preview an email part of an action within an event rule. You must create a credential hash prior to previewing the webhook.

A send email action can be part of a [system event][goto-events] or [custom event][goto-custom-events].

> See [credentialHashes.createEmailCredential][goto-hashes-email]

**Example**

```js
// first build the email data including
// the credential hash
const data = {
    bodyText: 'hello world',
    bodyHTML: `<strong>hello world</strong>`,
    sender: 'john.doe+test@grr.la',
    recipients: ['john.doe+test@grr.la'],
    subject: 'testing email preview',
    // created prior to the test
    credentialHash: 'dcf6e32f2daee457a1db8ce5fdfbe200'
};

const email = await api.previews.sendEmailRuleAction({data});
```


**Returns**

A member exposing the test email fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-webhooks]: ./webhooks
[goto-requestbin]: https://requestb.in
[goto-hashes]: ./credential-hashes#createwebhookcredential
[goto-hashes-email]: ./credential-hashes#createemailcredential
[goto-events]: ./events
[goto-custom-events]: ./custom-events
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Webhooks/paths/~1previews~1webhooks/post
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Rules/paths/~1previews~1rule-actions~1trigger-webhook/post
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Rules/paths/~1previews~1rule-actions~1send-email/post
