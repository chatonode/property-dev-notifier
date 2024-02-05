import { Request, Response, NextFunction } from 'express'

import { NotAuthorizedError } from '../errors/NotAuthorizedError'

/**
 * Middleware to ensure that the user is authenticated.
 *
 * If the user is not authenticated (currentUser is not present in the request),
 * it throws a {@link NotAuthorizedError}. If the user is authenticated, it proceeds
 * to the next/final middleware.
 *
 * This middleware is often used in conjunction with the {@link currentUser|currentUser} middleware,
 * which extracts and verifies the user payload from the JWT stored in the user session.
 * Placing `requireAuth` after `currentUser` in the middleware stack ensures that the user
 * is authenticated before accessing protected routes.
 *
 * @param {import('express').Request} req - The Express Request object
 * @param {import('express').Response} res - The Express Response object
 * @param {import('express').NextFunction} next - The Express NextFunction callback
 *
 * @throws {NotAuthorizedError} Throws an error if the user is not authenticated.
 *
 * @example
 * // Usage in an Express route
 * router.get(
 *   '/authenticated-route',
 *   currentUser,   // or globally, `app.use(currentUser)` in the 'app.ts' file
 *   requireAuth,
 *   (req, res) => {
 *     // Your route logic here, accessible only to authenticated users
 *   }
 * )
 */
export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.currentUser) {
    throw new NotAuthorizedError()
  }

  next()
}
