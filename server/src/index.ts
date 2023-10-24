import mongoose from 'mongoose'

import { app } from './app'

const start = async () => {
    console.log('Starting...')

    // Env: JWT_KEY Exists: to be able to use 'process.env.JWT_KEY!'
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined.')
    }

    // Env: MONGO_URI
    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined.')
    }

    try {
        // DB
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB...')
    } catch (err) {
        console.error(err)
    }

    const PORT = 3000

    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    })
}

start()
