import mongoose from 'mongoose'

import sgMail from '@sendgrid/mail'

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

  // Env: SENDGRID_API_KEY
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('SENDGRID_API_KEY must be defined.')
  }

  // Env: SENDGRID_API_KEY
  if (!process.env.SENDGRID_ACCOUNT_EMAIL) {
    throw new Error('SENDGRID_ACCOUNT_EMAIL must be defined.')
  }

  try {
    // DB
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connected to MongoDB...')

    // Sendgrid
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  } catch (err) {
    console.error(err)
  }

  const PORT = 3000

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

start()
