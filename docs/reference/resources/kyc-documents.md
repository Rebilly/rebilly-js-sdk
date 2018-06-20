# KYC Douments <small>`:::js api.kycDocuments`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Customer KYC files uploaded on behalf of a customer, tagged with a document type and submitted for validation.


## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

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


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of customers KYC documents.

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
// first set the properties for the new customer
const data = {
    fieldId: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',
    customerId: '4f6cf35x-2c4y-483z-a0a9-158621f77a21',
    documentType: 'identity-proof'
};

// All fields are required
const firstKycDocument = await api.kycDocuments.create({data});
```

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

## Accept
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

## Reject
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
[1]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents/get
[2]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents~1{id}/get
[3]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents/post
[4]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents~1{id}/put
[5]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents~1{id}~1acceptance/post
[6]: http://rebilly.github.io/RebillyAPI/preview/add_kyc/#/paths/~1kyc-documents~1{id}~1rejection/post
