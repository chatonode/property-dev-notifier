// SpotlightCursorCircle.js

import React, { ReactNode, useState } from 'react'

import classes from './SpotlightCursorCircle.module.css'

type TSpotlightCursorCircleProps = {
  children: ReactNode
  size: number
  backgroundColor: `#${string}` | `var(${string})`
}

/**
 * @type {Object} TSpotlightCursorCircleProps
 * @property {ReactNode} children - The content to be displayed within the circle.
 * @property {number} size - The diameter of the circle in pixels.
 * @property {`#${string}` | `var(${string})`} backgroundColor - The background color of the circle, specified as a hex color or a CSS variable.
 */

/**
 * A React component that renders a circle with a background color that follows the cursor, creating a spotlight effect.
 *
 * The background color outside the spotlight is transparent, allowing the underlying content to be visible.
 *
 * @param {TSpotlightCursorCircleProps} props - The properties that define the circle and its content.
 * @returns {JSX.Element} The SpotlightCursorCircle component.
 */
const SpotlightCursorCircle = ({
  children,
  size,
  backgroundColor,
}: TSpotlightCursorCircleProps) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const circleStyle = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 70px, ${backgroundColor} 120px)`,
    width: size,
    height: size,
  }

  return (
    <div className={classes.container}>
      <div
        className={classes.circle}
        style={circleStyle}
        onMouseMove={handleMouseMove}
      >
        <div className={classes.children}>{children}</div>
      </div>
    </div>
  )
}

export default SpotlightCursorCircle
