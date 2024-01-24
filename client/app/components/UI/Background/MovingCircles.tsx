// 'use client'

import classes from './MovingCircles.module.css'

const MovingCircles = () => {
  return (
    <div className={classes['background-circles']}>
      <div className={classes.circle}></div>
      <div className={classes.circle}></div>
      {/* <div className={classes.lock}></div> */}
      <div className={classes.circle}></div>
      {/* <!-- Add more circles as needed --> */}
    </div>
  )
}

export default MovingCircles
