# Checkout Pages <small>`:::js api.checkoutPages`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Fully hosted by Rebilly, checkout pages allow your customers to easily complete transactions using your plans without any programming requirements. Each page is attached to a plan and website.


## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of checkout pages. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.checkoutPages.getAll();

// alternatively you can speciy one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.checkoutPages.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(checkoutPage => console.log(checkoutPage.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of checkout pages.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a checkout page by its `id`.


**Example**

```js
const checkoutPage = await api.checkoutPages.get({id: 'foobar-001'});
console.log(checkoutPage.fields.status);
```


**Returns**

A member exposing the checkout page fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a checkout page for a specific plan and website. Optionally provide a specific `id` to use, or let Rebilly generate one.

The final URL of the checkout page will be the combination of Rebilly's domain, followed by the website's  `checkoutPageUri` and your checkout page's `uriPath`.

Example: 
```
https://checkout.rebilly.com/my-website-checkout-uri/my-page-uri-path
```

!!! warning
    You must have at least one plan and one website (with a `checkoutPageUri` defined) before being able to create checkout pages.

**Example**

```js
// first set the required properties for the new checkout page
const data = {
    uriPath: 'my-first-checkout',
    name: 'Main checkout page',
    planId: 'my-plan-id',
    websiteId: 'my-website-id'
};

// the ID is optional
const firstKey = await api.checkoutPages.create({data});

// or you can provide one
const secondKey = await api.checkoutPages.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created checkout page fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a checkout page using its `id`.

**Example**

```js
// define the values to update
const data = {
    name: 'Best checkout page'
};

const checkoutPage = await api.checkoutPages.update({id: 'my-second-id', data});
```


**Returns**

A member exposing the updated checkout page fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a checkout page by using its `id`.  


**Example**

```js
const request = await api.checkoutPages.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Checkout-Pages%2Fpaths%2F~1checkout-pages%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Checkout-Pages%2Fpaths%2F~1checkout-pages~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Checkout-Pages%2Fpaths%2F~1checkout-pages~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Checkout-Pages%2Fpaths%2F~1checkout-pages~1%7Bid%7D%2Fdelete
