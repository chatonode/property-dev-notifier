import express, { Request, Response } from 'express'

import RouteMap from '../../../constants/RouteMap'

import { PropertyDeveloper } from '../../../models/User/property-developer'

import HttpStatusCode from '../../../constants/HTTPStatusCode'
import { requireAuth } from '../../../middlewares/require-auth'

const router = express.Router()

router[RouteMap.LIST_PROPERTY_DEVELOPERS.method](
  RouteMap.LIST_PROPERTY_DEVELOPERS.path,
  requireAuth,
  async (req: Request, res: Response) => {
    const existingPropertyDevelopers = await PropertyDeveloper.find()

    if (existingPropertyDevelopers.length === 0) {
      return res.status(HttpStatusCode.OK_200).send({
        propertyDevelopers: [],
      })
    }

    res.status(HttpStatusCode.OK_200).send({
      propertyDevelopers: existingPropertyDevelopers,
    })
  }
)

export { router as listPropertyDevelopersRouter }
