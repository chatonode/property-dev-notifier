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
  // children?: ReactNode
  // onExpand: () => void
}

const SidebarContainer = (props: TSidebarContainerProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  // const toggleSidebarHandler = useCallback(() => {
  //   setSidebarExpanded((prevSidebarState) => !prevSidebarState)
  // }, [])

  const expandSidebarHandler = useCallback(() => {
    setSidebarExpanded(true)
  }, [])

  const collapseSidebarHandler = useCallback(() => {
    setSidebarExpanded(false)
  }, [])

  const sidebarContainerClasses = `${classes['sidebar-container']}${
    sidebarExpanded ? ` ${classes.expanded}` : ''
  }`

  console.log('sidebar rendered with: ', sidebarContainerClasses)

  return (
    <>
      <HamburgerWrapper onClick={expandSidebarHandler} />

      <div className={sidebarContainerClasses}>
        <Header onCollapse={collapseSidebarHandler} />
        <NavigationMenu />
        {/* {props.children} */}
        <Bottom />
        <Copyright />
      </div>
    </>
  )
}

export default memo(SidebarContainer)
