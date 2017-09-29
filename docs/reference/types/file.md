# File <small>`Type`</small>

One of the three types returned by both the standard and experimental clients, the File type allows you to access the `arraybuffer` data from API requests that return files. The files can be either exported CSV data or generated invoice PDFs.

!!! tip 
    You can generate a binary file to download from the file content directly in the browser, or save it locally via the file system in Node.

> See [ArrayBuffer][goto-mdn]

## Properties
Each file instance exposes the same properties.

| Name | Type | Description |
| ---- | ---- | ----------- |
| data | Object | An `arraybuffer` containing the file data returned by the request. |
| response | Object | The original response stripped down to the status code, status text and headers. Exposes three more properties: `{status, statusText, headers}`. |

**Example**

After retrieving an invoice PDF we have access to all properties:
```js
const pdf = await api.invoices.downloadPDF({id: 'foobar-001'});
/**
* Properties:
* pdf.data
* pdf.response
*/
```

We can access the `arraybuffer`:
```js
console.log(pdf.data);
```

And check the response's status code:
```js
console.log(pdf.response.status);
```


[goto-mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
