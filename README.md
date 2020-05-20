# Rebilly JS SDK library 
The Rebilly JS SDK library allows you to consume the Rebilly API using either Node or the browser.

[![npm](https://img.shields.io/npm/v/rebilly-js-sdk.svg)](https://www.npmjs.com/package/rebilly-js-sdk)
[![Build Status](https://travis-ci.org/Rebilly/rebilly-js-sdk.svg?branch=master)](https://travis-ci.org/Rebilly/rebilly-js-sdk)
[![Try rebilly-js-sdk on RunKit](https://badge.runkitcdn.com/rebilly-js-sdk.svg)](https://npm.runkit.com/rebilly-js-sdk)

### PCI Compliance note
If you need to handle raw payment card data, you should use [Rebilly FramePay](https://rebilly.github.io/framepay-docs/) to generate tokens for your server-side logic.

### Rebilly API definition
This library is a semantic representation of the [Rebilly API definition](https://api-reference.rebilly.com/).

The definition includes SDK examples for each API operation, listed under *Request samples*.

## Getting started

### Installation
Install the latest version of the SDK with [Yarn](https://yarnpkg.com/en/):
```
yarn add rebilly-js-sdk
```

Or using NPM:
```
npm install rebilly-js-sdk --save
```

### Finding your API key
To create an instance, you need to provide your secret API key that is available in Rebilly in the [Automations > API Keys](https://app.rebilly.com/api-keys) menu.

### Finding your organization ID (optional)
If you want to perform a request to a specific organization (which you have access to), you need to provide an organization identifier. 
You can see all organization memberships by making a `GET` request to [the profile endpoint](https://user-api-docs.rebilly.com/tag/Profile#operation/GetProfile)

In the below sample response, your organization ID is `memberships[0].organization.id`
```json
{
    "id": "11111111-1111-1111-1111-111111111111",
    "firstName": "User",
    "lastName": "Name",
    "email": "user@domain.com",
    "memberships": [
        {
            "organization": {
                "id": "11111111-1111-1111-1111-111111111111",
                "name": "Organization Name",
                "createdTime": "2019-09-04T03:29:58+00:00"
            },
            "user": {
                "id": "11111111-1111-1111-1111-111111111111",
                "name": "User Name",
                "email": "user@domain.com"
            }
        }
    ]
}
```

## Usage
Rebilly offers several APIs, each with a specific purpose. 
In order to perform operations on an API you must instantiate the corresponding API client, as detailed below.

Performing API operations is identical across all API clients. 
Every resource method returns a chainable Promise.

### RebillyAPI
This is the main API client. Often you will only need this client.
It includes resources for the main [Rebilly API](https://api-reference.rebilly.com/) and the [Rebilly User API](https://user-api-docs.rebilly.com/).

#### Typical usage
Import the `RebillyAPI` method and initialize it with your API key (and optionally organizationId)
The full list of configuration options can be found [here](#configuration-options)

ES7 example:
```js
import RebillyAPI from 'rebilly-js-sdk';

const api = RebillyAPI({apiKey: 'secret-api-key', organizationId: '11111111-1111-1111-1111-111111111111'});

try {
    const transactions = await api.transactions.getAll();
    transactions.items.forEach(transaction => {
        //transaction.fields
    });
} catch (err) {
    console.error(err.name);
}
```

ES5 example:
```js
var RebillyAPI = require('rebilly-js-sdk').default;
var api = RebillyAPI({apiKey: 'secret-api-key', organizationId: '11111111-1111-1111-1111-111111111111'});

api.transactions.getAll()
    .then(function(transactions) {
        transactions.items.forEach(function(transaction) {
            //transaction.fields
        });
    })
    .catch(function(err) {
        console.error(err.name);
    });
```

#### Usage with JWT
You can also authenticate the API client with Rebilly using a JWT. 
To do this, initialize the API client without an API key. 
You can then get a JWT by providing your account email and password to [the `signin` endpoint](https://user-api-docs.rebilly.com/tag/JWT-Session#operation/PostSigninRequest).

Example:
```js
// instantiate an unauthorized API client
const api = RebillyAPI();

// build the sign in payload
const payload = {data: {email, password, expiredTime}};

// the 'signIn' method does not require API authorization to complete
const response = await api.account.signIn(payload);

// set the session token for future API requests that require
// an authorization using the response fields
api.setSessionToken(response.fields.token);

// this request will be authorized using the token
const customers = await api.customers.getAll();
```

### RebillyExperimentalAPI
This client includes resources for the experimental [Rebilly Reports API](https://reports-api-docs.rebilly.com/).
Unlike the main API, it can introduce backward incompatible changes to the API specification.
It is used mainly for reporting and requests with heavy computational loads like dashboard statistics.

#### Typical usage
Import the `RebillyExperimentalAPI` method and initialize it with your API key (and optionally organizationId)
The full list of configuration options can be found [here](#configuration-options)

```js
import {RebillyExperimentalAPI} from 'rebilly-js-sdk';

const experimentalAPI = RebillyExperimentalAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
```

#### Usage with JWT
This client can also be used with a JWT. 
Just like the main client, initialize the API client without an API key. 
However, in order to get a JWT you will need to use the sign in method from the main API client.

Example:
```js
// instantiate main API client
const api = RebillyAPI();

// instantiate experimental API client
const experimentalAPI = RebillyExperimentalAPI();

// build the sign in payload
const payload = {data: {email, password, expiredTime}};

// use the main client's signIn method to get a JWT
const response = await api.account.signIn(payload);

// set the session token for the experimental client
experimentalApi.setSessionToken(response.fields.token);
```

## Reference

### Error handling
The SDK returns several different types of errors based on the HTTP response, ranging from 401 to 422. They are exposed and can be imported:
```js
import {RebillyErrors} from 'rebilly-js-sdk';
```

#### Error types
| Type | Status Code | Description |
|---|---|---|
| `RebillyRequestError` | `-` | Generic error when no response is available. |
| `RebillyTimeoutError` | `-` | The request timed out. |
| `RebillyCanceledError` | `-` | The request was canceled before being completed. |
| `RebillyForbiddenError` | `401` | Indicates an invalid API key or expired session token. |
| `RebillyNotFoundError` | `404` | Requested resource was not found. |
| `RebillyMethodNotAllowedError` | `405` | Request method not allowed on this resource. |
| `RebillyConflictError` | `409` | Requested operation triggered a conflict. |
| `RebillyValidationError` | `422` | The request payload triggered a validation error (see error details). |

### Configuration
The library authentication can be provided by the `apiKey` or a session token (JWT). All instantiation parameters are *optional*.

#### Configuration options
| Option | Type | Description |
|---|---|---|
| `apiKey` | `string` | Your secret API key. To be used only for server-side integration. See [Developer > API Keys](https://app.rebilly.com/api-keys). |
| `sandbox` | `boolean` | Flag used to enable sandbox mode for the instance. This allows you to run requests without processing real transactions on your account. Defaults to `false`. |
| `timeout` | `integer` | Define the timeout in milliseconds for API requests. Defaults to `6000`.|
| `version` | `string` | Define the version of the API to use. Defaults to `v2.1`. This configuration does not apply to `RebillyExperimentalAPI`. |
| `organizationId` | `string` | Your organization identifier in scope of which need to perform request (if not specified, the default organization will be used). |
| `urls` | `object` | Define the root urls for `live` and `sandbox` mode. Object must have a key for each mode that have strings for values. Defaults to `{live: 'https://api.rebilly.com', sandbox: 'https://api-sandbox.rebilly.com'}`|

### Collections, members, and files
All resource calls except CSV or PDF downloads return either Members or Collections. Members are returned by all methods other than `getAll`, which returns a Collection. A collection contains a list of members. Both types are **immutable** (frozen) objects that can return a JSON representation of their member properties.

Example:
```js
const collection = await api.transactions.getAll();
collection.items.forEach(member => {
    //member.fields
});
```

#### Collection
A collection is a list of member entities, e.g. a list of customers or a list of transactions. Each collection exposes standard properties:

| Property | Description |
|---|---|
| `items<Member>` | An array of member entities. Each one represents a single resource entity. |
| `limit` | An integer defining the amount of members requested at once. |
| `offset` | A zero based integer defining the starting position for the requested members. |
| `total` | An integer defining the total amount of members that exist regardless of the requested limit. |
| `response` | The original response stripped down to the status code, status text and headers. `{status, statusText, headers}` |
| `getJSON()` | Returns a JSON representation of the items that can be mutated. |

#### Member
A member is a single resource entity, e.g. a customer or a transaction. Each member exposes standard properties:

| Property | Description |
|---|---|
| `fields` | A list of fields within the member entity. For example the customer's `ID`. |
| `response` | The original response stripped down to the status code, status text and headers. `{status, statusText, headers}` |
| `getJSON()` | Returns a JSON representation of the member fields that can be mutated. |



## Development

Build development `dist` folder without sourcemap
```
npm run build:dev
```
Build release `dist` folder with sourcemap (release)
```
npm run build:prod
```
Run all unit tests
```
npm run unit
```
Watch unit tests and re-run on change
```
npm run unit:watch
```
Generate coverage report
```
npm run coverage
```
