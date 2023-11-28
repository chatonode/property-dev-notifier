import mongoose from 'mongoose'

enum UserStatus {
  NOT_VERIFIED = 'NOT_VERIFIED',
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  INACTIVE = 'INACTIVE',
}

enum UserType {
  Administrator = 'Administrator',
  PropertyDeveloper = 'PropertyDeveloper',
}

// An interface that describes the properties
// that are required to create a new User
export interface UserAttrs {
  email: string
}

// An interface that describes the properties
// that a User Document has
export interface UserDoc extends mongoose.Document {
  id: string
  email: string
  status: keyof typeof UserStatus
  version: number
  createdAt: Date
  updatedAt: Date
  userType: keyof typeof UserType
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: UserStatus,
      default: UserStatus.NOT_VERIFIED,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    discriminatorKey: 'userType',
    toJSON: {
      transform(doc, ret) {
        // _id -> id
        ret.id = ret._id
        delete ret._id

        // __v -> -
        // delete ret.__v   //Disabled for using 'version'
      },
    },
  }
)

// Using 'version'
userSchema.set('versionKey', 'version')

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
