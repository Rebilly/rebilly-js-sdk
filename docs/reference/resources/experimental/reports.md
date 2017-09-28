# Reports <small>`:::js api.reports`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

Retrieve summary information about your customers, subscriptions, transactions, and more.

## getApiLogSummary
<div class="method">
    <code>
        <strong>getApiLogSummary</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Get transaction report histogram data. The returned values can be used to render a histogram.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getApiLogSummary(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]


<!--
**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.
-->

## getCumulativeSubscriptionsPlans
<div class="method">
    <code>
        <strong>getCumulativeSubscriptionsPlans</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span> 
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Retrieve a cumulative subscriptions report aggregated by day and plans.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getApiLogSummary(params);
```

**Returns**

A collection exposing the report items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## getCumulativeSubscriptions
<div class="method">
    <code>
        <strong>getCumulativeSubscriptions</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a cumulative subscriptions report.

**Example**

```js
const params = {
    aggregationField: 'day',
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getCumulativeSubscriptions(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## getDccMarkup
<div class="method">
    <code>
        <strong>getDccMarkup</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a DCC markup report.

**Example**

```js
const params = {
    aggregationField: 'day',
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    filter: `gatewayAccounts:f9b4fa10-df1d-48a3-85b3-ff6bd7ce0ed2; \
            transactionResult:approved,canceled,declined,unknown`,
    tz: 0
};
const report = await api.reports.getDccMarkup(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[goto-collection]: ../../types/collection
[2]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports%2Fpaths%2F~1reports~1cumulative-subscriptions-plans%2Fget
[3]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports%2Fpaths%2F~1reports~1cumulative-subscriptions%2Fget
[4]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports%2Fpaths%2F~1reports~1dcc-markup%2Fget
