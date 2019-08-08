# Webhooks <small>`:::js api.webhooks`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Webhooks are designed to notify your systems when certain or all registered events happen in near real-time, such as: a new transaction, a new subscription, a new invoice.

They allow you to collect information about those events. Rebilly can send this information to an URL of your choice.


## getAll

--8<----- "reference/resources/shared/filter-signature.md"

Get a collection of webhooks. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.webhooks.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.webhooks.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(webhook => console.log(webhook.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of webhooks.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a webhook by its `id`.


**Example**

```js
const webhook = await api.webhooks.get({id: 'foobar-001'});
console.log(webhook.fields.id);
```


**Returns**

A member exposing the webhook fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a webhook. Optionally provide a specific `id` to use, or let Rebilly generate one. Use `eventsFilter` to limit the events that can trigger the webhook, or leave empty to trigger for any event.

Allowed `eventsFilter` values:

- `gateway-account-requested`
- `subscription-trial-ended`
- `subscription-activated`
- `subscription-canceled`
- `subscription-reactivated`
- `subscription-renewed`
- `transaction-processed`
- `payment-card-expired`
- `payment-declined`
- `invoice-modified`
- `dispute-created`
- `suspended-payment-completed`

**Example**

```js
// first set the properties for the new webhook
const data = {
    // leave filter empty to enable 
    // the webhook for all events
    eventsFilter: [],
    status: 'active',
    method: 'POST',
    headers: {},
    url: 'https://hookb.in/Oe90ZRmdeWUGWg1MGKQV',
    // created prior to the test
    credentialHash: 'dcf6e32f2daee457a1db8ce5fdfbe200'
};

// the ID is optional
const firstWebhook = await api.webhooks.create({data});

// or you can provide one
const secondWebhook = await api.webhooks.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created webhook fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a webhook by using its `id`. To soft delete a webhook, set its `status` to `inactive`.

**Example**

```js
// define values to update
const data = {
    eventsFilter: ['suspended-payment-completed'],
    status: 'active',
    method: 'POST',
    headers: {},
    url: 'https://hookb.in/Oe90ZRmdeWUGWg1MGKQV',
    // created prior to the test
    credentialHash: 'dcf6e32f2daee457a1db8ce5fdfbe200'
};

const webhook = await api.webhooks.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated webhook fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.



[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Webhooks/paths/~1webhooks/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Webhooks/paths/~1webhooks~1{id}/get
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Webhooks/paths/~1webhooks~1{id}/put
