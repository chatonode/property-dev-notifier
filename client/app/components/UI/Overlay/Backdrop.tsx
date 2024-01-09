// 'use client'

// import { memo, useEffect, useState } from 'react'
// import classes from './Backdrop.module.css'

// type TBackdropProps = {
//   onClick?: () => void
// }

// const Backdrop = (props: TBackdropProps) => {
//   // const [isPending, startTransition] = useTransition()
//   const [isVisible, setIsVisible] = useState(true)
//   // const pathname = usePathname()

//   useEffect(() => {
//     console.log('Is Backdrop being mounted?')

//     // Cleanup function
//     return () => {
//       console.log('Is Backdrop being unmounted?')
//     }
//   }, [])

//   return <div className={classes.backdrop} onClick={props.onClick} />
// }

// export default memo(Backdrop)

// Backdrop.tsx

import { memo, useEffect, useState, useRef } from 'react'
import { Transition } from 'react-transition-group'
import classes from './Backdrop.module.css'

type TBackdropProps = {
  onClick?: () => void
}

const Backdrop = (props: TBackdropProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const nodeRef = useRef(null)

  useEffect(() => {
    console.log('Is Backdrop being mounted?')

    // Cleanup function
    return () => {
      console.log('Is Backdrop being unmounted?')
    }
  }, [])

  return (
    <Transition
      nodeRef={nodeRef}
      in={isVisible}
      timeout={300}
      classNames={{
        enter: classes.backdropEntering,
        enterActive: classes.backdropEntered,
        exit: classes.backdropExiting,
        exitActive: classes.backdropExited,
      }}
      unmountOnExit
    >
      {(state) => (
        <div
          ref={nodeRef}
          className={`${classes.backdrop} ${classes[`backdrop-${state}`]}`}
          onClick={props.onClick}
        />
      )}
    </Transition>
  )
}

export default memo(Backdrop)
