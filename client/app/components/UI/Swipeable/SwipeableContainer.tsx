import React, { useState, ReactNode } from 'react'
import { useSwipeable } from 'react-swipeable'
import classes from './SwipeableContainer.module.css'

type TSwipeableContainerProps = {
  children: ReactNode[]
}

const SwipeableContainer = ({ children }: TSwipeableContainerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentIndex((currentIndex + 1) % children.length),
    onSwipedRight: () =>
      setCurrentIndex((currentIndex - 1 + children.length) % children.length),
    trackMouse: true,
  })

  return (
    <div className={classes.container} {...handlers}>
      {React.Children.map(children, (child, index) => {
        let cardClass = classes.hidden
        if (index === currentIndex) {
          cardClass = classes.visible
        } else if (index === (currentIndex + 1) % children.length) {
          cardClass = classes.next
        }

        return (
          <div key={index} className={`${classes.item} ${cardClass}`}>
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default SwipeableContainer
