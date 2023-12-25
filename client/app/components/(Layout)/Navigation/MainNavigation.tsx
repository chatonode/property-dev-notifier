'use client'

import Link from 'next/link'

import { ERoute } from '@/app/types/enums'
import { useRouter } from 'next/navigation'

import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'

const MainNavigation = () => {
  const router = useRouter()

  const logUserOut = async () => {
    const axiosSender = buildClientSender()

    const response = await axiosSender.post('/api/auth/logout', {})

    if (response.status !== 200) {
      throw new Error('Log out Failed!')
    }

    router.refresh()
    router.push(ERoute.Logout)

    return
  }

  return (
    <nav className="nav">
      <Link href={ERoute.Welcome} className="nav-item">
        Welcome
      </Link>
      <Link href={ERoute.CreateNotificationTemplate} className="nav-item">
        Create Notification Template
      </Link>
      <Link href={ERoute.Logout} className="nav-item" onClick={logUserOut}>
        Logout
      </Link>
    </nav>
  )
}

export default MainNavigation
