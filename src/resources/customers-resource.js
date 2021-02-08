import {csvHeader} from '../request-headers';

export default function CustomersResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetCustomerCollectionRequest } data
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
            return apiHandler.getAll(`customers`, params);
        },

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
            return apiHandler.download(`customers`, config);
        },

        /**
        * @returns { rebilly.GetCustomerResponse } response
        */
        get({id, expand = null, fields = null}) {
            const params = {expand, fields};
            return apiHandler.get(`customers/${id}`, params);
        },

        create({id = '', data, expand = null}) {
            const params = {expand};
            return apiHandler.create(`customers/${id}`, id, data, params);
        },

        update({id, data, expand = null}) {
            const params = {expand};
            return apiHandler.put(`customers/${id}`, data, params);
        },

        merge({id, targetId = ''}) {
            return apiHandler.delete(`customers/${id}?targetCustomerId=${targetId}`);
        },

        getLeadSource({id}) {
            return apiHandler.get(`customers/${id}/lead-source`);
        },

        createLeadSource({id, data}) {
            return apiHandler.put(`customers/${id}/lead-source`, data);
        },

        updateLeadSource({id, data}) {
            return apiHandler.put(`customers/${id}/lead-source`, data);
        },

        deleteLeadSource({id}) {
            return apiHandler.delete(`customers/${id}/lead-source`);
        },

        getAllUpcomingInvoices({id = null, limit = null, offset = null, sort = null, filter = null, expand = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                expand,
            };
            return apiHandler.getAll(`customers/${id}/upcoming-invoices`, params);
        },

        getAllTimelineMessages({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`customers/${id}/timeline`, params);
        },

        getTimelineMessage({id = null, messageId = ''} = {}) {
            return apiHandler.get(`customers/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`customers/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`customers/${id}/timeline`, '', data);
        },
    };
};