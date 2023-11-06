import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../constants/RouteMap'
import { validateRequest } from '../../middlewares/validate-request'

import { User } from '../../models/User/user'

import { BadRequestError } from '../../errors/BadRequestError'

import { EmailSender } from '../../utils/email/email-sender'
import { NotFoundError } from '../../errors/NotFoundError'
import HttpStatusCode from '../../constants/HTTPStatusCode'
import { requireAuth } from '../../middlewares/require-auth'

const router = express.Router()

router[RouteMap.NOTIFY_DEVELOPERS.method](
  RouteMap.NOTIFY_DEVELOPERS.path,
  //   [
  //     body('email').isEmail().withMessage('E-mail must be valid.'),
  //     body('password')
  //       .trim()
  //       .isLength({ min: 8, max: 20 })
  //       .withMessage('Password must be between 8 and 20 characters.'),
  //   ],
  //   validateRequest,
  requireAuth,
  async (req: Request, res: Response) => {
    const existingUsers = await User.find()

    if (existingUsers.length === 0) {
      throw new NotFoundError()
    }

    console.log('User:', existingUsers[0]?.email)

    existingUsers.forEach((existingUser) => {
      new EmailSender(existingUser.email, {
        email: existingUser.email,
        userId: existingUser.id,
      })
    })

    res.status(HttpStatusCode.OK_200).send({
      notifiedDevelopers: existingUsers,
    })
  }
)

export { router as notificationsSendAllRouter }
