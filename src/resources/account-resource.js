export default class AccountResource {

    constructor({apiHandler}) {
        this.apiHandler = apiHandler
    }
    
    /**
    * @param { rebilly.PostSignupRequestDataRequest } data
    * @returns { rebilly.PostSignupResponse } response
    */
    signUp({data}) {
        return this.apiHandler.post(`signup`, data, {authenticate: false});
    }

    /**
    * @param { rebilly.PostSigninRequestDataRequest } data
    * @returns { rebilly.PostSigninResponse } response
    */
    signIn({data}) {
        return this.apiHandler.post(`signin`, data, {authenticate: false});
    }

    /**
    * @returns { rebilly.PostLogoutResponse } response
    */
    logout() {
        return this.apiHandler.post(`logout`);
    }
    
    /**
    * @returns { rebilly.PostActivationResponse } response
    */
    activate({token}) {
        return this.apiHandler.post(`activation/${token}`, null, {authenticate: false});
    }
    
    /**
    * @param { rebilly.PostForgotPasswordRequestDataRequest } data
    * @returns { rebilly.PostForgotPasswordResponse } response
    */
    forgotPassword({data}) {
        return this.apiHandler.post(`forgot-password`, data, {authenticate: false});
    }
    
    resetSandbox() {
        return this.apiHandler.post(`reset-sandbox`);
    }
};

