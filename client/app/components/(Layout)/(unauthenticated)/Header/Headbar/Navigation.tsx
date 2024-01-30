import Link from 'next/link'
import classes from './Navigation.module.css'
import { ERoute } from '@/app/types/enums'
import { usePathname } from 'next/navigation'
import { TCurrentUser } from '@/app/api/(users)/get-current-user'

type TNavigationProps = {
  currentUser: TCurrentUser
  onNavigate: () => void
}

const Navigation = (props: TNavigationProps) => {
  const pathname = usePathname()

  return (
    <nav className={classes['navigation-container']}>
      <ul className={classes['navigation-list']}>
        <li>
          <Link
            href={ERoute.Home}
            className={pathname === ERoute.Home ? classes.active : undefined}
            onClick={props.onNavigate}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={ERoute.About}
            className={pathname === ERoute.About ? classes.active : undefined}
            onClick={props.onNavigate}
          >
            About
          </Link>
        </li>
        <li>
          {!props.currentUser && (
            <Link
              href={ERoute.Login}
              className={pathname === ERoute.Login ? classes.active : undefined}
              onClick={props.onNavigate}
            >
              Login
            </Link>
          )}
          {!!props.currentUser && (
            <Link
              href={ERoute.Dashboard}
              // className={pathname === ERoute.Dashboard ? classes.active : undefined}
              onClick={props.onNavigate}
            >
              Dashboard
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
