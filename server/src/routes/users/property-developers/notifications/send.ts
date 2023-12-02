import express, { Request, Response } from 'express'
import { body } from 'express-validator'

import RouteMap from '../../../../constants/RouteMap'
import HttpStatusCode from '../../../../constants/HTTPStatusCode'
import { validateRequest } from '../../../../middlewares/validate-request'
import { requireAuth } from '../../../../middlewares/require-auth'
import { getVerifiedUserDoc } from '../../../../middlewares/get-verified-user-doc'

import {
  PropertyDeveloper,
  PropertyDeveloperDoc,
} from '../../../../models/User/property-developer'
import { Notification } from '../../../../models/Notification/notification'

import { NotFoundError } from '../../../../errors/NotFoundError'

import { TEmailData } from '../../../../utils/email/base-sender'
import { EmailSender } from '../../../../utils/email/email-sender'

type PropertyDeveloperIds = string[]

type RequestBody = {
  propertyDeveloperIds: PropertyDeveloperIds
  content: TEmailData
}

const router = express.Router()

router[RouteMap.NOTIFY_PROPERTY_DEVELOPERS.method](
  RouteMap.NOTIFY_PROPERTY_DEVELOPERS.path,
  [
    body('propertyDeveloperIds')
      .isArray({ min: 1 })
      .withMessage(
        'At least one "ID of a property developer" must be in an array.'
      ),
    body('propertyDeveloperIds.*')
      .isMongoId()
      .withMessage('Each property developer ID of the array must be valid.'),
    body('content').isObject().withMessage('Content object must be defined.'),
    body('content.title')
      .isString()
      .withMessage('Content title must contain string character(s).')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Content title cannot be empty.'),
    body('content.body')
      .isString()
      .withMessage('Content body must contain string character(s).')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Content body cannot be empty.'),
  ],
  validateRequest,
  requireAuth,
  getVerifiedUserDoc,
  async (req: Request, res: Response) => {
    const { propertyDeveloperIds, content }: RequestBody = req.body

    console.log('propertyDeveloperIds:', propertyDeveloperIds)

    /**  Method 1 | Mongoose
     * @summary Limited Parallelism: The query with $in will be executed as a single batch, so there is limited parallelism in fetching documents.
     * */
    // const existingPropertyDevelopers = await PropertyDeveloper.find({
    //   _id: { $in: propertyDeveloperIds },
    // })

    /**  Method 2 | Promise.all
     * @summary Parallelism: Promise.all allows for concurrent fetching, potentially improving performance, especially if there is network latency.
     * */
    const nonexistingPropertyDeveloperIds: PropertyDeveloperIds = []

    const propertyDevelopers = await Promise.all(
      propertyDeveloperIds.map(
        async (propertyDeveloperId): Promise<PropertyDeveloperDoc | null> => {
          const existingPropertyDeveloper = await PropertyDeveloper.findById(
            propertyDeveloperId
          )

          if (!existingPropertyDeveloper) {
            nonexistingPropertyDeveloperIds.push(propertyDeveloperId)
            return null
          }

          return existingPropertyDeveloper
        }
      )
    )

    const existingPropertyDevelopers = propertyDevelopers.filter(
      (propertyDeveloper) => propertyDeveloper !== null
    ) as PropertyDeveloperDoc[]

    if (existingPropertyDevelopers.length === 0) {
      throw new NotFoundError()
    }

    const newNotification = Notification.build({
      sender: req.authenticatedUserDoc!,
      recipients: existingPropertyDevelopers,
      content,
    })
    await newNotification.save()

    const emailSender = new EmailSender(newNotification.content)
    newNotification.recipients.forEach((existingPropertyDeveloper) => {
      emailSender.sendEmailTo(existingPropertyDeveloper.email)
    })

    res.status(HttpStatusCode.PARTIAL_CONTENT_206).send({
      sentNotification: newNotification,
      nonexistingPropertyDeveloperIds,
    })
  }
)

export { router as notifyPropertyDevelopers }
