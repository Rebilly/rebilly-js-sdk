# Custom Events <small>`:::js api.customEvents`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create custom events to be triggered when certain system events happen in Rebilly using a schedule. This is useful for sending reminders or completing additional actions based on the schedule. 

For example, a custom event could be used to send you an email before a customer's subscription is about to expire.


## getAll

--8<----- "reference/resources/shared/base-signature.md"

Get a collection of custom events. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.customEvents.getAll();

// alternatively you can speciy one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.customEvents.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(customEvent => console.log(customEvent.fields.eventType));
```

**Parameters**


--8<----- "reference/resources/shared/base-get-all.md"


**Returns**

A collection of custom events.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a custom event by its `id`.


**Example**

```js
const customEvent = await api.customEvents.get({id: 'foobar-001'});
console.log(customEvent.fields.title);
```


**Returns**

A member exposing the custom event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a custom event derived from a system event with a specific schedule and chronology. The custom event will be queued for integration.

Optionally provide a specific `id` to use, or let Rebilly generate one.

!!! info "Custom Event Queue"
    When created, a new custom event will be queued for integration. This is a *temporary status* while Rebilly processes events. Until the queue is cleared the custom event will not be available for `get` or `getAll` requests.

Supported `eventType` values: 

- `subscription-ended`
- `subscription-trial-ended`
- `subscription-renewed`
- `payment-card-expired`
- `invoice-past-due`
- `invoice-issued`
- `invoice-voided`
- `invoice-paid`
- `invoice-abandoned`

!!! tip "API Spec"
    See the [API spec][3] for detailed information on the values and structure of the properties `chronology` and `scheduleInstruction`.

**Example**

```js
// first set the required properties for the new custom event
const data = {
    eventType: 'subscription-ended',
    title: 'My first custom event',
    description: 'More information',
    chronology: 'before',
    scheduleInstruction: {
        method: 'date-interval',
        duration: 1,
        unit: 'day'
    }
};

// the ID is optional
const firstKey = await api.customEvents.create({data});

// or you can provide one
const secondKey = await api.customEvents.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created custom event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a custom event using its `id`.

**Example**

```js
const request = await api.customEvents.delete({id: 'my-second-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## getRules
<div class="method"><code><strong>getRules</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a custom event's rule set by its `id`.


**Example**

```js
const ruleset = await api.customEvents.getRules({id: 'foobar-001'});
//the rules are contained within the ruleset
console.log(ruleset.fields.rules);
```


**Returns**

A member exposing the custom event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## createRules
<div class="method"><code><strong>createRules</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a set of rules for a custom event identified by its `id`.

!!! info "Rules Engine"
    The rules you can create follow a specific set of restrictions based on the event type and other factors. See the Rules Engine guide for detailed information.

**Example**

```js
// define at least one rule
const data = {
    rules: [
        {
            name: 'The One Rule',
            status: 'active', 
            final: true,
            criteria: {}, 
            actions: [
                {
                     name: 'blacklist',
                     status: 'active',
                     type: 'email',
                     ttl: 789
                },
                {
                     name: 'stop-subscriptions',
                     status: 'active'
                }
            ]
        }
       
    ]
};

const ruleset = await api.customEvents.createRules({data});
console.log(ruleset.fields.version);
```


**Returns**

A member exposing the custom event's newly created ruleset.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## updateRules
<div class="method"><code><strong>updateRules</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the ruleset for a custom event identified by its `id`. A custom event can only have one ruleset, but the rules within can be modified or deleted.

!!! info "Rules Engine"
    The rules you can modify follow a specific set of restrictions based on the event type and other factors. See the Rules Engine guide for detailed information.

**Example**

```js
// define the ruleset to override the current values within
// the custom event
const data = {
    rules: [
        {
            name: 'The One Rule',
            status: 'active', 
            final: true,
            criteria: {}, 
            actions: [
                {
                     name: 'blacklist',
                     status: 'active',
                     type: 'email',
                     ttl: 789
                },
                {
                     name: 'stop-subscriptions',
                     status: 'active'
                }
            ]
        }
       
    ]
};

const ruleset = await api.customEvents.updateRules({data});
// each time the event's ruleset is modified 
// the version number is incremented
console.log(ruleset.fields.version);
```


**Returns**

A member exposing the custom event's updated ruleset.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getRulesHistory
<div class="method"><code><strong>getRulesHistory</strong>({<span class="prop">id</span>, <span class="prop">limit</span><span class="optional">opt</span>, <span class="prop">offset</span><span class="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>

Retrieve the change history of the set of rules for the selected custom event. The history is updated each time you change the rules.

!!! info "Version History"
    This method does not return the rulesets for each version. It will only provide you with the time each version was created at. 

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| limit | number | Optional | The amount of members to return per request.<br>Defaults to `100`. |
| offset | number | Optional | Member index from which to start returning results. <br>Defaults to `0`. |


**Example**

```js
const ruleset = await api.customEvents.getRulesHistory({id: 'foobar-001'});
//the rules are contained within the ruleset
console.log(ruleset.fields.rules);
```


**Returns**

A collection exposing the custom event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events%2Fpost
[4]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events~1%7Bid%7D%2Fdelete
[5]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events~1%7Bid%7D~1rules%2Fget
[6]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events~1%7Bid%7D~1rules%2Fput
[7]: https://rebilly.github.io/RebillyAPI/#tag/Custom-Events%2Fpaths%2F~1custom-events~1%7Bid%7D~1rules~1history%2Fget
