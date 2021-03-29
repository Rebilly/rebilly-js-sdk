export default function BlocklistsResource({apiHandler}) {
    return {
       getAll({limit = null, offset = null, sort = null, q = null, filter = null} = {}) {
           const params = {
               limit,
               offset,
               sort,
               q,
               filter
            };
            return apiHandler.getAll(`blocklists`, params);
        },
        
        get({id}) {
            return apiHandler.get(`blocklists/${id}`);
        },
        
        create({id = '', data}) {
            return apiHandler.create(`blocklists/${id}`, id, data);
        },

        delete({id}) {
            return apiHandler.delete(`blocklists/${id}`);
        }
    };
};
