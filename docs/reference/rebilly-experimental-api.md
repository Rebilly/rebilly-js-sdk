# RebillyExperimentalAPI

Experimental Rebilly API client that can break backward-compatibility. This client contains compute-heavy features like reports and statistics and is bound to change over time.

**API Spec**

See the [Rebilly Reports API spec ](https://rebilly.github.io/RebillyReportsAPI/)  for full details on the different API calls exposed within this client.

## Configuration
All client API configuration parameters are optional. However a secret API key can only be provided at instantiation.

!!! info "API Environments"
    By default an instance is always generated in the **Live** environment. The **Sandbox** mode is only recommended while developing your integration. 

##### Parameters
```js
const api = RebillyExperimentalAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
```

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `apiKey` | string | `null` | Your secret API key. To be used only for Node integrations. See [Developer > API Keys](https://app.rebilly.com/api-keys). |
| `sandbox` | boolean | `false` | Flag used to enable sandbox mode for the instance. This allows you to run requests without processing real transactions on your account. |
| `timeout` | number | `6000` | Define the timeout in milliseconds for API requests. |

!!! warning "Version Agnostic"
    The Experimental API client is version-less and does not support it as part of its configuration hash.

## Public Methods
The API client exposes different configuration and utility methods you can use to customize your instance.



### addRequestInterceptor
<div class="method"><code><strong>addRequestInterceptor</strong>({<span class="prop">thenDelegate</span>, <span class="prop">catchDelegate</span><span class="optional" title="optional">opt</span>})</code></div>

Adds a request interceptor to the current API instance. Wrapped around Axios' request interceptor.

**Example**

```js
api.addRequestInterceptor({thenDelegate: (config) => {
    config.params['extra-query-param'] = 'foobar';
    return config;
}});
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| thenDelegate | Function | - | Defines the delegate logic to run when the request is completed. Receives the request configuration as a parameter. Must return the configuration for the request chain to continue. <br><br> `:::js thenDelegate(config) => {Object}` <br><br><strong>Parameters</strong> <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>config</td><td>Object</td><td>The request configuration. Must be returned after being modified.</td></tr></tbody></table> |
| catchDelegate | Function | Optional | Defines a callback to run before the catch block of the request is executed for this interceptor. <br><br> `:::js catchDelegate(error) => Promise` <br><br><strong>Parameters</strong> <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>error</td><td>Object</td><td>The request error. Should be resolved as a Promise. This method can be used to prevent certain errors from being caught.</td></tr></tbody></table> |

### removeRequestInterceptor
<div class="method"><code><strong>removeRequestInterceptor</strong>(<span class="prop">interceptor</span>)</code></div>

Removes a specific request interceptor from the current API instance.

**Example**

```js
// set reference to interceptor
const interceptor = api.addRequestInterceptor({thenDelegate: (config) => {
    config.params['extra-query-param'] = 'foobar';
    return config;
}});
// remove via reference
api.removeRequestInterceptor(interceptor);
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| interceptor | Function | - | The reference to the previously added request interceptor that should be removed from the current instance. |

### addResponseInterceptor
<div class="method"><code><strong>addResponseInterceptor</strong>({<span class="prop">thenDelegate</span>, <span class="prop">catchDelegate</span><span class="optional" title="optional">opt</span>})</code></div>

Adds a response interceptor to the current API instance. Wrapped around Axios' response interceptor.

**Example**

```js
api.addResponseInterceptor({thenDelegate: (response) => {
    // modify reponse data before having it processed by the API client
    response.data.shift(); //removed first element
    return response;
}});
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| thenDelegate | Function | - | Defines the delegate logic to run when the response is completed. Receives the API response as a parameter. Must return the response chain to continue. <br><br> `:::js thenDelegate(response) => {Object}` <br><br><strong>Parameters</strong> <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>response</td><td>Object</td><td>The API response. Must be returned after being modified.</td></tr></tbody></table> |
| catchDelegate | Function | Optional | Defines a callback to run before the catch block of the response is executed for this interceptor. <br><br> `:::js catchDelegate(error) => Promise` <br><br><strong>Parameters</strong> <table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>error</td><td>Object</td><td>The response error. Should be resolved as a Promise. This method can be used to prevent certain errors from being caught.</td></tr></tbody></table> |


### removeResponseInterceptor
<div class="method"><code><strong>removeResponseInterceptor</strong>(<span class="prop">interceptor</span>)</code></div>

Removes a specific response interceptor from the current API instance.

**Example**

```js
// set reference to interceptor
const interceptor = api.addResponseInterceptor({thenDelegate: (response) => {
    response.data.shift();
    return config;
}});
// remove via reference
api.removeResponseInterceptor(interceptor);
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| interceptor | Function | - | The reference to the previously added response interceptor that should be removed from the current instance. |

### getCancellationToken
<div class="method"><code><strong>getCancellationToken</strong>() -> <span class="return">{CancelToken}</span></code></div>

Returns a cancellation token for the active instance. Based on the withdrawn cancelable promises proposal. Can be used to cancel any ongoing request. This feature is useful for stopping requests that are no longer required to complete.

==Since 0.12.0==

**Example**

```js
// once created the token will be used for each subsequent API request
const token = api.getCancellationToken();
// when cancelling the request, a message can be provided
token.cancel('Cancelled request manually');

// any ongoing request will be canceled by the same token
try {
    // trigger a request
    await api.customers.get({id: 'cancellable-customer-id'});
} catch(error) {
    // you can detect if a request was canceled by checking 
    // the error.name
    if (error.name === 'RebillyCanceledError') {
        // the message provided to 'token.cancel' will be reflected here
        console.log(error.message) // returns 'Cancelled request manually'     
    } else {
       // normal error handling 
    }
}
```

**Returns**

The global cancellation token. An instance of `axios.CancelToken`. Exposes method `cancel(message)`.

Type `CancelToken`

### setTimeout
<div class="method"><code><strong>setTimeout</strong>(<span class="prop">timeout</span>)</code></div>

Define the default timeout delay in milliseconds for the current API instance.

**Example**

```js
api.setTimeout(10000);
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| timeout | number | - | Timeout delay in milliseconds. |

### setSessionToken
<div class="method"><code><strong>setSessionToken</strong>(<span class="prop">token</span>)</code></div>

Use a JWT session token to identify the API requests. This removes the private API key header if present. This method of authentication should be applied instead of the *private API key* when the client is used in a browser.

To retrieve a session token, first initialize the API client without an API key and use the sign in resource to login the user to Rebilly. The token will be available in the response fields.

**Example**

```js
// instantiate an unauthorized API client
const api = RebillyExperimentalAPI();

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

### setEndpoints
<div class="method"><code><strong>setEndpoints</strong>({<span class="prop">live</span><span class="optional" title="optional">opt</span>, <span class="prop">sandbox</span><span class="optional" title="optional">opt</span>})</code></div>

Update the endpoints URL for live, sandbox or both mode in the current API instance's active URL. This is useful for testing a different version of the API.

!!! warning "Securing Communications"
    When modifying the API endpoints always use **HTTPS** for a production environment. 

**Example**

```js
api.setEndpoints({live: 'https://api.rebilly.com/experimental/version/url'});
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| live | string | optional | URL for the live API mode. |
| sandbox | string | optional | URL for the sandbox API mode. |

### setProxyAgent
<div class="method"><code><strong>setProxyAgent</strong>({<span class="prop">host</span>, <span class="prop">port</span>, <span class="prop">auth</span>})</code></div>

Define a proxy for the current API instance. Authorized using **HTTP Basic** credentials. 

**Example**

```js
const config = {
    host: '127.0.0.1',
    port: 9000,
    auth: {
        //HTTP Basic
        username: 'foobar',
        password: 'fuubar'
    }
};
//all subsequent API requests will pass through the proxy
api.setProxyAgent(config);
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| host | string | - | Hostname of the proxy server. |
| port | number | - | Port of the proxy server. |
| auth | Object | - | Basic credentials to connect to the proxy server. <br><br> **Properties**<table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>username</td><td>string</td><td>The username required for basic authentication.</td></tr><tr><td>password</td><td>string</td><td>The password required for basic authentication.</td></tr></tbody></table> |

### setApiConsumer
<div class="method"><code><strong>setApiConsumer</strong>(<span class="prop">consumerId</span>)</code></div>

Define a consumer identification **HTTP header** string for use with Rebilly. This allows you to identify your app in the API logs.

!!! tip
    Defining an API consumer is useful for filtering your integration API logs from those who use Rebilly's user interface.

**Example**

```js
api.setApiConsumer('Acme Inc 1.0.4');
``` 

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| consumerId | string | optional | A string used to identify your application in the API logs. |
