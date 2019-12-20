# RebillyErrors

The JS SDK returns custom error types based on the HTTP code when available or an internal condition like timeouts and manual cancellation.

## Importing
You can import the error object into your project to access the different types of errors returned by the library.
```js
import {RebillyErrors} from 'rebilly-js-sdk';
```

## Types

The `RebillyErrors` object exposes the following types:

| Name | Status Code | Description |
| ---- | ----------- | ----------- |
| RebillyRequestError | `-` | Generic error when no response is available. |
| RebillyTimeoutError | `-` | The request timed out. |
| RebillyCanceledError | `-` | The request was manually canceled before being completed. |
| RebillyForbiddenError | `401` | Indicates an invalid API key or expired session token. |
| RebillyNotFoundError | `404` | Requested resource was not found. |
| RebillyMethodNotAllowedError | `405` | Request method not allowed on this resource. |
| RebillyConflictError | `409` | Requested operation triggered a conflict. |
| RebillyValidationError | `422` | The request payload triggered a validation error (see error `details`). |

!!! tip
    When catching an error from any of the Rebilly API clients, check the `error.name` to determine the type.

## Examples

### Throwing `RebillyErrors`

Using the imported errors you can throw them on demand in your integration.
```js
import {RebillyErrors} from 'rebilly-js-sdk';

// you can throw the errors internally
if (response.fields.id === null) {
    const error = {message: 'Missing ID'};
    throw new RebillyErrors.RebillyRequestError({error});
}
```

!!! note 
    You can pass an error instance directly to the constructor of any type within `RebillyErrors`.
    ```js
    try {
        await api.customers.getAll();
    } catch (error) {
        // using the error that was caught as the parameters
        throw new RebillyErrors.RebillyRequestError({error});
    }
    ``` 

### Verifying the error type

When catching library errors you can use the imported errors to compare their types and handle them differently.
```js
import RebillyAPI, {RebillyErrors} from 'rebilly-js-sdk';

const api = RebillyAPI({apiKey:'private-key'});

try {
    const customers = await api.customers.getAll();
} catch (error) {
    if (error.name === RebillyErrors.RebillyRequestError.name) {
        // handle a request error differently
        // from other error types
    }
    else {
        // handle any other error type
    }
}
```

!!! note
    Alternatively you can compare the `:::js error.name` to the string representation of the error type.
    ```js
    if (error.name === 'RebillyRequestError') {
        // handle error
    }
    ```
