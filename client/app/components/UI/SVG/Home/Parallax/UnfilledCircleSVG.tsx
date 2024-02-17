import React, { memo } from 'react'

import classes from './UnfilledCircleSVG.module.css'

const UnfilledCircleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      height="107"
      width="107"
      className={classes.svg}
    >
      <circle cx="50" cy="50" r="48.25" fill="none" stroke="currentColor" />
    </svg>
  )
}

export default memo(UnfilledCircleSVG)
