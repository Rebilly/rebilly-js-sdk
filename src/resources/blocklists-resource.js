export default function BlocklistsResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.GetBlocklistCollectionRequest } request
        * @returns { rebilly.GetBlocklistCollectionResponse } collection
        */
       // @ts-ignore
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
        
        /**
         * @returns { rebilly.GetBlocklistResponse } blocklist
         */
        get({id}) {
            return apiHandler.get(`blocklists/${id}`);
        },
        
        /**
         * @param { rebilly.PostBlocklistDataRequest } request
        * @returns { rebilly.PostBlocklistResponse } blocklist
        */
        create({id = '', data}) {
            return apiHandler.create(`blocklists/${id}`, id, data);
        },

        /**
         * @returns { rebilly.DeleteBlocklistResponse } blocklist
         */
        delete({id}) {
            return apiHandler.delete(`blocklists/${id}`);
        }
    };
};
