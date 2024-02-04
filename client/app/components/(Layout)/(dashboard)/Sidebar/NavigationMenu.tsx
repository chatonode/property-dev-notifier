'use client'
import { memo } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import classes from './NavigationMenu.module.css'

import { ERoute } from '@/app/types/enums'
import LogoutIcon from '@/app/components/UI/SVG/Layout/Sidebar/LogoutIcon'

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
            <LogoutIcon />
            Dashboard
          </Link>
        </li>
        <li
          key={ERoute.PropertyDevelopers}
          className={propertyDevelopersClasses}
        >
          <Link
            href={ERoute.PropertyDevelopers}
            className={propertyDevelopersClasses}
          >
            <LogoutIcon />
            Property Developers
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
            <LogoutIcon />
            New Property Developer
          </Link>
        </li>
        <li
          key={ERoute.CreateNotificationTemplate}
          className={createNotificationTemplateClasses}
        >
          <Link
            href={ERoute.CreateNotificationTemplate}
            className={createNotificationTemplateClasses}
          >
            <LogoutIcon />
            Send a Notification
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default memo(NavigationMenu)
