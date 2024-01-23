'use client'

import { memo, useEffect, useState } from 'react'
import classes from './Backdrop.module.css'

type TBackdropProps = {
  onClick?: () => void
}

const Backdrop = (props: TBackdropProps) => {
  // const [isPending, startTransition] = useTransition()
  // const [isVisible, setIsVisible] = useState(true)
  // const pathname = usePathname()

  // useEffect(() => {
  //   console.log('Is Backdrop being mounted?')

  //   // Cleanup function
  //   return () => {
  //     console.log('Is Backdrop being unmounted?')
  //   }
  // }, [])

  return <div className={classes.backdrop} onClick={props.onClick} />
}

export default memo(Backdrop)

/* ********************************* */

// 'use client'

// import { memo, useEffect, useState } from 'react'
// import { useSpring, animated } from 'react-spring'
// import classes from './Backdrop.module.css'

// type TBackdropProps = {
//   onClick?: () => void
// }

// const Backdrop = (props: TBackdropProps) => {
//   const [isVisible, setIsVisible] = useState(true)
//   // Define the spring animation config
//   const fadeAnimation = useSpring({
//     opacity: isVisible ? 1 : 0,
//     from: { opacity: isVisible ? 0 : 1 },
//     config: { duration: 500 }, // Adjust the duration as needed
//   })

//   useEffect(() => {
//     console.log('Is Backdrop being mounted?')

//     // Toggle visibility after mounting (for demonstration)
//     setTimeout(() => {
//       setIsVisible(false)
//     }, 2000)

//     // Cleanup function
//     return () => {
//       console.log('Is Backdrop being unmounted?')
//     }
//   }, [])

//   return (
//     // Use animated.div from react-spring for animated components
//     <animated.div
//       style={fadeAnimation}
//       className={classes.backdrop}
//       onClick={props.onClick}
//     />
//   )
// }

// export default memo(Backdrop)

/* ********************************* */
