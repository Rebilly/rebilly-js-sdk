import {csvHeader} from '../request-headers';

export default function TransactionsResource({apiHandler}) {
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
            return await apiHandler.getAll(`transactions`, params);
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

        async getAllScheduled({limit = null, offset = null, sort = null, expand = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                expand,
                filter,
                q,
                criteria
            };
            return await apiHandler.getAll(`queue/payments`, params);
        },

        async updateScheduled({id, data}) {
            return await apiHandler.put(`queue/payments/${id}`, data);
        },

        async get({id, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.get(`transactions/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`payments/${id}`, id, data);
        },

        async cancel({id}) {
            return await apiHandler.post(`transactions/${id}/cancel`);
        },

        async refund({id, data}) {
            return await apiHandler.post(`transactions/${id}/refund`, data);
        },

        async getGatewayLogs({id}) {
            return await apiHandler.get(`transactions/${id}/gateway-logs`);
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
        }
    };
};
