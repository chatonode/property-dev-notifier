'use client'

import { PropsWithChildren, memo, useEffect, useState } from 'react'

// import { createPortal } from 'react-dom'

// import Backdrop from './Backdrop'

import classes from './SideNavBarContainer.module.css'
import NavigationMenu from './NavigationMenu'
import Header from './Header'
import Bottom from './Bottom'
import Copyright from './Copyright'

// type TSideNavBarContainerProps = PropsWithChildren & {
//   onBackdropClick?: () => void
// }

const SideNavBarContainer = (props: PropsWithChildren) => {
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
        <Header onClose={clickHandler} />
        <NavigationMenu />
        {props.children}
        <Bottom />
        <Copyright />
      </div>
    </>
  )
}

export default SideNavBarContainer
