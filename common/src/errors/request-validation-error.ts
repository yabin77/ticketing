import { CustomError } from './custom-error';

export interface ValidationError {
  msg: string;
  param: string;
  location?: string;
  value?: any;
}

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Because we are extending a built-in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err: ValidationError) => {
      return { message: err.msg, field: err.param };
    });
  }
}