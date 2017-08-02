import RebillyError from './rebilly-error';

class RebillyRequestError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyRequestError'});
    }
}

class RebillyValidationError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyValidationError'});
    }
}

class RebillyNotFoundError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyNotFoundError'});
    }
}

class RebillyConflictError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyConflictError'});
    }
}

class RebillyForbiddenError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyForbiddenError'});
    }
}

class RebillyMethodNotAllowedError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyMethodNotAllowedError'});
    }
}

class RebillyTimeoutError extends RebillyError {
    constructor(error) {
        super({error, name: 'RebillyTimeoutError'});
    }
}

const Errors = {
    RebillyError,
    RebillyRequestError,
    RebillyValidationError,
    RebillyNotFoundError,
    RebillyInvalidOperationError,
    RebillyForbiddenError,
    RebillyMethodNotAllowedError,
    RebillyTimeoutError
};

export default Errors;
