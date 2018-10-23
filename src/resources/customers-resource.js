import {csvHeader} from '../request-headers';

export default function CustomersResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`customers`, params);
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
            return await apiHandler.download(`customers`, config);
        },

        async get({id, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.get(`customers/${id}`, params);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`customers/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`customers/${id}`, data);
        },

        async getLeadSource({id}) {
            return await apiHandler.get(`customers/${id}/lead-source`);
        },

        async createLeadSource({id, data}) {
            return await apiHandler.put(`customers/${id}/lead-source`, data);
        },

        async updateLeadSource({id, data}) {
            return await apiHandler.put(`customers/${id}/lead-source`, data);
        },

        async deleteLeadSource({id}) {
            return await apiHandler.delete(`customers/${id}/lead-source`);
        },

        async getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`customers/${id}/timeline`, params);
        },

        async getTimelineMessage({id, messageId = ''} = {}) {
            return await apiHandler.get(`customers/${id}/timeline/${messageId}`);
        },

        async deleteTimelineMessage({id, messageId}) {
            return await apiHandler.delete(`customers/${id}/timeline/${messageId}`);
        },

        async createTimelineComment({id, data}) {
            return await apiHandler.create(`customers/${id}/timeline`, '', data);
        },
    };
};
