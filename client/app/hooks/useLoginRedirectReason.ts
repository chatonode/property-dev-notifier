'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { ELoginRedirectReason, ERoute } from '@/types/enums'

// type TLoginRedirectReason = 'invalid_token' | 'expired_token' // Add more reasons as needed

const useLoginRedirectReason = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const reason = searchParams.get('error')

  if (pathname === ERoute.Login && reason) {
    switch (reason) {
      case ELoginRedirectReason.InvalidToken:
        return 'Token Error! You need to log in to continue...'
      default:
        return 'Unknown Login Redirect Reason!'
    }
  }

  //   return null
}

export default useLoginRedirectReason
