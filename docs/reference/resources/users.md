# Users <small>`:::js api.users`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage users. A user represents a person who can login to Rebilly, and take actions subject to their granted permissions.


## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of users. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.users.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.users.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(user => console.log(user.fields.firstName));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of users.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a user by its `id`.


**Example**

```js
const user = await api.users.get({id: 'foobar-001'});
console.log(user.fields.firstName);
```


**Returns**

A member exposing the user fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a user. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new user
const data = {
    email: 'john.doe+test@grr.la',
    firstName: 'John',
    lastName: 'Doe',
    businessPhone: '151412345676',
    mobilePhone: '151412345676',
    password: 'genericPasswordValue',
    permissions: [],
    reportingCurrency: 'USD',
    // totp requires the use of a smart phone
    // with Google Authenticator installed
    totpRequired: false,
    totpSecret: '',
    totpUrl: '',
    country: 'US',
    preferences: {}
};

// the ID is optional
const firstProduct = await api.users.create({data});

// or you can provide one
const secondProduct = await api.users.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created user fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a user by using its `id`. 


**Example**

```js
// define values to update
const data = {
    email: 'john.doe+test@grr.la',
    firstName: 'John',
    lastName: 'Doe',
    reportingCurrency: 'CAD',
    country: 'CA',
};

const user = await api.users.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated user fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a user by using its `id`.


**Example**

```js
const request = await api.users.delete({id: 'my-second-key'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## updatePassword
<div class="method"><code><strong>updatePassword</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the password of a user identified by its `id`. 

!!! warning "Current Password Required"
    The user's current password is required to enable the update. 

**Example**

```js
// define values to update
const data = {
    currentPassword: 'previousUserPassword123',
    newPassword: 'newUserPassword123'
};

const user = await api.users.updatePassword({id: 'my-second-key', data});
```


**Returns**

A member exposing the user's fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## resetPassword
<div class="method"><code><strong>updatePassword</strong>({<span class="prop">token</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Reset a user's password using an existing forgot password `token`. 
 

**Example**

```js
const token = '4f6cf35x2c4y483za0a9158621f77a21';

// define values to update
const data = {
    newPassword: 'newUserPassword123'
};

const user = await api.users.resetPassword({token, data});
```


**Returns**

A member exposing the user's fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## resetTotp
<div class="method"><code><strong>resetTotp</strong>(<span class="prop">id</span>) -> <span class="return">{Member}</span></code></div>

Renew a user's Totp Secret (Time-based One-time Password). This feature is only used for two-factor authentication.


**Example**

```js
const profile = await api.users.resetTotp({id: 'my-second-key'});
console.log(profile.users.toptSecret);
```


**Returns**

A member exposing the user's profile fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1%7Bid%7D%2Fdelete
[5]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1%7Bid%7D~1password%2Fpost
[6]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1reset-password~1%7Btoken%7D%2Fpost
[7]: https://rebilly.github.io/RebillyAPI/#tag/Users%2Fpaths%2F~1users~1%7Bid%7D~1totp-reset%2Fpost
