import {createMockHeaders} from '../utils';

export default function transactionsMock({adapter}) {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    adapter.onGet('/transactions').reply(200, data, createMockHeaders({total: data.length}));
}
