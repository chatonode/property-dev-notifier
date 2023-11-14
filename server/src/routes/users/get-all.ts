import express, { Request, Response } from 'express'

import RouteMap from '../../constants/RouteMap'

import { User } from '../../models/User/user'

import HttpStatusCode from '../../constants/HTTPStatusCode'
import { requireAuth } from '../../middlewares/require-auth'

const router = express.Router()

router[RouteMap.GET_USERS.method](
  RouteMap.GET_USERS.path,
  requireAuth,
  async (req: Request, res: Response) => {
    const existingUsers = await User.find()

    if (existingUsers.length === 0) {
      return res.status(HttpStatusCode.OK_200).send({
        users: [],
      })
    }

    res.status(HttpStatusCode.OK_200).send({
      users: existingUsers
    })
  }
)

export { router as getUsersRouter }
