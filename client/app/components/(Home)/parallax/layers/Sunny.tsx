import { memo, useCallback, useState } from 'react'
import Image from 'next/image'
import { Waypoint } from 'react-waypoint'
// import { animated, useTransition } from '@react-spring/web'

import classes from './Sunny.module.css'

import AnimatedTitleDisplayer from './common/AnimatedTitleDisplayer'
import SunnyImageContainer from './Sunny/SunnyImageContainer'

type TContentDetailState = 'user-management' | 'email' | 'security'

const Sunny = () => {
  const [containerEntered, setContainerEntered] = useState<boolean>(false)
  const [contentDetail, setContentDetail] =
    useState<TContentDetailState>('user-management')

  const enterHandler = useCallback(() => {
    setContainerEntered(true)
  }, [])

  const leaveHandler = useCallback(() => {
    setContainerEntered(false)
  }, [])

  const userManagementClickHandler = useCallback(() => {
    setContentDetail('user-management')
  }, [])
  const emailClickHandler = useCallback(() => {
    setContentDetail('email')
  }, [])
  const securityClickHandler = useCallback(() => {
    setContentDetail('security')
  }, [])

  const userManagementIconDivClasses = `${classes['icon-container']}${
    contentDetail === 'user-management' ? ` ${classes.active}` : ''
  }`
  const emailIconDivClasses = `${classes['icon-container']}${
    contentDetail === 'email' ? ` ${classes.active}` : ''
  }`
  const securityIconDivClasses = `${classes['icon-container']}${
    contentDetail === 'security' ? ` ${classes.active}` : ''
  }`

  return (
    <Waypoint onEnter={enterHandler} onLeave={leaveHandler}>
      <div className={classes.container}>
        <div className={classes.content}>
          {containerEntered && (
            <AnimatedTitleDisplayer words={['For', 'Your', 'Business']} />
          )}
          {/* Between here */}
          <div className={classes.details}>
            <div className={classes.icons}>
              <div
                className={userManagementIconDivClasses}
                onClick={userManagementClickHandler}
              >
                <i>👩‍💼</i>
              </div>
              <div className={emailIconDivClasses} onClick={emailClickHandler}>
                <i>📧</i>
              </div>
              <div
                className={securityIconDivClasses}
                onClick={securityClickHandler}
              >
                <i>🔐</i>
              </div>
            </div>

            {contentDetail === 'user-management' && (
              <div className={classes.detail}>
                <h3>Enhanced User Management</h3>
                <p>
                  Create, read, update, and delete property developers with ease
                </p>
              </div>
            )}

            {contentDetail === 'email' && (
              <div className={classes.detail}>
                <h3>Customized E-mails</h3>
                <p>
                  Send personalized and professional emails to property
                  developers with your own title and body
                </p>
              </div>
            )}

            {contentDetail === 'security' && (
              <div className={classes.detail}>
                <h3>Secure Experience</h3>
                <p>
                  Only authorized admins can access and manage the app's
                  features and data
                </p>
              </div>
            )}
          </div>
          {/* and here */}
        </div>
        {/* <SunnyImageContainer /> */}
      </div>
    </Waypoint>
  )
}

export default memo(Sunny)
