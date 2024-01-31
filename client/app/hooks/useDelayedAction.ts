import { useEffect } from 'react'

/**
 * A React hook for managing delayed actions with automatic cleanup during component unmounting.
 *
 * @param {number} delay - The delay in milliseconds for the action.
 * @param {Function} action - The action to be performed after the delay.
 */
const useDelayedAction = (delay: number, action: () => void): void => {
  useEffect(() => {
    let isUnmounting = false

    const timeoutId = setTimeout(() => {
      // Check if the component is unmounting
      if (isUnmounting) {
        return
      }

      // Perform the specified action after the delay
      action()
    }, delay)

    // Set isUnmounting to true during component unmounting
    return () => {
      isUnmounting = true
      clearTimeout(timeoutId)
    }
  }, [delay, action])
}

export default useDelayedAction
