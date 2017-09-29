# Contacts <small>`:::js api.contacts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Define contact information for your customers. Manage multiple addresses for the same customer.


## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of contacts. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.contacts.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.contacts.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(contact => console.log(contact.fields.firstName));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of contacts.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a contact by its `id`.


**Example**

```js
const contact = await api.contacts.get({id: 'foobar-001'});
console.log(contact.fields.firstName);
```


**Returns**

A member exposing the contact fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-expanded-signature.md"

Get a collection of contacts in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.contacts.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.contacts.downloadCSV(params);

// access the file data to view the CSV content 
console.log(secondFile.data);
```

!!! tip
    You can generate a binary file to download from the CSV content directly in the browser, or save it locally via the file system in Node.

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a contact for a specific customer. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new contact
const data = {
    firstName: 'John',
    lastName: 'Doe',
    emails: [{
        label: 'main',
        value: 'john.doe+test@grr.la',
        primary: true
    }],
    customerId: 'foobar-0001'
};

// the ID is optional
const firstContact = await api.contacts.create({data});

// or you can provide one
const secondContact = await api.contacts.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created contact fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a contact using its `id` for a specific customer.

**Example**

```js
// define the values to update
const data = {
    firstName: 'Johnny',
    lastName: 'Brown',
    emails: [{
        label: 'main',
        value: 'johnny+test@grr.la',
        primary: false
    }],
    customerId: 'foobar-0001'
};

const contact = await api.contacts.update({id: 'my-second-id', data});
```


**Returns**

A member exposing the updated contact fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a contact by using its `id`.  


**Example**

```js
const request = await api.contacts.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Contacts%2Fpaths%2F~1contacts%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Contacts%2Fpaths%2F~1contacts~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Contacts%2Fpaths%2F~1contacts~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Contacts%2Fpaths%2F~1contacts~1%7Bid%7D%2Fdelete
