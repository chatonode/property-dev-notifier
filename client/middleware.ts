import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server'

import excludePathMWFactory from '@/middleware/exclude-path-mw'
import logRequestMWFactory from '@/middleware/log-request-mw'

/**
 * Type representing a factory function for creating middlewares
 */
export type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware
/**
 * @param {NextMiddleware} middleware - The next middleware in the chain
 * @returns {NextMiddleware} - The new middleware function
 */

/**
 * Regular expressions for common path patterns
 * @namespace PATH_REGEX
 * @property {RegExp} DASHBOARD - Regular expression for paths starting with "/dashboard"
 * @property {RegExp} ALL - Regular expression for all paths
 */
export const PATH_REGEX = {
  DASHBOARD: /^\/dashboard/,
  ALL: /^\/.*/,
} as const

/**
 * Chains multiple middleware functions into a single middleware
 *
 * This function is recursive and stops its recursiveness when the array length is reached.
 *
 * @param {MiddlewareFactory[]} functions - Array of middleware factories
 * @param {number} [index=0] - Current index in the array
 * @returns {NextMiddleware} - The chained middleware function
 */
const chain = (
  functions: MiddlewareFactory[],
  index: number = 0
): NextMiddleware => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const current = functions[index] // So, it STOPS if index is more than array length -> because "current" becomes undefined.
    if (current) {
      const next = chain(functions, index + 1)
      return current(next)(req, event)
    }
    return NextResponse.next()
  }
}

/**
 * Default middleware chain for the Next.js 13 app
 *
 * They are going to be chained by that order that you placed them into.
 *
 * @type {NextMiddleware}
 */
export default chain([excludePathMWFactory, logRequestMWFactory])

// Not needed when "Conditional early return" for each MW
// export const config = {
//   matcher: '/:path*',
// }
