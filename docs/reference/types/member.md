# Member <small>`Type`</small>

One of the three types returned by both the standard and experimental clients, the Member type represents an instance of a single resource entity in Rebilly (e.g. one customer, one transaction).

!!! warning "Frozen Object"
    Like the Collection, the Member type is immutable (frozen). Attempting to modify the Member directly will result in a `TypeError`. You can retrieve a plain JSON object for mutation using the `getJSON` method.

## Properties
Each member instance exposes the same properties.

| Name | Type | Description |
| ---- | ---- | ----------- |
| fields | Object | An object literal with key/value pairs for each field returned by the API in the response. |
| response | Object | The original response stripped down to the status code, status text and headers. Exposes three more properties: `{status, statusText, headers}`. |
| getJSON | Function | Returns a plain mutable JSON object exposing the `fields` of the current member instance. Discards the `response` property. |

**Example**

After retrieving a single customer entity we have access to all three properties:
```js
const customer = await api.customers.get({id: 'foobar-0001'});
/**
* Properties:
* customer.fields
* customer.response
* customer.getJSON
*/
```

We can access the field containing its `firstName`:
```js
console.log(customer.fields.primaryAddress.firstName);
```

And check the response's status code:
```js
console.log(customer.response.status);
```

Or get the plain JSON object and modify it:
```js
const mutableCustomer = customer.getJSON();
mutableCustomer.newProperty = true;

// the fields are still available
console.log(mutableCustomer.fields.primaryAddress.firstName);
```
