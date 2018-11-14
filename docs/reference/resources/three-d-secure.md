# Three D Secure (3DS) <small>`:::js api.threeDSecure`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and list 3DS entries. 3D Secure is a way to authenticate and protect transactions. Typically, it's only possible to protect the initial transaction in a subscription with 3D Secure.

The merchant chooses whether or not to use 3D secure, and this is usually done via an iframe on the merchant's site. This allows the merchant to shift liability from themselves to the issuing bank in some cases.  3D Secure requires cardholder interaction to be completed.

!!! info "Special Feature"
    If you're not certain how to use this feature or if it is suited for you, contact us via support chat.


## getAll

--8<----- "reference/resources/shared/paged-signature.md"

Get a collection of 3DS entries. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.threeDSecure.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.threeDSecure.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Returns**

A collection of 3DS entries.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a 3DS entry by its `id`.


**Example**

```js
const entry = await api.threeDSecure.get({id: 'foobar-001'});
console.log(entry.fields.customerId);
```


**Returns**

A member exposing the 3DS entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a 3DS entry for a customer and a specific combination of gateway account, payment card and website. 

**Example**

```js
// first set the properties for the new entry
const data = {
    customerId: 'foobar-001',
    websiteId: 'my-website-id',
    paymentCardId: 'a-certain-card-id',
    gatewayAccountId: 'main-gateway-id',
    enrolled: 'Y',
    // enrollment electronic 
    // commerce indicator
    enrollmentEci: 'abc',
    // electronic commerce indicator
    eci: 0,
    // cardholder authentication verification value
    cavv: '1234',
    // transaction Id
    xid: 'er9349gju09u40394guj',
    payerAuthResponseStatus: 'Y',
    signatureVerification: 'Y',
    amount: 12.99,
    currency: 'USD'
};

const entry = await api.threeDSecure.create({data});
```


**Returns**

A member exposing the created 3DS entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/3D-Secure/paths/~13dsecure/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/3D-Secure/paths/~13dsecure~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/3D-Secure/paths/~13dsecure/post
