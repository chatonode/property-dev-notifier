import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/RequestValidationError'

/**
 * Middleware to validate the Express request using express-validator.
 *
 * This middleware is designed to be used with express-validator to check for
 * validation errors in the request. If any validation errors are found,
 * it throws a {@link RequestValidationError} containing details about the errors.
 * If there are no validation errors, the middleware allows the request to proceed
 * to the next/final middleware in the stack.
 *
 * @param {import('express').Request} req - The Express Request object
 * @param {import('express').Response} res - The Express Response object
 * @param {import('express').NextFunction} next - The Express NextFunction callback
 *
 * @throws {RequestValidationError} Throws an error if there are validation errors
 * in the request. The error contains details about the validation failures.
 *
 * @example
 * // Usage in an Express route
 * router.post(
 *   '/example-route',
 *   [
 *     body('fieldName').isString().notEmpty(),
 *     param('paramName').isInt().withMessage('Parameter must be an integer'),
 *     // Additional validation rules...
 *   ],
 *   validateRequest,
 *   (req, res) => {
 *     // Your route logic here
 *   }
 * )
 */
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
