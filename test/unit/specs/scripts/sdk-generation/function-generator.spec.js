import { expect } from 'chai';
import { FunctionGenerator } from '@scripts/sdk-generation/function-generator';
import fullSchema from "./fixtures/full-schema.json";

function generatorFor(resourcePath, httpVerb) {
    return new FunctionGenerator(fullSchema, resourcePath, httpVerb);
}

test('gets all parameter names', ()=> {
    expect(generatorFor('/customers/{id}', 'get').getAllParamNames('get')).to.eql(['id']);
    expect(generatorFor('/customers/{id}', 'put').getAllParamNames('put')).to.eql(['id', 'data', 'expand']);
    
    expect(generatorFor('/customers', 'get').getAllParamNames('put')).to.eql(['limit','offset', 'filter','q', 'expand' ,'fields','sort']);
    expect(generatorFor('/customers', 'post').getAllParamNames('put')).to.eql(['id', 'data', 'expand']);
})

test('generates default optional arguments', ()=> {
    expect(generatorFor('/customers', 'get').generateDefaultOptionalArguments()).to.eql('{ limit = null,offset = null,filter = null,q = null,expand = null,fields = null,sort = null } = {}');
})

test('gets optional arguments', ()=> {
     expect(generatorFor('/customers', 'post').generateArgumentsWithDefaults()).to.eql("id = '',data,expand = null");
})

test('gets optional arguments for aml', ()=> {
     expect(generatorFor('/aml', 'get').getOptionalParameters()).to.eql(["dob", "country"]);
     expect(generatorFor('/aml', 'get').generateArgumentsWithDefaults()).to.eql("expand = null,firstName,lastName,dob = null,country = null");
})

test('appends query params to api path', ()=> {
    const generator = generatorFor('/customers/{id}', 'delete');
    expect(generator.buildQueryString()).to.eql('?targetCustomerId=${targetCustomerId}');
    expect(generator.getQueryParameters()).to.eql(['targetCustomerId']);
    expect(generator.generateApiPath()).to.eql("`customers/${id}?targetCustomerId=${targetCustomerId}`");
})

test('gets request payload params', ()=> {
    let generator = generatorFor('/invoices/{id}/transaction', 'post');
    expect(generator.getRequestPayloadParams()).to.eql([{transactionId: 'required'}, {amount:'null'}]);
    
    generator = generatorFor('/tags/{tag}/customers', 'post');
    expect(generator.getRequestPayloadParams()).to.eql([{"customerIds": "required"}]);
    
    generator = generatorFor('/payouts', 'post');
    expect(generator.getRequestPayloadParams()).to.eql([
        {"websiteId": "required"},
        {"customerId": "required"},
        {"currency": "required"},
        {"amount": "required"},
        {"invoiceIds": "null"},
        {"paymentInstruction": "null"},
        {"paymentInstrument": "null"},
        {"billingAddress": "null"},
        {"requestId": "null"},
        {"gatewayAccountId": "null"},
        {"description": "null"},
        {"notificationUrl": "null"},
        {"redirectUrl": "null"},
        {"customFields": "null"}, 
        {"riskMetadata": "null"},
        {"isProcessedOutside": "null"},
        {"isMerchantInitiated": "null"},
        {"processedTime": "null"}]);
    })
