import { useEffect, useRef, useCallback, SyntheticEvent } from 'react'

type TUseLongPressProps = {
  callback: () => void
  duration?: number
}

type TUseLongPressHandlers = {
  onTouchStart: (event: SyntheticEvent) => void
  onTouchEnd: (event: SyntheticEvent) => void
  onTouchCancel: (event: SyntheticEvent) => void
}

/**
 * useLongPress - A React hook for detecting long-press events.
 *
 * @param {TUseLongPressProps} options - The options object.
 * @param {function} options.callback - The callback function to be executed on a long-press.
 * @param {number} [options.duration=750] - The duration (in milliseconds) for a press to be considered a long-press.
 *
 * @return {TUseLongPressHandlers} - An object containing event handlers for onTouchStart, onTouchEnd, and onTouchCancel.
 */
const useLongPress = ({
  callback,
  duration = 750,
}: TUseLongPressProps): TUseLongPressHandlers => {
  const pressTimer = useRef<number | null>(null)

  const startPress = useCallback(() => {
    pressTimer.current = window.setTimeout(() => {
      callback()
    }, duration)
  }, [callback, duration])

  const endPress = useCallback(() => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current)
    }
  }, [])

  useEffect(() => {
    // Clean up the timer when the component unmounts
    return () => {
      if (pressTimer.current) {
        clearTimeout(pressTimer.current)
      }
    }
  }, [])

  return {
    onTouchStart: startPress,
    onTouchEnd: endPress,
    onTouchCancel: endPress,
  }
}

export default useLongPress
