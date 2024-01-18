'use client'

import { memo, useEffect, useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { ERoute } from '@/app/types/enums'

import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'
import classes from './MainHeader.module.css'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import { logUserOutFromClient } from '@/app/api/(auth)/authentication'
import LogoutIcon from '@/components/UI/Icon/Logout/LogoutIcon'

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
          priority={true}
          src={logo.src}
          quality={100}
          width={200}
          height={45}
          //   sizes="(max-width: 768px) 100vw"
          alt="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push(ERoute.Home)}
        />
        {!!props.currentUser && (
          <>
            {/* <p>{props.currentUser.email}</p> */}
            <Link
              href={ERoute.GoodBye}
              className={`${classes.logout}${
                isPending || isFetching ? ` ${classes.sending}` : ''
              }`}
              onClick={
                !isPending && !isFetching ? sendLogoutRequest : undefined
              }
            >
              {/* {isPending || isFetching ? 'Logging out...' : <LogoutIcon />} */}
              <LogoutIcon />
            </Link>
          </>
        )}
      </div>
      {/* <h1>Property Dev Notifier</h1> */}
    </header>
  )
}

export default memo(MainHeader)
