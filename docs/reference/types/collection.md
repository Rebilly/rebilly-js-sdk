# Collection <small>`Type`</small>

One of the three types returned by both the standard and experimental clients, the Collection type represents a list of Members (e.g. a list of customers, a list of transactions).

!!! warning "Frozen Object"
    Like the Member, the Collection type is immutable (frozen). Attempting to modify the Collection directly will result in a `TypeError`. You can retrieve a plain JSON object for mutation using the `getJSON` method.

## Properties
Each collection instance exposes the same properties.

| Name | Type | Description |
| ---- | ---- | ----------- |
| items | Array&lt;Member&gt; | An array of member entities. See the [Member type][goto-member] for details. |
| total | number | An integer defining the total amount of members that exist regardless of the requested limit. | 
| limit | number | An integer defining the count of values returned by the API request. Reflects the `limit` value passed to the function which returned the Collection. |
| offset | number | A zero-based index defining the starting position for the requested members. |
| response | Object | The original response stripped down to the status code, status text and headers. Exposes three more properties: `{status, statusText, headers}`. |
| getJSON | Function | Returns a plain mutable JSON object exposing the `items` of the current collection instance. Discards all other property. |
| config | Object | An object literal with the original request query string parameters. |

**Example**

After retrieving a list of customers we have access to all properties:
```js
const customers = await api.customers.getAll({limit: 50, offset: 25});
/**
* Properties:
* customers.items
* customers.total
* customers.limit
* customers.offset
* customers.response
* customers.getJSON
*/
```

We can see the limit is equal to the value requested:
```js
console.log(customers.limit); // 50
//the item count is also the same
console.log(customers.items.length); // 50
```

And check the response's status code:
```js
console.log(customers.response.status);
```

We can loop through the customers and check their ID:
```js
//each `customer` is a Member instance with fields
customers.items.forEach(customer => console.log(customer.fields.id))
```

Or get the plain JSON object and modify it:
```js
const mutableList = customers.getJSON();
mutableList.newProperty = true;

// only the `items` property are still available
console.log(mutableList.items.length); // 50
```

[goto-member]: ./member
