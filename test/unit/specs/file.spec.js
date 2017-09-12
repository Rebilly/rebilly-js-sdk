import chai from 'chai';
import MockRebillyAPI from '../mock-rebilly-js-sdk';

const expect = chai.expect;

describe('when I download a file', () => {
    const api = MockRebillyAPI({apiKey: '00000000000000000', sandbox: true});
    let file;
    before(async () => {
        file = await api.transactions.downloadCSV();
    });
    it('should define a property called response', () => {
        expect(file.response).to.not.be.undefined;
        expect(file.response.status).to.be.equal(200);
    });
    it('should return the download data', () => {
        expect(file.data).to.be.a('array');
    });
});

