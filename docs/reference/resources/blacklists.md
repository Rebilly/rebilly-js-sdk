# Blacklists <small>`:::js api.blacklists`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Blacklists are used to manage risk and fraud by aborting an operation if the blacklisted value matches a field related to a customer.  

Rebilly has blacklists of customer Ids, emails, ip addresses, bins and payment cards.  A greylist is just like a blacklist, but with an expiration date.



## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of blacklist items. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.blacklists.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.blacklists.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(blacklistItem => console.log(blacklistItem.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of blacklist items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a blacklist item by its `id`.


**Example**

```js
const blacklistItem = await api.blacklists.get({id: 'foobar-001'});
console.log(blacklistItem.fields.status);
```


**Returns**

A member exposing the blacklist item fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a blacklist item entry. Optionally provide a specific `id` to use, or let Rebilly generate one. 

If you do not provide an expiry time the item will be permanent. 

The supported blacklist item types are:

- `payment-card-id` 
- `customer-id`
- `email` 
- `ip-address` 
- `country` 
- `fingerprint` 
- `bin`


**Example**

```js
// first set the required properties for the new blacklist item
const data = {
    type: 'ip-address',
    value: '63.118.98.100'
    
    // optionally provide an `expiredTime` to make
    // the item expire and function like a `greylist`
    
    // expiredTime: '2017-09-18T21:50:44Z'
};

// the ID is optional
const firstKey = await api.blacklists.create({data});

// or you can provide one
const secondKey = await api.blacklists.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created blacklist item fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a blacklist item by using its `id`. This will remove any restrictions on the value of the blacklist item.  


**Example**

```js
const request = await api.blacklists.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Blacklists%2Fpaths%2F~1blacklists%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Blacklists%2Fpaths%2F~1blacklists~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Blacklists%2Fpaths%2F~1blacklists~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Blacklists%2Fpaths%2F~1blacklists~1%7Bid%7D%2Fdelete
