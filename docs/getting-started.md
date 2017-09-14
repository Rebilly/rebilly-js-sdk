# Getting Started
The library runs in Node or browsers without any configuration requirements.

## Installation

#### Using Yarn
We recommend [Yarn](https://yarnpkg.com/en/) for package management.
```
yarn add rebilly-js-sdk
```

#### Using NPM
```
npm install rebilly-js-sdk --save
```

## Usage 

### Importing form the package
Two different API clients are exposed within the library, the standard client (`RebillyAPI`), and the experimental client (`RebillyExperimentalAPI`). The default package export is `RebillyAPI`.
#### ES6 or newer
``` js
import RebillyAPI from 'rebilly-js-sdk';
```

#### ES5
The main API client is exposed as `default` in CommonJS.
```js
var RebillyAPI = require('rebilly-js-sdk').default;
```

### Other Modules
The library exposes two additional modules: the experimental API client and the error types returned by both clients.
```js
import {RebillyExperimentalAPI, RebillyErrors} from 'rebilly-js-sdk';
```

| Module | Description |
| ------ | ----------- |
| RebillyExperimentalAPI | Secondary API client. Reserved for experimental endpoints like reports and statistics. This client can break backward-compatibility. Based on the [Experimental Reports API spec.](https://rebilly.github.io/RebillyReportsAPI/) |
| RebillyErrors | Exposes the different errors returned by both API clients. |

### Creating an instance
The API clients need either a private API key for backend use, or to be provided with a JWT session token when used in a browser.

#### Node
Use a secret API key found in Rebilly under [Developer > API Keys](https://app.rebilly.com/api-keys).
```js
const api = RebillyAPI({apiKey: 'secret-api-key'});
```

#### Browsers
```js
const api = RebillyAPI();

//fetch a JWT session token via a user login using the API
//then set it as the session token for the current instance
api.setSessionToken(token);
```

### Configuration
All client API configuration parameters are optional. However an secret API key can only be provided at the instantiation.

!!! info "API Environments"
    By default an instance is always generated in the **Live** environment. The **Sandbox** mode is only recommended while developing your integration. 

#### Parameters
```js
const api = RebillyAPI({apiKey: 'secret-api-key', sandbox: true, timeout: 10000});
```

| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| `apiKey` | string | `null` | Your secret API key. To be used only for Node integration. See Developer > API Keys. |
| `sandbox` | boolean | `false` | Flag used to enable sandbox mode for the instance. This allows you to run requests without processing real transactions on your account. |
| `timeout` | number | `6000` | Define the timeout in milliseconds for API requests. |
| `version` | string | `v2.1` | Define the version of the API to use. Defaults to v2.1.<br><em>This configuration option does not apply to RebillyExperimentalAPI.</em> |

### Example
foobar test
