import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface UserPayload {
  id: string
  email: string
}

// Augmenting Type Definition
declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload
    }
  }
}

/**
 * Middleware to extract and verify the user payload from the JWT stored in the user session.
 *
 * If the user is not logged in (no JWT in the session), the middleware proceeds to the next/final middleware.
 * If a valid JWT is present, the user payload is extracted and added to the Express Request object as 'currentUser'.
 * If the JWT is invalid or an error occurs during verification, the middleware also proceeds to the next/final middleware.
 *
 * This middleware is used globally in the application to ensure that the 'currentUser' information is available
 * for all routes that require authentication. It is crucial to place this middleware BEFORE other routes in the
 * middleware stack to ensure it is activated first.
 *
 * @param {import('express').Request} req - The Express Request object
 * @param {import('express').Response} res - The Express Response object
 * @param {import('express').NextFunction} next - The Express NextFunction callback
 *
 * @example
 * // Global usage in the 'app.ts' file
 * const app = express()
 * // Ensure currentUser middleware is placed before other routes to activate it first
 * app.use(currentUser)
 *
 * // Usage in an Express route
 * router.get(
 *   '/example-route',
 *   currentUser,
 *   (req, res) => {
 *     // Access the user payload via req.currentUser if logged in
 *     const userId = req.currentUser?.id
 *     const userEmail = req.currentUser?.email
 *
 *     // Your route logic here
 *   }
 * )
 */
export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Not logged in
  if (!req.session?.jwt) {
    return next()
  }

  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload

    // Logged in
    req.currentUser = payload
  } catch (err) {
    // next()   // Better to call it as below. We want it to go next middleware no matter what.
  }

  next()
}
