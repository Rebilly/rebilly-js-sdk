# Tracking <small>`:::js api.tracking`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Inspect tracking data. Tracking is a layer for accessing all the activity (API requests, subscriptions, webhooks, events, etc.), thus providing easier debugging and issues auditing


## getAllApiLogs

<div class="method">
    <code>
        <strong>getAllApiLogs</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Get a collection of API logs. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.tracking.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.tracking.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.customerId));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of API log entries.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## getApiLog
<div class="method"><code><strong>getApiLog</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get an API log entry by its `id`.


**Example**

```js
const entry = await api.tracking.getApiLog({id: 'foobar-001'});
console.log(entry.fields.request);
```


**Returns**

A member exposing the API log entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## downloadApiLogsCSV

<div class="method">
    <code>
        <strong>downloadApiLogsCSV</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{File}</span>
    </code>
</div>

Get a collection of API logs in CSV format. The first row of data will include the headers of the fields included within the CSV list.

!!! note 
    The `downloadApiLogsCSV` method is exactly the same as the `getAllApiLogs` method, with the only difference that the former returns a file instead of a collection.


**Example**

```js
// all parameters are optional
const firstFile = await api.tracking.downloadApiLogsCSV();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondFile = await api.tracking.downloadApiLogsCSV(params);

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

## getAllSubscriptionLogs

<div class="method">
    <code>
        <strong>getAllSubscriptionLogs</strong>({
        <span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of subscription logs. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.tracking.getAllSubscriptionLogs();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.tracking.getAllSubscriptionLogs(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.subscriptionId));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of subscription log entries.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## getSubscriptionLog
<div class="method"><code><strong>getSubscriptionLog</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a subscription log entry by its `id`.


**Example**

```js
const entry = await api.tracking.getSubscriptionLog({id: 'foobar-001'});
console.log(entry.fields.subscriptionId);
```


**Returns**

A member exposing the subscription log entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## getAllWebhookNotificationLogs

<div class="method">
    <code>
        <strong>getAllWebhookNotificationLogs</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of website webhook logs. Each entry will be a member.


!!! warning "Website Webhooks"
    These logs will only track website webhooks. 

**Example**

```js
// all parameters are optional
const firstCollection = await api.tracking.getAllWebhookNotificationLogs();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.tracking.getAllWebhookNotificationLogs(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.eventName));
```

**Parameters**


--8<----- "reference/resources/shared/filter-get-all.md"


**Returns**

A collection of website webhook log entries.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## getWebhookNotificationLog
<div class="method"><code><strong>getWebhookNotificationLog</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a website webhook log entry by its `id`.


!!! warning "Website Webhooks"
    These logs will only track website webhooks. 

**Example**

```js
const entry = await api.tracking.getWebhookNotificationLog({id: 'foobar-001'});
console.log(entry.fields.eventName);
```


**Returns**

A member exposing the website webhook log entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getAllListsChangesHistory

<div class="method">
    <code>
        <strong>getAllListsChangesHistory</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of changes applied to the lists (Rules Engine). Each entry will be a member.

> See [api.lists][goto-lists]

**Example**

```js
// all parameters are optional
const firstCollection = await api.tracking.getAllListsChangesHistory();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.tracking.getAllListsChangesHistory(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of list changes.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## getAllWebhookTrackingLogs

<div class="method">
    <code>
        <strong>getAllWebhookTrackingLogs</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of global webhook logs. Each entry will be a member.

==Since 0.13.0==

**Example**

```js
// all parameters are optional
const firstCollection = await api.tracking.getAllWebhookTrackingLogs();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.tracking.getAllWebhookTrackingLogs(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(entry => console.log(entry.fields.eventType));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of global webhook log entries.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## getWebhookTrackingLog
<div class="method"><code><strong>getWebhookTrackingLog</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a global webhook log entry by its `id`.

==Since 0.13.0==

**Example**

```js
const entry = await api.tracking.getWebhookTrackingLog({id: 'foobar-001'});
console.log(entry.fields.eventType);
```


**Returns**

A member exposing the global webhook log entry fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[goto-lists]: ./lists
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1api/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1api~1{id}/get
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1subscriptions/get
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1subscriptions~1{id}/get
[5]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1webhooks/get
[6]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1webhooks~1{id}/get
[7]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1lists/get
[8]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1webhooks/get
[9]: https://rebilly.github.io/RebillyUserAPI/#tag/Tracking/paths/~1tracking~1webhooks~1{id}/get
