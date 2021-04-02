import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

global.jestExpect = global.expect;
global.expect = chai.expect;
chai.use(sinonChai);

global.before = beforeAll;
global.after = afterAll;
global.context = describe;
global.sinon = sinon;
