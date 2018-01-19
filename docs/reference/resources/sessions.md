# Sessions <small>`:::js api.sessions`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Create and manage sessions. Session tokens are an alternate method to API authentication that is not private, unlike API keys.

This token can be used to authenticate to the API. In addition, the session can be set to expire at a particular time, and has very granular control over permissions. Use the token to then authenticate for further requests to the Rebilly API.

> See [account.signIn][goto-signin]

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a session by its `id`.


**Example**

```js
const session = await api.sessions.get({id: 'foobar-001'});
console.log(session.fields.name);
```


**Returns**

A member exposing the session fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a session. Optionally provide a specific `id` to use, or let Rebilly generate one.

**Example**

```js
// first set the properties for the new session
const data = {
    permissions: [
        {
            resourceName: 'plans',
            methods: [
                'GET',
                'POST',
                'PUT',
                'HEAD',
                'DELETE'
            ]
        }
    ]
    
    // optionally you can define an `expiredTime` to 
    // limit the duration of the session
    
    //expiredTime: '2017-09-18T19:17:39Z'
};

// the ID is optional
const firstSession = await api.sessions.create({data});

// or you can provide one
const secondSession = await api.sessions.create({id: 'my-second-key', data});
```


**Returns**

A member exposing the created session fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a session by using its `id`. 


**Example**

```js
// define values to update
const data = {
    permissions: [
        {
            resourceName: 'plans',
            methods: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ]
        },
        {
            resourceName: 'customers',
            methods: [
                'GET',
                'POST',
                'PUT',
                'DELETE'
            ]
        }
    ]
};

const session = await api.sessions.update({id: 'my-second-key', data});
```


**Returns**

A member exposing the updated session fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a session by using its `id`.


**Example**

```js
const request = await api.sessions.delete({id: 'my-second-key'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-signin]: ./account#signin
[1]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1sessions%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1sessions~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1sessions~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Sessions%2Fpaths%2F~1sessions~1%7Bid%7D%2Fdelete
