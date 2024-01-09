import { MiddlewareFactory, PATH_REGEX } from '@/middleware'
import {
  type NextMiddleware,
  type NextRequest,
  type NextFetchEvent,
  NextResponse,
} from 'next/server'

/**
 * Factory function for creating the <Your MW Name> Middleware
 * @param {NextMiddleware} next - The next middleware in the chain
 * @returns {NextMiddleware} - The new middleware function
 */
const _templateMWFactory: MiddlewareFactory =
  (next: NextMiddleware): NextMiddleware =>
  async (req: NextRequest, event: NextFetchEvent) => {
    const { pathname } = req.nextUrl

    /* Early Return */
    // - Either, ADD any pathname to PATH_REGEX
    // - Or, USE any current pathname from PATH_REGEX
    // that middleware going to be responsible for
    if (!PATH_REGEX.ALL.test(pathname)) {
      return next(req, event)
    }

    /* Interaction & First Test with MW */
    // console.log('- excludePathMW: ', { pathname })

    /* Implement Your Logic */

    // Else
    return next(req, event)
  }

// Export It
// export default _templateMWFactory // (commented, since it is a template)
