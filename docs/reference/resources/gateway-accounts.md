# Gateway Accounts <small>`:::js api.gatewayAccounts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage gateway accounts for your business. Select from a list of over 60 different gateways and configure them for active use.

A payment gateway is an e-commerce application service provider service that authorizes credit card payments for e-businesses, online retailers, bricks and clicks, or traditional brick and mortar. It is the equivalent of a physical point of sale terminal located in most retail outlets.



## getAll

--8<----- "reference/resources/shared/full-signature.md"

Get a collection of gateway accounts. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.gatewayAccounts.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.gatewayAccounts.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(gatewayAccount => console.log(gatewayAccount.fields.gatewayName));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of gateway accounts.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a gateway account by its `id`.


**Example**

```js
const gatewayAccount = await api.gatewayAccounts.get({id: 'foobar-001'});
console.log(gatewayAccount.fields.gatewayName);
```


**Returns**

A member exposing the gateway account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a gateway account. Optionally provide a specific `id` to use, or let Rebilly generate one. Each gateway has custom configuration options that are provided using the `gatewayConfig` property. See the [API spec][3] for more details.

An additional gateway named `RebillyProcessor` is available in the sandbox mode and will allow you to test particular scenarios with set credit card numbers. See the [Sandbox vs Live Mode][goto-helpjuice] help article for details.

**Example**

```js
// first set the required properties for the new gateway account
const data = {
    gatewayName: 'RebillyProcessor',
    acquirerName: 'RebillyProcessor',
    merchantCategoryCode: 0,
    acceptedCurrencies: ['USD'],
    method: 'payment-card',
    paymentCardSchemes: [
        'Visa', 'MasterCard', 'American Express', 
        'Discover', 'Diners Club', 'JCB'
    ],
    // the gatewayConfig varies for each gateway name, 
    // see the API spec for details
    gatewayConfig: {},
};

// the ID is optional
const firstKey = await api.gatewayAccounts.create({data});

// or you can provide one
const secondKey = await api.gatewayAccounts.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created gateway account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a gateway account using its `id`. This method will `patch` the existing values, allowing you to skip gateway credentials.

**Example**

```js
// build data with only the fields you wish to update
const data = {
    paymentCardSchemes: [
            'Visa', 'MasterCard', 'American Express'
    ]
};

const secondKey = await api.gatewayAccounts.update({id: 'my-second-id', data});
```


**Returns**

A member exposing the updated gateway account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a gateway account by using its `id`. You cannot delete a gateway account that has been used previously.


**Example**

```js
const request = await api.gatewayAccounts.delete({id: 'my-second-key'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-helpjuice]: https://help.rebilly.com/35300-rebilly-basics/sandbox-vs-live-mode
[1]: https://rebilly.github.io/RebillyAPI/#tag/Gateway-Accounts%2Fpaths%2F~1gateway-accounts%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Gateway-Accounts%2Fpaths%2F~1gateway-accounts~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Gateway-Accounts%2Fpaths%2F~1gateway-accounts~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Gateway-Accounts%2Fpaths%2F~1gateway-accounts~1%7Bid%7D%2Fdelete
[5]: https://rebilly.github.io/RebillyAPI/#tag/Gateway-Accounts%2Fpaths%2F~1gateway-accounts~1%7Bid%7D%2Fpatch
