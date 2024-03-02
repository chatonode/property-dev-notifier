import { useEffect, useState } from 'react'

/**
 * A custom hook that delays rendering of components for a specified time.
 *
 * @param {number} delayTime - The delay time in milliseconds before rendering.
 * @returns {boolean} isRendered - A boolean indicating whether the component should be rendered.
 */
const useDelayedRender = (delayTime: number): boolean => {
  const [isRendered, setIsRendered] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsRendered(true)
    }, delayTime)

    return () => clearTimeout(delay)
  }, [delayTime])

  return isRendered
}

export default useDelayedRender
