export default function AmlResource({apiHandler}) {
    return {
        getAll({firstName, lastName}) {
            return apiHandler.getAll('aml', {firstName, lastName});
        },
    };
};
