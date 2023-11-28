import mongoose from 'mongoose'

import { updateIfCurrentPlugin } from 'mongoose-update-if-current'

import { UserAttrs, UserDoc, User } from './user'

import { NotificationDoc } from '../Notification/notification'

// An interface that describes the properties
// that are required to create a new Property Developer
interface PropertyDeveloperAttrs extends UserAttrs {
  //   notifications: NotificationDoc[]
}

// An interface that describes the properties
// that a Property Developer Document has
export interface PropertyDeveloperDoc extends UserDoc {
  notifications: NotificationDoc[]
}

// An interface that describes the properties
// that a Property Developer Model has
interface PropertyDeveloperModel extends mongoose.Model<PropertyDeveloperDoc> {
  build(attrs: PropertyDeveloperAttrs): PropertyDeveloperDoc
}

const propertyDeveloperSchema = new mongoose.Schema(
  {
    notifications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {},
    },
  }
)

// OOC Plugin
propertyDeveloperSchema.plugin(updateIfCurrentPlugin)

/*
    Mongoose Middleware | 'this' refers to Property Developer Document
*/
// Before Saving Property Developer
propertyDeveloperSchema.pre('save', async function (next) {
  // In mongoose 5.x, NOT Mandatory method call anymore while using Async Mongoose
  // next()
})

// Any time we want to create a new property developer; we are not going to call 'new PropertyDeveloper()' constructor
// Instead, we are going to use this custom static function as below:
propertyDeveloperSchema.statics.build = (attrs: PropertyDeveloperAttrs) => {
  return new PropertyDeveloper(attrs)
}

// const Administrator = mongoose.model<AdministratorDoc, AdministratorModel>('Administrator', administratorSchema)
const PropertyDeveloper = User.discriminator<
  PropertyDeveloperDoc,
  PropertyDeveloperModel
>('PropertyDeveloper', propertyDeveloperSchema)

export { PropertyDeveloper }
