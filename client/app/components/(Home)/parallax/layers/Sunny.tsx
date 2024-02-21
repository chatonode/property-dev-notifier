import { memo, useCallback, useState } from 'react'
import Image from 'next/image'
import { Waypoint } from 'react-waypoint'
// import { animated, useTransition } from '@react-spring/web'

import classes from './Sunny.module.css'

import AnimatedTitleDisplayer from './common/AnimatedTitleDisplayer'
import SunnyImageContainer from './Sunny/SunnyImageContainer'

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
        <div className={classes.content}>
          {containerEntered && (
            <AnimatedTitleDisplayer
              words={['Property', 'Developer', 'Notifier']}
            />
          )}
          {/* Between here */}
          <div className={classes.features}>
            <div className={classes.feature}>
              <i className={classes.icon}>👩‍💼</i>
              <h3 className={classes.subtitle}>CRUD operations</h3>
              <p className={classes.text}>
                Create, read, update, and delete property developers with ease
              </p>
            </div>
            <div className={classes.feature}>
              <i className={classes.icon}>📧</i>
              <h3 className={classes.subtitle}>Customized emails</h3>
              <p className={classes.text}>
                Send personalized and professional emails to property developers
                with your own title and body
              </p>
            </div>
            <div className={classes.feature}>
              <i className={classes.icon}>🔐</i>
              <h3 className={classes.subtitle}>Admin authorization</h3>
              <p className={classes.text}>
                Only authorized admins can access and manage the app's features
                and data
              </p>
            </div>
          </div>
          {/* and here */}
        </div>
        <SunnyImageContainer />
      </div>
    </Waypoint>
  )
}

export default memo(Sunny)
