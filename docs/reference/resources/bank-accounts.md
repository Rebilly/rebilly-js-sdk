# Bank Accounts <small>`:::js api.bankAccounts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Bank Accounts are a type of payment instrument used to collect ACH (echeck) payments, similar to how a payment card would be used to for a credit card payment.



## getAll
<div class="method"><code><strong>getAll</strong>({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, <span class="prop">offset</span><span class="optional" title="optional">opt</span>, <span class="prop">sort</span><span class="optional" title="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>

Get a collection of API keys. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.apiKeys.getAll();

// alternatively you can speciy one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.apiKeys.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(apiKey => console.log(apiKey.fields.description));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of API keys.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get an API key by its `id`.


**Example**

```js
const apiKey = await api.apiKeys.get({id: 'foobar-001'});
console.log(apiKey.fields.description);
```


**Returns**

A member exposing the API key fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create an API key. Optionally provide a specific `id` to use, or let Rebilly generate one. 


**Example**

```js
// first set the properties for the new API key
const data = {
    description: 'My new API key',
    // the `datetimeFormat` defines how dates will be saved 
    // and handled by Rebilly for this API key
    // can be either `iso8601` (default) or `mysql`
    datetimeFormat: 'iso8601'
};

// the ID is optional
const firstKey = await api.apiKeys.create({data});

// or you can provide one
const secondKey = await api.apiKeys.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created API key fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update an API key by using its `id`. 


**Example**

```js
// define values to update
const data = {
    description: 'A better description'
};

const apiKey = await api.apiKeys.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated API key fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete an API key by using its `id`. 


**Example**

```js
const request = await api.apiKeys.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/API-Keys%2Fpaths%2F~1api-keys%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/API-Keys%2Fpaths%2F~1api-keys~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/API-Keys%2Fpaths%2F~1api-keys~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/API-Keys%2Fpaths%2F~1api-keys~1%7Bid%7D%2Fdelete
