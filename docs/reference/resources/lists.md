# Lists <small>`:::js api.lists`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

A list in an array of values that are stored in the database. The main purpose of a list is its usage in Rules Engine, to provide a way to change a rule criteria without having to change the rule itself.

!!! info "Rules Engine"
    Lists are related to Rules Engine and are only available within the [system events][goto-events].

## getAll

--8<----- "reference/resources/shared/full-signature.md"

Get a collection of lists. Each entry will be a member. Only the newest version of each list will be returned. 

**Example**

```js
// all parameters are optional
const firstCollection = await api.lists.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.lists.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(list => console.log(list.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of Lists.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>, <span class="prop">version</span><span class="optional">opt</span>}) -> <span class="return">{Member}</span></code></div>

Get the latest version of a list by its `id`. Optionally specific a specific `version` number to retrieve.


**Example**

```js
// get the latest version
const lastest = await api.lists.get({id: 'foobar-001'});

// get an older version
const older = await api.lists.get({id: 'foobar-001', version: 12});
```


**Returns**

A member exposing the list fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a list of values to uses in system events' criteria. Optionally provide a specific `id` to use, or let Rebilly generate one. 


**Example**

```js
// first set the properties for the new list
const data = {
    name: 'My value list',
    values: [
        'foobar-0001', 'foobar-0002',  'foobar-0003',
        'foobar-0004', 'foobar-0005', 'foobar-0006'  
    ]
};

// the ID is optional
const firstList = await api.lists.create({data});

// or you can provide one
const secondList = await api.lists.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created list fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a list of values by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'My better list',
    values: [
        'foobar-0004', 'foobar-0005', 'foobar-0006'  
    ]
};

const list = await api.lists.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated list fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a list by using its `id`. 


**Example**

```js
const request = await api.lists.delete({id: 'my-second-key'});

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
[goto-events]: ./events
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Lists/paths/~1lists/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Lists/paths/~1lists~1{id}~1{version}/get
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Lists/paths/~1lists~1{id}/put
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Lists/paths/~1lists~1{id}/delete
