# Layouts <small>`:::js api.layouts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Layouts are a collection of plans, in a specific order, which you may present to a customer (or prospective customer) on a pricing or plans page integrated into your website.



## getAll

--8<----- "reference/resources/shared/paged-signature.md"

Get a collection of layouts. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.layouts.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.layouts.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(layout => console.log(layout.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Returns**

A collection of layouts.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get an layout by its `id`.


**Example**

```js
const layout = await api.layouts.get({id: 'foobar-001'});
console.log(layout.fields.description);
```


**Returns**

A member exposing the layout fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create an layout of plans. Optionally provide a specific `id` to use, or let Rebilly generate one. 

!!! warning "Plans"
    You must have existing plans before you can create a layout.  


**Example**

```js
// first set the properties for the new layout
const data = {
    name: 'My plans layout',
    items: [
        {
            planId: 'foobar-0001', 
            starred: false
        },
        {
            planId: 'foobar-0002',
            // use the `starred` option to
            // mark a plan as being special, 
            // i.e. `our best plan`, or `most popular`
            // then use this feature in your integration 
            // to distinguish between `items`
            starred: true
        },
        {
            planId: 'foobar-0003', 
            starred: false
        }
    ]
};

// the ID is optional
const firstLayout = await api.layouts.create({data});

// or you can provide one
const secondLayout = await api.layouts.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created layout fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update an layout by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'My better layout',
    items: [
        {
            planId: 'foobar-0002', 
            starred: true
        },
        {
            planId: 'foobar-0001',
            starred: false
        },
        {
            planId: 'foobar-0003', 
            starred: false
        }
    ]
};

const layout = await api.layouts.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated layout fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete an layout by using its `id`. 


**Example**

```js
const request = await api.layouts.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Layouts%2Fpaths%2F~1layouts%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Layouts%2Fpaths%2F~1layouts~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Layouts%2Fpaths%2F~1layouts~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Layouts%2Fpaths%2F~1layouts~1%7Bid%7D%2Fdelete
