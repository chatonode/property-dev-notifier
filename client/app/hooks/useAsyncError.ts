import { useCallback, useState } from 'react'

/**
 * Hook for throwing asynchronous errors in client components.
 * Use this hook to ensure errors are captured by React Error Boundaries.
 *
 * Add the following comment at the top of client component files to indicate its usage:
 * // use client
 *
 * @returns {function} Callback to throw asynchronous errors.
 * @throws {any} Throws the provided error for React Error Boundaries to capture.
 *
 * @example
 * // Example usage in a client component file
 * 'use client'
 * 
 * import { useAsyncError } from '@/hooks/useAsyncError'
 *
 * const MyComponent = () => {
 *   const throwError = useAsyncError()
 *
 *   // ... your component logic
 *
 *   // Triggering an asynchronous error
 *   try {
 *     // ... asynchronous operation that might throw an error
 *   } catch (error) {
 *     throwError(error)  // triggers ErrorBoundary
 *   }
 * }
 */
export const useAsyncError = () => {
  const [, setError] = useState()
  return useCallback(
    (e: any) => {
      setError(() => {
        throw e
      })
    },
    [setError]
  )
}
