import { ValidationError } from "express-validator"

import { CustomError } from "./CustomError"
import HttpStatusCode from "../constants/HTTPStatusCode"

export class RequestValidationError extends CustomError {
    public readonly statusCode = HttpStatusCode.BAD_REQUEST_400

    constructor(public errors: ValidationError[]) {
        super('Invalid request parameters!')

        // Only because we are extending a built-in class (kinda es5 rule)
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    public serializeErrors = () => {
        const formattedErrors = this.errors.map((err) => {
            return {
                message: err.msg,
                field: err.param
            }
        })

        return formattedErrors
    }
}
