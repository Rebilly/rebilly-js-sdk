export default function FilesResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
            };
            return apiHandler.getAll(`files`, params);
        },

        get({id}) {
            return apiHandler.get(`files/${id}`);
        },

        upload({fileObject}) {
            return apiHandler.post(`files`, fileObject);
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

        update({id, data}) {
            return apiHandler.put(`files/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`files/${id}`);
        },

        detachAndDelete({id}) {
            const params = {
                filter: `fileId:${id}`,
            };
            let requests = [];
            const handler = async () => {
                const attachments = this.getAllAttachments(params);
                requests.push(attachments);
                const attachmentsResult = await attachments;

                const promises = attachmentsResult.items.map(attachment => this.detach({id: attachment.fields.id}));
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

        getAllAttachments({limit = null, offset = null, sort = null, filter = null, q = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
            };
            return apiHandler.getAll(`attachments`, params);
        },

        getAttachment({id}) {
            return apiHandler.get(`attachments${id}`);
        },

        updateAttachment({id, data}) {
            return apiHandler.put(`attachments/${id}`, data);
        },

        attach({data}) {
            return apiHandler.post(`attachments`, data);
        },

        detach({id}) {
            return apiHandler.delete(`attachments/${id}`);
        },
    };
};
