import { expect } from 'chai';
import { FunctionGenerator } from '@scripts/sdk-generation/generators';
import fullSchema from "./fixtures/full-schema.json";

function generatorFor(resourcePath, httpVerb) {
    return new FunctionGenerator(fullSchema, resourcePath, httpVerb);
}

test('gets all parameter names', ()=> {
    expect(generatorFor('/customers/{id}', 'get').getAllParamNames('get')).to.eql(['id']);
    expect(generatorFor('/customers/{id}', 'put').getAllParamNames('put')).to.eql(['id', 'data', 'expand']);

    // const generator2 = generatorFor('/customers');
    // expect(generator2.getAllParamNames('get')).to.eql(['limit','offset', 'filter','q', 'expand' ,'fields','sort']);
    // expect(generator2.getAllParamNames('post')).to.eql(['id', 'data', 'expand']);
})

// test('generates default optional arguments', ()=> {
//     const generator = generatorFor('/customers');
//     expect(generator.generateDefaultOptionalArguments('get')).to.eql('{ limit = null,offset = null,filter = null,q = null,expand = null,fields = null,sort = null } = {}');
// })

// test('gets optional parameters', ()=> {
//     const generator = generatorFor('/customers');
//     expect(generator.getOptionalParameters('get')).to.eql([]);
//     expect(generator.getOptionalParameters('post')).to.eql([]);
// })

// test('gets optional arguments', ()=> {
//     const generator = generatorFor('/customers');
//     expect(generator.generateArgumentsWithDefaults('post')).to.eql("id = '',data,expand = null");
// })

// test('gets optional arguments for aml', ()=> {
//     const generator = generatorFor('/aml');
//     expect(generator.getOptionalParameters('get')).to.eql(["dob", "country"]);
//     expect(generator.generateArgumentsWithDefaults('get')).to.eql("firstName,lastName,dob = null,country = null");
// })
