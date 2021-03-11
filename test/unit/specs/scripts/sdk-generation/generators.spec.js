import { expect } from 'chai';
import { Generator } from '@scripts/sdk-generation/generators';
import fullSchema from "./fixtures/full-schema.json";

function generatorFor(resourcePath) {
    return new Generator(fullSchema, resourcePath);
}

test('TBD', ()=> {
    const generator = generatorFor('/customers/{id}');

    expect(generator.extractParametersFromResourcePath()).to.eql(['id']);
    
    expect(generator.formatResourcePath('/customers/{id}')).to.eql("`customers/${id}`");
    
    //?? What should I pass here
    expect(generator.getPathNamesWithSameCustomResourceName('/customers')).to.eql(['/customers']);
    
    expect(generator.getParameterSchema('get')).to.eql(undefined);
    
    expect(generator.hasEmbeddedParams('get')).to.eql(false);
    
    expect(generator.hasRequestParameterRef('get')).to.eql(false);
    
    expect(generator.generateExpandParamConstant('get')).to.eql('');
    
    expect(generator.generateNamedParamsConstant('get')).to.eql('');
    
    expect(generator.generateFunctionName('get')).to.eql('get');
    
    expect(generator.generateFunctionName('get')).to.eql('get');
    
    
})

test('generates proper parameter list', ()=> {
    const generator = generatorFor('/customers/{id}');
    expect(generator.generateParameterList('get')).to.eql('id');
    expect(generator.generateParameterList('put')).to.eql('id,data,expand = null');

    const generator2 = generatorFor('/customers');
    expect(generator2.generateParameterList('get')).to.eql('limit,offset,filter,q,expand = null,fields,sort');
    expect(generator2.generateParameterList('post')).to.eql("id = '',data,expand = null");

})
