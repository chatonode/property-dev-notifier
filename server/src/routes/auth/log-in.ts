import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../constants/RouteMap'

import { validateRequest } from '../../middlewares/validate-request'
import { BadRequestError } from '../../errors/BadRequestError'
import { Administrator } from '../../models/User/administrator'

import { logUserIn } from '../../utils/jwt'

import { PasswordUtils } from '../../utils/Password'
import HttpStatusCode from '../../constants/HTTPStatusCode'

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

    const existingAdministrator = await Administrator.findOne({ email })

    if (!existingAdministrator) {
      throw new BadRequestError('Invalid Credentials!')
    }

    // Password Check
    const passwordsMatch = await PasswordUtils.compare(
      existingAdministrator.password,
      password
    )

    if (!passwordsMatch) {
      throw new BadRequestError('Invalid Credentials!')
    }

    // Log admin user in
    logUserIn(req, existingAdministrator)

    // Least info within response
    res.status(HttpStatusCode.OK_200).send({
      email: existingAdministrator.email,
    })
  }
)

export { router as logInRouter }
