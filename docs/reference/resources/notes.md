# Notes <small>`:::js api.notes`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Leave notes on a resource member to have a handy location to share with others who may interface with the customer. It's great for customer service.

## getAll

--8<----- "reference/resources/shared/filter-signature.md"

Get a collection of notes. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.notes.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.notes.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(note => console.log(note.fields.createdBy));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of notes.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a note by its `id`.


**Example**

```js
const note = await api.notes.get({id: 'foobar-001'});
console.log(note.fields.description);
```


**Returns**

A member exposing the note fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a note for a specific resource (`relatedType`) and entity ID (`relatedId`). Optionally provide a specific `id` to use, or let Rebilly generate one. 

Allowed `relatedType` values:

- `customer`
- `paayment-card`
- `payment-gateway`
- `subscriptions`
- `transaction` 


**Example**

```js
// first set the properties for the new note
const data = {
    content: 'This is our best customer',
    archived: false,
    // define the resource the note is attached to
    relatedType: 'customer',
    // and the ID of the member of that resource
    relatedId: 'my-customer-id'
};

// the ID is optional
const firstNote = await api.notes.create({data});

// or you can provide one
const secondNote = await api.notes.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created note fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a note by using its `id` for a specific resource (`relatedType`) and entity ID (`relatedId`). 

**Example**

```js
// define values to update
const data = {
    content: 'This was our best customer',
    archived: false,
    // define the resource the note is attached to
    relatedType: 'customer',
    // and the ID of the member of that resource
    relatedId: 'my-customer-id'
};

const note = await api.notes.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated note fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Notes%2Fpaths%2F~1notes%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Notes%2Fpaths%2F~1notes~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Notes%2Fpaths%2F~1notes~1%7Bid%7D%2Fput
