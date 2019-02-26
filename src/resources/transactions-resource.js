import {csvHeader} from '../request-headers';

const RESOURCE = 'transactions';

export default function TransactionsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async getAllMatchedRules({id}, params) {
            return await apiHandler.getAll(`${RESOURCE}/${id}/matched-rules`, params);
        },

        async downloadCSV({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const config = {
                params: {
                    limit,
                    offset,
                    sort,
                    expand,
                    filter,
                    q,
                    criteria,
                    cancel,
                },
                headers: csvHeader
            };
            return await apiHandler.download(RESOURCE, config);
        },

        async get({id, expand = null}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, {expand, ...params});
        },

        async create({data, expand = null}, params) {
            return await apiHandler.post(RESOURCE, data, {params: {expand, ...params}});
        },

        async cancel({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/cancel`, null, {params: {...params}});
        },

        async refund({id, data}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/refund`, data, {params: {...params}});
        },

        async getGatewayLogs({id}, params) {
            return await apiHandler.getAll(`${RESOURCE}/${id}/gateway-logs`, params);
        },

        async getLeadSource({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/lead-source`, params);
        },

        async createLeadSource({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}/lead-source`, data, params);
        },

        async updateLeadSource({id, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}/lead-source`, data, params);
        },

        async deleteLeadSource({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}/lead-source`, params);
        },

        async getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/${id}/timeline`, params);
        },

        async getTimelineMessage({id, messageId = ''} = {}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/timeline/${messageId}`, params);
        },

        async deleteTimelineMessage({id, messageId}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}/timeline/${messageId}`, params);
        },

        async createTimelineComment({id, data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}/timeline`, '', data, params);
        },
    };
}
