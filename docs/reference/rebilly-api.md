# RebillyAPI
Standard Rebilly API client that will be backward-compatible within each major release of the library.

**API Spec**

See the [Rebilly API spec](https://rebilly.github.io/RebillyAPI/) for full details on the different API calls exposed within this client.

## Configuration
All client API configuration parameters are optional. However a secret API key can only be provided at instantiation.

!!! info "API Environments"
    By default an instance is always generated in the **Live** environment. The **Sandbox** mode is only recommended while developing your integration. 

##### Parameters
```js
const api = RebillyAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
```

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `apiKey` | string | `null` | Your secret API key. To be used only for Node integrations. See [Developer > API Keys](https://app.rebilly.com/api-keys). |
| `sandbox` | boolean | `false` | Flag used to enable sandbox mode for the instance. This allows you to run requests without processing real transactions on your account. |
| `timeout` | number | `6000` | Define the timeout in milliseconds for API requests. |
| `version` | string | `v2.1` | Define the version of the API to use. Defaults to v2.1. |

## Methods
The API client exposes different configuration and utility methods you can use to customize your instance.

### `addRequestInterceptor`
**Parameters**

- `api.addRequestInterceptor(configuration = {thenDelegate, catchDelegate})`

| Property | Type | Description |
| - | - | - |
| thenDelegate | Function | blah |
| catchDelegate | Function | blah |

### removeRequestInterceptor

### addResponseInterceptor

### removeResponseInterceptor

### setTimeout

### setProxyAgent

### setSessionToken

### setApiConsumer

### setEndpoints

### getCancellationToken
