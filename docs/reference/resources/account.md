# Account <small>`:::js api.account`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Allows a new user to sign in or sign up to Rebilly. Also exposes methods for activating a new user account, triggering a password reset or a sandbox mode reset.



## signUp
<div class="method"><code><strong>signUp</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Creates a new user in Rebilly and sends an email confirmation. The user will have to activate his account using the email confirmation that he receives.

<div class="warning-block"><strong>Important</strong>&nbsp;&nbsp;This request does not require API authentication and can be completed as a guest.</div>


**Example**

```js
const data = {
    email: 'acme+test@rebilly.com',
    company: 'Acme Imports',
    firstName: 'John',
    lastName: 'Doe',
    businessPhone: '14566789',
    password: 'helloworld123',
    website: 'http://acme-imports.com'
};

const user = await api.account.signUp({data});
console.log(user.fields.id);
```

**Returns**

A member exposing the newly created user information.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## signIn
<div class="method"><code><strong>signIn</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Sign in to a user account and return the session token (JWT). 

Optionally you can provide the expired time of the session using `expiredTime` as a `datetime` in the future.

<div class="warning-block"><strong>Important</strong>&nbsp;&nbsp;This request does not require API authentication and can be completed as a guest.</div>

> See [api.setSessionToken][2]

**Example**

```js
const data = {
    email: 'acme+test@rebilly.com',
    password: 'helloworld123'
    
    // optionally you can define an `expiredTime` to 
    // limit the duration of the session token
    
    //expiredTime: '2017-09-18T19:17:39Z'
};

const session = await api.account.signIn({data});

// the session token (JWT) can be used in
// conjunction with api.setSessionToken to authorize API
// requests in the browser 
console.log(session.fields.token);
```

**Returns**

A member exposing the session information.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## logout
<div class="method"><code><strong>logout</strong>() -> <span class="return">{Member}</span></code></div>

Logs out the current authenticated user and destroys his active session. This will invalidate the session token. 

!!! warning "Session Expiry"
    A session will expire automatically if you do not logout the user. However **we recommend you logout the user** programmatically whenever his session should expire. 

**Example**

```js
const logout = await api.account.logout();

// the request does not return any fields but
// you can confirm the success using the status code
console.log(logout.response.status); // 204
```

**Returns**

An empty member without fields. Check the `response` property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## activate
<div class="method"><code><strong>activate</strong>({<span class="prop">token</span>}) -> <span class="return">{Member}</span></code></div>

Activate a user account with the token he received by email when the user signed up to Rebilly. 

<div class="warning-block"><strong>Important</strong>&nbsp;&nbsp;This request does not require API authentication and can be completed as a guest.</div>

**Example**

```js
const token = '1234567890abcdefghijklmnop';

const activation = await api.account.activate({token});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(activation.response.status); // 204
```

**Returns**

An empty member without fields. Check the `response` property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## forgotPassword
<div class="method"><code><strong>forgotPassword</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Sends an email with a link containing a token to reset user password.

<div class="warning-block"><strong>Important</strong>&nbsp;&nbsp;This request does not require API authentication and can be completed as a guest.</div>

**Example**

```js
const data = {
    email: 'acme+test@rebilly.com'
};

const request = await api.account.forgotPassword({data});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```

**Returns**

An empty member without fields. Check the `response` property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## resetSandbox
<div class="method"><code><strong>resetSandbox</strong>() -> <span class="return">{Member}</span></code></div>

Reset the contents of the sandbox mode. This is useful for testing and developing your integration with Rebilly.

**Example**

```js
const request = await api.account.resetSandbox();

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```

**Returns**

An empty member without fields. Check the `response` property to validate the expected status code.

Type [`Member`][goto-member]


[goto-rebillyapi]: ../rebilly-api
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1signup%2Fpost
[2]: ../rebilly-api/#setsessiontoken
[3]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1signin%2Fpost
[4]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1activation~1%7Btoken%7D%2Fpost
[5]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1forgot-password%2Fpost
