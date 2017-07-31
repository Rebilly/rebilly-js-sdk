import chai from 'chai';
import faker from 'faker';
import deepFreeze from '../../../src/deep-freeze.js';

const expect = chai.expect;

describe('when I using deep-freeze helper function', () => {
    const testObj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    };
    const testFunc = () => ({fullName: `${testObj.firstName} ${testObj.lastName}`});

    it('I can freeze an object', () => {
        const literalStub = deepFreeze(testObj);
        expect(literalStub).to.be.frozen;
    });

    it('I can freeze a function', () => {
        const functionStub = deepFreeze(testFunc);
        expect(functionStub).to.be.frozen;
    });

    it('I cannot modify the objects after they were frozen', () => {
        const literalStub = deepFreeze(testObj);
        const functionStub = deepFreeze(testFunc);
        expect(() => literalStub.firstName = faker.name.firstName()).to.throw(TypeError);
        expect(() => functionStub.prototype.something = true).to.throw(TypeError);
    })
});

