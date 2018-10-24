# Customers <small>`:::js api.customers`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Customers are associated with payment cards, subscriptions, invoices and other miscellaneous relationship models.


## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of customers. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.customers.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.customers.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(customer => console.log(customer.fields.primaryAddress.firstName));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of customers.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a customer by its `id`.

!!! tip "Contact Object"
    Customers have contact objects attached to them (`primaryAddress`). The contact information contains the customer's name and address.

**Example**

```js
const customer = await api.customers.get({id: 'foobar-001'});
console.log(customer.fields.primaryAddress.firstName);
```


**Returns**

A member exposing the customer fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-expanded-signature.md"

Get a collection of customers in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.customers.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.customers.downloadCSV(params);

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

Create a customer. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new customer
const data = {
    primaryAddress: {
        firstName: 'John',
        lastName: 'Doe',
        emails: [{
            label: 'main',
            value: 'john.doe+test@grr.la',
            primary: true
        }],
    }
};

// the ID is optional
const firstCustomer = await api.customers.create({data});

// or you can provide one
const secondCustomer = await api.customers.create({id: 'my-second-id', data});
```

**Returns**

A member exposing the created customer fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a customer using its `id`.

**Example**

```js
// define the values to update
const data = {
    primaryAddress: {
        firstName: 'Johnny',
        lastName: 'Doe',
        emails: [{
            label: 'main',
            value: 'johnny.doe+test@grr.la',
            primary: true
        }],
    }
};

const customer = await api.customers.update({id: 'my-second-id', data});
```

**Returns**

A member exposing the updated customer fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## getLeadSource
<div class="method"><code><strong>getLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a lead source by using the customer `id`.


**Example**

```js
const lead = await api.customers.getLeadSource({id: 'my-second-id'});
console.log(lead.fields.affiliate);
```

**Returns**

A member exposing the lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## createLeadSource
<div class="method"><code><strong>createLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a lead source for a customer `id`. A customer can only have one lead source present at a time.

!!! tip "Customer Tracking"
    The lead source entity lets you track your customers throughout your different campaigns.

**Example**

```js
// first set the properties for the new lead source
const data = {
    medium: 'foobar',
    source: 'www.google.com',
    campaign: 'my-first-campaign',
    term: 'subscriptions',
    content: 'subscription business',
    affiliate: 'Acme',
    subAffiliate: null,
    salesAgent: null,
    clickId: null,
    path: null,
    ipAddress: '12.34.56.78',
    currency: 'USD',
    amount: 0
};

const lead = await api.customers.createLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the created customer lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## updateLeadSource
<div class="method"><code><strong>updateLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the lead source for a customer `id`.

**Example**

```js
// define the values to update
const data = {
    medium: 'foobar',
    source: 'www.google.com',
    campaign: 'my-first-campaign',
    term: 'subscriptions',
    content: 'subscription business',
    affiliate: 'Acme',
    subAffiliate: null,
    salesAgent: null,
    clickId: null,
    path: null,
    ipAddress: '12.34.56.78',
    currency: 'USD',
    amount: 0
};

const lead = await api.customers.updateLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the update customer lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## deleteLeadSource
<div class="method"><code><strong>deleteLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a lead source using the customer `id`.  


**Example**

```js
const request = await api.customers.deleteLeadSource({id: 'my-second-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## getAllTimelineMessages

<div class="method">
    <code>
        <strong>getAllTimelineMessages</strong>({
        <span class="prop">id</span>,
        <span class="prop">limit</span><span class="optional" title="optional">opt</span>,
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>,
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Get a collection of customer timeline messages for a customer `id`. Each entry will be a member.


**Example**

```js
// all parameters are optional except for the `id`
const firstCollection = await api.customers
    .getAllTimelineMessages({id: 'my-customer');

// alternatively you can specify one or more of them
const params = {id: 'my-customer', limit: 20, offset: 100};
const secondCollection = await api.customers.getAllTimelineMessages(params);

// access the collection items, each item is a Member
secondCollection.items
    .forEach(message => console.log(message.fields.eventType));
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |
| sort | string | Optional | The member field on which to sort on. Sorting is ascending by default. Use `-` (dash) to make it descending.<br>Example: `createdTime` and `-createdTime`. |
| filter | string | Optional | A list of one or more member fields and their values, used to filter the collection results.<br>Example: `status:active`.<br> See the [filters guide][guide-filters] for more details. |


[guide-filters]: ../../guides/filters.md


**Returns**

A collection of customer timeline messages.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.


## getTimelineMessage
<div class="method">
    <code>
        <strong>getTimelineMessage</strong>({
        <span class="prop">id</span>,
        <span class="prop">messageId</span>
        }) -> <span class="return">{Member}</span></code></div>

Get a customer timeline message by its `id` and `messageId` combination.


**Example**

```js
const message = await api.customers
    .getTimelineMessage({id: 'foobar-001', messageId: 'message-202'});
console.log(message.fields.eventType);
```


**Returns**

A member exposing the customer timeline message fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## createTimelineComment
<div class="method">
    <code>
        <strong>createTimelineComment</strong>({
        <span class="prop">id</span>,
        <span class="prop">data</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Create a timeline comment associated to a customer account by defining its `id` and `data`. The comment message to be posted must be defined in `message` string attribute of the `data` object.


Mentions to users and references to resources can be set inside the message string. See the [detailed API spec][15]{: target="_blank"} for details.

**Example**

```js
// Create a comment
const firstComment = await api
    .customers.createTimelineComment({id: 'my-customer-id', data: {message: 'Your comment here'}});

// Using params object, mentions and references
const message = `Example of mentions @user@mydomain.com and references #customers-customer-id`;
const params = {
    id: 'my-customer-id'
    data: {
        message,
    },
};
const secondComment = await api.customers.createTimelineComment(params);
```


**Returns**

A member exposing the created customer timeline comment fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.


## deleteTimelineMessage
<div class="method">
    <code>
        <strong>deleteTimelineMessage</strong>({
        <span class="prop">id</span>,
        <span class="prop">messageId</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Delete a customer timeline message by using its `id` and `messageId` combination.


**Example**

```js
const request = await api.customers
    .deleteTimelineMessage({id: 'foobar-001', messageId: 'message-202'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[1]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers~1%7Bid%7D~1lead-source%2Fget
[5]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers~1%7Bid%7D~1lead-source%2Fput
[6]: https://rebilly.github.io/RebillyAPI/#tag/Customers%2Fpaths%2F~1customers~1%7Bid%7D~1lead-source%2Fdelete
[7]: https://rebilly.github.io/RebillyAPI/#tag/Customers/paths/~1customers~1{id}~1timeline/get
[8]: https://rebilly.github.io/RebillyAPI/#tag/Customers/paths/~1customers~1{id}~1timeline~1{messageId}/get
[9]: https://rebilly.github.io/RebillyAPI/#tag/Customers/paths/~1customers~1{id}~1timeline/post
[10]: https://rebilly.github.io/RebillyAPI/#tag/Customers/paths/~1customers~1{id}~1timeline~1{messageId}/delete
