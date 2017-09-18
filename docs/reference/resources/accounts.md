# Accounts <small>`:::js api.accounts`</small>

> [`RebillyAPI`][1]

Allows a new user to sign in or sign up to Rebilly. Also exposes methods for activating a new user account, triggering a password reset or a sandbox mode reset.



## signUp
<div class="method"><code><strong>signUp</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Creates a new user in Rebilly and sends an email confirmation. The user will have to activate his account using the email confirmation that he receives.


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

const user = await api.accounts.signUp({data});
console.log(user.fields.id);
```

**Returns**

A member exposing the newly created user information.

Type [`Member`][2]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## signIn
<div class="method"><code><strong>signIn</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Sign in to a user account and return the session token (JWT). 

Optionally you can provide the expired time of the session using `expiredTime` as a `datetime` in the future.

> See [api.setSessionToken][4]

**Example**

```js
const data = {
    email: 'acme+test@rebilly.com',
    password: 'helloworld123'
    
    // optionally you can define an `expiredTime` to 
    // limit the duration of the session token
    
    //expiredTime: '2017-09-18T19:17:39Z'
};

const session = await api.accounts.signIn({data});

// the session token (JWT) can be used in
// conjunction with api.setSessionToken to authorize API
// requests in the browser 
console.log(session.fields.token);
```

**Returns**

A member exposing the session information.

Type [`Member`][2]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

[1]: ../rebilly-api
[2]: ../types/member
[3]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1signup%2Fpost
[4]: ../rebilly-api/#setsessiontoken
[5]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1signin%2Fpost
