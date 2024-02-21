import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'

import classes from './Moony.module.css'
import { Waypoint } from 'react-waypoint'
import MoonyImageContainer from './Moony/MoonyImageContainer'

const Moony = () => {
  console.log('am iiiii')

  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, set] = useState<string[]>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      //   color: '#8fa5b6',
      color: 'yellow',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: 'perspective(600px) rotateX(180deg)',
        //   color: '#28d79f'
        color: 'white',
      },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      //   { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    // update: { color: '#28b4d7' },
    // color: 'blue'
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
  }, [])

  const start = useCallback(() => {
    ref.current.push(
      // setTimeout(() => set(['Property', 'Developer', 'Notifier']), 1000)
      setTimeout(() => set(['Advancing', 'the', 'Technology']), 1000)
    )

    // ref.current.push(setTimeout(() => set(['Apples', 'Kiwis']), 5000))
    // ref.current.push(
    //   setTimeout(() => set(['Apples', 'Bananas', 'Kiwis']), 8000)
    // )
  }, [])

  useEffect(() => {
    // reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <Waypoint onEnter={start} onLeave={reset}>
      <div className={classes.container}>
        <MoonyImageContainer />

        <div className={classes.content}>
          <div className={classes.title}>
            {transitions(({ innerHeight, ...rest }, item) => (
              <animated.div
                className={classes['transitions-item']}
                style={rest}
                // onClick={reset}
              >
                <animated.div
                  style={{ overflow: 'hidden', height: innerHeight }}
                >
                  {item}
                </animated.div>
              </animated.div>
            ))}
          </div>
          {/* Between here */}
          <div className={classes.tech}>
            <div className={classes.stack}>
              <h3 className={classes.subtitle}>Tech stack</h3>
              <ul className={classes.list}>
                <li className={classes.item}>
                  MERN (MongoDB, Express, React, Node)
                </li>
                <li className={classes.item}>Next.js 13.4</li>
                <li className={classes.item}>RSC (React Server Components)</li>
                <li className={classes.item}>TS (TypeScript)</li>
                <li className={classes.item}>Module CSS</li>
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
