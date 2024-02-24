import { memo } from 'react'

import classes from './Bottom.module.css'

import BottomImageContainer from './Bottom/BottomImageContainer'

const Bottom = () => {
  return (
    <div className={classes.container}>
      <BottomImageContainer />
      <div className={classes.content}>
        <h2 className={classes.title}>
          Ready to Boost Your Productivity and Profits?
        </h2>
        <p className={classes.text}>
          Sign Up today and start managing and contacting property developers
          like a pro!
        </p>
        <button className={classes.button}>Sign Up Now</button>
      </div>
    </div>
  )
}

export default memo(Bottom)
