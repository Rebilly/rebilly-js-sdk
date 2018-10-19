# Credential Hashes <small>`:::js api.credentialHashes`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Credential hashes are used to authorize your webhooks or emails in various parts of Rebilly.


## getEmailCredential
<div class="method"><code><strong>getEmailCredential</strong>({<span class="prop">hash</span>}) -> <span class="return">{Member}</span></code></div>

Get the details of an email credential using the `hash`.


**Example**

```js
const details = await api.credentialHashes.getEmailCredential({hash: 'foobar-001'});
console.log(details.fields.host);
```


**Returns**

A member exposing the email credential details.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## getWebhookCredential
<div class="method"><code><strong>getWebhookCredential</strong>({<span class="prop">hash</span>}) -> <span class="return">{Member}</span></code></div>

Get the details of a webhook credential using the `hash`.


**Example**

```js
const details = await api.credentialHashes.getWebhookCredential({hash: 'foobar-001'});
console.log(details.fields.host);
```


**Returns**

A member exposing the webhook credential details.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## getMailgunCredential
<div class="method"><code><strong>getMailgunCredential</strong>({<span class="prop">hash</span>}) -> <span class="return">{Member}</span></code></div>

Get the details of a Mailgun credential using the `hash`.


**Example**

```js
const details = await api.credentialHashes.getMailgunCredential({hash: 'foobar-001'});
console.log(details.fields.domain);
```


**Returns**

A member exposing the Mailgun credential details.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## getAWSSESCredential
<div class="method"><code><strong>getAWSSESCredential</strong>({<span class="prop">hash</span>}) -> <span class="return">{Member}</span></code></div>

Get the details of an AWS SES credential using the `hash`.


**Example**

```js
const details = await api.credentialHashes.getAWSSESCredential({hash: 'foobar-001'});
console.log(details.fields.configurationSetName);
```


**Returns**

A member exposing the AWS SES credential details.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## createEmailCredential
<div class="method"><code><strong>createEmailCredential</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create new email credentials to use in the *events* (Rules Engine). 

Supported `encryption` values: 

- `none` (default)
- `tls`
- `ssl`

**Authorization Schemes**

The `auth` object structure is needed to define the authorization credentials for the remote email account.

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Fields</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>none</td>
            <td>-</td>
        </tr>
        <tr>
            <td>plain</td>
            <td rowspan="3">
                <code>username</code>, <code>password</code>
            </td>
        </tr>
        <tr>
            <td>login</td>
        </tr>
        <tr>
            <td>cram-md5</td>
        </tr>
    </tbody>
</table>

!!! warning "Immutable Credentials"
    The authorization details for a credential hash cannot be modified once created. You will have to generate a new credential hash if the authorization values change.

**Example**

```js
// first set the required properties for the new credential hash
const data = {
    host: 'foobar.test.com',
    port: 465,
    encryption: 'ssl',
    auth: {
        type: 'login',
        username: 'foobar',
        password: 'fuubar'
    }
};

const credential = await api.credentialHashes.createEmailCredential({data});
// use the hash to authenticate your email action in the system events
console.log(credential.fields.hash);
```


**Returns**

A member exposing the created email credential fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## createWebhookCredential
<div class="method"><code><strong>createWebhookCredential</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create new webhook credentials to use in the *events* (Rules Engine) or for global webhooks.  

**Authorization Schemes**

The `auth` object structure is needed to define the authorization credentials for the remote webhook host.

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Fields</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>none</td>
            <td>-</td>
        </tr>
        <tr>
            <td>basic</td>
            <td rowspan="2">
                <code>username</code>, <code>password</code>
            </td>
        </tr>
        <tr>
            <td>digest</td>
        </tr>
        <tr>
            <td>oauth1</td>
            <td>
                <code>consumerKey</code>, <code>consumerSecret</code>, <code>token</code>, <code>tokenSecret</code>
            </td>
        </tr>
    </tbody>
</table>

!!! warning "Immutable Credentials"
    The authorization details for a credential hash cannot be modified once created. You will have to generate a new credential hash if the authorization values change.

**Example**

```js
// first set the required properties for the new credential hash
const data = {
    host: 'foobar.test.com',
    auth: {
        type: 'none'
    }
};

const credential = await api.credentialHashes.createWebhookCredential({data});
// use the hash to authenticate your webhook in Rebilly
console.log(credential.fields.hash);
```


**Returns**

A member exposing the created webhook credential fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## createMailgunCredential
<div class="method"><code><strong>createMailgunCredential</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create new Mailgun credentials to use in the *events* (Rules Engine).

!!! warning "Immutable Credentials"
    The details of a credential hash cannot be modified once created. You will have to generate a new credential hash if the values within change.

**Example**

```js
// first set the required properties for the new credential hash
const data = {
    emailFrom: 'me@mydomain.com', // sender email
    apiKey: 'key-1234567890', // use your Mailgun API key
    domain: 'mail.mydomain.com' // Mailgun domain
};

const credential = await api.credentialHashes.createMailgunCredential({data});
// use the hash to authenticate your email action in the rules engine
console.log(credential.fields.hash);
```


**Returns**

A member exposing the created Mailgun credential fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## createAWSSESCredential
<div class="method"><code><strong>createAWSSESCredential</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create new AWS SES credentials to use in the *events* (Rules Engine).

!!! warning "Immutable Credentials"
    The details of a credential hash cannot be modified once created. You will have to generate a new credential hash if the values within change.

**Example**

```js
// first set the required properties for the new credential hash
const data = {
    key: 'BWITYO4UARGDLMFY6UDP',
    secret: '8D34yYHOK9+yM7pDnNUO3UTO/5b8Wy/PGNyzTRmG',
    region: 'us-west-2',
    configurationSetName: 'SpecialConfigurationSet',
};

const credential = await api.credentialHashes.createAWSSESCredential({data});
// use the hash to authenticate your email action in the rules engine
console.log(credential.fields.hash);
```


**Returns**

A member exposing the created AWS SES credential fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1emails~1%7Bhash%7D%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1webhooks~1%7Bhash%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1emails%2Fpost
[4]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1webhooks%2Fpost
[5]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1mailgun~1%7Bhash%7D%2Fget
[6]: https://rebilly.github.io/RebillyAPI/#tag/Credential-Hashes%2Fpaths%2F~1credential-hashes~1mailgun%2Fpost
[7]: https://rebilly.github.io/RebillyUserAPI/#tag/Email-Credentials/paths/~1credential-hashes~1aws-ses~1{hash}/get
[8]: https://rebilly.github.io/RebillyUserAPI/#tag/Email-Credentials/paths/~1credential-hashes~1aws-ses/post
