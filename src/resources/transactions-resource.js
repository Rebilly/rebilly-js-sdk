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

        async getAllMatchedRules({id}) {
            return await apiHandler.getAll(`transactions/${id}/matched-rules`);
        },

        async downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
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
            return await apiHandler.download(`transactions`, config);
        },

        async get({id, expand = null}) {
            const params = {expand};
            return await apiHandler.get(`transactions/${id}`, params);
        },

        async create({data, expand = null}) {
            const params = {expand};
            return await apiHandler.post(`transactions`, data, {params});
        },

        async cancel({id}) {
            return await apiHandler.post(`transactions/${id}/cancel`);
        },

        async refund({id, data}) {
            return await apiHandler.post(`transactions/${id}/refund`, data);
        },

        async getGatewayLogs({id}) {
            return await apiHandler.getAll(`transactions/${id}/gateway-logs`);
        },

        async getLeadSource({id}) {
            return await apiHandler.get(`transactions/${id}/lead-source`);
        },

        async createLeadSource({id, data}) {
            return await apiHandler.put(`transactions/${id}/lead-source`, data);
        },

        async updateLeadSource({id, data}) {
            return await apiHandler.put(`transactions/${id}/lead-source`, data);
        },

        async deleteLeadSource({id}) {
            return await apiHandler.delete(`transactions/${id}/lead-source`);
        },

        async getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`transactions/${id}/timeline`, params);
        },

        async getTimelineMessage({id, messageId = ''} = {}) {
            return await apiHandler.get(`transactions/${id}/timeline/${messageId}`);
        },

        async deleteTimelineMessage({id, messageId}) {
            return await apiHandler.delete(`transactions/${id}/timeline/${messageId}`);
        },

        async createTimelineComment({id, data}) {
            return await apiHandler.create(`transactions/${id}/timeline`, '', data);
        },
    };
};
