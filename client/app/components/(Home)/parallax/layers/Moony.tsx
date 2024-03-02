import { memo, useCallback, useState } from 'react'
// import { animated, useTransition } from '@react-spring/web'

import classes from './Moony.module.css'
import { Waypoint } from 'react-waypoint'
import MoonyImageContainer from './Moony/MoonyImageContainer'
import AnimatedTitleDisplayer from './common/AnimatedTitleDisplayer'

const Moony = () => {
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
        {/* <MoonyImageContainer /> */}

        <div className={classes.content}>
          {containerEntered && (
            <AnimatedTitleDisplayer
              words={['Modern', 'Tech', 'Stack']}
            />
          )}
          {/* Between here */}
          <div className={classes.tech}>
            <div className={classes.stack}>
              <h3 className={classes.subtitle}>Tech stack</h3>
              <ul className={classes.list}>
                {/* <li className={classes.item}>
                  MERN (MongoDB, Express, React, Node)
                </li> */}
                <li className={classes.item}>MongoDB</li>
                <li className={classes.item}>Express</li>
                <li className={classes.item}>React</li>
                <li className={classes.item}>Node</li>
                {/* <li className={classes.item}>Next.js 13.4</li> */}
                {/* <li className={classes.item}>RSC (React Server Components)</li> */}
                {/* <li className={classes.item}>TS (TypeScript)</li> */}
                {/* <li className={classes.item}>Module CSS</li> */}
              </ul>
            </div>
            <div className={classes.tools}>
              <h3 className={classes.subtitle}>Tools</h3>
              <ul className={classes.list}>
                <li className={classes.item}>Docker</li>
                <li className={classes.item}>Kubernetes</li>
                <li className={classes.item}>GitHub</li>
                <li className={classes.item}>GitHub Actions</li>
                <li className={classes.item}>Sendgrid</li>
              </ul>
            </div>
          </div>
          <div className={classes.metrics}>
            <h3 className={classes.subtitle}>Performance metrics</h3>
            <div className={classes.graphs}>
              <img
                className={classes.graph}
                src="/speed.jpg"
                alt="Speed graph"
              />
              <img
                className={classes.graph}
                src="/reliability.jpg"
                alt="Reliability graph"
              />
              <img
                className={classes.graph}
                src="/security.jpg"
                alt="Security graph"
              />
            </div>
          </div>
          {/* and here */}
        </div>
      </div>
    </Waypoint>
  )
}

export default memo(Moony)
