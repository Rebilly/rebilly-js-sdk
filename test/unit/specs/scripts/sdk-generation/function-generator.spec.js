import { expect } from 'chai';
import { FunctionGenerator } from '@scripts/sdk-generation/function-generator';
import fullSchema from "./fixtures/full-schema.json";

function generatorFor(resourcePath, httpVerb) {
    return new FunctionGenerator(fullSchema, resourcePath, httpVerb);
}

test('gets all parameter names', ()=> {
    expect(generatorFor('/customers/{id}', 'get').getAllParamNames('get')).to.eql(['id', 'expand', 'fields']);
    expect(generatorFor('/customers/{id}', 'put').getAllParamNames('put')).to.eql(['id', 'data', 'expand']);
    
    expect(generatorFor('/customers', 'get').getAllParamNames('put')).to.eql(['limit','offset', 'filter','q', 'expand' ,'fields','sort']);
    expect(generatorFor('/customers', 'post').getAllParamNames('put')).to.eql(['id', 'data', 'expand']);
})

test('generates arguments with optional and required parameters', ()=> {
    expect(generatorFor('/customers', 'post').generateArgumentsWithDefaults()).to.eql("id = '',data,expand = null");
})

test('generates getAll arguments when no required parameters detected', ()=> {
    expect(generatorFor('/customers', 'get').generateGetAllArguments()).to.eql('{ limit = null,offset = null,filter = null,q = null,expand = null,fields = null,sort = null } = {}');
})

test('generates getAll arguments when required parameters detected', ()=> {
     expect(generatorFor('/aml', 'get').generateGetAllArguments()).to.eql("{ expand = null,firstName,lastName,dob = null,country = null }");
})

test('appends query params to api path', ()=> {
    const generator = generatorFor('/customers/{id}', 'delete');
    expect(generator.buildQueryString()).to.eql('?targetCustomerId=${targetCustomerId}');
    expect(generator.getQueryParameterNames()).to.eql(['targetCustomerId']);
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

test('detects when to use custom create function', ()=> {
    let generator = generatorFor('/invoices', 'post');
    expect(generator.isCreateFunction()).to.be.true;
    
    generator = generatorFor('/payouts', 'post');
    expect(generator.isCreateFunction()).to.be.false;

    generator = generatorFor('/tags', 'post');
    expect(generator.isCreateFunction()).to.be.false;
})

test.only('DEBUG', ()=> {
    let generator = generatorFor('/coupons', 'get');
    console.log(generator.generateFunction());
})
