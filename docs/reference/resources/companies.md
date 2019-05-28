# Companies <small>`:::js api.companies`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Companies include the name and address of the entities related to your account. An account may be multi-national, and support multiple companies.

!!! note
    Companies are shared between the *Live* and *Sandbox* modes.

## getAll

--8<----- "reference/resources/shared/search-signature.md"

Get a collection of companies. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.companies.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.companies.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(company => console.log(company.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/search-get-all.md"


**Returns**

A collection of companies.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get an company by its `id`.


**Example**

```js
const company = await api.companies.get({id: 'foobar-001'});
console.log(company.fields.name);
```


**Returns**

A member exposing the company fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create an company. Optionally provide a specific `id` to use, or let Rebilly generate one. 

**Example**

```js
// first set the properties for the new company
const data = {
    name: 'Acme Import Inc.',
    address: '1234 Roger Street',
    address2: 'Suite 456',
    city: 'Acmeville',
    region: null,
    country: 'Canada',
    postalCode: 'H1N0K1'
};

// the ID is optional
const firstOrganization = await api.companies.create({data});

// or you can provide one
const secondOrganization = await api.companies.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created company fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update an company by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'Acme Export Inc.',
    address: '1234 Moore Street',
    address2: 'Suite 757',
    city: 'Acmeville',
    region: null,
    country: 'Canada',
    postalCode: 'H1N0K1'
};

const company = await api.companies.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated company fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete an company by using its `id`. 


**Example**

```js
const request = await api.companies.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Companies/paths/~1organizations/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Companies/paths/~1organizations~1{id}/get
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Companies/paths/~1organizations~1{id}/put
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Companies/paths/~1organizations~1{id}/delete
