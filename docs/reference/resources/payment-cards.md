# Payment Cards <small>`:::js api.paymentCards`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

A form of payment instrument, the payment cards enable customers to do transactions when buying your products.



## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of payment cards. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.paymentCards.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.paymentCards.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(paymentCard => console.log(paymentCard.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of payment cards.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a payment cards by its `id`.


**Example**

```js
const paymentCard = await api.paymentCards.get({id: 'foobar-001'});
console.log(paymentCard.fields.customerId);
```


**Returns**

A member exposing the payment cards fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a payment card for a specific customer. Optionally provide a specific `id` to use, or let Rebilly generate one. 


**Example**

```js
// first set the properties for the new payment card
const data = {
    pan: '4111111111111111',
    expYear: 2022,
    expMonth: 11,
    cvv: 123,
    billingAddress: {
      firstName: 'Johnny',
      lastName: 'Brown',
      emails: [{
          label: 'main',
          value: 'johnny+test@grr.la',
          primary: true
      }],  
    },
    // the customer ID for which
    // we are adding a payment card
    customerId: 'foobar-0001'
};

// the ID is optional
const firstCard = await api.paymentCards.create({data});

// or you can provide one
const secondCard = await api.paymentCards.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created payment card fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## authorize
<div class="method"><code><strong>authorize</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Authorize an amount for a payment card by using its `id`, for a specific website and gateway. 

Results in a hold placed on the cardholder’s account for the authorized amount. An authorization response code is later used to capture the authorized funds. 


**Example**

```js
// first set the properties for the authorization
const data = {
    websiteId: 'my-main-website',
    // currency three letter code
    currency: 'USD',
    gatewayAccountId: 'my-main-gateway',
    amount: 12.99
};

const paymentCard = await api.paymentCards.authorize({id: 'my-second-key', data});
```


**Returns**

A member exposing the payment card fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## deactivate
<div class="method"><code><strong>deactivate</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Deactivate a payment card by using its `id`. Once deactivated the card can no longer be used for payments.  


**Example**

```js
const paymentCard = await api.paymentCards.deactivate({id: 'my-second-key'});
console.log(paymentCard.fields.status);
```


**Returns**

A member exposing the payment card fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.


## getAllMigratable

<div class="method">
    <code>
        <strong>getAllMigratable</strong>({
        <span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Get a collection of migratable payment cards. Each entry will be a member.

!!! info "Payment Card Migration"
    Migrating payment cards lets you move cards in bulk from one gateway account to another. This is useful when the original gateway account is no longer available.

**Example**

```js
// all parameters are optional
const firstCollection = await api.paymentCards.getAllMigratable();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.paymentCards.getAllMigratable(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(paymentCard => console.log(paymentCard.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of migratable payment cards.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## migrate
<div class="method"><code><strong>deactivate</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Migrate payment cards in bulk from one gateway account to another using their `id`. This is useful when the original gateway account is no longer available.


**Example**

```js
// first build the migration
const data = {
    fromGatewayAccountId: 'original-gateway-id',
    toGatewayAccountId: 'target-gateway-id',
    paymentCardIds: [
        'foobar-0001', 'foobar-0002', 'foobar-0003', 
        'foobar-0004', 'foobar-0005', 'foobar-0006'  
    ]
};
const result = await api.paymentCards.migrate({data});
// you can verify the amount of cards that
// were successfully migrated
console.log(result.fields.migratedCards);
```


**Returns**

A member exposing a single field (`migratedCards`) with the amount of cards that were successfully migrated.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## getAllMatchedRules
<div class="method"><code><strong>getAllMatchedRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Collection}</span></code></div>

Get all previously matched event rules for a payment card `id`. The rules are defined within system events and are part of the Rules Engine.

> See [events][goto-events]

**Example**

```js
const rules = await api.paymentCards.getAllMatchedRules({id: 'foobar-001'});
```


**Returns**

A collection of matched rules for this dispute.

Type [`Collection`][goto-collection]

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-events]: ./events
[1]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Cards%2Fpaths%2F~1payment-cards%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Cards%2Fpaths%2F~1payment-cards~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Cards%2Fpaths%2F~1payment-cards%2Fpost
[4]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Cards%2Fpaths%2F~1payment-cards~1%7Bid%7D~1authorization%2Fpost
[5]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Cards%2Fpaths%2F~1payment-cards~1%7Bid%7D~1deactivation%2Fpost
[6]: https://rebilly.github.io/RebillyAPI/#tag/Migrate-payment-cards%2Fpaths%2F~1payment-cards-migrations%2Fget
[7]: https://rebilly.github.io/RebillyAPI/#tag/Migrate-payment-cards%2Fpaths%2F~1payment-cards-migrations~1migrate%2Fpost
