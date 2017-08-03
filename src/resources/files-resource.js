export default function FilesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`files`, params);
        },

        async get({id}) {
            return await apiHandler.get(`files/${id}`);
        },

        async upload({fileObject, data = {description: '', tags: ['']}}) {
            const file = await apiHandler.post(`files`, fileObject);
            const params = {
                name: file.name,
                extension: file.extension,
                description: data.description,
                tags: data.tags,
                url: ''
            };
            return await this.update({id: file.fields.id, data: params});
        },

        async update({id, data}) {
            return await apiHandler.put(`files/${id}`, data);
        },

        async delete({id}) {
            const params = {
                filter: `fileId:${id}`
            };
            const attachments = await apiHandler.getAll(`attachments`, params);
            const promises = attachments.items.map(attachment => apiHandler.delete(`attachments/${attachment.fields.id}`));
            await Promise.all(promises);
            return await apiHandler.delete(`files/${id}`);
        },

        async download({id}) {
            return await apiHandler.get(`files/${id}/download`);
        },

        async getAllAttachments({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q
            };
            return await apiHandler.getAll(`attachments`, params)
        },

        async getAttachment({id}) {
            return await apiHandler.get(`attachments${id}`);
        },

        async updateAttachment({id, data}) {
            return await apiHandler.put(`attachments/${id}`, data);
        },

        async attach({data}) {
            return await apiHandler.post(`attachments`, data);
        },

        async detach({id}) {
            return await apiHandler.delete(`attachments/${id}`)
        }
    };
};
