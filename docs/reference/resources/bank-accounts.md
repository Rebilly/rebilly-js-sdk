# Bank Accounts <small>`:::js api.bankAccounts`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Bank Accounts are a type of payment instrument used to collect ACH (echeck) payments, similar to how a payment card would be used to for a credit card payment.



## getAll

--8<----- "reference/resources/shared/criteria-less-signature.md"

Get a collection of bank accounts. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.bankAccounts.getAll();

// alternatively you can speciy one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.bankAccounts.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(bankAccount => console.log(bankAccount.fields.status));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of bank accounts.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a bank account by its `id`.


**Example**

```js
const bankAccount = await api.bankAccounts.get({id: 'foobar-001'});
console.log(bankAccount.fields.status);
```


**Returns**

A member exposing the bank account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## create
<div class="method"><code><strong>create</strong>({<span class="prop">id</span><span class="optional" title="optional">opt</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Create a bank account. Optionally provide a specific `id` to use, or let Rebilly generate one. 

You can either provide detailed bank account fields or replace them with the `token` (payment token) field.


**Example**

```js
// first set the required properties for the new bank account
const data = {
    bankName: 'My Fake Financial',
    routingNumber: '12345678',
    accountNumber: '12345678',
    accountType: 'checking',
    customerId: 'acme-001'
};

// the ID is optional
const firstKey = await api.bankAccounts.create({data});

// or you can provide one
const secondKey = await api.bankAccounts.create({id: 'my-second-id', data});
```


**Returns**

A member exposing the created bank account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.


## deactivate
<div class="method"><code><strong>deactivate</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Deactivate a bank account by using its `id`. This will prevent it from being used by the customer. 


**Example**

```js
const bankAccount = await api.bankAccounts.deactivate({id: 'my-second-key'});

// the bank account status will be updated to reflect the modification
console.log(bankAccount.fields.status);
```


**Returns**

A member exposing the deactivated bank account fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[1]: https://rebilly.github.io/RebillyAPI/#tag/Bank-Accounts%2Fpaths%2F~1bank-accounts%2Fget
[2]: https://rebilly.github.io/RebillyAPI/#tag/Bank-Accounts%2Fpaths%2F~1bank-accounts~1%7Bid%7D%2Fget
[3]: https://rebilly.github.io/RebillyAPI/#tag/Bank-Accounts%2Fpaths%2F~1bank-accounts~1%7Bid%7D%2Fput
[4]: https://rebilly.github.io/RebillyAPI/#tag/Bank-Accounts%2Fpaths%2F~1bank-accounts~1%7Bid%7D~1deactivation%2Fpost
