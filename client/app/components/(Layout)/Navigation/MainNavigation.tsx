'use client'

import Link from 'next/link'

import { Route } from '@/app/types/enums'
import { useRouter } from 'next/navigation'

const MainNavigation = () => {
  const router = useRouter()

  const logUserOut = async () => {
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Log out Failed!')
    }

    router.refresh()
    router.push(Route.Logout)

    return
  }

  return (
    <nav className="nav">
      {/* <Link href={Route.Home} className="nav-item">
        Home
      </Link> */}
      <Link href={Route.Welcome} className="nav-item">
        Welcome
      </Link>
      {/* <Link href={Route.Signup} className="nav-item">
        Signup
      </Link> */}
      {/* <Link href={Route.Login} className="nav-item">
        Login
      </Link> */}
      <Link href={Route.Notify} className="nav-item">
        Notify
      </Link>
      <Link href={Route.Logout} className="nav-item" onClick={logUserOut}>
        Logout
      </Link>
    </nav>
  )
}

export default MainNavigation
