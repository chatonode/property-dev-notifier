import { MiddlewareFactory, PATH_REGEX } from '@/middleware-unused'
import {
  type NextMiddleware,
  type NextRequest,
  type NextFetchEvent,
  NextResponse,
} from 'next/server'

/**
 * Regular expression for public files.
 * @constant {RegExp} PUBLIC_FILE
 */
const PUBLIC_FILE = /\.(.*)$/

/**
 * Factory function for creating the Exclude Path Middleware
 * @param {NextMiddleware} next - The next middleware in the chain
 * @returns {NextMiddleware} - The new middleware function
 */
const excludePathMWFactory: MiddlewareFactory =
  (next: NextMiddleware): NextMiddleware =>
  async (req: NextRequest, event: NextFetchEvent) => {
    const { pathname } = req.nextUrl

    /* Early Return: Not gonna return earlier with !PATH_REGEX.ALL ofc since it's false all the time, but keep the early return convention */
    if (!PATH_REGEX.ALL.test(pathname)) {
      return next(req, event)
    }

    /* Interaction with MW */
    // console.log('- excludePathMW: ', { pathname })

    /* Logic */
    /* MW | Match all routes with new middleware matcher */
    // @ref-link: https://github.com/vercel/next.js/discussions/38615#discussioncomment-3140218
    if (
      pathname.startsWith('/_next') || // exclude Next.js internals
      pathname.startsWith('/api') || //  exclude all API routes
      pathname.startsWith('/static') || // exclude static files
      PUBLIC_FILE.test(pathname) // exclude all files in the public folder
    ) {
      return NextResponse.next()
    }

    // Else
    return next(req, event)
  }

export default excludePathMWFactory
