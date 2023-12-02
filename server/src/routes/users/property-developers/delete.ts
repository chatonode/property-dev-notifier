import express, { Request, Response } from 'express'
import { param } from 'express-validator'

import RouteMap from '../../../constants/RouteMap'

import { PropertyDeveloper } from '../../../models/User/property-developer'

import HttpStatusCode from '../../../constants/HTTPStatusCode'
import { requireAuth } from '../../../middlewares/require-auth'
import { validateRequest } from '../../../middlewares/validate-request'
import { NotFoundError } from '../../../errors/NotFoundError'

const router = express.Router()

router[RouteMap.DELETE_PROPERTY_DEVELOPER.method](
  RouteMap.DELETE_PROPERTY_DEVELOPER.path,
  [
    param('propertyDeveloperId')
      .isMongoId()
      .withMessage('Property Developer ID must be valid.'),
  ],
  validateRequest,
  requireAuth,
  async (req: Request, res: Response) => {
    const propertyDeveloperId = req.params.propertyDeveloperId

    const existingPropertyDeveloper = await PropertyDeveloper.findById(
      propertyDeveloperId
    )

    if (!existingPropertyDeveloper) {
      throw new NotFoundError()
    }

    const deletedPropertyDeveloper = await existingPropertyDeveloper.deleteOne()

    // TODO
    console.log('deletedPropertyDeveloper:', deletedPropertyDeveloper)

    res.status(HttpStatusCode.OK_200).send({
      deletedPropertyDeveloper,
    })
  }
)

export { router as deletePropertyDeveloperRouter }
