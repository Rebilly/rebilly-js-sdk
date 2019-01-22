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

        async get({id, expand = null}) {
            const params = {
                expand
            };
            return await apiHandler.get(`subscriptions/${id}`, params);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`subscriptions/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.put(`subscriptions/${id}`, data);
        },

        /**
         * Use resource `subscriptionCancellations` instead.
         * @deprecated
         * @param id
         * @param data
         * @returns {Promise<any>}
         */
        async cancel({id, data}) {
            return await apiHandler.post(`subscriptions/${id}/cancel`, data);
        },

        async changePlan({id, data}) {
            return await apiHandler.post(`subscriptions/${id}/change-plan`, data);
        },

        async getLeadSource({id}) {
            return await apiHandler.get(`subscriptions/${id}/lead-source`);
        },

        async createLeadSource({id, data}) {
            return await apiHandler.put(`subscriptions/${id}/lead-source`, data);
        },

        async deleteLeadSource({id}) {
            return await apiHandler.delete(`subscriptions/${id}/lead-source`);
        },

        async getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`subscriptions/${id}/timeline`, params);
        },

        async getTimelineMessage({id, messageId = ''} = {}) {
            return await apiHandler.get(`subscriptions/${id}/timeline/${messageId}`);
        },

        async deleteTimelineMessage({id, messageId}) {
            return await apiHandler.delete(`subscriptions/${id}/timeline/${messageId}`);
        },

        async createTimelineComment({id, data}) {
            return await apiHandler.create(`subscriptions/${id}/timeline`, '', data);
        },
    };
};
