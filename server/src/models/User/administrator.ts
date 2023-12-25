import mongoose from 'mongoose'

import { updateIfCurrentPlugin } from 'mongoose-update-if-current'

import { UserAttrs, UserDoc, User } from './user'

import { PasswordUtils } from '../../utils/Password'

// An interface that describes the properties
// that are required to create a new Administrator
interface AdministratorAttrs extends UserAttrs {
  password: string
}

// An interface that describes the properties
// that a Administrator Document has
export interface AdministratorDoc extends UserDoc {
  username: string | null
  password: string
}

// An interface that describes the properties
// that a Administrator Model has
interface AdministratorModel extends mongoose.Model<AdministratorDoc> {
  build(attrs: AdministratorAttrs): AdministratorDoc
}

const administratorSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        // _id -> id
        ret.id = ret._id
        delete ret._id

        // password -> -
        delete ret.password
      },
    },
  }
)

// OOC Plugin
administratorSchema.plugin(updateIfCurrentPlugin)

/*
    Mongoose Middleware | 'this' refers to Administrator Document
*/
// Before Saving Administrator
administratorSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await PasswordUtils.toHash(this.get('password'))

    this.set('password', hashed)
  }

  // In mongoose 5.x, NOT Mandatory method call anymore while using Async Mongoose
  // next()
})

// Any time we want to create a new administrator; we are not going to call 'new Administrator()' constructor
// Instead, we are going to use this custom static function as below:
administratorSchema.statics.build = (attrs: AdministratorAttrs) => {
  return new Administrator(attrs)
}

// const Administrator = mongoose.model<AdministratorDoc, AdministratorModel>('Administrator', administratorSchema)
const Administrator = User.discriminator<AdministratorDoc, AdministratorModel>(
  'Administrator',
  administratorSchema
)

export { Administrator }
