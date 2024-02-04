'use client'

import {
  PropsWithChildren,
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useState,
} from 'react'

import HamburgerWrapper from './HamburgerWrapper'
import Header from './Header'
import UserInfoContainer from './UserInfoContainer'
import NavigationMenu from './NavigationMenu'
import Bottom from './Bottom'
import Copyright from './Copyright'

// import { createPortal } from 'react-dom'

// import Backdrop from './Backdrop'
import { TCurrentUser } from '@/app/api/(users)/get-current-user'

import classes from './SidebarContainer.module.css'

type TSidebarContainerProps = {
  // children?: ReactNode
  // onExpand: () => void
  currentUser: TCurrentUser
}

const SidebarContainer = (props: TSidebarContainerProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)

  const expandSidebarHandler = useCallback(() => {
    setSidebarExpanded(true)
  }, [])

  const collapseSidebarHandler = useCallback(() => {
    setSidebarExpanded(false)
  }, [])

  const sidebarContainerClasses = `${classes['sidebar-container']}${
    sidebarExpanded ? ` ${classes.expanded}` : ''
  }`

  // console.log('sidebar rendered with: ', sidebarContainerClasses)

  return (
    <>
      <HamburgerWrapper onClick={expandSidebarHandler} />

      <div className={sidebarContainerClasses}>
        <Header onCollapse={collapseSidebarHandler} />
        <UserInfoContainer currentUser={props.currentUser} />
        <NavigationMenu />
        {/* {props.children} */}
        <Bottom />
        <Copyright />
      </div>
    </>
  )
}

export default memo(SidebarContainer)
