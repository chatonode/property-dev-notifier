import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

// Tell Jest to mock that file from '../__mocks__'
// jest.mock('/mock_folder/mock_path')

// Tell Jest to mock that npm package from '../__mocks__'
jest.mock('@sendgrid/mail')

let mongo: any

beforeAll(async () => {
  process.env.JWT_KEY = 'asdfasdf'

  mongo = await MongoMemoryServer.create()
  const mongoUri = await mongo.getUri()

  await mongoose.connect(mongoUri)

  // For asserting 'from' value of an object, that is sent through 'sgMail.send()' calls
  process.env.SENDGRID_ACCOUNT_EMAIL = 'somevalidtestemail@sendgrid.com'
})

beforeEach(async () => {
  // Resetting Mock Functions
  jest.clearAllMocks()

  // All different collections that exist
  const collections = await mongoose.connection.db.collections()

  collections.forEach(async (collection) => {
    // Reset all data
    await collection.deleteMany({})
  })
})

afterAll(async () => {
  // Resetting onSpy
  jest.restoreAllMocks()

  await mongo.stop()
  await mongoose.connection.close()
})
