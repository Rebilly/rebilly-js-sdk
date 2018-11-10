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

## getDisputes
<div class="method">
    <code>
        <strong>getDisputes</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">periodMonth</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a disputes report.

**Example**

```js
const params = {
    aggregationField: 'website',
    periodMonth: '2017-09',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getDisputes(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## getEventsTriggeredSummary
<div class="method">
    <code>
        <strong>getEventsTriggeredSummary</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve an events triggered summary report.

**Example**

```js
const params = {
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getEventsTriggeredSummary(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getRulesMatchedSummary
<div class="method">
    <code>
        <strong>getRulesMatchedSummary</strong>
        ({<span class="prop">eventType</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve an events triggered summary report.

**Example**

```js
const params = {
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getRulesMatchedSummary(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## getFutureRenewals
<div class="method">
    <code>
        <strong>getFutureRenewals</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a future renewals report.

**Example**

```js
const params = {
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getFutureRenewals(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## getRenewalSales
<div class="method">
    <code>
        <strong>getRenewalSales</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a renewal sales report.

**Example**

```js
const params = {
    periodStart: '2017-09',
    periodEnd: '2017-09',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getRenewalSales(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.

## getRetentionPercentage
<div class="method">
    <code>
        <strong>getRetentionPercentage</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">aggregationPeriod</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">includeSwitchedSubscriptions</span><span class="optional">opt</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a retention percentage report.

**Example**

```js
const params = {
    aggregationField: 'month',
    aggregationPeriod: 'month',
    periodStart: '2016-09-01T00:00:00Z',
    periodEnd: '2017-09-01T00:00:00Z',
    includeSwitchedSubscriptions: false,
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getRetentionPercentage(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## getRetentionValue
<div class="method">
    <code>
        <strong>getRetentionValue</strong>
        ({<span class="prop">aggregationField</span>,
        <span class="prop">aggregationPeriod</span>,
        <span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">includeRefunds</span><span class="optional">opt</span>,
        <span class="prop">includeDisputes</span><span class="optional">opt</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a retention value report.

**Example**

```js
const params = {
    aggregationField: 'month',
    aggregationPeriod: 'month',
    periodStart: '2016-09-01T00:00:00Z',
    periodEnd: '2017-09-01T00:00:00Z',
    includeRefunds: true,
    includeDisputes: false,
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getRetentionValue(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][11]{: target="_blank"} for all payload fields and response data.

## getRetryTransaction
<div class="method">
    <code>
        <strong>getRetryTransaction</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span>,
        <span class="prop">criteria</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a payment retry report.

**Example**

```js
const params = {
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getRetryTransaction(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][12]{: target="_blank"} for all payload fields and response data.

## getStatistics
<div class="method">
    <code>
        <strong>getStatistics</strong>
        () -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a statistics report. Returns overall values relative to total revenue, customer count, cancels, refunds and their respective growth.

**Example**

```js
const report = await api.reports.getStatistics();
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][13]{: target="_blank"} for all payload fields and response data.


## getSubscriptionCancellation
<div class="method">
    <code>
        <strong>getSubscriptionCancellation</strong>
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

Retrieve a subscription cancellation report.

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
const report = await api.reports.getSubscriptionCancellation(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][14]{: target="_blank"} for all payload fields and response data.

## getSubscriptionRenewalList
<div class="method">
    <code>
        <strong>getSubscriptionRenewalList</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span> 
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Retrieve a list of subscription renewals data.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getSubscriptionRenewalList(params);
```

**Returns**

A collection exposing the report items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][15]{: target="_blank"} for all payload fields and response data.

## getSubscriptionRenewal
<div class="method">
    <code>
        <strong>getSubscriptionRenewal</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a subscription renewal report.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getSubscriptionRenewal(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][16]{: target="_blank"} for all payload fields and response data.

## getTimeSeriesTransaction
<div class="method">
    <code>
        <strong>getTimeSeriesTransaction</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">type</span>,
        <span class="prop">subaggregate</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span>
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Retrieve a transactions report aggregated by time periods.

**Example**

```js
const params = {
    periodStart: '2017-08-29T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    type: 'count',
    subaggregate: 'gateway-account',
    limit: 20,
    offset: 0
};
const report = await api.reports.getTimeSeriesTransaction(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][17]{: target="_blank"} for all payload fields and response data.

## getTransactionsPlan
<div class="method">
    <code>
        <strong>getTransactionsPlan</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">tz</span><span class="optional">opt</span> 
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Retrieve transactions with their plan data.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getTransactionsPlan(params);
```

**Returns**

A collection exposing the report items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][18]{: target="_blank"} for all payload fields and response data.

## getTransactionsTimeDispute
<div class="method">
    <code>
        <strong>getTransactionsTimeDispute</strong>
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

Retrieve a dispute delays in days report, how much time between a transaction and a dispute.

**Example**

```js
const params = {
    aggregationField: 'website',
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getTransactionsTimeDispute(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][19]{: target="_blank"} for all payload fields and response data.

## getTransactions
<div class="method">
    <code>
        <strong>getTransactions</strong>
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

Retrieve a transactions report.

**Example**

```js
const params = {
    aggregationField: 'website',
    periodStart: '2017-09-22T00:00:00Z',
    periodEnd: '2017-09-29T23:59:59Z',
    limit: 20,
    offset: 0,
    tz: 0
};
const report = await api.reports.getTransactions(params);
```

**Returns**

A member exposing the report fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][20]{: target="_blank"} for all payload fields and response data.

## getPaymentsSuccessByDeclineReason
<div class="method">
    <code>
        <strong>getPaymentsSuccessByDeclineReason</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">limit</span><span class="optional">opt</span>,
        <span class="prop">offset</span><span class="optional">opt</span>,
        <span class="prop">filter</span><span class="optional">opt</span> 
        }) -> <span class="return">{Collection}</span>
    </code>
</div>

Retrieve a report of payments successful retries throughput.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    periodEnd: '2017-09-28T23:59:59Z',
    limit: 20,
    offset: 0
};
const report = await api.reports.getPaymentsSuccessByDeclineReason(params);
```

**Returns**

A collection exposing the report items.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][21]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[goto-collection]: ../../types/collection
[2]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1cumulative-subscriptions-plans/get
[3]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1cumulative-subscriptions/get
[4]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1dcc-markup/get
[5]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1disputes/get
[6]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1events-triggered/get
[7]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1events-triggered~1{eventType}~1rules/get
[8]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1future-renewals/get
[9]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1renewal-sales/get
[10]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1retention-percentage/get
[11]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1retention-value/get
[12]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1retry-transaction/get
[13]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1statistics/get
[14]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1subscription-cancellation/get
[15]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1subscription-renewal-list/get
[16]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1subscription-renewal/get
[17]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1time-series-transaction/get
[18]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1transactions-plan/get
[19]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1transactions-time-dispute/get
[20]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1reports~1transactions/get
[21]: https://rebilly.github.io/RebillyReportsAPI/#tag/Reports/paths/~1report~1payments-success-by-decline-reason/get
