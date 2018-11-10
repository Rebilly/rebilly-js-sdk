# Custom Fields <small>`:::js api.customFields`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Custom fields can be added to various entities to allow you to store additional data on your customers.


## getAll

<div class="method"><code><strong>getAll</strong>({<span class="prop">resource</span>, <span class="prop">limit</span><span class="optional">opt</span>, <span class="prop">offset</span><span class="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>

Get a collection of custom fields for a specific `resource`. Each entry will be a member.


**Example**

```js
// all parameters except `resource` are optional
const firstCollection = await api.customFields.getAll({resource: 'customers'});

// alternatively you can specify one or more of them
const params = {resource: 'customers', limit: 20, offset: 100}; 
const secondCollection = await api.customFields.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(customField => console.log(customField.fields.description));
```

**Parameters**


| Name | Type | Attribute | Description |
| - | - | - | - |
| resource | string | - | The resource under which the custom fields were created. Allowed values: `customers`, `payment-cards`, `subscriptions`, `transactions`, `websites`, `contacts`, `products`. |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |


**Returns**

A collection of custom fields.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">resource</span>, <span class="prop">name</span>}) -> <span class="return">{Member}</span></code></div>

Get a custom field by its `name` for a specific `resource`.

Allowed `resource` values:

- `customers`
- `payment-cards`
- `subscriptions`
- `transactions`
- `websites`
- `contacts`
- `products`


**Example**

```js
const customField = await api.customFields.get({resource: 'customers', name: 'dob'});
console.log(customField.fields.description);
```


**Returns**

A member exposing the custom field fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">resource</span>, <span class="prop">name</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a custom field for a specific `resource`. 

!!! tip "API Spec"
    See the [API spec][3]{: target="_blank"} for details on how to build the data payload for each custom field type.

**Example**

```js
// first set the properties for the new custom field
const data = {
    name: 'Date of Birth',
    type: 'date',
    description: `The customer's date of birth`
};

// define the entire payload
const params = {resource: 'customers', name: 'dob', data};
const customField = await api.customFields.create(params);

// you can verify if the custom field is used
console.log(customField.fields.isUsed);
```

**Returns**

A member exposing the created custom field fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">resource</span>, <span class="prop">name</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a custom field for a specific `resource` using its `name`. 

!!! tip "API Spec"
    See the [API spec][3]{: target="_blank"} for details on how to build the data payload for each custom field type.

**Example**

```js
// first set the properties for the custom field
const data = {
    description: `The customer's DOB`
};

// define the entire payload
const params = {resource: 'customers', name: 'dob', data};
const customField = await api.customFields.update(params);

// you can verify if the custom field is used
console.log(customField.fields.isUsed);
```

**Returns**

A member exposing the updated custom field fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">resource</span>, <span class="prop">name</span>}) -> <span class="return">{Member}</span></code></div>

Delete a custom field for a `resource` using its `name`.  


**Example**

```js
const request = await api.customFields.delete({resource: 'customers', name: `dob`});

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
[goto-file]: ../types/file
[1]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Fields/paths/~1custom-fields~1{resource}/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Fields/paths/~1custom-fields~1{resource}~1{name}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Fields/paths/~1custom-fields~1{resource}~1{name}/put
[4]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Fields/paths/~1custom-fields~1{resource}~1{name}/delete
