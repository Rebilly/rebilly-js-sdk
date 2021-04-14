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
    updateRules({eventType, data}) {
      return apiHandler.put(`events/${eventType}/rules`, data);
    },
    getAllTimelineMessages({
      eventType,
      limit = null,
      offset = null,
      filter = null,
    }) {
      const params = {limit, offset, filter};
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
    getAllDraftRuleSets({
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
    createDraftRuleSet({eventType, data}) {
      return apiHandler.post(`events/${eventType}/rules/drafts`, data);
    },
    getAllDraftRuleSet({eventType, id, fields = null, expand = null}) {
      const params = {fields, expand};
      return apiHandler.get(`events/${eventType}/rules/drafts/${id}`, params);
    },
    updateDraftRuleSet({eventType, id, data}) {
      return apiHandler.put(`events/${eventType}/rules/drafts/${id}`, data);
    },
    deleteDraftRuleSet({eventType, id}) {
      return apiHandler.delete(`events/${eventType}/rules/drafts/${id}`);
    },
  };
}
