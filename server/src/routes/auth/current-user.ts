import express, { Request, Response } from 'express'

import { currentUser } from '../../middlewares/current-user'
import RouteMap from '../../constants/RouteMap'

const router = express.Router()

router[RouteMap.CURRENT_USER.method](
  RouteMap.CURRENT_USER.path,
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null }) // Send 'null' instead of 'undefined'
  }
)

export { router as currentUserRouter }
