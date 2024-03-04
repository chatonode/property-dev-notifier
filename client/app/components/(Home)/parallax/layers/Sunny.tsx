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
                <h3>Effortless Developer Management</h3>
                <p>
                  Streamline your property developer database with our enhanced
                  user management system. Effortlessly create, view, update, and
                  remove developer profiles, ensuring your information is always
                  up-to-date and accurate. With a user-friendly interface,
                  managing your developer list has never been this efficient.
                </p>
              </div>
            )}

            {contentDetail === 'email' && (
              <div className={classes.detail}>
                <h3>Personalized Communication Hub</h3>
                <p>
                  Craft personalized and professional emails tailored to your
                  property developers. Our customized email feature allows you
                  to send messages with your own subject lines and body content,
                  enhancing communication and engagement. Keep your developers
                  informed and connected with ease.
                </p>
              </div>
            )}

            {contentDetail === 'security' && (
              <div className={classes.detail}>
                <h3>Fortified Security Measures</h3>
                <p>
                  Prioritize the safety of your app and data. Our secure
                  experience ensures that only authorized admins can access and
                  manage the application's features and data. Rest easy knowing
                  that your property developer information is protected and
                  handled with the utmost security.
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
