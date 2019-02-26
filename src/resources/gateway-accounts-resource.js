const RESOURCE = 'gateway-accounts';

export default function GatewayAccountsResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                fields,
                cancel,
            };
            return await apiHandler.getAll(RESOURCE, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}`, params);
        },

        async create({id = '', data}, params) {
            return await apiHandler.create(`${RESOURCE}/${id}`, id, data, params);
        },

        async update({id, data}, params) {
            return await apiHandler.patch(`${RESOURCE}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}`, params);
        },

        async enable({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/enable`, null, {params: {...params}});
        },

        async disable({id}, params) {
            return await apiHandler.post(`${RESOURCE}/${id}/disable`, null, {params: {...params}});
        },

        async getAllDowntimeSchedules({id, limit = null, offset = null, filter = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
                cancel,
            };
            return await apiHandler.getAll(`${RESOURCE}/${id}/downtime-schedules`, params);
        },

        async getDowntimeSchedule({id, downtimeScheduleId}, params) {
            return await apiHandler.get(`${RESOURCE}/${id}/downtime-schedules/${downtimeScheduleId}`, params);
        },

        async createDowntimeSchedule({id, data}, params) {
            // Id for a downtime-schedules cannot be set, is read only.
            return await apiHandler.create(`${RESOURCE}/${id}/downtime-schedules`, '', data, params);
        },

        async updateDowntimeSchedule({id, downtimeScheduleId, data}, params) {
            return await apiHandler.put(`${RESOURCE}/${id}/downtime-schedules/${downtimeScheduleId}`, data, params);
        },

        async deleteDowntimeSchedule({id, downtimeScheduleId}, params) {
            return await apiHandler.delete(`${RESOURCE}/${id}/downtime-schedules/${downtimeScheduleId}`, params);
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
