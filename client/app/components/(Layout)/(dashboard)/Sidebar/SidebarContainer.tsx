'use client'

import { memo, useCallback, useState } from 'react'

import HamburgerWrapper from './HamburgerWrapper'
import Header from './Header'
import UserInfoContainer from './UserInfoContainer'
import NavigationMenu from './NavigationMenu'
import Bottom from './Bottom'
import Copyright from './Copyright'
// import SidebarHouseSVG from '@/components/UI/SVG/Layout/Sidebar/background/SidebarHouseSVG'

import { TCurrentUser } from '@/app/api/(server)/auth/get-current-user'

import classes from './SidebarContainer.module.css'
import ModernHouseImageContainer from './ModernHouseImageContainer'

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
        {!!props.currentUser && (
          <UserInfoContainer currentUser={props.currentUser} />
        )}
        <NavigationMenu />
        {/* {props.children} */}
        <Bottom />
        <Copyright />
        {/* <div className={classes['sidebar-svg']}>
          <SidebarHouseSVG />
        </div> */}
        <ModernHouseImageContainer />
        {/* <div */}
      </div>
    </>
  )
}

export default memo(SidebarContainer)
