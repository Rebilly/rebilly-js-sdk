# Exports <small>`:::js api.exports`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

Queue data exports for resources and download the result in CSV format. There is no limit to the amount of data that can be exported.

## getAll

--8<----- "reference/resources/shared/full-expanded-signature.md"

Get a collection of queued exports. Each entry will be a member.

**Example**

```js
// all parameters are optional
const firstCollection = await api.exports.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.exports.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(file => console.log(exports.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/full-expanded-get-all.md"


**Returns**

A collection of queued exports.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">resource</span>, <span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a queued export by its `id` for a specific `resource`.

!!! warning "Transactions"
    Currently the only supported resource is `transaction`.

**Example**

```js
const queuedExport = await api.exports.get({resource: 'transaction', id: 'foobar-001'});
console.log(queuedExport.fields.status);
```


**Returns**

A member exposing the customer fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## queue
<div class="method"><code><strong>get</strong>({<span class="prop">resource</span>, <span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Queue an export for a specific `resource`. The processing time for the export can vary from a few seconds to a few minutes depending on the amount of data requested.

!!! warning "Transactions"
    Currently the only supported resource is `transaction`.

**Example**

```js
// first prepare the details of the export
const data = {
    name: 'my-first-export',
    // only CSV is currently supported
    format: 'csv',
    // define filters, criteria, etc. 
    // to reduce the amount of values exported
    arguments: {},
    dateRange: {
        range: 'all'
    },
    // list email addresses that will receive
    //  a notification once the download is ready
    emailNotification: ['']
};

const queuedExport = await api.exports.queue({resource: 'transaction', data});
console.log(queuedExport.fields.status);
```


**Returns**

A member exposing the newly queued export fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[goto-collection]: ../../types/collection
[1]: https://rebilly.github.io/RebillyReportsAPI/#tag/Exports%2Fpaths%2F~1exports~1transactions%2Fget
[2]: https://rebilly.github.io/RebillyReportsAPI/#tag/Exports%2Fpaths%2F~1exports~1transactions~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyReportsAPI/#tag/Exports%2Fpaths%2F~1exports~1transactions%2Fpost
