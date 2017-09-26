# Plans <small>`:::js api.plans`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Plans are used to describe a subscription. A plan may have optional setup fees, an optional trial period and fees, and an optional recurring fees and frequency. A plan may also expire, or be valid only for a limited number of recurrences.


## getAll

--8<----- "reference/resources/shared/search-signature.md"

Get a collection of plans. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.plans.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.plans.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(plan => console.log(plan.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/search-get-all.md"


**Returns**

A collection of plans.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a plan by its `id`.


**Example**

```js
const plan = await api.plans.get({id: 'foobar-001'});
console.log(plan.fields.name);
```


**Returns**

A member exposing the plan fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a plan. Optionally provide a specific `id` to use, or let Rebilly generate one.

A plan can have both a trial and recurring part but you must provide at lease one of them to create it. See the [API spec][3] for more details.

!!! warning "Subscriptions"
    At least one plan is required to be able to create new subscriptions.

**Example**

```js
// first set the properties for the new plan
const data = {
    name: 'My strongest plan',
    currency: 'USD',
    setupAmount: 12.99,
    // you could also include a trial if needed
    recurringPeriodUnit: 'month',
    recurringPeriodLength: 1,
    recurringAmount: 25.99
};

// the ID is optional
const firstPlan = await api.plans.create({data});

// or you can provide one
const secondPlan = await api.plans.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created plan fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a plan by using its `id`. 


**Example**

```js
// define values to update
const data = {
    name: 'My strongest plan',
    currency: 'USD',
    setupAmount: 12.99,
    recurringPeriodUnit: 'month',
    recurringPeriodLength: 1,
    recurringAmount: 25.99,
    isActive: false
};

const plan = await api.plans.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated plan fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a plan by using its `id`.

!!! warning "Active Subscriptions" 
    You cannot delete plans that have active subscriptions.

**Example**

```js
const request = await api.plans.delete({id: 'my-second-key'});

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
[1]: https://rebilly.github.io/RebillyAPI/#tag/Plans%2Fpaths%2F~1plans%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Plans%2Fpaths%2F~1plans~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Plans%2Fpaths%2F~1plans~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Plans%2Fpaths%2F~1plans~1%7Bid%7D%2Fdelete
