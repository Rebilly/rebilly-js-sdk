# Transactions <small>`:::js api.transactions`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

A transaction is an instance of an action regarding a payment. It is always related to a customer and a payment method, and can be related to another transaction. Transactions can be scheduled to happen in the future. 


## getAll

--8<----- "reference/resources/shared/full-signature.md"

Get a collection of transactions. Each entry will be a member.

**Example**

```js
// all parameters are optional
const firstCollection = await api.transactions.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.transactions.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(transaction => console.log(transaction.fields.type));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of transactions.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>, <span class="prop">expand</span><span class="optional">opt</span>}) -> <span class="return">{Member}</span></code></div>

Get a transaction by its `id`. Define `expand` to include additional data

**Example**

```js
const transaction = await api.transactions.get({id: 'foobar-001'});
console.log(transaction.fields.billingAddress.firstName);
```


**Returns**

A member exposing the transaction fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-signature.md"

Get a collection of transactions in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.transactions.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.transactions.downloadCSV(params);

// access the file data to view the CSV content 
console.log(secondFile.data);
```

!!! tip
    You can generate a binary file to download from the CSV content directly in the browser, or save it locally via the file system in Node.

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a transaction for a specific customer and website. Optionally provide a specific `id` to use, or let Rebilly generate one.

A `scheduledTime` can be defined which will allow you schedule the transaction to be processed at a future date.

**Example**

```js
// first set the properties for the new transaction
const data = {
    customerId: 'foobar-0001',
    websiteId: 'my-main-website',
    paymentInstrument: {
        method: 'payment-card',
        paymentCardId: 'my-payment-card-id',
        gatewayAccountId: 'my-gateway-account-id'
    },
    currency: 'USD',
    amount: 12.99,
    description: 'manual transaction',
    
    // optionally you can specify a scheduled time
    // to process the transaction at a later date
    // scheduledTime: '2017-09-28T16:13:44Z'
};

// the ID is optional
const firstTransaction = await api.transactions.create({data});

// or you can provide one
const secondTransaction = await api.transactions.create({id: 'my-second-id', data});
```

**Returns**

A member exposing the created transaction fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## cancel
<div class="method"><code><strong>cancel</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Cancel a pending or scheduled transaction by using its `id`. Once handled a transaction cannot be canceled.


**Example**

```js
const transaction = await api.transactions.cancel({id: 'my-second-id', data});
console.log(transaction.fields.status);
```

**Returns**

A member exposing the canceled transaction fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## refund
<div class="method"><code><strong>refund</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Refund a transaction in full or using a partial amount, by using its `id`.

!!! info "Currency"
    The refund will be in the same currency as the original transaction.

**Example**

```js
// define the refund amount
const data = {
    amount: 12.99
};

const refund = await api.transactions.switch({id: 'my-transaction-id', data});
console.log(refund.fields.status);
```

**Returns**

A member exposing the switched transaction fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## getGatewayLogs
<div class="method"><code><strong>getGatewayLogs</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Collection}</span></code></div>

Get a collection of gateway logs for a transaction by using its `id`.

**Example**

```js
const collection = await api.transactions.switch({id: 'my-transaction-id'});
collection.items.forEach(log => console.log(log.fields.url));
```

**Returns**

A collection of transaction gateway logs.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## getLeadSource
<div class="method"><code><strong>getLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a lead source by using the transaction `id`.


**Example**

```js
const lead = await api.transactions.getLeadSource({id: 'my-second-id'});
console.log(lead.fields.affiliate);
```

**Returns**

A member exposing the lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.

## createLeadSource
<div class="method"><code><strong>createLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a lead source for a transaction `id`. A transaction can only have one lead source present at a time.

!!! tip "transaction Tracking"
    The lead source entity lets you track your transactions throughout your different campaigns.

**Example**

```js
// first set the properties for the new lead source
const data = {
    medium: 'foobar',
    source: 'www.google.com',
    campaign: 'my-first-campaign',
    term: 'transactions',
    content: 'transaction business',
    affiliate: 'Acme',
    subAffiliate: null,
    salesAgent: null,
    clickId: null,
    path: null,
    ipAddress: '12.34.56.78',
    currency: 'USD',
    amount: 0
};

const lead = await api.transactions.createLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the created transaction lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## updateLeadSource
<div class="method"><code><strong>updateLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the lead source for a transaction `id`.

**Example**

```js
// define the values to update
const data = {
    medium: 'foobar',
    source: 'www.google.com',
    campaign: 'my-first-campaign',
    term: 'transactions',
    content: 'transaction business',
    affiliate: 'Acme',
    subAffiliate: null,
    salesAgent: null,
    clickId: null,
    path: null,
    ipAddress: '12.34.56.78',
    currency: 'USD',
    amount: 0
};

