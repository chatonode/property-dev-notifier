'use client'

import React, { ReactNode } from 'react'

import classes from './SpotlightCursorCircle.module.css'
import useCursorPosition from '@/app/hooks/useCursorPosition'
import useAnimationLoop from '@/app/hooks/useAnimationLoop'

type TSizeProps = number | `100%`
type TBackgroundColorProps = `#${string}` | `var(${string})`

type TSpotlightCursorCircleProps = {
  children: ReactNode
  size?: TSizeProps
  backgroundColor: TBackgroundColorProps
}

const SpotlightCursorCircle = ({
  children,
  size = '100%',
  backgroundColor,
}: TSpotlightCursorCircleProps) => {
  const { cursorPosition, updateCursorPosition } = useCursorPosition()
  useAnimationLoop()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateCursorPosition(e, 100) // Pass the delay value (100ms) as the second argument
  }

  const circleStyle = {
    // TODO: Try new radial gradient at second line of `background`
    background: `
    radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, transparent 70px, ${backgroundColor} 120px),
    radial-gradient(black 10px, yellow 20px, transparent 30px) 
    `,
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
