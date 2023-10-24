import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../constants/RouteMap'

import { validateRequest } from '../../middlewares/validate-request'
import { BadRequestError } from '../../errors/BadRequestError'
import { User } from '../../models/User/user'

import { logUserIn } from '../../utils/jwt'

import { PasswordUtils } from '../../utils/Password'

const router = express.Router()

router[RouteMap.LOGIN.method](
  RouteMap.LOGIN.path,
  [
    body('email').isEmail().withMessage('E-mail must be valid.'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password must be supplied.'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (!existingUser) {
      throw new BadRequestError('Invalid Credentials!')
    }

    // Password Check
    const passwordsMatch = await PasswordUtils.compare(
      existingUser.password,
      password
    )

    if (!passwordsMatch) {
      throw new BadRequestError('Invalid Credentials!')
    }

    // Log user in
    logUserIn(req, existingUser)

    // Least info within response
    res.status(200).send({
      email: existingUser.email,
    })
  }
)

export { router as logInRouter }
