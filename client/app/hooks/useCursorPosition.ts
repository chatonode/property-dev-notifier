import { useCallback, useEffect, useRef, useState } from 'react'

type TCursorPosition = {
  x: number
  y: number
}

/**
 * A custom React hook that provides the current cursor position and a function to update it.
 *
 * @returns {Object} An object containing the following properties:
 *   @property {TCursorPosition} cursorPosition - The current cursor position as an object with `x` and `y` coordinates.
 *   @property {function} updateCursorPosition - A callback function that updates the cursor position based on a mouse event and an optional delay.
 *     @param {React.MouseEvent<HTMLDivElement>} e - The mouse event object.
 *     @param {number} [delay] - The delay in milliseconds before updating the cursor position. If not provided or set to `undefined`, the cursor position updates immediately.
 */
const useCursorPosition = () => {
  const [cursorPosition, setCursorPosition] = useState<TCursorPosition>({
    x: 0,
    y: 0,
  })

  const updateCursorPosition = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, delay?: number) => {
      const rect = e.currentTarget.getBoundingClientRect()
      if (delay !== undefined) {
        setTimeout(() => {
          setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          })
        }, delay)
      } else {
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    },
    []
  )

  return { cursorPosition, updateCursorPosition }
}

export default useCursorPosition
