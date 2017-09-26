# Events <small>`:::js api.events`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage rules attached to system events. When an event happens, it triggers the evaluation of conditions (that you set up), in order from top to bottom. If the condition is met, the corresponding actions are executed. The conditions continue to be checked until either all of the conditions have been executed, or a special "stop" action is executed.

The actions vary depending on the event triggered. From automatic gateway account selection to sending emails the Rules Engine will help you attain your business objectives through automation.

> See Rules Engine.


## getAll

<div class="method"><code><strong>getAllScheduled</strong>({<span class="prop">limit</span><span class="optional">opt</span>, <span class="prop">offset</span><span class="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>

Get a collection of events. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.events.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100}; 
const secondCollection = await api.events.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(event => console.log(event.fields.eventType));
```

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Returns**

A collection of events.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">eventType</span>}) -> <span class="return">{Member}</span></code></div>

Get an event's details by its `eventType`. This will not return the rules but will include the rule count.

Allowed `eventType` values: 

- `dispute-created`
- `gateway-account-request`
- `transaction-processed`
- `subscription-canceled`
- `subscription-created`
- `subscription-renewed`
- `payment-card-expired`
- `payment-declined`
- `transaction-process-requested`
- `risk-score-changed`


**Example**

```js
const eventDetails = await api.events.get({eventType: 'gateway-account-created'});
console.log(eventDetails.fields.rulesCount);
```


**Returns**

A member exposing the event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## getRules
<div class="method"><code><strong>getRules</strong>({<span class="prop">eventType</span>}) -> <span class="return">{Member}</span></code></div>

Get the ruleset for a specific `eventType`.

Allowed `eventType` values: 

- `dispute-created`
- `gateway-account-request`
- `transaction-processed`
- `subscription-canceled`
- `subscription-created`
- `subscription-renewed`
- `payment-card-expired`
- `payment-declined`
- `transaction-process-requested`
- `risk-score-changed`


**Example**

```js
const event = await api.events.getRules({eventType: 'transaction-processed'});
console.log(event.fields.rules);
```


**Returns**

A member exposing the event fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## createRules
<div class="method"><code><strong>createRules</strong>({<span class="prop">eventType</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a set of rules for an event identified by its `eventType`.

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

const ruleset = await api.events.createRules({eventType: 'risk-score-changed', data});
console.log(ruleset.fields.version);
```


**Returns**

A member exposing the event's newly created ruleset.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## updateRules
<div class="method"><code><strong>updateRules</strong>({<span class="prop">eventType</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the ruleset for an event identified by its `eventType`. An event can only have one ruleset, but the rules within can be modified or deleted.

!!! info "Rules Engine"
    The rules you can modify follow a specific set of restrictions based on the event type and other factors. See the Rules Engine guide for detailed information.

**Example**

```js
// define the ruleset to override the current values within
// the event
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

const ruleset = await api.events.updateRules({eventType: 'risk-score-changed', data});
// each time the event's ruleset is modified 
// the version number is incremented
console.log(ruleset.fields.version);
```


**Returns**

A member exposing the event's updated ruleset.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## getRulesHistory
<div class="method"><code><strong>getRulesHistory</strong>({<span class="prop">eventType</span>, <span class="prop">limit</span><span class="optional">opt</span>, <span class="prop">offset</span><span class="optional">opt</span>}) -> <span class="return">{Collection}</span></code></div>

Retrieve the change history of the set of rules for the selected event using its `eventType`. The history is updated each time you change the rules.

!!! info "Version History"
    This method does not return the rulesets for each version. It will only provide you with the time each version was created at. 

**Parameters**


--8<----- "reference/resources/shared/paged-get-all.md"


**Example**

```js
// get the latest 20 versions for this event ID
const history = await api.events.getRulesVersionNumber({eventType: 'risk-score-changed', limit: 20});
// each item exposes the version and `createdTime`
history.items.forEach(edit => console.log(edit.fields.version));
```


**Returns**

A collection exposing the event history.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## getRulesVersionNumber
<div class="method"><code><strong>getRulesVersionNumber</strong>({<span class="prop">eventType</span>, <span class="prop">version</span>}) -> <span class="return">{Member}</span></code></div>

Retrieve the version details of the rules for the selected event using its `eventType`.

!!! info "Version History"
    This method does not return the rulesets for the requested version. It will only provide you with the time the version was created at. If you need to view the ruleset attached to this version use [customEvents.getRulesVersionDetail][goto-versiondetail].


**Example**

```js
// get version #2 details for this event ID
const history = await api.events.getRulesVersionNumber({eventType: 'risk-score-changed', version: 2});
// the history exposes the version number and its `createdTime`
console.log(history.fields.createdTime);
```


**Returns**

A member exposing the version details.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getRulesVersionDetail
<div class="method"><code><strong>getRulesVersionDetail</strong>({<span class="prop">eventType</span>, <span class="prop">version</span>}) -> <span class="return">{Member}</span></code></div>

Retrieve the ruleset of a specific `version` of the rules for the selected event using its `eventType`.

!!! tip "Ruleset Version"
    Use this method to retrieve the ruleset of an event at a specific version number.

**Example**

```js
// get version #2 for this event ID
const version = await api.events.getRulesVersionDetail({eventType: 'risk-score-changed', version: 2});
// the version exposes the ruleset 
console.log(version.fields.rules);
```

**Returns**

A member exposing the version fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-versiondetail]: #getrulesversiondetail
[goto-getscheduled]: #getscheduled
[1]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D~1rules%2Fget
[4]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D~1rules%2Fput
[5]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D~1rules~1history%2Fget
[6]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D~1rules~1history~1%7Bversion%7D%2Fget
[7]: https://rebilly.github.io/RebillyAPI/#tag/Rules%2Fpaths%2F~1events~1%7BeventType%7D~1rules~1versions~1%7Bversion%7D%2Fget

