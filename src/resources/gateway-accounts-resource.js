export default function GatewayAccountsResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetGatewayAccountCollectionRequest } data
        * @returns { rebilly.GetGatewayAccountCollectionResponse } collection
        */
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, fields = null}={}) {
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

        /** 
        * @returns { rebilly.GetGatewayAccountCollectionResponse } response
        */
        get({id}) {
            return apiHandler.get(`gateway-accounts/${id}`);
        },

        /**
        * @param { rebilly.PostGatewayAccountDataRequest } data
        * @returns { rebilly.PostGatewayAccountResponse } response
        */
        create({id = '', data}) {
            return apiHandler.create(`gateway-accounts/${id}`, id, data);
        },

        /**
        * @param { rebilly.PutGatewayAccountDataRequest } data
        * @returns { rebilly.PutGatewayAccountResponse } response
        */
       update({id, data}) {
           return apiHandler.patch(`gateway-accounts/${id}`, data);
        },
        
        /**
        * @returns { rebilly.DeleteGatewayAccountResponse } response
        */
       delete({id}) {
           // @ts-ignore
           return apiHandler.delete(`gateway-accounts/${id}`);
        },
        
        /**
        * @returns { rebilly.PostGatewayAccountEnablementResponse } response
        */
       enable({id}) {
           return apiHandler.post(`gateway-accounts/${id}/enable`);
        },
        
        /**
        * @returns { rebilly.PostGatewayAccountDisablementResponse } response
        */
       disable({id}) {
           return apiHandler.post(`gateway-accounts/${id}/disable`);
        },
        
        /**
        * @returns { rebilly.PostGatewayAccountClosureResponse } response
        */
       close({id}) {
           return apiHandler.post(`gateway-accounts/${id}/close`);
        },
        
        checkCredentials({id}) {
            return apiHandler.post(`gateway-accounts/${id}/check-credentials`);
        },
        
        /**
        * @returns { rebilly.GetGatewayAccountDowntimeScheduleCollectionResponse } response
        */
       getAllDowntimeSchedules({id = null, limit = null, offset = null, filter = null} = {}) {
           const params = {
               limit,
               offset,
               filter,
            };
            return apiHandler.getAll(`gateway-accounts/${id}/downtime-schedules`, params);
        },
        
        //TODO: fix add type
        getDowntimeSchedule({id, downtimeScheduleId}) {
            return apiHandler.get(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },
        
        /**
        * @param { rebilly.PostGatewayAccountDowntimeScheduleDataRequest } data
        * @returns { rebilly.PostGatewayAccountDowntimeScheduleResponse } collection
        */
       createDowntimeSchedule({id, data}) {
           // Id for a downtime-schedules cannot be set, is read only.
           return apiHandler.create(`gateway-accounts/${id}/downtime-schedules`, '', data);
        },
        
        /**
        * @param { rebilly.PutGatewayAccountDowntimeScheduleDataRequest } data
        * @returns { rebilly.PutGatewayAccountDowntimeScheduleResponse } collection
        */
        updateDowntimeSchedule({id, downtimeScheduleId, data}) {
            return apiHandler.put(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`, data);
        },
        
        /**
        * @returns { rebilly.DeleteGatewayAccountDowntimeScheduleResponse } response
        */
       deleteDowntimeSchedule({id, downtimeScheduleId}) {
           // @ts-ignore
           return apiHandler.delete(`gateway-accounts/${id}/downtime-schedules/${downtimeScheduleId}`);
        },
        
        /**
         * @param { rebilly.GetGatewayAccountLimitCollectionRequest } data
         * @returns { rebilly.GetGatewayAccountLimitCollectionResponse } collection
         */
        getAllVolumeLimits({id}) {
            return apiHandler.getAll(`gateway-accounts/${id}/limits`);
        },
        
        /**
        * @returns { rebilly.GetGatewayAccountLimitResponse } response
        */
        getVolumeLimit({id, volumeLimitId}) {
            return apiHandler.get(`gateway-accounts/${id}/limits/${volumeLimitId}`);
        },

        /**
        * @param { rebilly.PutGatewayAccountLimitDataRequest } data
        * @returns { rebilly.PutGatewayAccountLimitResponse } response
        */
       createVolumeLimit({id, volumeLimitId, data}) {
           return apiHandler.put(`gateway-accounts/${id}/limits/${volumeLimitId}`, data);
        },
        
        /**
        * @param { rebilly.PutGatewayAccountLimitDataRequest } data
        * @returns { rebilly.PutGatewayAccountLimitResponse } response
        */
        updateVolumeLimit({id, volumeLimitId, data}) {
            return apiHandler.put(`gateway-accounts/${id}/limits/${volumeLimitId}`, data);
        },

        /**
        * @returns { rebilly.DeleteGatewayAccountLimitResponse } response
        */
       deleteVolumeLimit({id, volumeLimitId}) {
           // @ts-ignore
           return apiHandler.delete(`gateway-accounts/${id}/limits/${volumeLimitId}`);
        },
        
        /**
         * @param { rebilly.GetGatewayAccountTimelineCollectionRequest } data
         * @returns { rebilly.GetGatewayAccountTimelineCollectionResponse } collection
         */
        // @ts-ignore
        getAllTimelineMessages({id = null, limit = null, offset = null, sort = null, filter = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
            };
            return apiHandler.getAll(`gateway-accounts/${id}/timeline`, params);
        },
        
        /**
        * @returns { rebilly.GetGatewayAccountTimelineResponse } response
        */
       getTimelineMessage({id = null, messageId = ''} = {}) {
           return apiHandler.get(`gateway-accounts/${id}/timeline/${messageId}`);
        },
        
        /**
        * @returns { rebilly.DeleteGatewayAccountTimelineResponse } response
        */
       deleteTimelineMessage({id, messageId}) {
           // @ts-ignore
           return apiHandler.delete(`gateway-accounts/${id}/timeline/${messageId}`);
        },
        
        /**
        * @param { rebilly.PostGatewayAccountTimelineRequest } response
        * @returns { rebilly.PostGatewayAccountTimelineResponse } response
        */
        // @ts-ignore
        createTimelineComment({id, data}) {
            return apiHandler.create(`gateway-accounts/${id}/timeline`, '', data);
        },
    };
};
