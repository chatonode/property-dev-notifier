'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { ELoginErrorParam, ERoute } from '@/types/enums'

// type TUseLoginErrorParamsProps = boolean

const useLoginErrorParams = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const error = searchParams.get('error')

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
