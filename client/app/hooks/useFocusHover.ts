import { useState, HTMLProps } from 'react'


type TFocusHoverResult<T extends HTMLElement> = {
  isHovered: boolean
  isFocused: boolean
  eventHandlers: HTMLProps<T>
}

/**
 * A custom React hook that provides state and event handlers for detecting hover and focus states.
 *
 * @template T - The type of HTML element. Inconsistent unless exact type is passed like HTMLDivElement
 *
 * @returns {Object} An object containing the hover and focus state, along with event handlers.
 * @property {boolean} isHovered - Indicates whether the component is currently being hovered.
 * @property {boolean} isFocused - Indicates whether the component is currently in focus.
 * @property {Object} eventHandlers - Event handlers to be spread onto the component to enable hover and focus detection.
 * @property {function} eventHandlers.onMouseEnter - Event handler for mouse enter.
 * @property {function} eventHandlers.onMouseLeave - Event handler for mouse leave.
 * @property {function} eventHandlers.onFocus - Event handler for focus.
 * @property {function} eventHandlers.onBlur - Event handler for blur.
 *
 * @example
 * const { isHovered, isFocused, eventHandlers } = useFocusHover<HTMLDivElement>()
 * 
 * // 'image_hovered_or_focused.jpg' : 'default_image.jpg'
 * const imageSrc = isHovered || isFocused ? exampleOneImage.src : exampleTwoImage.src
 * const imageAlt = isFocusedHovered ? 'Example-One image is here!' : 'Example-Two image is here!'
 *
 * return (
 *   <div {...eventHandlers}>
 *     <Image
 *       src={imageSrc}
 *       alt={imageAlt}
 *     />
 *   </div>
 * );
 */
const useFocusHover = <T extends HTMLElement>(): TFocusHoverResult<T> => {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const eventHandlers: HTMLProps<T> = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
  }

  return {
    isHovered,
    isFocused,
    eventHandlers,
  }
}

export default useFocusHover
