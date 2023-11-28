import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../constants/RouteMap'
import { validateRequest } from '../../middlewares/validate-request'

import { Administrator } from '../../models/User/administrator'

import { BadRequestError } from '../../errors/BadRequestError'

import { logUserIn } from '../../utils/jwt'
import HttpStatusCode from '../../constants/HTTPStatusCode'

const router = express.Router()

router[RouteMap.SIGNUP.method](
  RouteMap.SIGNUP.path,
  [
    body('email').isEmail().withMessage('E-mail must be valid.'),
    body('password')
      .trim()
      .isLength({ min: 8, max: 20 })
      .withMessage('Password must be between 8 and 20 characters.'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body

    const existingAdministrator = await Administrator.findOne({ email })

    if (existingAdministrator) {
      throw new BadRequestError('E-mail in use!')
    }

    // Build the new admin user and save it to the database
    const newAdministrator = Administrator.build({ email, password })
    await newAdministrator.save()

    // Log admin user in
    logUserIn(req, newAdministrator)

    // Least info within response
    res.status(HttpStatusCode.CREATED_201).send({
      email: newAdministrator.email,
    })
  }
)

export { router as signUpRouter }
