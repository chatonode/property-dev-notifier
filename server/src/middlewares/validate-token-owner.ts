import { Request, Response, NextFunction } from 'express'

// import { UserStatus } from '../models/User/user'
import { Administrator, AdministratorDoc } from '../models/User/administrator'

import { InvalidTokenError } from '../errors/InvalidTokenError'

// Augmenting Type Definition
declare global {
  namespace Express {
    interface Request {
      currentUserDoc?: AdministratorDoc
    }
  }
}

/**
 * Middleware to validate the ownership of an authentication token and ensure the existence
 * of the associated user document in the database.
 *
 * This middleware is typically used in an authentication-related middleware cycle, following
 * the {@link currentUser|currentUser} and {@link requireAuth|requireAuth} middlewares.
 * It verifies that the user associated with the authentication token actually exists in the
 * database for user document-related operations. If the user is not found or the token is invalid,
 * it throws an {@link InvalidTokenError}.
 *
 * Placing `validateTokenOwner` after `currentUser` and `requireAuth` in the middleware stack ensures
 * that the user is authenticated and that the token ownership is validated before performing
 * user document-related operations.
 *
 * @param {import('express').Request} req - The Express Request object
 * @param {import('express').Response} res - The Express Response object
 * @param {import('express').NextFunction} next - The Express NextFunction callback
 *
 * @throws {InvalidTokenError} Throws an error if the user associated with the token
 * does not exist in the database or the token is invalid.
 *
 * @example
 * // Usage in an Express route
 * router.post(
 *   '/authenticated-route',
 *   currentUser,   // or globally, `app.use(currentUser)` in the 'app.ts' file
 *   requireAuth,
 *   validateTokenOwner,
 *   (req, res) => {
 *     // Your route logic here, accessible only to authenticated users
 *     // with a valid and verified authentication token.
 *   }
 * );
 */
export const validateTokenOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Extract user ID extracted from the token by requireAuth
  const userId = req.currentUser?.id

  // TODO: Later Improvement
  // const adminUser = await Administrator.findOne({
  //   id: userId,
  //   // status: UserStatus.ACTIVE
  // })

  const adminUser = await Administrator.findById(userId)

  if (!adminUser) {
    throw new InvalidTokenError()
  }

  req.currentUserDoc = adminUser

  next()
}
