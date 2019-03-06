import {csvHeader} from '../request-headers';

export default function TransactionsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return apiHandler.getAll(`transactions`, params);
        },

        getAllMatchedRules({id}) {
            return apiHandler.getAll(`transactions/${id}/matched-rules`);
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
            return apiHandler.download(`transactions`, config);
        },

        get({id, expand = null}) {
            const params = {expand};
            return apiHandler.get(`transactions/${id}`, params);
        },

        create({data, expand = null}) {
            const params = {expand};
            return apiHandler.post(`transactions`, data, {params});
        },

        cancel({id}) {
            return apiHandler.post(`transactions/${id}/cancel`);
        },

        refund({id, data}) {
            return apiHandler.post(`transactions/${id}/refund`, data);
        },

        getGatewayLogs({id}) {
            return apiHandler.getAll(`transactions/${id}/gateway-logs`);
        },

        getLeadSource({id}) {
            return apiHandler.get(`transactions/${id}/lead-source`);
        },

        createLeadSource({id, data}) {
            return apiHandler.put(`transactions/${id}/lead-source`, data);
        },

        updateLeadSource({id, data}) {
            return apiHandler.put(`transactions/${id}/lead-source`, data);
        },

        deleteLeadSource({id}) {
            return apiHandler.delete(`transactions/${id}/lead-source`);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`transactions/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`transactions/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`transactions/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`transactions/${id}/timeline`, '', data);
        },
    };
};
