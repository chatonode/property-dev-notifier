'use client'

import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ELoginErrorParam, ERoute } from '@/types/enums'

type TUseLoginErrorParamsProps = boolean

const useLoginErrorParams = (isToastClosed: TUseLoginErrorParamsProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const error = searchParams.get('error')

  useEffect(() => {
    // Clear searchParams if it is closed
    if (pathname === ERoute.Login && isToastClosed) {
      return router.push(pathname)
    }
  }, [isToastClosed, pathname])

  if (pathname === ERoute.Login && error) {
    switch (error) {
      case ELoginErrorParam.InvalidToken:
        return 'Token Error! You need to log in to continue...'
      default:
        return 'Unknown Login Redirect Reason!'
    }
  }

  // else
  return undefined
}

export default useLoginErrorParams
