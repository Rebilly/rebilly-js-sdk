# Files <small>`:::js api.files`</small>

> Member of [`RebillyAPI`][goto-rebillyapi]

Upload and attach files to specific Resources. This feature is useful for adding important information related to customers and their life cycle within your business.


## getAll

--8<----- "reference/resources/shared/full-signature.md"

Get a collection of files. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.files.getAll();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.files.getAll(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(file => console.log(file.fields.name));
```

**Parameters**


--8<----- "reference/resources/shared/full-get-all.md"


**Returns**

A collection of files.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][1]{: target="_blank"} for all payload fields and response data.

## get
<div class="method"><code><strong>get</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get a file by its `id`. This does not return the file content, only the details.

> See [files.download][goto-download]


**Example**

```js
const file = await api.files.get({id: 'foobar-001'});
console.log(file.fields.name);
```


**Returns**

A member exposing the file fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][2]{: target="_blank"} for all payload fields and response data.

## upload
<div class="method"><code><strong>upload</strong>({<span class="prop">fileObject</span>}) -> <span class="return">{Member}</span></code></div>

Upload a file for later use. Provide a native [File object][goto-mdn-file] as the payload.

!!! info "Attachment"
    A new file is not attached to any resource. You must do an additional API request to attach the file to a particular resource.

**Example**

```js
// using a FileList to fetch a file
const fileObject = fileList[0];

const addedFile = await api.files.upload({fileObject});
```


**Returns**

A member exposing the created file fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## update
<div class="method"><code><strong>update</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update a file using its `id`. This method cannot be used to overwrite the file data, only its details.

**Example**

```js
// define the values to update
const data = {
    name: 'new file name',
    description: 'a fitting description',
    tags: ['original']
};

const file = await api.files.update({id: 'my-file-id', data});
```

**Returns**

A member exposing the updated file fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][4]{: target="_blank"} for all payload fields and response data.

## uploadAndUpdate
<div class="method"><code><strong>uploadAndUpdate</strong>({<span class="prop">fileObject</span>, <span class="prop">data</span><span class="optional">opt</span>}) -> <span class="return">{Member}</span></code></div>

Upload a file for later use and include its description and tags. Provide a native [File object][goto-mdn-file] as the payload.

Unlike [files.upload][goto-upload], this method allows you to define the description or tags at the same time.

!!! info "Attachment"
    A new file is not attached to any resource. You must do an additional API request to attach the file to a particular resource.

**Example**

```js
// using a FileList to fetch a file
const fileObject = fileList[0];

// define file data
const data = {
    description: 'my new file',
    tags: ['original']
};

const addedFile = await api.files.uploadAndUpdate({fileObject, data});
```

**Parameters**

| Name | Type | Attribute | Description |
| - | - | - | - |
| data.description | string | Optional | The file's description. |
| data.tags| number | Optional | An array of tags (strings) used to categorize the file. |

**Returns**

A member exposing the created file fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][3]{: target="_blank"} for all payload fields and response data.

## delete
<div class="method"><code><strong>delete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a file without attachments by using its `id`.  

!!! warning "Attachments"
    You cannot delete a file that still has active attachments to resources within Rebilly. Use [files.detachAndDelete][goto-detach-delete] instead for that use-case.

**Example**

```js
const request = await api.files.delete({id: 'my-file-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## detachAndDelete
<div class="method"><code><strong>detachAndDelete</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Delete a file and its related resource attachments by using its `id`. Use this method to remove the file completely from all resources at once.

**Example**

```js
const request = await api.files.detachAndDelete({id: 'my-file-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

An empty member without fields. Check the response property to validate the expected status code.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][5]{: target="_blank"} for all payload fields and response data.

## download
<div class="method"><code><strong>download</strong>({<span class="prop">id</span>}) -> <span class="return">{File}</span></code></div>

Download the content of a file as an [ArrayBuffer][goto-arraybuffer].
 
**Example**

```js
const file = await api.files.download({id: 'my-file-id'});

// access the file ArrayBuffer to view the content 
console.log(file.data);
```

!!! tip
    You can generate a binary file to download from the data content directly in the browser, or save it locally via the file system in Node.

**Returns**

A file with the response data.

Type [`File`][goto-file]


**API Spec**

See the [detailed API spec][6]{: target="_blank"} for all payload fields and response data.

## getAllAttachments

<div class="method">
    <code>
        <strong>getAllAttachments</strong>
        ({<span class="prop">limit</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">offset</span><span class="optional" title="optional">opt</span>, 
        <span class="prop">sort</span><span class="optional" title="optional">opt</span>,
        <span class="prop">filter</span><span class="optional" title="optional">opt</span>,
        <span class="prop">q</span><span class="optional" title="optional">opt</span>
        }) -> <span class="return">{Collection}</span>
    </code>
</div>


Get a collection of attachments. Each entry will be a member.


**Example**

```js
// all parameters are optional
const firstCollection = await api.files.getAllAttachments();

// alternatively you can specify one or more of them
const params = {limit: 20, offset: 100, sort: '-createdTime'}; 
const secondCollection = await api.files.getAllAttachments(params);

// access the collection items, each item is a Member
secondCollection.items.forEach(attachment => console.log(attachment.fields.relatedType));
```

**Parameters**


--8<----- "reference/resources/shared/criteria-less-get-all.md"


**Returns**

A collection of files.

Type [`Collection`][goto-collection]


**API Spec**

See the [detailed API spec][7]{: target="_blank"} for all payload fields and response data.

## getAttachment
<div class="method"><code><strong>getAttachment</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Get the details of an attachment by its `id`.

!!! info "Attachments and Files"
    A file can be attached to a resource. This allows you to logically link files and entities within Rebilly as needed. 
    For example you can upload external invoices and attach them to a customer.
    
> See [files.attach][goto-attach]

**Example**

```js
const attachment = await api.files.getAttachment({id: 'foobar-001'});
console.log(attachment.fields.relatedType);
```


**Returns**

A member exposing the file fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][8]{: target="_blank"} for all payload fields and response data.

## attach
<div class="method"><code><strong>attach</strong>({<span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Attach a file to a resource. To create an attachment you must provide the resource `relatedType` (e.g. customers), the `relatedId` of an instance of that type (e.g. a customer's id), and finally the `fileId` of the file previously uploaded.

Allowed `relatedType` values: 

- `customer`
- `dispute`
- `invoice`
- `note`
- `payment`
- `plan`
- `product`
- `subscription`
- `transaction`

!!! info "Shared File"
    A file can be attached to more than one resource at a time.

**Example**

```js
// define the attachment
const data = {
    // previously uploaded file ID
    fileId: 'my-file-id',
    relatedType: 'customer',
    relatedId: 'my-customer-id',
    name: 'an attachment',
    description: `the customer's file`
};

const attachment = await api.files.attach({data});
console.log(attachment.fields.id);
```


**Returns**

A member exposing the attachment fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][10]{: target="_blank"} for all payload fields and response data.

## updateAttachment
<div class="method"><code><strong>updateAttachment</strong>({<span class="prop">id</span>, <span class="prop">data</span>}) -> <span class="return">{Member}</span></code></div>

Update an attachment by its `id`.

> See [files.attach][goto-attach]

**Example**

```js
// define the values to update
const data = {
    relatedType: 'customer',
    relatedId: 'my-customer-id',
    name: 'an attachment',
    description: `the customer's file`
};

const attachment = await api.files.updateAttachment({id: 'foobar-001', data});
```


**Returns**

A member exposing the attachment fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][9]{: target="_blank"} for all payload fields and response data.

## detach
<div class="method"><code><strong>detach</strong>({<span class="prop">id</span>}) -> <span class="return">{Member}</span></code></div>

Detach a file from a resource using the attachment's `id`.

!!! warning "Detaching versus deleting"
    Detaching a file does not delete it even if the file has no other attachments within Rebilly. Use [files.delete][goto-delete] or [files.detachAndDelete][goto-detach-delete] for those use-cases. 

> See [files.attach][goto-attach]

**Example**

```js
const request = await api.files.detach({id: 'my-attachment-id'});

// the request does not return any fields but
// you can confirm the success using the status code
console.log(request.response.status); // 204
```


**Returns**

A member exposing the attachment fields.

Type [`Member`][goto-member]


**API Spec**

See the [detailed API spec][11]{: target="_blank"} for all payload fields and response data.

[goto-rebillyapi]: ../rebilly-api
[goto-collection]: ../types/collection
[goto-member]: ../types/member
[goto-file]: ../types/file
[goto-mdn-file]: https://developer.mozilla.org/en-US/docs/Web/API/File
[goto-upload]: #upload
[goto-download]: #download
[goto-delete]: #delete
[goto-detach-delete]: #detachanddelete
[goto-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[goto-attach]: #attach
[1]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files/get
[2]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files~1{id}/get
[3]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files/post
[4]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files~1{id}/put
[5]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files~1{id}/delete
[6]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1files~1{id}~1download/get
[7]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1attachments/get
[8]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1attachments~1{id}/get
[9]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1attachments~1{id}/put
[10]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1attachments/post
[11]: https://rebilly.github.io/RebillyAPI/#tag/Files/paths/~1attachments~1{id}/delete
