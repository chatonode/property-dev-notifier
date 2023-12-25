import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../../constants/RouteMap'

import { PropertyDeveloper } from '../../../models/User/property-developer'

import HttpStatusCode from '../../../constants/HTTPStatusCode'

import { requireAuth } from '../../../middlewares/require-auth'
import { validateRequest } from '../../../middlewares/validate-request'
import { getVerifiedUserDoc } from '../../../middlewares/get-verified-user-doc'

import { BadRequestError } from '../../../errors/BadRequestError'

type RequestBody = {
  email: `${string}@${string}.${string}`
  fullName: string
}

const router = express.Router()

router[RouteMap.CREATE_PROPERTY_DEVELOPER.method](
  RouteMap.CREATE_PROPERTY_DEVELOPER.path,
  [
    body('email').isEmail().withMessage('E-mail must be valid.'),
    body('fullName')
      .isString()
      .withMessage('Full name must contain string character(s).')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Full name cannot be empty.'),
  ],
  validateRequest,
  requireAuth,
  getVerifiedUserDoc,
  async (req: Request, res: Response) => {
    const { email, fullName }: RequestBody = req.body

    const existingPropertyDeveloper = await PropertyDeveloper.findOne({ email })

    if (existingPropertyDeveloper) {
      throw new BadRequestError(`E-mail in use!`)
    }

    const newPropertyDeveloper = PropertyDeveloper.build({
      email,
      fullName,
      createdBy: req.authenticatedUserDoc!,
    })

    await newPropertyDeveloper.save()

    res.status(HttpStatusCode.CREATED_201).send({
      createdPropertyDeveloper: newPropertyDeveloper,
    })
  }
)

export { router as createPropertyDeveloperRouter }
