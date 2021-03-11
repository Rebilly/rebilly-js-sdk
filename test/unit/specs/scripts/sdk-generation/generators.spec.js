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

test('gets all parameter names', ()=> {
    const generator = generatorFor('/customers/{id}');
    expect(generator.getAllParamNames('get')).to.eql(['id']);
    expect(generator.getAllParamNames('put')).to.eql(['id', 'data', 'expand']);

    const generator2 = generatorFor('/customers');
    expect(generator2.getAllParamNames('get')).to.eql(['limit','offset', 'filter','q', 'expand' ,'fields','sort']);
    expect(generator2.getAllParamNames('post')).to.eql(['id', 'data', 'expand']);
})

test('generates default optional arguments', ()=> {
    const generator = generatorFor('/customers');
    expect(generator.generateDefaultOptionalArguments('get')).to.eql('{ limit = null,offset = null,filter = null,q = null,expand = null,fields = null,sort = null } = {}');
})

test('gets optional parameters', ()=> {
    const generator = generatorFor('/customers');
    expect(generator.getOptionalParameters('get')).to.eql([]);
    expect(generator.getOptionalParameters('post')).to.eql([]);
})

test('gets optional arguments', ()=> {
    const generator = generatorFor('/customers');
    expect(generator.generateArgumentsWithDefaults('post')).to.eql("id = '',data,expand = null");
})

test('gets optional arguments for aml', ()=> {
    const generator = generatorFor('/aml');
    expect(generator.getOptionalParameters('get')).to.eql(["dob", "country"]);
    expect(generator.generateArgumentsWithDefaults('get')).to.eql("firstName,lastName,dob = null,country = null");
})
