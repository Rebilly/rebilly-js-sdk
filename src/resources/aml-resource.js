export default function AmlResource({apiHandler}) {
    return {
        getAll({firstName, lastName, dob = null}) {
            let params = {firstName, lastName};
            if (dob) {
                params = {...params, dob};
            }

            return apiHandler.getAll('aml', params);
        },
    };
};
