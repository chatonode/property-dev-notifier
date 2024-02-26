import React, { memo } from 'react'

import classes from './ScrollDownMouse.module.css'

const ScrollDownMouse = () => {
  return (
    <div className={classes.container}>
      <div className={classes['scroll-mouse']}>
        <div className={classes['scroll-wheel']} />
      </div>
    </div>
  )
}

export default memo(ScrollDownMouse)
