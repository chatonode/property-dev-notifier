import mongoose from 'mongoose'
import { AdministratorDoc } from '../User/administrator'
import { PropertyDeveloperDoc } from '../User/property-developer'
import { TEmailData } from '../../utils/email/base-sender'

export enum NotificationType {
  WARNING = 'WARNING',
  INFO = 'INFO',
  ERROR = 'ERROR',
}

export enum NotificationMethod {
  EMAIL = 'EMAIL',
}

// An interface that describes the properties
// that are required to create a new Notification
export interface NotificationAttrs {
  sender: AdministratorDoc
  recipients: PropertyDeveloperDoc[]
  content: TEmailData
}

// An interface that describes the properties
// that a Notification Document has
export interface NotificationDoc extends mongoose.Document {
  id: string
  createdAt: Date
  sender: AdministratorDoc
  recipients: PropertyDeveloperDoc[]
  content: TEmailData
  type: keyof typeof NotificationType
  method: keyof typeof NotificationMethod
}

// An interface that describes the properties
// that a Notification Model has
interface NotificationModel extends mongoose.Model<NotificationDoc> {
  build(attrs: NotificationAttrs): NotificationDoc
}

const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Administrator',
    },
    recipients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'PropertyDeveloper',
      },
    ],
    content: {
      title: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
    },
    type: {
      type: String,
      required: true,
      enum: NotificationType,
      default: NotificationType.INFO,
    },
    method: {
      type: String,
      required: true,
      enum: NotificationMethod,
      default: NotificationMethod.EMAIL,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        // _id -> id
        ret.id = ret._id
        delete ret._id

        // __v -> -
        delete ret.__v // Enabled for not using 'version'
      },
    },
  }
)

// Not using 'version'
// notificationSchema.set('versionKey', 'version')
// notificationSchema.plugin(updateIfCurrentPlugin)

/*
    Mongoose Middleware | 'this' refers to Notification Document
*/
// Before Saving Notification
notificationSchema.pre('save', async function (next) {
  // In mongoose 5.x, NOT Mandatory method call anymore while using Async Mongoose
  // next()
})

// Any time we want to create a new notification; we are not going to call 'new Notification()' constructor
// Instead, we are going to use this custom static function as below:
notificationSchema.statics.build = (attrs: NotificationAttrs) => {
  return new Notification(attrs)
}

const Notification = mongoose.model<NotificationDoc, NotificationModel>(
  'Notification',
  notificationSchema
)

export { Notification }
