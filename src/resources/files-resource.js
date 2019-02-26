const FILES = 'files';
const ATTACHMENTS = 'attachments';

export default function FilesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                cancel,
            };
            return await apiHandler.getAll(FILES, params);
        },

        async get({id}, params) {
            return await apiHandler.get(`${FILES}/${id}`, params);
        },

        async upload({fileObject}, params) {
            return await apiHandler.post(FILES, fileObject, {params: {...params}});
        },

        async uploadAndUpdate({fileObject, data = {description: '', tags: ['']}}, {cancel = null} = {}) {
            const file = await this.upload({fileObject}, {cancel});
            const params = {
                name: file.name,
                extension: file.extension,
                description: data.description,
                tags: data.tags,
                url: ''
            };
            return await this.update({id: file.fields.id, data: params}, {cancel});
        },

        async update({id, data}, params) {
            return await apiHandler.put(`${FILES}/${id}`, data, params);
        },

        async delete({id}, params) {
            return await apiHandler.delete(`${FILES}/${id}`, params);
        },

        async detachAndDelete({id}, {cancel = null} = {}) {
            const params = {
                filter: `fileId:${id}`,
                cancel,
            };
            const attachments = await this.getAllAttachments(params);
            const promises = attachments.items.map(attachment => this.detach({id: attachment.fields.id}));
            await Promise.all(promises);
            return await apiHandler.delete(`${FILES}/${id}`, {cancel});
        },

        async download({id}, params) {
            const config = {
                responseType: 'arraybuffer'
            };
            return await apiHandler.download(`${FILES}/${id}/download`, {...config, params: {...params}});
        },

        async getAllAttachments({limit = null, offset = null, sort = null, filter = null, q = null, cancel = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                cancel,
            };
            return await apiHandler.getAll(ATTACHMENTS, params)
        },

        async getAttachment({id}, params) {
            return await apiHandler.get(`${ATTACHMENTS}/${id}`, params);
        },

        async updateAttachment({id, data}, params) {
            return await apiHandler.put(`${ATTACHMENTS}/${id}`, data, params);
        },

        async attach({data}, params) {
            return await apiHandler.post(ATTACHMENTS, data, {params: {...params}});
        },

        async detach({id}, params) {
            return await apiHandler.delete(`${ATTACHMENTS}/${id}`, params)
        }
    };
}
