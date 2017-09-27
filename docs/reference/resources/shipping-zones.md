# Shipping Zones <small>`:::js api.shippingZones`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage shipping zones. Products that require shipping will automatically have shipping priced base on the shipping zone that matches the destination. Each zone contains regions and countries that you ship to, and has its own shipping rates.


## getAll

--8<----- "reference/resources/shared/filter-signature.md"

Get a collection of shipping zones. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.shippingZones.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.shippingZones.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(shippingZone => console.log(shippingZone.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of shipping zones.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a shipping zone by its `id`.


**Example**

```js
const shippingZone = await api.shippingZones.get({id: 'foobar-001'});
console.log(shippingZone.fields.name);
```


**Returns**

A member exposing the shipping zone fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a shipping zone. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new shipping zone
const data = {
    name: 'free shipping',
    rates: [
        {
            name: 'free shipping',
            price: 0,
            currency: 'USD'
        }
    ],
    countries: ['US']
};

// the ID is optional
const firstZone = await api.shippingZones.create({data});

// or you can provide one
const secondZone = await api.shippingZones.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created shipping zone fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a shipping zone by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'normal shipping',
    rates: [
        {
            name: 'flat rate',
            price: 9.99,
            currency: 'USD'
        }
    ],
    // when null it will match any country
    countries: null
};

const shippingZone = await api.shippingZones.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated shipping zone fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a shipping zone by using its `id`.


**Example**

```js
const request = await api.shippingZones.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Products%2Fpaths%2F~1products%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Products%2Fpaths%2F~1products~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Products%2Fpaths%2F~1products~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Products%2Fpaths%2F~1products~1%7Bid%7D%2Fdelete
