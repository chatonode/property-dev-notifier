import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { animated, useTransition } from '@react-spring/web'

import classes from './Moony.module.css'
import { Waypoint } from 'react-waypoint'

type TTextItemArray = string[]

type TAnimatedTextArrayProps = {
  items: TTextItemArray
}

const AnimatedTextArray = (props: TAnimatedTextArrayProps) => {
  const ref = useRef<ReturnType<typeof setTimeout>[]>([])
  const [items, setItems] = useState<TTextItemArray>([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      //   color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: 'perspective(600px) rotateX(180deg)',
        //   color: '#28d79f'
      },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [
      //   { color: '#c23369' },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    // update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    setItems([])
  }, [])

  const start = useCallback(() => {
    ref.current.push(
      setTimeout(() => setItems(['Property', 'Developer', 'Notifier']), 1000)
    )

    // ref.current.push(setTimeout(() => setItems(['Apples', 'Kiwis']), 5000))
    // ref.current.push(
    //   setTimeout(() => setItems(['Apples', 'Bananas', 'Kiwis']), 8000)
    // )
  }, [])

  useEffect(() => {
    // reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <Waypoint onEnter={start} onLeave={reset}>
      <div className={classes.container}>
        {/* <h1>Property Developer Notifier</h1> */}
        <div className={classes.title}>
          {transitions(({ innerHeight, ...rest }, item) => (
            <animated.div
              className={classes['transitions-item']}
              style={rest}
              // onClick={reset}
            >
              <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                {item}
              </animated.div>
            </animated.div>
          ))}
        </div>
      </div>
    </Waypoint>
  )
}

export default memo(AnimatedTextArray)
