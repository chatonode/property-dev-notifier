import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

// Tell Jest to mock that file from '../__mocks__'
// jest.mock('/mock_folder/mock_path')

let mongo: any

beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf'

    mongo = await MongoMemoryServer.create()
    const mongoUri = await mongo.getUri()

    await mongoose.connect(mongoUri)
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
    // jest.restoreAllMocks()
    
    await mongo.stop()
    await mongoose.connection.close()
})
