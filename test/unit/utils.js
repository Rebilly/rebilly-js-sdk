import paginationHeaders from '../../src/pagination-headers';

export function createMockHeaders({total, limit = 100, offset = 0}) {
    return {
        [paginationHeaders.limit]: limit,
        [paginationHeaders.offset]: offset,
        [paginationHeaders.total]: total,
    }
}
