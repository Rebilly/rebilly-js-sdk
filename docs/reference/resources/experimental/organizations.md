# Organizations <small>`:::js api.organizations`</small>

> Member of [`RebillyExperimentalAPI`][goto-rebillyapix]

==Experimental== 

## create
<div class="method"><code><strong>create</strong>({<span class="prop">name</span>,<span class="prop">website</span>,<span class="prop">reportingCurrency</span>}) -> <span class="return">{Member}</span></code></div>

Create an organization.

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
