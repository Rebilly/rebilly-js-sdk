# Customers <small>`:::js api.customers`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

Access customer lifetime metrics. 

## getCustomerLifetimeSummaryMetrics
<div class="method"><code><strong>getCustomerLifetimeSummaryMetrics</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a the summary of a customer's lifetime metrics by using its `id`.

**Example**

```js
const metrics = await api.customers.getCustomerLifetimeSummaryMetrics({id: 'foobar-0001'});
console.log(metrics.fields.revenueAmount);
```

**Returns**

A member exposing the customer's lifetime metrics.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[1]: https://rebilly.github.io/RebillyReportsAPI/#tag/Customers/paths/~1customers~1{customerId}~1summary-metrics/get
