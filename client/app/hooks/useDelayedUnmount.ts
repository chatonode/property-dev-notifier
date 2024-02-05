import { useEffect } from 'react'

/**
 * A React hook for managing delayed actions with consideration for the component's unmounting state.
 *
 * @param {boolean} isUnmounting - The unmounting state of the component.
 * @param {number} delay - The delay in milliseconds for the action.
 */
const useDelayedUnmount = (isUnmounting: boolean, delay: number): void => {
  /**
   * useEffect callback function.
   */
  useEffect(() => {
    /**
     * Timeout ID for the delayed action.
     */
    let timeoutId: NodeJS.Timeout

    if (!isUnmounting) {
      timeoutId = setTimeout(() => {
        // Your logic or cleanup here
      }, delay)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isUnmounting, delay])
}

export default useDelayedUnmount
