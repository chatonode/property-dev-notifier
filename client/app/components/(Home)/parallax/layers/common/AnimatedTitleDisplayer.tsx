import React, { ReactNode, memo } from 'react'
import { useTrail, animated } from '@react-spring/web'

import classes from './AnimatedTitleDisplayer.module.css'

type TTrailProps = {
  open: boolean
  children: ReactNode
}

const Trail = memo(({ open, children }: TTrailProps) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className={classes['trail-container']}>
      {trail.map(({ height, ...style }, index) => (
        <animated.div
          key={index}
          className={classes['trails-text']}
          style={style}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
})

type TWords = string[]

type TAnimatedTitleDisplayerProps = {
  words: TWords
}

const AnimatedTitleDisplayer = (props: TAnimatedTitleDisplayerProps) => {
  //   const [open, setOpen] = useState(true)
  return (
    <div
      className={classes.container}
      //   onClick={() => setOpen((state) => !state)}
    >
      <Trail open={true}>
        {props.words.map((word) => {
          return <span key={word}>{word}</span>
        })}
      </Trail>
    </div>
  )
}

export default memo(AnimatedTitleDisplayer)
