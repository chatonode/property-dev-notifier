import express from 'express'
import 'express-async-errors'
import cookieSession from 'cookie-session'
import helmet from 'helmet'

import { signUpRouter } from './routes/auth/sign-up'
import { logInRouter } from './routes/auth/log-in'
import { logOutRouter } from './routes/auth/log-out'
import { currentUserRouter } from './routes/auth/current-user'
import { createPropertyDeveloperRouter } from './routes/users/property-developers/create'
import { listPropertyDevelopersRouter } from './routes/users/property-developers/list'
import { getPropertyDeveloperRouter } from './routes/users/property-developers/get'
import { deletePropertyDeveloperRouter } from './routes/users/property-developers/delete'
import { notifyPropertyDevelopers } from './routes/users/property-developers/notifications/send'

import { errorHandler } from './middlewares/error-handler'
import { currentUser } from './middlewares/current-user'

import { NotFoundError } from './errors/NotFoundError'

const app = express()

app.set('trust proxy', true) // Traffic is being proxied by Ingress NGINX
app.use(express.json())
app.use(
  cookieSession({
    signed: false, // Disabling 'cookie encryption'

    // HTTPS switched on for dev
    secure: process.env.NODE_ENV !== 'test', // Enabling 'required HTTPS connection' (if NODE_ENV !== 'test')

    // HTTPS switched off for production
    // secure: false
  })
)
app.use(helmet())

// Global currentUser middleware
app.use(currentUser)

// Auth
app.use(signUpRouter)
app.use(logInRouter)
app.use(logOutRouter)
app.use(currentUserRouter)
// // TODO
// -> /api/auth/forgot-password
// -> /api/auth/validate-token
// -> /api/auth/reset-password

// Property Developers
app.use(createPropertyDeveloperRouter)
app.use(listPropertyDevelopersRouter)
app.use(getPropertyDeveloperRouter)
app.use(deletePropertyDeveloperRouter)
app.use(notifyPropertyDevelopers)

// 'Handler Not Found' for all HTTP Methods
app.all('*', async () => {
  throw new NotFoundError()
})

app.use(errorHandler)

export { app }
