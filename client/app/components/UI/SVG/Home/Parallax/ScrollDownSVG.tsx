import React, { memo } from 'react'

import classes from './ScrollDownSVG.module.css'

const ScrollDownSVG = () => {
  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export default memo(ScrollDownSVG)
