import { memo } from 'react'

import classes from './AnimatedEnvelope.module.css'

const AnimatedEnvelope = () => {
  return (
    <div className={classes["letter-image"]}>
      <div className={classes["animated-mail"]}>
        <div className={classes["back-fold"]}></div>
        <div className={classes.letter}>
          <div className={classes["letter-border"]}></div>
          <div className={classes["letter-title"]}></div>
          <div className={classes["letter-context"]}></div>
          <div className={classes["letter-stamp"]}></div>
        </div>
        <div className={classes["top-fold"]}></div>
        <div className={classes.body}></div>
        <div className={classes["left-fold"]}></div>
      </div>
      <div className={classes.shadow}></div>
    </div>
  )
}

export default memo(AnimatedEnvelope)
