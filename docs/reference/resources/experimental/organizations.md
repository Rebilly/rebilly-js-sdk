# Organizations <small>`:::js api.organizations`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

Create an organization

## create
<div class="method"><code><strong>getCustomerLifetimeSummaryMetrics</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a the summary of a customer's lifetime metrics by using its `id`.

**Example**

```js
const organization = await api.organizations.create({name: 'Organization', website: 'org.com', reportingCurrency: 'USD'});
console.log(organization);
```

**Returns**

A member exposing the created organization fields.

Type [`Member`][goto-member]

**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


[goto-rebillyapix]: ../../rebilly-experimental-api
[goto-member]: ../../types/member
[1]: https://rebilly.github.io/RebillyReportsAPI/#operation/PostOrganization
