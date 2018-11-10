# Disputes <small>`:::js api.disputes`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Manage disputes for your customers' transactions and track the progress of existing disputes internally. It is a term that collectively means chargebacks and retrievals in Rebilly.


## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of disputes. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.disputes.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.disputes.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(dispute => console.log(dispute.fields.transactionId));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of disputes.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a dispute by its `id`.


**Example**

```js
const dispute = await api.disputes.get({id: 'foobar-001'});
console.log(dispute.fields.firstName);
```


**Returns**

A member exposing the dispute fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-expanded-signature.md"

Get a collection of disputes in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.disputes.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.disputes.downloadCSV(params);

// access the file data to view the CSV content 
console.log(secondFile.data);
```

!!! tip
    You can generate a binary file to download from the CSV content directly in the browser, or save it locally via the file system in Node.

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a dispute for a specific transaction. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new dispute
const data = {
    transactionId: 'my-transaction-id',
    currency: 'USD',
    amount: 5,
    reasonCode: '1000',
    type: 'first-chargeback',
    status: 'response-needed',
    acquirerReferenceNumber: '143543',
    postedTime: '2017-09-19T20:46:48Z',
    deadlineTime: '2017-09-19T20:46:48Z'
};

// the ID is optional
const firstdispute = await api.disputes.create({data});

// or you can provide one
const secondDispute = await api.disputes.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created dispute fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a dispute using its `id` for a specific transaction.

**Example**

```js
// define the values to update
const data = {
    transactionId: 'my-other-transaction-id',
    currency: 'USD',
    amount: 5,
    reasonCode: '1000',
    type: 'first-chargeback',
    status: 'response-needed',
    acquirerReferenceNumber: '143543',
    postedTime: '2017-09-19T20:46:48Z',
    deadlineTime: '2017-09-19T20:46:48Z'
};

const dispute = await api.disputes.update({id: 'my-second-id', data});
```


**Returns**

A member exposing the updated dispute fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## getAllMatchedRules
<div class="method"><code><strong>getAllMatchedRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Collection}</span></code></div>

Get all previously matched event rules for a dispute `id`. The rules are defined within system events and are part of the Rules Engine.

> See [events][goto-events]

**Example**

```js
const rules = await api.disputes.getAllMatchedRules({id: 'foobar-001'});
```


**Returns**

A collection of matched rules for this dispute.

Type [`Collection`][goto-collection]


<!-- **API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.
-->

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[goto-events]: ./events/
[1]: https://rebilly.github.io/RebillyAPI/#tag/Disputes/paths/~1disputes/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Disputes/paths/~1disputes~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Disputes/paths/~1disputes~1{id}/put
