# Status <small>`:::js api.status`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Get the current status of the Rebilly API. This feature can be used to confirm whether the API is functioning normally or not.




## get
<div class="method"><code><strong>get</strong>() -> <span class="return">{Member}</span></code></div>

Get the API's status.

!!! tip 
    You can poll this endpoint on interval to check the status of the API.


**Example**

```js
const status = await api.status.get({id: 'foobar-001'});
console.log(status.fields.status);
```


**Returns**

A member exposing the status fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.



[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Status

