import { Request, Response, NextFunction } from 'express'

import { CustomError } from '../errors/CustomError'

/**
 * Error Handler Middleware
 *
 * This middleware function is responsible for managing errors that occur during the request-response cycle.
 * It checks if the error is a custom error (e.g., 'BadRequestError') and responds accordingly with the error details.
 * If the error is not a custom error, it logs the error and sends a generic 500 Internal Server Error response.
 *
 * @param {Error} err - The error being handled
 * @param {Request} req - The Express request object
 * @param {Response} res - The Express response object
 * @param {NextFunction} next - The Express next function
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() })
  }

  console.error(err)

  // Unhandled Error
  return res.status(500).send({ errors: [{ message: 'Generic Error' }] })
}
