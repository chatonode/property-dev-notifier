import Link from 'next/link'
import classes from './Navigation.module.css'
import { ERoute } from '@/app/types/enums'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className={classes['navigation-container']}>
      <ul className={classes['navigation-list']}>
        <li>
          <Link
            href={ERoute.Home}
            className={pathname === ERoute.Home ? classes.active : undefined}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={ERoute.About}
            className={pathname === ERoute.About ? classes.active : undefined}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href={ERoute.Login}
            className={pathname === ERoute.Login ? classes.active : undefined}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
