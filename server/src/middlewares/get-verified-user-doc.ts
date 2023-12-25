import { Request, Response, NextFunction } from 'express'

// import { UserStatus } from '../models/User/user'
import { Administrator, AdministratorDoc } from '../models/User/administrator'

import { BadRequestError } from '../errors/BadRequestError'

// Augmenting Type Definition
declare global {
  namespace Express {
    interface Request {
      authenticatedUserDoc?: AdministratorDoc
    }
  }
}

export const getVerifiedUserDoc = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.currentUser?.id

  // const adminUser = await Administrator.findOne({
  //   id: userId,
  //   // status: UserStatus.ACTIVE
  // })
  const adminUser = await Administrator.findById(userId)

  if (!adminUser) {
    throw new BadRequestError(
      'Invalid Credentials! User that is contained by the provided token may not be associated within this app!'
    )
  }

  req.authenticatedUserDoc = adminUser

  next()
}
