# Organizations <small>`:::js api.organizations`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Organizations include the name and address of the entities related to your account. An account may be multi-national, and support multiple organizations.

!!! note
    Organizations are shared between the *Live* and *Sandbox* modes.

## getAll

--8<----- "reference/resources/shared/search-signature.md"

Get a collection of organizations. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.organizations.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.organizations.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(organization => console.log(organization.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/search-get-all.md"


**Returns**

A collection of organizations.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get an organization by its `id`.


**Example**

```js
const organization = await api.organizations.get({id: 'foobar-001'});
console.log(organization.fields.name);
```


**Returns**

A member exposing the organization fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create an organization. Optionally provide a specific `id` to use, or let Rebilly generate one. 

**Example**

```js
// first set the properties for the new organization
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
const firstOrganization = await api.organizations.create({data});

// or you can provide one
const secondOrganization = await api.organizations.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created organization fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update an organization by using its `id`. 


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

const organization = await api.organizations.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated organization fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete an organization by using its `id`. 


**Example**

```js
const request = await api.organizations.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Organizations/paths/~1organizations/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Organizations/paths/~1organizations~1{id}/get
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Organizations/paths/~1organizations~1{id}/put
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Organizations/paths/~1organizations~1{id}/delete
