# Histograms <small>`:::js api.histograms`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

Histograms are for a particular kinds of reports with cohorts and periods. 

## getTransactionHistogramReport
<div class="method">
    <code>
        <strong>getTransactionHistogramReport</strong>
        ({<span class="prop">periodStart</span>,
        <span class="prop">periodEnd</span>,
        <span class="prop">aggregationField</span>,
        <span class="prop">aggregationPeriod</span>,
        <span class="prop">metric</span> 
        }) -> <span class="return">{Member}</span>
    </code>
</div>

Get transaction report histogram data. The returned values can be used to render a histogram.

**Example**

```js
const params = {
    periodStart: '2017-09-21T00:00:00Z',
    // seven day period
    periodEnd: '2017-09-28T23:59:59Z',
    aggregationField: 'website',
    aggregationPeriod: 'day',
    metric: 'approval'
};
const report = await api.histograms.getTransactionHistogramReport(params);
console.log(report.fields.data);
```

**Returns**

A member exposing a list of date based values.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[1]: https://rebilly.github.io/RebillyReportsAPI/#tag/Histograms/paths/~1histograms~1transactions/get
