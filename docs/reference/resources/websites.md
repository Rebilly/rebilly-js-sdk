# Websites <small>`:::js api.websites`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

The website is related to each invoice and each payment gateway account. This feature would allow you to have gateway accounts that are related to multiple websites, or exclusive to particular websites. And gives you more control over your business.


## getAll

--8<----- "reference/resources/shared/full-signature.md"

Get a collection of websites. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.websites.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.websites.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(website => console.log(website.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of websites.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a website by its `id`.


**Example**

```js
const website = await api.websites.get({id: 'foobar-001'});
console.log(website.fields.name);
```


**Returns**

A member exposing the website fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-signature.md"

Get a collection of websites in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.websites.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.websites.downloadCSV(params);

// access the file data to view the CSV content 
console.log(secondFile.data);
```

!!! tip
    You can generate a binary file to download from the CSV content directly in the browser, or save it locally via the file system in Node.

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a website. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new website
const data = {
    name: 'My website',
    url: 'https://www.acme.com',
    servicePhone: '15451234567',
    serviceEmail: 'support@acme.com',
    // used to build the checkout page URI,
    // this value would result in 
    // https://checkout.rebilly.com/acme/page
    checkoutPageUri: 'acme',
    customFields: {}
};

// the ID is optional
const firstWebsite = await api.websites.create({data});

// or you can provide one
const secondWebsite = await api.websites.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created website fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a website by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'My website',
    url: 'https://www.acme.com',
    servicePhone: '15451234567',
    serviceEmail: 'support@acme.com',
    // used to build the checkout page URI,
    // this value would result in 
    // https://checkout.rebilly.com/acme-checkout/page
    checkoutPageUri: 'acme-checkout',
    customFields: {}
};

const website = await api.websites.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated website fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a website by using its `id`.


**Example**

```js
const request = await api.websites.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Websites%2Fpaths%2F~1websites%2Fget
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Websites%2Fpaths%2F~1websites~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Websites%2Fpaths%2F~1websites~1%7Bid%7D~1webhook%2Fput
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Websites%2Fpaths%2F~1websites~1%7Bid%7D%2Fdelete
