import mongoose from 'mongoose'

const getValidObjectId = () => {
    // Generate a valid Mongoose ObjectId (as a String)
    const id = new mongoose.Types.ObjectId().toHexString()

    return id
}

export { getValidObjectId }