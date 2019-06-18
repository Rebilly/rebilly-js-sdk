
# Payment Cards Bank Names<small>`:::js api.paymentCardsBankNames`</small>  
  
> Member of [`RebillyAPI`][goto-rebillyapi]  
  
All bank names related to all cards in transations.  
  
  
  
## getAll  
  
--8<----- "reference/resources/shared/criteria-less-signature.md"  
  
Get a collection of payment cards. Each entry will be a member.  
  
  
**Example**  
  
```js  
// all parameters are optional  
const bankNames = await api.paymentCardsBankNames.getAll();  
  
// alternatively you can specify one or more of them  
const params = {limit: 20, offset: 100}; const secondCollection = await api.paymentCardsBankNames.getAll(params);  
  
// access the collection items, each item is a Member  
secondCollection.items.forEach(bankName => console.log(bankName));  
```  
  
**Parameters**  
  
  
--8<----- "reference/resources/shared/criteria-less-get-all.md"  
  
  
**Returns**  
  
A array of bank names.  
  
Type Array
