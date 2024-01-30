'use client'

import {
  PropsWithChildren,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'

// import { createPortal } from 'react-dom'

// import Backdrop from './Backdrop'

import classes from './SidebarContainer.module.css'
import HamburgerWrapper from './HamburgerWrapper'
import NavigationMenu from './NavigationMenu'
import Header from './Header'
import Bottom from './Bottom'
import Copyright from './Copyright'

type TSidebarContainerProps = {
  children?: ReactNode
  // onCollapse: () => void
  // onOpen: () => void
}

const SidebarContainer = (props: TSidebarContainerProps) => {
  const [sidebarCollapsed, toggleSidebarCollapsed] = useState(false)

  const clickHandler = useCallback(() => {
    toggleSidebarCollapsed((prevSidebarState) => !prevSidebarState)
  }, [])

  const openSidebarHandler = useCallback(() => {
    toggleSidebarCollapsed(true)
  }, [])

  const sidebarContainerClasses = `${classes['sidebar-container']}${
    sidebarCollapsed ? ` ${classes.collapsed}` : ''
  }`

  return (
    <>
      <HamburgerWrapper onClick={openSidebarHandler} />

      <div className={sidebarContainerClasses}>
        <Header onClose={clickHandler} />
        <NavigationMenu />
        {props.children}
        <Bottom />
        <Copyright />
      </div>
    </>
  )
}

export default memo(SidebarContainer)
