import express, { Request, Response } from 'express'

import { logUserOut } from '../../utils/jwt'
import RouteMap from '../../constants/RouteMap'

const router = express.Router()

router[RouteMap.LOGOUT.method](
  RouteMap.LOGOUT.path,
  (req: Request, res: Response) => {
    // Log user out
    logUserOut(req)

    res.send({})
  }
)

export { router as logOutRouter }
