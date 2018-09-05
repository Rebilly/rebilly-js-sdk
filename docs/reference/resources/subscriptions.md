# Subscriptions <small>`:::js api.subscriptions`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage subscriptions. A subscription is an instance of a plan for a specific customer and website combination. 


## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of subscriptions. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.subscriptions.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.subscriptions.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(subscription => console.log(subscription.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of subscriptions.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a subscription by its `id`.

**Example**

```js
const subscription = await api.subscriptions.get({id: 'foobar-001'});
console.log(subscription.fields.billingAddress.firstName);
```


**Returns**

A member exposing the subscription fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadCSV

--8<----- "reference/resources/shared/csv/full-expanded-signature.md"

Get a collection of subscriptions in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadCSV` method is exactly the same as the `getAll` method, with the only difference that the former returns a file instead of a collection.
 
**Example**

```js
// all parameters are optional
const firstFile = await api.subscriptions.downloadCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.subscriptions.downloadCSV(params);

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

Create a subscription for a specific customer, website and plan combination. Optionally provide a specific `id` to use, or let Rebilly generate one.

An `initialInvoiceId` can be defined which will allow you to insert the subscription as an invoice item to an existing invoice.

**Example**

```js
// first set the properties for the new subscription
const data = {
    customerId: 'foobar-0001',
    websiteId: 'my-main-website',
    planId: 'my-plan-id',
    // you can append this subscription to
    // an existing invoice by passing its ID
    initialInvoiceId: 'my-existing-invoice-id',
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
    quantity: 1,
    customFields: {}
};

// the ID is optional
const firstInvoice = await api.subscriptions.create({data});

// or you can provide one
const secondInvoice = await api.subscriptions.create({id: 'my-second-id', data});
```

**Returns**

A member exposing the created subscription fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a subscription using its `id`.

**Example**

```js
// define the values to update
const data = {
    // determines if a payment attempt will be automatic
    autopay: false,
    // set the next renewal time
    renewalTime: '2018-09-26T15:34:29Z'
};

const subscription = await api.subscriptions.update({id: 'my-second-id', data});
```

**Returns**

A member exposing the updated subscription fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## cancel
<div class="method"><code><strong>cancel</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Cancel an subscription using its `id`. The `policy` will be used to determine when the subscription will end.
 
Allowed `policy` values: 

- `at-next-renewal`
- `now-with-prorata-credit`
- `now` 

**Example**

```js
// define the cancellation details
const data = {
    policy: 'at-next-renewal',
    canceledBy: 'merchant',
    cancelCategory: 'did-not-use',
    cancelDescription: 'the user did not use the product'
};

const subscription = await api.subscriptions.cancel({id: 'my-second-id', data});
```

**Returns**

A member exposing the canceled subscription fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## change-plan
<div class="method"><code><strong>change-plan</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Change the customer's subscription plan. The `renewalPolicy` will be used to determine when the change will be completed. 

This feature is useful for upgrading and downgrading the customer's subscription.

Allowed `renewalPolicy` values: 

- `reset`
- `retain`

**Example**

```js
// define the subscription details
const data = {
    planId: 'my-other-plan',
    renewalPolicy: 'retain',
    prorated: false
};

const abandonedInvoice = await api.subscriptions.changePlan({id: 'my-subscription-id', data});
```

**Returns**

A member exposing the changed subscription fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.



## getLeadSource
<div class="method"><code><strong>getLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a lead source by using the subscription `id`.


**Example**

```js
const lead = await api.subscriptions.getLeadSource({id: 'my-second-id'});
console.log(lead.fields.affiliate);
```

**Returns**

A member exposing the lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## createLeadSource
<div class="method"><code><strong>createLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a lead source for a subscription `id`. A subscription can only have one lead source present at a time.

!!! tip "subscription Tracking"
    The lead source entity lets you track your subscriptions throughout your different campaigns.

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

const lead = await api.subscriptions.createLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the created subscription lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## updateLeadSource
<div class="method"><code><strong>updateLeadSource</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the lead source for a subscription `id`.

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

const lead = await api.subscriptions.updateLeadSource({id: 'my-second-id', data});
```

**Returns**

A member exposing the update subscription lead source fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## deleteLeadSource
<div class="method"><code><strong>deleteLeadSource</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a lead source using the subscription `id`.  


**Example**

```js
const request = await api.subscriptions.deleteLeadSource({id: 'my-second-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## getAllMatchedRules
<div class="method"><code><strong>getAllMatchedRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Collection}</span></code></div>

Get all previously matched event rules for a subscription `id`. The rules are defined within system events and are part of the Rules Engine.

> See [events][goto-events]

**Example**

```js
const rules = await api.subscriptions.getAllMatchedRules({id: 'foobar-001'});
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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D~1lead-source%2Fput
[5]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D~1change-plan%2Fpost
[6]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D~1lead-source%2Fget
[7]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D~1lead-source%2Fput
[8]: https://rebilly.github.io/RebillyAPI/#tag/Subscriptions%2Fpaths%2F~1subscriptions~1%7Bid%7D~1lead-source%2Fdelete
