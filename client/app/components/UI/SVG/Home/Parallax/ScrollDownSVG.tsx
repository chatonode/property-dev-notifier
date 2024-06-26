import React, { memo, useEffect, useState } from 'react'
import classes from './ScrollDownSVG.module.css'
import useDelayedRender from '@/app/hooks/useDelayedRender'

type TScrollDownSVGProps = {
  onClick: () => void
}

const ScrollDownSVG = (props: TScrollDownSVGProps) => {
  const isRendered = useDelayedRender(4000) // Adjust the delay time as needed (in milliseconds)

  if (!isRendered) {
    return null
  }

  return (
    <div className={classes.container}>
      <svg
        className={classes.svg}
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
}

export default memo(ScrollDownSVG)
