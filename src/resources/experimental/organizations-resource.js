export default function OrganizationsResource({apiHandler}) {
    return {
        create({id = '', data}) {
            return apiHandler.create(`organizations/${id}`, id, data);
        },
    };
};
