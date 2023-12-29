'use client'

import { useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { ERoute } from '@/app/types/enums'

import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import { logUserOutFromClient } from '@/app/api/(auth)/authentication'

type TMainHeaderProps = {
  currentUser: TCurrentUser
}

const MainHeader = (props: TMainHeaderProps) => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  const sendLogoutRequest = async () => {
    setIsFetching(true)
    await logUserOutFromClient()
    setIsFetching(false)

    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <header className="header">
      <div className="logo-container">
        <Image
          src={logo.src}
          quality={100}
          width={200}
          height={45}
          //   sizes="(max-width: 768px) 100vw"
          alt="logo"
          onClick={() => router.push(ERoute.Home)}
        />
        {!!props.currentUser && (
          <>
            {/* <p>{props.currentUser.email}</p> */}
            <Link
              href={ERoute.GoodBye}
              className="nav-item"
              onClick={sendLogoutRequest}
            >
              {isPending || isFetching ? 'Logging out...' : 'Logout'}
            </Link>
          </>
        )}
      </div>
      <h1>Property Dev Notifier</h1>
    </header>
  )
}

export default MainHeader
