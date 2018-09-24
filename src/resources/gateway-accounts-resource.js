export default function GatewayAccountsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                fields,
            };
            return await apiHandler.getAll(`gateway-accounts`, params);
        },

        async get({id}) {
            return await apiHandler.get(`gateway-accounts/${id}`);
        },

        async create({id = '', data}) {
            return await apiHandler.create(`gateway-accounts/${id}`, id, data);
        },

        async update({id, data}) {
            return await apiHandler.patch(`gateway-accounts/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`gateway-accounts/${id}`);
        },

        async enable({id}) {
            return await apiHandler.post(`gateway-accounts/${id}/enable`);
        },

        async disable({id}) {
            return await apiHandler.post(`gateway-accounts/${id}/disable`);
        },

        async getAllDowntimeSchedules({id, limit = null, offset = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
            };
            return await apiHandler.getAll(`gateway-accounts/${id}/downtime-schedules`, params);
        },

        async getDowntimeSchedule({id, downtimeScheduleId}) {
            return await apiHandler.get(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },

        async createDowntimeSchedule({id, data}) {
            // Id for a downtime-schedules cannot be set, is read only.
            return await apiHandler.create(`gateway-accounts/${id}/downtime-schedules`, '', data);
        },

        async updateDowntimeSchedule({id, downtimeScheduleId, data}) {
            return await apiHandler.put(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`, data);
        },

        async deleteDowntimeSchedule({id, downtimeScheduleId}) {
            return await apiHandler.delete(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },

        async getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return await apiHandler.getAll(`gateway-accounts/${id}/timeline`, params);
        },

        async getTimelineMessage({id, messageId = ''} = {}) {
            return await apiHandler.get(`gateway-accounts/${id}/timeline/${messageId}`);
        },

        async deleteTimelineMessage({id, messageId}) {
            return await apiHandler.delete(`gateway-accounts/${id}/timeline/${messageId}`);
        },

        async createTimelineComment({id, data}) {
            return await apiHandler.create(`gateway-accounts/${id}/timeline`, '', data);
        },
    };
};
