'use client'
import { memo } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import Link from '@/components/next/Link'

import classes from './NavigationMenu.module.css'

import { ERoute } from '@/app/types/enums'
import DashboardIcon from '@/app/components/UI/Icon/Sidebar/DashboardIcon'
import DashboardActiveIcon from '@/app/components/UI/Icon/Sidebar/DashboardActiveIcon'
import ListUsersActiveIcon from '@/app/components/UI/Icon/Sidebar/ListUsersActiveIcon'
import ListUsersIcon from '@/app/components/UI/Icon/Sidebar/ListUsersIcon'
import CreateUserActiveIcon from '@/app/components/UI/Icon/Sidebar/CreateUserActiveIcon'
import CreateUserIcon from '@/app/components/UI/Icon/Sidebar/CreateUserIcon'
import SendNotificationActiveIcon from '@/app/components/UI/Icon/Sidebar/SendNotificationActiveIcon'
import SendNotificationIcon from '@/app/components/UI/Icon/Sidebar/SendNotificationIcon'

const NavigationMenu = () => {
  const pathname = usePathname()

  const dashboardClasses =
    pathname === ERoute.Dashboard ? classes.active : undefined
  const propertyDevelopersClasses =
    pathname === ERoute.PropertyDevelopers ? classes.active : undefined
  const createPropertyDeveloperClasses =
    pathname === ERoute.CreatePropertyDeveloper ? classes.active : undefined
  const createNotificationTemplateClasses =
    pathname === ERoute.CreateNotificationTemplate ? classes.active : undefined

  return (
    <nav className={classes['navigation-container']}>
      <ul className={classes['navigation-list']}>
        <li key={ERoute.Dashboard} className={dashboardClasses}>
          <Link href={ERoute.Dashboard} className={dashboardClasses}>
            {pathname === ERoute.Dashboard ? (
              <DashboardActiveIcon />
            ) : (
              <DashboardIcon />
            )}
            Dashboard
          </Link>
        </li>
        <span>Property Developers</span>
        <li
          key={ERoute.PropertyDevelopers}
          className={propertyDevelopersClasses}
        >
          <Link
            href={ERoute.PropertyDevelopers}
            className={propertyDevelopersClasses}
          >
            {pathname === ERoute.PropertyDevelopers ? (
              <ListUsersActiveIcon />
            ) : (
              <ListUsersIcon />
            )}
            List
          </Link>
        </li>
        <li
          key={ERoute.CreatePropertyDeveloper}
          className={createPropertyDeveloperClasses}
        >
          <Link
            href={ERoute.CreatePropertyDeveloper}
            className={createPropertyDeveloperClasses}
          >
            {pathname === ERoute.CreatePropertyDeveloper ? (
              <CreateUserActiveIcon />
            ) : (
              <CreateUserIcon />
            )}
            Create
          </Link>
        </li>
        <span>Notifications</span>
        <li
          key={ERoute.CreateNotificationTemplate}
          className={createNotificationTemplateClasses}
        >
          <Link
            href={ERoute.CreateNotificationTemplate}
            className={createNotificationTemplateClasses}
          >
            {pathname === ERoute.CreateNotificationTemplate ? (
              <SendNotificationActiveIcon />
            ) : (
              <SendNotificationIcon />
            )}
            Send
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default memo(NavigationMenu)
