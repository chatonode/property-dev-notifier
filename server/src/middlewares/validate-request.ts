import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/RequestValidationError'

export const validateRequest = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Pull off any errors that might have occured <= Take a look at req object
    const errors = validationResult(req)

    // See if any errors actually exist
    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array())
    }

    // No errors, so continue to next/final middleware
    next()
}
