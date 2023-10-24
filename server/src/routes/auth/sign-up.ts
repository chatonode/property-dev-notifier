import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../constants/RouteMap'
import { validateRequest } from '../../middlewares/validate-request'

import { User } from '../../models/User/user'

import { BadRequestError } from '../../errors/BadRequestError'

import { logUserIn } from '../../utils/jwt'

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

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new BadRequestError('E-mail in use!')
    }

    // Build the new user and save it to the database
    const newUser = User.build({ email, password })
    await newUser.save()

    // Log user in
    logUserIn(req, newUser)

    // Least info within response
    res.status(201).send({
      email: newUser.email,
    })
  }
)

export { router as signUpRouter }
