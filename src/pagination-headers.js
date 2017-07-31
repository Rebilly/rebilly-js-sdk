/**
 * HTTP headers used by Rebilly to define the pagination state for a request
 */
const paginationHeaders = {
    /**
     * Amount of records requested at once
     */
    limit: 'pagination-limit',
    /**
     * Offset from which the records were requested
     */
    offset: 'pagination-offset',
    /**
     * Total amount of records for the collection
     */
    total: 'pagination-total'
};
export default paginationHeaders;
