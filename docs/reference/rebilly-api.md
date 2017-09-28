# RebillyAPI
Standard Rebilly API client that will be backward-compatible within each major release of the library.

**API Spec**

See the [Rebilly API spec](https://rebilly.github.io/RebillyAPI/) for full details on the different API calls exposed within this client.

## Importing
The `RebillyAPI` factory is the default export of the `rebilly-js-sdk` package.

```js
import RebillyAPI from 'rebilly-js-sdk';
```

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

> See [RebillyErrors][goto-errors]

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

> See [api.account.signIn][goto-account-signin]

**Example**

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

## Resources
Resources are accessible at the root of the API client and represent a domain for specific API endpoints. Methods within each domain are semantically named and expect a single argument as an object literal with different keys.

!!! tip "Promises"
    All resource methods return chainable Promises.

**Example**
```js
//get the latest 100 customers starting from the 100th one
api.customers.getAll({offset: 100});
```

### Account
`:::js api.account`

Allows a new user to sign in or sign up to Rebilly. Also exposes methods for activating a new user account, triggering a password reset or a sandbox mode reset. 

!!! info ""
    See the [**Account resource**][1] for detailed method information.
    
### API Keys
`:::js api.apiKeys`

Allows you to manage your API keys. Create or modify existing ones with different `datetime` settings. API keys are private and should only be used for server-side operations. 

!!! note 
    For client-side requests using the JS SDK, you must use the session token returned by `:::js api.account.signIn()`. See the [**Accounts resource**][1] for more details.

!!! info ""
    See the [**API Keys resource**][2] for detailed method information.
    
### Bank Accounts
`:::js api.bankAccounts`

Used to create new bank accounts and attach them to an existing customer. Can also deactivate bank accounts. 

Bank Accounts are a type of payment instrument used to collect ACH (echeck) payments, similar to how a payment card would be used to for a credit card payment.

See Payment Instruments. 

!!! info ""
    See the [**Bank Accounts resource**][3] for detailed method information.
    
### Blacklists
`:::js api.blacklists`

Manage blacklist items by creating new entries or deleting existing items. Blacklists are used to manage risk and fraud by aborting an operation.  

Rebilly has blacklists of customer Ids, emails, ip addresses, bins and payment cards.  A greylist is just like a blacklist, but with an expiration date.

!!! info ""
    See the [**Blacklists resource**][4] for detailed method information.
    
### Checkout Pages
`:::js api.checkoutPages`

Create and manage checkout pages. Fully hosted by Rebilly, checkout pages allow your customers to easily complete transactions using your plans without any programming requirements.

!!! info ""
    See the [**Checkout Pages resource**][5] for detailed method information.
    
### Contacts
`:::js api.contacts`

Define contact information for your customers. Manage multiple addresses for the same customer.

!!! info ""
    See the [**Contacts resource**][6] for detailed method information.

### Coupons
`:::js api.coupons`

Create permanent, time or usage restricted discount coupons for your customers to apply to invoices, subscriptions and plans.

!!! info ""
    See the [**Coupons resource**][7] for detailed method information.

### Credential Hashes
`:::js api.credentialHashes`

Generate credential hashes to authorize your webhooks or emails in various parts of Rebilly. 

!!! info ""
    See the [**Credential Hashes resource**][8] for detailed method information.

### Custom Events
`:::js api.customEvents`

Create custom events to be triggered when certain system events happen in Rebilly using a schedule. This is useful for sending reminders or completing additional actions based on the schedule. 

For example, a custom event could be used to send you an email before a customer's subscription is about to expire.

See Rules Engine.  

!!! info ""
    See the [**Custom Events resource**][9] for detailed method information.

### Custom Fields
`:::js api.customFields`

Create and manage custom fields to be added to other Resources. A variety of fields are supported from datetime to booleans.

!!! info ""
    See the [**Custom Fields resource**][10] for detailed method information.

### Customers
`:::js api.customers`

Create and manage your customers and their lead sources. Customers are associated with payment cards, subscriptions, invoices and other miscellaneous relationship models.

!!! info ""
    See the [**Customers resource**][12] for detailed method information.
    
### Customer Authentication
`:::js api.customerAuthentication`

Create and manage login credentials for your customers. This feature can be used to integrate Rebilly directly into your own website and display your customers their subscription or product information. 

!!! info ""
    See the [**Customer Authentication resource**][11] for detailed method information.

### Disputes
`:::js api.disputes`

Manage disputes for your customers' transactions and track the progress of existing disputes internally. It is a term that collectively means chargebacks and retrievals in Rebilly.

!!! info ""
    See the [**Disputes resource**][13] for detailed method information.
    
### Events
`:::js api.events`

Create and manage rules attached to system events. When an event happens, it triggers the evaluation of conditions (that you set up), in order from top to bottom. If the condition is met, the corresponding actions are executed. The conditions continue to be checked until either all of the conditions have been executed, or a special "stop" action is executed.

The actions vary depending on the event triggered. From automatic gateway account selection to sending emails the Rules Engine will help you attain your business objectives through automation.

See Rules Engine.  

!!! info ""
    See the [**Events resource**][14] for detailed method information.

### Files
`:::js api.files`

Upload and attach files to specific Resources. This feature is useful for adding important information related to customers and their life cycle within your business.  

!!! info ""
    See the [**Files resource**][15] for detailed method information.

### Gateway Accounts
`:::js api.gatewayAccounts`

Create and manage gateway accounts for your business. Select from a list of over 60 different gateways and configure them for active use. 

A payment gateway is an e-commerce application service provider service that authorizes credit card payments for e-businesses, online retailers, bricks and clicks, or traditional brick and mortar. It is the equivalent of a physical point of sale terminal located in most retail outlets.

See Supported Gateway Accounts.

!!! info ""
    See the [**Gateway Accounts resource**][16] for detailed method information.

### Invoices
`:::js api.invoices`

An invoice is a commercial document issued by a seller (merchant) to a buyer (customer), relating to a sale transaction and indicating the products, quantities, and agreed prices for products or services the seller has provided the buyer.  Payment terms are usually stated on the invoice.

See also:

- Products 
- Taxes
- Shipping
- Issuing an Invoice

!!! info ""
    See the [**Invoices resource**][17] for detailed method information.

### Layouts
`:::js api.layouts`

Create and manage your plan layouts. Layouts are a collection of plans, in a specific order, which you may present to a customer (or prospective customer) on a *pricing* or *plans* page integrated into your website.  

!!! info ""
    See the [**Layouts resource**][18] for detailed method information.

### Lists (Rules Engine)
`:::js api.lists`

Create and manage your lists. A list in an array of values that are stored in the database. The main purpose of a list is its usage in Rules Engine, to provide a way to change a rule criteria without having to change the rule itself.  

!!! info ""
    See the [**Lists resource**][19] for detailed method information.
    
### Notes
`:::js api.notes`

Leave notes on a resource member to have a handy location to share with others who may interface with the customer. It's great for customer service.    

!!! info ""
    See the [**Notes resource**][20] for detailed method information.
    
### Organizations
`:::js api.organizations`

Organizations include the name and address of the entities related to your account. An account may be multi-national, and support multiple organizations.

!!! note "Shared Modes"
    Organizations are shared between the *Live* and *Sandbox* modes.    

!!! info ""
    See the [**Organizations resource**][21] for detailed method information.

### Payment Cards
`:::js api.paymentCards`

A form of payment instrument, payment cards enable customers to do transactions when buying your products. 

See Payment Instruments. 

!!! info ""
    See the [**Payment Cards resource**][22] for detailed method information.

### Payment Tokens
`:::js api.paymentTokens`

Tokens are an encrypted string representing a payment instrument. A token expires within 24 hours.

Payment tokens are used to reduce the scope of PCI DSS compliance. A payment token can be made using a different authentication scheme , which allows you to create a payment token directly from the browser, bypassing the need to send sensitive cardholder info to your servers. We recommend using this with our Rebilly.js library, which helps you wire a form into this API resource and create payment tokens.

See [Rebilly.js][goto-rebillyjs] library    

!!! info ""
    See the [**Payment Tokens resource**][23] for detailed method information.

### Paypal Accounts
`:::js api.paypalAccounts`

A form of payment instrument, paypal accounts enable customers to do transactions when buying your products. 

See Payment Instruments. 

!!! info ""
    See the [**Paypal Accounts resource**][24] for detailed method information.

### Plans
`:::js api.plans`

Create and manage plans. Plans are used to describe a subscription. A plan may have optional setup fees, an optional trial period and fees, and an optional recurring fees and frequency. A plan may also expire, or be valid only for a limited number of recurrences. 

!!! info ""
    See the [**Plans resource**][25] for detailed method information.

### Previews
`:::js api.previews`

Preview the result of event triggered actions like webhooks and emails both globally and in the Rules Engine. 

!!! info ""
    See the [**Previews resource**][26] for detailed method information.

### Products
`:::js api.products`

Create and manage products. You may attach them to plans. Products can have a tax category, accounting code and may require shipping.

!!! info ""
    See the [**Products resource**][27] for detailed method information.

### Profile
`:::js api.profile`

Manage the profile of the current user. When using a secret API key the profile is attached to the owner of the API key, while when using a session token the profile is attached to the authenticated user via sign in.

The profile includes information about the currently authenticated user like his name, email and preferences.

!!! info ""
    See the [**Profile resource**][28] for detailed method information.

### Sessions
`:::js api.sessions`

Create and manage sessions. Session tokens are an alternate method to API authentication that is not private, unlike API keys.

This token can be used to authenticate to the API. In addition, the session can be set to expire at a particular time, and has very granular control over permissions. Use the token to then authenticate for further requests to the Rebilly API.

!!! info ""
    See the [**Sessions resource**][29] for detailed method information.

### Shipping Zones
`:::js api.shippingZones`

Create and manage shipping zones. Products that require shipping will automatically have shipping priced base on the shipping zone that matches the destination. Each zone contains regions and countries that you ship to, and has its own shipping rates.

!!! info ""
    See the [**Shipping Zones resource**][30] for detailed method information.

### Status (API)
`:::js api.status`

Get the current status of the Rebilly API. This feature can be used to confirm whether the API is functioning normally or not.

!!! tip 
    You can poll this endpoint on interval to check the status of the API.

!!! info ""
    See the [**Status resource**][31] for detailed method information.

### Subscriptions
`:::js api.subscriptions`

Create and manage subscriptions. A subscription is an instance of a plan for a specific customer and website combination.

!!! info ""
    See the [**Subscriptions resource**][32] for detailed method information.

### Three D Secure (3DS)
`:::js api.threeDSecure`

Create and list 3DS entries. 3D Secure is a way to authenticate and protect transactions. Typically, it's only possible to protect the initial transaction in a subscription with 3D Secure.

The merchant chooses whether or not to use 3D secure, and this is usually done via an iframe on the merchant's site. This allows the merchant to shift liability from themselves to the issuing bank in some cases.  3D Secure requires cardholder interaction to be completed.

!!! info ""
    See the [**Three D Secure resource**][33] for detailed method information.

### Tracking
`:::js api.tracking`

Inspect tracking data. Tracking is a layer for accessing all the activity (API requests, subscriptions, webhooks, events, etc.), thus providing easier debugging and issues auditing.

!!! info ""
    See the [**Tracking resource**][34] for detailed method information.

### Transactions
`:::js api.transactions`

Create and manage transactions. A transaction is an instance of an action regarding a payment. It is always related to a customer and a payment method, and can be related to another transaction. Transactions can be scheduled to happen in the future.

!!! info ""
    See the [**Transactions resource**][35] for detailed method information.

### Users
`:::js api.users`

Create and manage users. A *user* represents a person who can login to Rebilly, and take actions subject to their granted permissions.

!!! info ""
    See the [**Users resource**][36] for detailed method information.

### Webhooks
`:::js api.webhooks`

Create and manage webhooks. Webhooks are designed to notify your systems when certain or all registered events happen in near real-time, such as: a new transaction, a new subscription, a new invoice. 

They allow you to collect information about those events. Rebilly can send this information to an URL of your choice.

!!! info ""
    See the [**Webhooks resource**][37] for detailed method information.
    
### Websites
`:::js api.websites`

Create and manage websites. The website is related to each invoice and each payment gateway account. This feature would allow you to have gateway accounts that are related to multiple websites, or exclusive to particular websites. And gives you more control over your business.

!!! info ""
    See the [**Websites resource**][38] for detailed method information.


[1]: ./resources/account
[2]: ./resources/api-keys
[3]: ./resources/bank-accounts
[4]: ./resources/blacklists
[5]: ./resources/checkout-pages.md
[6]: ./resources/contacts.md
[7]: ./resources/coupons.md
[8]: ./resources/credential-hashes.md
[9]: ./resources/custom-events.md
[10]: ./resources/custom-fields.md
[11]: ./resources/customer-authentication.md
[12]: ./resources/customers.md
[13]: ./resources/disputes.md
[14]: ./resources/events.md
[15]: ./resources/files.md
[16]: ./resources/gateway-accounts.md
[17]: ./resources/invoices.md
[18]: ./resources/layouts.md
[19]: ./resources/lists.md
[20]: ./resources/notes.md
[21]: ./resources/organizations.md
[22]: ./resources/payment-cards.md
[23]: ./resources/payment-tokens.md
[24]: ./resources/paypal-accounts.md
[25]: ./resources/plans.md
[26]: ./resources/previews.md
[27]: ./resources/products.md
[28]: ./resources/profile.md
[29]: ./resources/sessions.md
[30]: ./resources/shipping-zones.md
[31]: ./resources/status.md
[32]: ./resources/subscriptions.md
[33]: ./resources/three-d-secure.md
[34]: ./resources/tracking.md
[35]: ./resources/transactions.md
[36]: ./resources/users.md
[37]: ./resources/webhooks.md
[38]: ./resources/account

[goto-account-signin]: ./resources/account#signin
[goto-errors]: ./rebilly-errors
[goto-rebillyjs]: https://help.rebilly.com/20221-development/rebillyjs
