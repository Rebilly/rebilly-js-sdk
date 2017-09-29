# Paypal Accounts <small>`:::js api.paypalAccounts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

A form of payment instrument, paypal accounts enable customers to do transactions when buying your products.



## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of paypal accounts. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.paypalAccounts.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.paypalAccounts.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(paypalAccount => console.log(paypalAccount.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of paypal accounts.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a paypal accounts by its `id`.


**Example**

```js
const paypalAccount = await api.paypalAccounts.get({id: 'foobar-001'});
console.log(paypalAccount.fields.customerId);
```


**Returns**

A member exposing the paypal accounts fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a paypal account for a specific customer. Optionally provide a specific `id` to use, or let Rebilly generate one. 


**Example**

```js
// first set the properties for the new paypal account
const data = {
    username: 'myPaypalUser',
    billingAddress: {
      firstName: 'Johnny',
      lastName: 'Brown',
      emails: [{
          label: 'main',
          value: 'johnny+test@grr.la',
          primary: true
      }]  
    },
    // the customer ID for which
    // we are adding a paypal account
    customerId: 'foobar-0001'
};

// the ID is optional
const firstCard = await api.paypalAccounts.create({data});

// or you can provide one
const secondCard = await api.paypalAccounts.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created paypal account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## activate
<div class="method"><code><strong>activate</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Activate a Paypal account using its `id` for a specific website and gateway account.  

**Example**

```js
// first set the properties for the activation
const data = {
    websiteId: 'my-main-website',
    // currency three letter code
    currency: 'USD',
    gatewayAccountId: 'my-main-gateway',
    amount: 12.99,
    redirectURLs: {
        success: 'https://www.acme.com/success',
        decline: 'https://www.acme.com/decline',
        cancel: 'https://www.acme.com/cancel',
        error: 'https://www.acme.com/error'
    }
};

const paypalAccount = await api.paypalAccounts.activate({id: 'my-second-key', data});
```


**Returns**

A member exposing the paypal account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## deactivate
<div class="method"><code><strong>deactivate</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Deactivate a paypal account by using its `id`. Once deactivated the card can no longer be actively used.  


**Example**

```js
const paypalAccount = await api.paypalAccounts.deactivate({id: 'my-second-key'});
console.log(paypalAccount.fields.status);
```


**Returns**

A member exposing the paypal account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.



[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-events]: ./events
[1]: https://rebilly.github.io/RebillyAPI/#tag/PayPal-Accounts%2Fpaths%2F~1paypal-accounts%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/PayPal-Accounts%2Fpaths%2F~1paypal-accounts~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/PayPal-Accounts%2Fpaths%2F~1paypal-accounts~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/PayPal-Accounts%2Fpaths%2F~1paypal-accounts~1%7Bid%7D~1activation%2Fpost
[5]: https://rebilly.github.io/RebillyAPI/#tag/PayPal-Accounts%2Fpaths%2F~1paypal-accounts~1%7Bid%7D~1deactivation%2Fpost
