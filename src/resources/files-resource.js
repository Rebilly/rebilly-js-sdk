export default function FilesResource({apiHandler}) {
    return {
        async getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
            };
            return await apiHandler.getAll(`files`, params);
        },

        async get({id}) {
            return await apiHandler.get(`files/${id}`);
        },

        async upload({fileObject}) {
            return await apiHandler.post(`files`, fileObject);
        },

        uploadAndUpdate({fileObject, data = {description: '', tags: ['']}}) {

            const requests = [];
            const handler = async () => {
                const file = this.upload({fileObject});
                requests.push(file);

                await file;
                const params = {
                    name: file.name,
                    extension: file.extension,
                    description: data.description,
                    tags: data.tags,
                    url: '',
                };

                const result = this.update({id: file.fields.id, data: params});
                requests.push(result);
                return result;
            };

            const result = handler();
            result.cancel = () => {
                requests.forEach(req => req.cancel());
            };
            return result;
        },

        async update({id, data}) {
            return await apiHandler.put(`files/${id}`, data);
        },

        async delete({id}) {
            return await apiHandler.delete(`files/${id}`);
        },

        async detachAndDelete({id}) {
            const params = {
                filter: `fileId:${id}`,
            };
            let requests = [];
            const handler = async () => {
                const attachments = this.getAllAttachments(params);
                requests.push(attachments);
                await attachments;

                const promises = attachments.items.map(attachment => this.detach({id: attachment.fields.id}));
                requests = [...requests, promises];
                await Promise.all(promises);

                const result = apiHandler.delete(`files/${id}`);
                requests.push(result);
                return result;
            };

            const result = handler();
            result.cancel = () => {
                requests.forEach(req => req.cancel());
            };
            return result;
        },

        download({id}) {
            const config = {
                responseType: 'arraybuffer',
            };
            return apiHandler.download(`files/${id}/download`, config);
        },

        async getAllAttachments({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
            };
            return apiHandler.getAll(`attachments`, params);
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

        detach({id}) {
            return apiHandler.delete(`attachments/${id}`);
        },
    };
};
