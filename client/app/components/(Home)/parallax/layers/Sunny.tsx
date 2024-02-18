import { memo, useCallback, useState } from 'react'
// import { animated, useTransition } from '@react-spring/web'

import classes from './Sunny.module.css'
import { Waypoint } from 'react-waypoint'
import AnimatedTitleDisplayer from './common/AnimatedTitleDisplayer'

const Sunny = () => {
  const [containerEntered, setContainerEntered] = useState<boolean>(false)

  const enterHandler = useCallback(() => {
    setContainerEntered(true)
  }, [])

  const leaveHandler = useCallback(() => {
    setContainerEntered(false)
  }, [])

  return (
    <Waypoint onEnter={enterHandler} onLeave={leaveHandler}>
      <div className={classes.container}>
        {containerEntered && (
          <AnimatedTitleDisplayer
            words={['Property', 'Developer', 'Notifier']}
          />
        )}
        <p>
          The app that lets you manage and communicate with property developers
          in an easy and efficient way.
        </p>
        <button>Get Started</button>
      </div>
    </Waypoint>
  )
}

export default memo(Sunny)
