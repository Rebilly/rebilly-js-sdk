# Invoices <small>`:::js api.invoices`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

An invoice is a commercial document issued by a seller (merchant) to a buyer (customer), relating to a sale transaction and indicating the products, quantities, and agreed prices for products or services the seller has provided the buyer.  Payment terms are usually stated on the invoice. 


## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of invoices. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.invoices.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.invoices.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(invoice => console.log(invoice.fields.firstName));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of invoices.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>, <span class="prop">expand</span><span class="optional">opt</span>}) -> <span class="return">{Member}</span></code></div>

Get a invoice by its `id`. Define `expand` to include additional data.

Allowed `expand` values: 

- `website`
- `customer`
- `organization`

!!! tip "invoice Object"
    invoices have invoice objects attached to them (`primaryAddress`). The invoice information contains the invoice's name and address.

**Example**

```js
const invoice = await api.invoices.get({id: 'foobar-001'});
console.log(invoice.fields.primaryAddress.firstName);
```


**Returns**

A member exposing the invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-expanded-signature.md"

Get a collection of invoices in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.invoices.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.invoices.downloadCSV(params);

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

## downloadPDF
<div class="method"><code><strong>downloadPDF</strong>({<span class="prop">id</span>}) -> <span class="return">{File}</span></code></div>

Get an invoice PDF by the invoice's `id`. Returns an [ArrayBuffer][goto-arraybuffer].

!!! tip "invoice Object"
    invoices have invoice objects attached to them (`primaryAddress`). The invoice information contains the invoice's name and address.

**Example**

```js
const pdf = await api.invoices.downloadPDF({id: 'foobar-001'});
// the invoice's data in arraybuffer format
console.log(pdf.data);
```


**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a invoice for a specific customer and website. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new invoice
const data = {
    customerId: 'foobar-0001',
    websiteId: 'my-main-website',
    currency: 'USD',
    billingAddress: {
        firstName: 'Johnny',
        lastName: 'Brown',
        emails: [{
            label: 'main',
            value: 'johnny+test@grr.la',
            primary: true
        }],
    },
    deliveryAddress: {
        firstName: 'Johnny',
        lastName: 'Brown',
        emails: [{
            label: 'main',
            value: 'johnny+test@grr.la',
            primary: true
        }],
    },
    notes: `customer's first invoice`,
};

// the ID is optional
const firstInvoice = await api.invoices.create({data});

// or you can provide one
const secondInvoice = await api.invoices.create({id: 'my-second-id', data});
```

**Returns**

A member exposing the created invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a invoice using its `id`.

**Example**

```js
// define the values to update
const data = {
    customerId: 'foobar-0001',
    websiteId: 'my-main-website',
    currency: 'USD',
    billingAddress: {
        firstName: 'Johnny',
        lastName: 'Brown',
        emails: [{
            label: 'main',
            value: 'johnny+test@grr.la',
            primary: true
        }],
    },
    deliveryAddress: {
        firstName: 'Johnny',
        lastName: 'Brown',
        emails: [{
            label: 'main',
            value: 'johnny+test@grr.la',
            primary: true
        }],
    },
    notes: `customer's first invoice`,
};

const invoice = await api.invoices.update({id: 'my-second-id', data});
```

**Returns**

A member exposing the updated invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## issue
<div class="method"><code><strong>issue</strong>({<span class="prop">id</span>, <span class="prop">data</span><span class="optional">opt</span>}) -> <span class="return">{Member}</span></code></div>

Issue an invoice using its `id`. This will calculate the shipping, taxes, and customer's applicable redeemed coupons, and apply them to the invoice.

Optionally provide an `issuedTime` in the future to schedule the invoice otherwise it will be generated immediately. 

**Example**

```js
// define the issued time
const data = {
    issuedTime: "2017-09-19T20:46:51Z"
};

// issue the invoice without an issued time
const firstInvoice = await api.invoices.issue({id: 'my-first-id'});

// or include it
const secondInvoice = await api.invoices.issue({id: 'my-second-id', data});
```

**Returns**

A member exposing the issued invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## abandon
<div class="method"><code><strong>abandon</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Abandon an invoice using its `id`. An invoice has to be issued before being abandoned. Once abandoned the invoice can no longer be settled.

**Example**

```js
const abandonedInvoice = await api.invoices.abandon({id: 'my-invoice-id'});
console.log(abandonedInvoice.fields.status);
```

**Returns**

A member exposing the abandoned invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## void
<div class="method"><code><strong>void</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Void an invoice using its `id`. A void can only occur before settlement, otherwise a refund must be used.

**Example**

```js
const abandonedInvoice = await api.invoices.abandon({id: 'my-invoice-id'});
console.log(abandonedInvoice.fields.status);
```

**Returns**

A member exposing the voided invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getAllInvoiceItems
<div class="method"><code><strong>getAllInvoiceItems</strong>({<span class="prop">id</span>, <span class="prop">limit</span><span class="optional">opt</span>, <span class="prop">offset</span><span class="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>
 
Get a list of invoice items for a specific invoice using its `id`.

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Example**

```js
// get the top 20 invoice items for this ID
const invoiceItems = await api.invoices.getAllInvoiceItems({id: 'my-invoice-id', limit: 20});
invoiceItems.items.forEach(item => console.log(item.fields.description));
```


**Returns**

A collection exposing the invoice items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## createInvoiceItem
<div class="method"><code><strong>createInvoiceItem</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create an invoice item within an existing invoice, by using its `id`.

**Example**

```js
// first set the properties for the new invoice item
const data = {
    type: 'debit', 
    unitPrice: 5
};

const invoiceItem = await api.invoices.createInvoiceItem({id: 'my-second-id', data});
```

**Returns**

A member exposing the created invoice fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## getLeadSource
<div class="method"><code><strong>getLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a lead source by using the invoice `id`.


**Example**

```js
const lead = await api.invoices.getLeadSource({id: 'my-second-id'});
console.log(lead.fields.affiliate);
```

**Returns**

A member exposing the lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.

## createLeadSource
<div class="method"><code><strong>createLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a lead source for a invoice `id`. A invoice can only have one lead source present at a time.

!!! tip "invoice Tracking"
    The lead source entity lets you track your invoices throughout your different campaigns.

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

const lead = await api.invoices.createLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the created invoice lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## updateLeadSource
<div class="method"><code><strong>updateLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the lead source for a invoice `id`.

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

const lead = await api.invoices.updateLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the update invoice lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## deleteLeadSource
<div class="method"><code><strong>deleteLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a lead source using the invoice `id`.  


**Example**

```js
const request = await api.invoices.deleteLeadSource({id: 'my-second-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][11]{: target="_blank"} for all payload fields and response data.

## getAllMatchedRules
<div class="method"><code><strong>getAllMatchedRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Collection}</span></code></div>

Get all previously matched event rules for an invoice `id`. The rules are defined within system events and are part of the Rules Engine.

> See [events][goto-events]

**Example**

```js
const rules = await api.invoices.getAllMatchedRules({id: 'foobar-001'});
```


**Returns**

A collection of matched rules for this dispute.

Type [`Collection`][goto-collection]

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[goto-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[goto-events]: ./events
[1]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}/put
[4]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1issue/post
[5]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1abandon/post
[6]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1void/post
[7]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1items/get
[8]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1items/post
[9]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1lead-source/get
[10]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1lead-source/put
[11]: https://rebilly.github.io/RebillyAPI/#tag/Invoices/paths/~1invoices~1{id}~1lead-source/delete
