'use client'

import { memo, useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import classes from './Bottom.module.css'
import { ERoute } from '@/app/types/enums'
import { logUserOutFromClient } from '@/app/api/(auth)/authentication'
import LogoutIcon from '@/components/UI/Icon/Logout/LogoutIcon'

const Bottom = () => {
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
    <div>
      <Link
        href={ERoute.GoodBye}
        className={`${classes.logout}${
          isPending || isFetching ? ` ${classes.sending}` : ''
        }`}
        onClick={!isPending && !isFetching ? sendLogoutRequest : undefined}
      >
        <LogoutIcon /> Logout
      </Link>
    </div>
  )
}

export default memo(Bottom)
