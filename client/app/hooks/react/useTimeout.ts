// import { useEffect, useRef } from 'react'

// const useTimeout = (callback: () => void, delay: number) => {
//   const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>()

//   useEffect(() => {
//     timeoutIdRef.current = setTimeout(callback, delay)

//     return () => {
//       clearTimeout(timeoutIdRef.current)
//     }
//   }, [callback, delay])

//   return [
//     timeoutIdRef.current, // timeoutId
//     () => clearTimeout(timeoutIdRef.current), // clearTimeout
//   ]
// }

// export default useTimeout

// --------------

import { useEffect, useRef } from 'react'

/**
 * A custom hook that sets a timeout and clears it when the component unmounts.
 *
 * @param {Function} callback - The function to be executed after the timeout.
 * @param {number} delay - The delay in milliseconds before the callback is executed.
 * @returns {Function} A function that clears the timeout when called.
 */
const useTimeout = (callback: () => void, delay: number): (() => void) => {
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    timeoutRef.current = window.setTimeout(callback, delay)

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [callback, delay])

  /**
   * Clears the timeout.
   */
  const clearTimer = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }
  }

  return clearTimer
}

export default useTimeout
