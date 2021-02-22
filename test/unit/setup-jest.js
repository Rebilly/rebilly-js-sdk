import chai from 'chai';
import sinon from 'sinon';

global.jestExpect = global.expect;
global.expect = chai.expect;

global.before = beforeAll;
global.after = afterAll;
global.context = describe;
global.sinon = sinon;
