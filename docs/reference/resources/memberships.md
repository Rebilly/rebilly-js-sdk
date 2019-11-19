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
