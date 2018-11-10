# Products <small>`:::js api.products`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage products. You may attach them to products. Products can have a tax category, accounting code and may require shipping.


## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of products. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.products.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.products.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(product => console.log(product.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of products.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a product by its `id`.


**Example**

```js
const product = await api.products.get({id: 'foobar-001'});
console.log(product.fields.name);
```


**Returns**

A member exposing the product fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a product. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new product
const data = {
    name: 'my first product',
    description: 'made to be of the highest quality',
    taxCategoryId: '',
    requiresShipping: true,
    accountingCode: '100',
    customFields: []
};

// the ID is optional
const firstProduct = await api.products.create({data});

// or you can provide one
const secondProduct = await api.products.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created product fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a product by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'my first product',
    description: 'made to be of the highest quality',
    taxCategoryId: '20010',
    requiresShipping: false,
    accountingCode: '77',
    customFields: []
};

const product = await api.products.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated product fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a product by using its `id`.


**Example**

```js
const request = await api.products.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Products/paths/~1products/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Products/paths/~1products~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Products/paths/~1products~1{id}/put
[4]: https://rebilly.github.io/RebillyAPI/#tag/Products/paths/~1products~1{id}/delete
