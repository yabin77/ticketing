"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const request_validation_error_1 = require("../errors/request-validation-error");
const expressValidator = require('express-validator');
const validateRequest = (req, res, next) => {
    const errors = expressValidator.validationResult(req);
    if (!errors.isEmpty()) {
        throw new request_validation_error_1.RequestValidationError(errors.array());
    }
    next();
};
exports.validateRequest = validateRequest;