const lead = await api.transactions.updateLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the update transaction lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## deleteLeadSource
<div class="method"><code><strong>deleteLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a lead source using the transaction `id`.  


**Example**

```js
const request = await api.transactions.deleteLeadSource({id: 'my-second-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][11]{: target="_blank"} for all payload fields and response data.

## getAllMatchedRules
<div class="method"><code><strong>getAllMatchedRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Collection}</span></code></div>

Get all previously matched event rules for a transaction `id`. The rules are defined within system events and are part of the Rules Engine.

> See [events][goto-events]

**Example**

```js
const rules = await api.transactions.getAllMatchedRules({id: 'foobar-001'});
```


**Returns**

A collection of matched rules for this dispute.

Type [`Collection`][goto-collection]

## getAllTimelineMessages

<div class="method">
    <code>
        <strong>getAllTimelineMessages</strong>({
        <span class="prop">id</span>,
        <span class="prop">limit</span><span class="optional" title="optional">opt</span>,
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>,
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Get a collection of transaction timeline messages for a transaction `id`. Each entry will be a member.


**Example**

```js
// all parameters are optional except for the `id`
const firstCollection = await api.transactions
    .getAllTimelineMessages({id: 'my-transaction');

// alternatively you can specify one or more of them
const params = {id: 'my-transaction', limit: 20, offset: 100};
const secondCollection = await api.transactions.getAllTimelineMessages(params);

// access the collection items, each item is a Member
secondCollection.items
    .forEach(message => console.log(message.fields.eventType));
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |
| sort | string | Optional | The member field on which to sort on. Sorting is ascending by default. Use `-` (dash) to make it descending.<br>Example: `createdTime` and `-createdTime`. |
| filter | string | Optional | A list of one or more member fields and their values, used to filter the collection results.<br>Example: `status:active`.<br> See the [filters guide][guide-filters] for more details. |


[guide-filters]: ../../guides/filters.md


**Returns**

A collection of transaction timeline messages.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.


## getTimelineMessage
<div class="method">
    <code>
        <strong>getTimelineMessage</strong>({
        <span class="prop">id</span>,
        <span class="prop">messageId</span>
        }) -> <span class="return">{Member}</span></code></div>

Get a transaction timeline message by its `id` and `messageId` combination.


**Example**

```js
const message = await api.transactions
    .getTimelineMessage({id: 'foobar-001', messageId: 'message-202'});
console.log(message.fields.eventType);
```


**Returns**

A member exposing the transaction timeline message fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## createTimelineComment
<div class="method">
    <code>
        <strong>createTimelineComment</strong>({
        <span class="prop">id</span>,
        <span class="prop">data</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Create a timeline comment associated to a transaction account by defining its `id` and `data`. The comment message to be posted must be defined in `message` string attribute of the `data` object.


Mentions to users and references to resources can be set inside the message string. See the [detailed API spec][15]{: target="_blank"} for details.

**Example**

```js
// Create a comment
const firstComment = await api
    .transactions.createTimelineComment({id: 'my-transaction-id', data: {message: 'Your comment here'}});

// Using params object, mentions and references
const message = `Example of mentions @user@mydomain.com and references #transactions-transaction-id`;
const params = {
    id: 'my-transaction-id'
    data: {
        message,
    },
};
const secondComment = await api.transactions.createTimelineComment(params);
```


**Returns**

A member exposing the created transaction timeline comment fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.


## deleteTimelineMessage
<div class="method">
    <code>
        <strong>deleteTimelineMessage</strong>({
        <span class="prop">id</span>,
        <span class="prop">messageId</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Delete a transaction timeline message by using its `id` and `messageId` combination.


**Example**

```js
const request = await api.transactions
    .deleteTimelineMessage({id: 'foobar-001', messageId: 'message-202'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[goto-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[goto-events]: ./events
[goto-scheduled-getall]: #getallscheduled
[1]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Payments/paths/~1payments/get
[4]: https://rebilly.github.io/RebillyAPI/#tag/Payments/paths/~1queue~1payments~1{id}/put
[5]: https://rebilly.github.io/RebillyAPI/#tag/Payments/paths/~1payments/post
[6]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1cancel/post
[7]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1refund/post
[8]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1gateway-logs/get
[9]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1lead-source/get
[10]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1lead-source/put
[11]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1lead-source/delete
[12]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1timeline/get
[13]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1timeline~1{messageId}/get
[14]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1timeline/post
[15]: https://rebilly.github.io/RebillyAPI/#tag/Transactions/paths/~1transactions~1{id}~1timeline~1{messageId}/delete
