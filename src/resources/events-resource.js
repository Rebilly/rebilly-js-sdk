/**
* This file was auto-generated by rebilly-sdk-generator.
* Do not make direct changes to this file.
*/

export default function EventsResource({apiHandler}) {
  return {
    getAll() {
      return apiHandler.getAll(`events`);
    },
    get({eventType}) {
      return apiHandler.get(`events/${eventType}`);
    },
    getRules({eventType}) {
      return apiHandler.get(`events/${eventType}/rules`);
    },
    createRules({eventType, data}) {
      return apiHandler.put(`events/${eventType}/rules`, data);
    },
    updateRules({eventType, data}) {
      return apiHandler.put(`events/${eventType}/rules`, data);
    },
    getAllTimelineMessages({
      eventType,
      limit = null,
      offset = null,
      filter = null,
      sort = null,
      q = null,
    }) {
      const params = {limit, offset, filter, sort, q};
      return apiHandler.getAll(`events/${eventType}/timeline`, params);
    },
    createTimelineComment({eventType, data}) {
      return apiHandler.post(`events/${eventType}/timeline`, data);
    },
    getTimelineMessage({eventType, messageId}) {
      return apiHandler.get(`events/${eventType}/timeline/${messageId}`);
    },
    deleteTimelineMessage({eventType, messageId}) {
      return apiHandler.delete(`events/${eventType}/timeline/${messageId}`);
    },
    getRulesHistory({
      eventType,
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
      fields = null,
      expand = null,
    }) {
      const params = {limit, offset, filter, q, sort, fields, expand};
      return apiHandler.getAll(`events/${eventType}/rules/history`, params);
    },
    getRulesVersionNumber({eventType, version, fields = null, expand = null}) {
      const params = {fields, expand};
      return apiHandler.get(
        `events/${eventType}/rules/history/${version}`,
        params
      );
    },
    getRulesVersionDetail({eventType, version, fields = null, expand = null}) {
      const params = {fields, expand};
      return apiHandler.get(
        `events/${eventType}/rules/versions/${version}`,
        params
      );
    },
    getAllDraftRulesets({
      eventType,
      limit = null,
      offset = null,
      filter = null,
      q = null,
      sort = null,
      fields = null,
      expand = null,
    }) {
      const params = {limit, offset, filter, q, sort, fields, expand};
      return apiHandler.getAll(`events/${eventType}/rules/drafts`, params);
    },
    createDraftRuleset({eventType, data}) {
      return apiHandler.post(`events/${eventType}/rules/drafts`, data);
    },
    getDraftRuleset({eventType, id, fields = null, expand = null}) {
      const params = {fields, expand};
      return apiHandler.get(`events/${eventType}/rules/drafts/${id}`, params);
    },
    updateDraftRuleset({eventType, id, data}) {
      return apiHandler.put(`events/${eventType}/rules/drafts/${id}`, data);
    },
    deleteDraftRuleset({eventType, id}) {
      return apiHandler.delete(`events/${eventType}/rules/drafts/${id}`);
    },
  };
}
