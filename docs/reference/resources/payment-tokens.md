# Payment Tokens <small>`:::js api.paymentTokens`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Tokens are an encrypted string representing a payment instrument. A token expires within 24 hours.

Payment tokens are used to reduce the scope of PCI DSS compliance. A payment token can be made using a different authentication scheme , which allows you to create a payment token directly from the browser, bypassing the need to send sensitive cardholder info to your servers. We recommend using this with our Rebilly.js library, which helps you wire a form into this API resource and create payment tokens.

> See [Rebilly.js][goto-rebillyjs] library

## getAll

--8<----- "reference/resources/shared/paged-signature.md"

Get a collection of payment tokens. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.paymentTokens.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.paymentTokens.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(paymentToken => console.log(paymentToken.fields.id));
```

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Returns**

A collection of payment tokens.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a payment token by its `id`.


**Example**

```js
const paymentToken = await api.paymentTokens.get({id: 'foobar-001'});
console.log(paymentToken.fields.method);
```


**Returns**

A member exposing the payment token fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a payment token from a payment instrument. It can then be used to complete an order as a surrogate for a payment instrument. A payment token can represent either payment card or bank account.

Allowed `method` values: 

- `ach`
- `cash`
- `payment-card`
- `paypal`
- `Alipay`
- `China UnionPay`
- `Flexepin`
- `Gpaysafe`
- `Jeton`
- `OchaPay`
- `SMSVoucher`
- `UPayCard`
- `WeChat Pay`

**Example**

```js
// first set the properties for the new payment token
const data = {
    method: 'payment-card',
    paymentInstrument: {
        pan: '4111111111111111',
        expYear: 2022,
        expMonth: 12,
        cvv: 123
    },
    billingAddress: {
      firstName: 'Johnny',
      lastName: 'Brown',
      emails: [{
          label: 'main',
          value: 'johnny+test@grr.la',
          primary: true
      }]  
    }
};

const token = await api.paymentTokens.create({data});
```


**Returns**

A member exposing the created payment token fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## expire
<div class="method"><code><strong>expire</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Expire a payment token by using its `id`. This will prevent the token from being used in new orders. 

**Example**

```js
const paymentToken = await api.paymentTokens.expire({id: 'my-second-key'});
```


**Returns**

A member exposing the expired payment token fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-rebillyjs]: https://help.rebilly.com/20221-development/rebillyjs
[1]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Tokens%2Fpaths%2F~1tokens%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Tokens%2Fpaths%2F~1tokens~1%7Btoken%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Tokens%2Fpaths%2F~1tokens%2Fpost
[4]: https://rebilly.github.io/RebillyAPI/#tag/Payment-Tokens%2Fpaths%2F~1tokens~1%7Btoken%7D~1expiration%2Fpost
