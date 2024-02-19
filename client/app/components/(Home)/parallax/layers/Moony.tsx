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
      setTimeout(() => set(['Property', 'Developer', 'Notifier']), 1000)
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
          <p>
            The app that lets you manage and communicate with property
            developers in an easy and efficient way.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </Waypoint>
  )
}

export default memo(Moony)
