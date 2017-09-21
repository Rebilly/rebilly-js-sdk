# Coupons <small>`:::js api.coupons`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create permanent, time or usage restricted discount coupons for your customers to apply to invoices, subscriptions and plans.


## getAll

--8<----- "reference/resources/shared/filter-signature.md"

Get a collection of coupons. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.coupons.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.coupons.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(coupon => console.log(coupon.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of coupons.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">redemptionCode</span>}) -> <span class="return">{Member}</span></code></div>

Get a coupon by its `redemptionCode`.


**Example**

```js
const coupon = await api.coupons.get({redemptionCode: 'foobar-001'});
console.log(coupon.fields.status);
```


**Returns**

A member exposing the coupon fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">redemptionCode</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a coupon for a specific plan and website. Optionally provide a specific `id` to use, or let Rebilly generate one.


**Example**

```js
// first set the required properties for the new coupon
const data = {
    description: 'a new coupon',
    issuedTime: '2017-09-19T20:46:44Z',
    discount: {
        type: 'percent',
        value: 12
    },
    restrictions: [{
        type: 'discounts-per-redemption',
        quantity: 12
    }]
};

// the ID is optional
const firstKey = await api.coupons.create({data});

// or you can provide one
const secondKey = await api.coupons.create({redemptionCode: 'my-second-id', data});
```


**Returns**

A member exposing the created coupon fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">redemptionCode</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a coupon using its `redemptionCode`.

**Example**

```js
// define the values to update
const data = {
    description: 'a small update'
};

const coupon = await api.coupons.update({redemptionCode: 'my-second-id', data});
```


**Returns**

A member exposing the updated coupon fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## getAllRedemptions

<div class="method">
    <code>
        <strong>getAllRedemptions</strong>({
        <span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of coupon redemptions. Each entry will be a member. 

A coupon redemption represents an instance where a coupon was activated for a customer.


**Example**

```js
// all parameters are optional
const firstCollection = await api.coupons.getAllRedemptions();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.coupons.getAllRedemptions(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(coupon => console.log(coupon.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of coupon redemptions.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## getRedemption
<div class="method"><code><strong>getRedemption</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a coupon redemption by its `id`.

A coupon redemption represents an instance where a coupon was activated for a customer.


**Example**

```js
const redemption = await api.coupons.getRedemption({id: 'foobar-001'});
console.log(redemption.fields.id);
```


**Returns**

A member exposing the coupon redemption fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## cancelRedemption
<div class="method"><code><strong>cancelRedemption</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Cancel a coupon redemption by its `id`.


**Example**

```js
const cancellation = await api.coupons.cancelRedemption({id: 'foobar-001'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(cancellation.response.status); // 201
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## redeem
<div class="method"><code><strong>redeem</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Redeem a coupon using its `redemptionCode` for a specific customer.


**Example**

```js
// build the redemption data
const data = {
  redemptionCode: 'my-best-coupon',
  customerId: 'foobar-001'
};

const redemption = await api.coupons.redeem({data});
console.log(redemption.fields.id);
```


**Returns**

A member exposing the coupon redemption fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## setExpiry
<div class="method"><code><strong>setExpiry</strong>({<span class="prop">redemptionCode</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Set the exiry time of a coupon using its `redemptionCode`. Pass `null` as the `expiredTime` to instantly expire the coupon. Once expired the status of the coupon will change to `expired`.


**Example**

```js
// build the expiry data
const data = {
  expiredTime: '2017-09-19T20:46:44Z'
};

const coupon = await api.coupons.setExpiry({redemptionCode: 'my-best-coupon', data});
console.log(redemption.coupon.status);
```


**Returns**

A member exposing the coupon  fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons~1%7BredemptionCode%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons~1%7BredemptionCode%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons-redemptions%2Fget
[5]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons-redemptions~1%7Bid%7D%2Fget
[6]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons-redemptions~1%7Bid%7D~1cancel%2Fpost
[7]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons-redemptions%2Fpost
[8]: https://rebilly.github.io/RebillyAPI/#tag/Coupons%2Fpaths%2F~1coupons~1%7BredemptionCode%7D~1expiration%2Fpost
