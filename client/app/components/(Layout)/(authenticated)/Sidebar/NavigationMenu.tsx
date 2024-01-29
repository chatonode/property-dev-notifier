import Link from 'next/link'
import classes from './NavigationMenu.module.css'
import { ERoute } from '@/app/types/enums'
import { usePathname } from 'next/navigation'

const NavigationMenu = () => {
  const pathname = usePathname()

  return (
    <nav className={classes['navigation-container']}>
      <ul className={classes['navigation-list']}>
        <li key={ERoute.Dashboard}>
          <Link
            href={ERoute.Dashboard}
            className={
              pathname === ERoute.Dashboard ? classes.active : undefined
            }
          >
            Dashboard
          </Link>
        </li>
        <li key={ERoute.PropertyDevelopers}>
          <Link
            href={ERoute.PropertyDevelopers}
            className={
              pathname === ERoute.PropertyDevelopers
                ? classes.active
                : undefined
            }
          >
            Property Developers
          </Link>
        </li>
        <li key={ERoute.CreatePropertyDeveloper}>
          <Link
            href={ERoute.CreatePropertyDeveloper}
            className={
              pathname === ERoute.CreatePropertyDeveloper
                ? classes.active
                : undefined
            }
          >
            Create a Property Developer
          </Link>
        </li>
        <li key={ERoute.CreateNotificationTemplate}>
          <Link
            href={ERoute.CreateNotificationTemplate}
            className={
              pathname === ERoute.CreateNotificationTemplate
                ? classes.active
                : undefined
            }
          >
            Send a Notification
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationMenu
