export default function AccountResource({apiHandler}) {
    return {
        /**
        * @param { rebilly.PostSignupRequestDataRequest } data
        * @returns { rebilly.PostSignupRequestResponse } response
        */
        signUp({data}) {
            return apiHandler.post(`signup`, data, {authenticate: false});
        },

        /**
        * @param { rebilly.PostSigninRequestDataRequest } data
        * @returns { rebilly.PostSigninRequestResponse } response
        */
        signIn({data}) {
            return apiHandler.post(`signin`, data, {authenticate: false});
        },

        /**
        * @returns { rebilly.PostLogoutRequestResponse } response
        */
        logout() {
            return apiHandler.post(`logout`);
        },

        /**
        * @returns { rebilly.PostActivationResponse } response
        */
        activate({token}) {
            return apiHandler.post(`activation/${token}`, null, {authenticate: false});
        },

        /**
        * @param { rebilly.PostForgotPasswordRequestDataRequest } data
        * @returns { rebilly.PostForgotPasswordRequestResponse } response
        */
        forgotPassword({data}) {
            return apiHandler.post(`forgot-password`, data, {authenticate: false});
        },

        resetSandbox() {
            return apiHandler.post(`reset-sandbox`);
        }
    };
};