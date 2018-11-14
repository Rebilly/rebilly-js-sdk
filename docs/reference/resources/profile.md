# Profile <small>`:::js api.profile`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Manage the profile of the current user. When using a secret API key the profile is attached to the owner of the API key, while when using a session token the profile is attached to the authenticated user via sign in.

The profile includes information about the currently authenticated user like his name, email and preferences.


## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get currently authenticated user's profile.


**Example**

```js
const profile = await api.profile.get();
console.log(profile.fields.email);
```


**Returns**

A member exposing the profile fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.


## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the authenticated user's profile. 


**Example**

```js
// define values to update
const data = {
    reportingCurrency: 'USD',
    preferences: [],
    totpRequired: false
};

const profile = await api.profile.update({data});
```


**Returns**

A member exposing the updated profile fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## updatePassword
<div class="method"><code><strong>updatePassword</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update the authenticated user's password. 

!!! warning "Current Password Required"
    The user's current password is required to enable the update. This feature is best used in a self-service environment where the user triggers his own password update.

**Example**

```js
// define values to update
const data = {
    currentPassword: 'previousUserPassword123',
    newPassword: 'newUserPassword123'
};

const profile = await api.profile.updatePassword({data});
```


**Returns**

A member exposing the user's profile fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## resetTotp
<div class="method"><code><strong>resetTotp</strong>() -> <span class="return">{Member}</span></code></div>

Renew the user's Totp Secret (Time-based One-time Password). This feature is only used for two-factor authentication.


**Example**

```js
const profile = await api.profile.resetTotp();
console.log(profile.fields.toptSecret);
```


**Returns**

A member exposing the user's profile fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyUserAPI/#tag/Profile/paths/~1profile/get
[2]: https://rebilly.github.io/RebillyUserAPI/#tag/Profile/paths/~1profile/put
[3]: https://rebilly.github.io/RebillyUserAPI/#tag/Profile/paths/~1profile~1password/post
[4]: https://rebilly.github.io/RebillyUserAPI/#tag/Profile/paths/~1profile~1totp-reset/post
