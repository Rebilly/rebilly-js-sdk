export default function AmlResource({apiHandler}) {
    return {
        getAll({firstName, lastName, dob = null, country = null}) {
            let params = {firstName, lastName};
            if (dob) {
                params = {...params, dob};
            }

            if (country) {
                params = {...params, country};
            }

            return apiHandler.getAll('aml', params);
        },
    };
};
