'use client'

import { PropsWithChildren, memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// import Backdrop from './Backdrop'

import classes from './DashboardNavBar.module.css'

// type TBackdropPortalProps = PropsWithChildren & {
//   onBackdropClick?: () => void
// }

const DashboardNavBar = (props: PropsWithChildren) => {
  const [opened, toggleOpened] = useState(false)

  const clickHandler = () => {
    toggleOpened((prevOpenState) => !prevOpenState)
  }

  const navBarContainerClasses = `${classes['navbar-container']}${
    opened ? ` ${classes.opened}` : ''
  }`

  return (
    <>
      <button className={classes['dashboard-opener']} onClick={clickHandler}>
        CLIKC MEI!
      </button>

      <div className={navBarContainerClasses}>
        <button className={classes['dashboard-closer']} onClick={clickHandler}>
          X
        </button>
        {props.children}
      </div>
    </>
  )
}

export default DashboardNavBar
