export default function AuthorizationResource({apiHandler}) {
    return {
        login({data = null} = {}) {
            return apiHandler.post(`login`, data);
        },

        logout() {
          return apiHandler.post(`logout`);
        },
    }
}
