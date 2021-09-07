import faker from 'faker';
import deepFreeze from '../../../src/deep-freeze.js';


describe('when I using deep-freeze helper function', () => {
    const testObj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName()
    };
    const testFunc = () => ({fullName: `${testObj.firstName} ${testObj.lastName}`});

    it('I can freeze an object', () => {
        const literalStub = deepFreeze(testObj);
        expect(Object.isFrozen(literalStub)).toBe(true);
    });

    it('I can freeze a function', () => {
        const functionStub = deepFreeze(testFunc);
        expect(Object.isFrozen(functionStub)).toBe(true);
    });

    it('I cannot modify the objects after they were frozen', () => {
        const literalStub = deepFreeze(testObj);
        const functionStub = deepFreeze(testFunc);
        expect(() => literalStub.firstName = faker.name.firstName()).toThrowError(TypeError);
        expect(() => functionStub.prototype.something = true).toThrowError(TypeError);
    })
});

