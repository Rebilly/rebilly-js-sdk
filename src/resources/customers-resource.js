import {csvHeader} from '../request-headers';

export default class CustomersResource {
    constructor({apiHandler}) {
        this.apiHandler = apiHandler
    }

    /**
    * @param { rebilly.GetCustomerCollectionQuery } data
    * @returns { rebilly.GetCustomerCollectionResponse } response
    * Criteria parameter is @deprecated and should be replaced by filter
    */
    // @ts-ignore
    getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, fields = null} = {}) {
        const params = {
            limit,
            offset,
            sort,
            expand,
            filter,
            q,
            criteria,
            fields
        };
        return this.apiHandler.getAll(`customers`, params);
    }

    downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
        const config = {
            params: {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            },
            headers: csvHeader
        };
        return this.apiHandler.download(`customers`, config);
    }

  /**
    * @returns { rebilly.GetCustomerResponse } response
    */
    get({id, expand = null, fields = null}) {
        const params = {expand, fields};
        return this.apiHandler.get(`customers/${id}`, params);
    }

    create({id = '', data, expand = null}) {
        const params = {expand};
        return this.apiHandler.create(`customers/${id}`, id, data, params);
    }

    update({id, data, expand = null}) {
        const params = {expand};
        return this.apiHandler.put(`customers/${id}`, data, params);
    }

    merge({id, targetId = ''}) {
        return this.apiHandler.delete(`customers/${id}?targetCustomerId=${targetId}`);
    }

    getLeadSource({id}) {
        return this.apiHandler.get(`customers/${id}/lead-source`);
    }

    createLeadSource({id, data}) {
        return this.apiHandler.put(`customers/${id}/lead-source`, data);
    }

    updateLeadSource({id, data}) {
        return this.apiHandler.put(`customers/${id}/lead-source`, data);
    }

    deleteLeadSource({id}) {
        return this.apiHandler.delete(`customers/${id}/lead-source`);
    }

    getAllUpcomingInvoices({id = null, limit = null, offset = null, sort = null, filter = null, expand = null} = {}) {
        const params = {
            limit,
            offset,
            sort,
            filter,
            expand,
        };
        return this.apiHandler.getAll(`customers/${id}/upcoming-invoices`, params);
    }

    getAllTimelineMessages({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
        const params = {
            limit,
            offset,
            sort,
            filter,
        };
        return this.apiHandler.getAll(`customers/${id}/timeline`, params);
    }

    getTimelineMessage({id = '', messageId = ''} = {}) {
        return this.apiHandler.get(`customers/${id}/timeline/${messageId}`);
    }

    deleteTimelineMessage({id, messageId}) {
        return this.apiHandler.delete(`customers/${id}/timeline/${messageId}`);
    }

    createTimelineComment({id, data}) {
        return this.apiHandler.create(`customers/${id}/timeline`, '', data);
    }
};
