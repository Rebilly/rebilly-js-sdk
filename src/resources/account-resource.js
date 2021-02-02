export default class AccountResource {

    constructor({apiHandler}) {
        this.apiHandler = apiHandler
    }
    
    /**
    * @param { rebilly.PostSignupRequestDataRequest } data
    * @returns { rebilly.PostSignupRequestResponse } response
    */
    signUp({data}) {
        return this.apiHandler.post(`signup`, data, {authenticate: false});
    }

    /**
    * @param { rebilly.PostSigninRequestDataRequest } data
    * @returns { rebilly.PostSigninRequestResponse } response
    */
    signIn({data}) {
        return this.apiHandler.post(`signin`, data, {authenticate: false});
    }

    /**
    * @returns { rebilly.PostLogoutRequestResponse } response
    */
    logout() {
        // @ts-ignore
        return this.apiHandler.post(`logout`);
    }
    
    /**
    * @returns { rebilly.PostActivationResponse } response
    */
    activate({token}) {
        // @ts-ignore
        return this.apiHandler.post(`activation/${token}`, null, {authenticate: false});
    }
    
    /**
    * @param { rebilly.PostForgotPasswordRequestDataRequest } data
    * @returns { rebilly.PostForgotPasswordRequestResponse } response
    */
    forgotPassword({data}) {
        // @ts-ignore
        return this.apiHandler.post(`forgot-password`, data, {authenticate: false});
    }
    
    resetSandbox() {
        return this.apiHandler.post(`reset-sandbox`);
    }
};

