export default function SegmentsResource({apiHandler}) {
    return {
        getAll({limit = null, offset = null, sort = null, filter = null, q = null, criteria = null, expand = null} = {}) {
            const params = {
                limit,
                offset,
                sort,
                filter,
                q,
                criteria,
                expand,
            };
            return apiHandler.getAll(`grid-segments`, params);
        },

        get({id}) {
            return apiHandler.get(`grid-segments/${id}`);
        },

        create({data}) {
            return apiHandler.create(`grid-segments`, '', data);
        },

        update({id, data}) {
            return apiHandler.put(`grid-segments/${id}`, data);
        },

        delete({id}) {
            return apiHandler.delete(`grid-segments/${id}`);
        },
    };
};
