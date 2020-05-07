export default function GatewayAccountsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                fields,
            };
            return apiHandler.getAll(`gateway-accounts`, params);
        },

        get({id}) {
            return apiHandler.get(`gateway-accounts/${id}`);
        },

        create({id = '', data}) {
            return apiHandler.create(`gateway-accounts/${id}`, id, data);
        },

        update({id, data}) {
            return apiHandler.patch(`gateway-accounts/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`gateway-accounts/${id}`);
        },

        enable({id}) {
            return apiHandler.post(`gateway-accounts/${id}/enable`);
        },

        disable({id}) {
            return apiHandler.post(`gateway-accounts/${id}/disable`);
        },

        close({id}) {
            return apiHandler.post(`gateway-accounts/${id}/close`);
        },

        getAllDowntimeSchedules({id, limit = null, offset = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                filter,
            };
            return apiHandler.getAll(`gateway-accounts/${id}/downtime-schedules`, params);
        },

        getDowntimeSchedule({id, downtimeScheduleId}) {
            return apiHandler.get(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },

        createDowntimeSchedule({id, data}) {
            // Id for a downtime-schedules cannot be set, is read only.
            return apiHandler.create(`gateway-accounts/${id}/downtime-schedules`, '', data);
        },

        updateDowntimeSchedule({id, downtimeScheduleId, data}) {
            return apiHandler.put(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`, data);
        },

        deleteDowntimeSchedule({id, downtimeScheduleId}) {
            return apiHandler.delete(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },

        getAllVolumeLimits({id}) {
            return apiHandler.getAll(`gateway-accounts/${id}/limits`);
        },

        getVolumeLimit({id, volumeLimitId}) {
            return apiHandler.get(`gateway-accounts/${id}/limits/${volumeLimitId}`);
        },

        createVolumeLimit({id, volumeLimitId, data}) {
            return apiHandler.put(`gateway-accounts/${id}/limits/${volumeLimitId}`, data);
        },

        updateVolumeLimit({id, volumeLimitId, data}) {
            return apiHandler.put(`gateway-accounts/${id}/limits/${volumeLimitId}`, data);
        },

        deleteVolumeLimit({id, volumeLimitId}) {
            return apiHandler.delete(`gateway-accounts/${id}/limits/${volumeLimitId}`);
        },

        getAllTimelineMessages({id, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`gateway-accounts/${id}/timeline`, params);
        },

        getTimelineMessage({id, messageId = ''} = {}) {
            return apiHandler.get(`gateway-accounts/${id}/timeline/${messageId}`);
        },

        deleteTimelineMessage({id, messageId}) {
            return apiHandler.delete(`gateway-accounts/${id}/timeline/${messageId}`);
        },

        createTimelineComment({id, data}) {
            return apiHandler.create(`gateway-accounts/${id}/timeline`, '', data);
        },
    };
};
