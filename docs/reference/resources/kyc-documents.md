# KYC Douments <small>`:::js api.kycDocuments`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Know your customer (alternatively know your client or 'KYC') is the process of a business identifying and verifying the identity of its clients. The term is also used to refer to the bank and anti-money laundering regulations which governs these activities.

## getAll

<div class="method">
    <code>
        <strong>getAll</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>,
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>,
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">expand</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Get a collection of KYC documents of all customers.


**Example**

```js
// all parameters are optional
const firstCollection = await api.kycDocuments.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'};
const secondCollection = await api.kycDocuments.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(document => console.log(document.fields.documentType));
```

**Parameters**


| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |
| sort | string | Optional | The member field on which to sort on. Sorting is ascending by default. Use `-` (dash) to make it descending.<br>Example: `createdTime` and `-createdTime`. |
| expand | string | Optional | A string representing an entity to expand within each member. Use `,` (comma) to expand multiple entities. |
| filter | string | Optional | A list of one or more member fields and their values, used to filter the collection results.<br>Example: `status:active`.<br> See the [filters guide][guide-filters] for more details. |
| q | string | Optional | A string to search for within the indexed member fields. This is useful for members that have any field match the search value. |


**Returns**

A collection of all customers KYC documents.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a KYC document by its `id`.

**Example**

```js
const document = await api.kycDocuments.get({id: 'foobar-001'});
console.log(document.fields.documentType);
```


**Returns**

A member exposing the document fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.


## create
<div class="method"><code><strong>create</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a KYC document.

**Example**

```js
// All fields are required
const data = {
    fieldId: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',
    customerId: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',
    documentType: 'identity-proof'
};

const firstKycDocument = await api.kycDocuments.create({data});
```

!!! note
    KYC documents requires a file id. Use the file resource to generate one from the uploaded document

**Returns**

A member exposing the created document.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a KYC document by using its `id`.

**Example**

```js
// define the values to update
const data = {
    status: 'accepted'
};

const document = await api.kycDocuments.update({id: 'my-second-id', data});
```

**Returns**

A member exposing the updated customer fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## accept
<div class="method"><code><strong>accept</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Accept a KYC document by its `id`.


**Example**

```js
const acceptedDocument = await api.kycDocuments.accept({id: 'my-second-id'});
console.log(acceptedDocument.fields.status);
```

**Returns**

A member exposing the accepted document.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## reject
<div class="method"><code><strong>reject</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Rejects a document for a customer by its `id`.

**Example**

```js
const data = {
    type: 'document-expired',
    message: 'Document is expired'
}
const rejectedDocument = await api.kycDocuments.reject({id: 'my-second-id', data});
console.log(rejectedDocument.fields.rejectionReason.type);
```

**Returns**

A member exposing the rejected document.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[1]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents/post
[4]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents~1{id}/put
[5]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents~1{id}~1acceptance/post
[6]: https://rebilly.github.io/RebillyAPI/#tag/KYC-Documents/paths/~1kyc-documents~1{id}~1rejection/post
