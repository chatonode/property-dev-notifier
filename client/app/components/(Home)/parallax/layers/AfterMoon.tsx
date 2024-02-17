import { memo } from 'react'

import classes from './AfterMoon.module.css'

const AfterMoon = () => {
  return (
    <div style={{ margin: '10%' }}>
      <h1
      //   className={classes.title}
      >
        Property Developer Notifier
      </h1>
      <p>
        The app that lets you manage and communicate with property developers in
        an easy and efficient way.
      </p>
      <button>Get Started</button>
    </div>
  )
}

export default memo(AfterMoon)
