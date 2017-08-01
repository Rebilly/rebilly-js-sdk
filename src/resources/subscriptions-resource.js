import {csvHeader} from '../request-headers';

export default function SubscriptionsResource({apiHandler}) {
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
            return await apiHandler.getAll(`subscriptions`, params);
        },

        async getAllMatchedRules({id}) {
            return await apiHandler.getAll(`subscriptions/${id}/matched-rules`);
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
            return await apiHandler.download(`subscriptions`, config);
        },

        async get({id}) {
            return await apiHandler.get(`subscriptions/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`subscriptions/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`subscriptions/${id}`, data);
        },

        async cancel({id, data}) {
            return await apiHandler.post(`subscriptions/${id}/cancel`, data);
        },

        async switch({id, data}) {
            return await apiHandler.post(`subscriptions/${id}/switch`, data);
        },

        async getLeadSource({id}) {
            return await apiHandler.get(`subscriptions/${id}/lead-source`);
        },

        async createLeadSource({id, data}) {
            return await apiHandler.put(`subscriptions/${id}/lead-source`, data);
        },

        async deleteLeadSource({id}) {
            return await apiHandler.delete(`subscriptions/${id}/lead-source`);
        }
    };
};
