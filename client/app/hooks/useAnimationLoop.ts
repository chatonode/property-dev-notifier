import { useEffect, useRef } from 'react'

/**
 * Creates an animation loop using requestAnimationFrame.
 *
 * @returns {void}
 */
const useAnimationLoop = () => {
  const requestRef = useRef<number | null>(null)

  useEffect(() => {
    const handleAnimationFrame = () => {
      requestRef.current = requestAnimationFrame(handleAnimationFrame)
    }

    requestRef.current = requestAnimationFrame(handleAnimationFrame)

    return () => {
      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])
}

export default useAnimationLoop
