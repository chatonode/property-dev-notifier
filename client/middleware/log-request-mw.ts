import { MiddlewareFactory, PATH_REGEX } from '@/middleware-unused'
import {
  type NextMiddleware,
  type NextRequest,
  type NextFetchEvent,
  NextResponse,
} from 'next/server'

/**
 * Factory function for creating the Log Request Middleware
 * @param {NextMiddleware} next - The next middleware in the chain
 * @returns {NextMiddleware} - The new middleware function
 */
const logRequestMWFactory: MiddlewareFactory =
  (next: NextMiddleware): NextMiddleware =>
  async (req: NextRequest, event: NextFetchEvent) => {
    const { pathname } = req.nextUrl

    /* Early Return */
    if (!PATH_REGEX.DASHBOARD.test(pathname)) {
      return next(req, event)
    }

    /* Interaction with MW */
    console.log('- logRequestMWFactory: ', { pathname })

    /* Logic */
    const { method } = req
    const date = new Date().toISOString()
    console.log(`[${date}] ${method} request received`)

    // Else
    return next(req, event)
  }

export default logRequestMWFactory
