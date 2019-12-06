# Memberships <small>`:::js api.memberships`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Membership describe the relationships between organizations and users. 


## getAll

Get a collection of memberships. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.memberships.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, flilter: ''}; 
const secondCollection = await api.customers.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(membership => console.log(membership.fields));
```

**Parameters**

**Returns**

A collection of memberships.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


## get
<div class="method"><code><strong>get</strong>({<span class="prop">organizationId</span>, <span class="prop">userId</span>}) -> <span class="return">{Member}</span></code></div>

Get a membership by `userId` and `organizationId`.

**Example**

```js
const membership = await api.memberships.get({organizationId: 'org-id', userId: 'user-id'});
```


**Returns**

A member exposing the membership fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2] for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">organizationId</span>, <span class="prop">userId</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a membership for user (by `userId`) in the organization (`organizationId`). 


**Example**

```js
const data = {isOwner: false, permission: null};
const membership = await api.memberships.create({organizationId: 'org-id', userId: 'user-id', data});
```


**Returns**

A member exposing the created membership fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3] for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">organizationId</span>, <span class="prop">userId</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a membership for user (by `userId`) in the organization (`organizationId`). 


**Example**

```js
const data = {isOwner: false, permission: null};
const membership = await api.memberships.update({organizationId: 'org-id', userId: 'user-id',  data});
```


**Returns**

A member exposing the updated membership fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3] for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">organizationId</span>, <span class="prop">userId</span>}) -> <span class="return">{Member}</span></code></div>

Delete a membership by `userId` and `organizationId`. 


**Example**

```js
const request = await api.memberships.delete({organizationId: 'org-id', userId: 'user-id'});

console.log(request.response.status); // 204
```



**API Spec**

See the [detailed API spec][4] for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyUserAPI/#operation/GetMembershipCollection
[2]: https://rebilly.github.io/RebillyUserAPI/#operation/GetMembership
[3]: https://rebilly.github.io/RebillyUserAPI/#operation/PutMembership
[4]: https://rebilly.github.io/RebillyUserAPI/#operation/DeleteMembership
