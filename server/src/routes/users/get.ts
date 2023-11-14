import express, { Request, Response } from 'express'
import { param } from 'express-validator'

import RouteMap from '../../constants/RouteMap'

import { User } from '../../models/User/user'

import HttpStatusCode from '../../constants/HTTPStatusCode'
import { requireAuth } from '../../middlewares/require-auth'
import { validateRequest } from '../../middlewares/validate-request'
import { NotFoundError } from '../../errors/NotFoundError'

import { Types } from 'mongoose'

const router = express.Router()

router[RouteMap.GET_USER.method](
  RouteMap.GET_USER.path,
  requireAuth,
  [
    param('userId')
      .custom((input: string) => Types.ObjectId.isValid(input))
      .withMessage('userId must be valid.'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const userId = req.params.userId

    const existingUser = await User.findById(userId)

    if (!existingUser) {
      throw new NotFoundError()
    }

    res.status(HttpStatusCode.OK_200).send({
      user: existingUser,
    })
  }
)

export { router as getUserRouter }
