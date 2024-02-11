'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { ERoute } from '@/types/enums'

type TUseLoginSubmittedParamsProps = boolean

const useLoginSubmittedParams = (
  isSubmitSuccessful: TUseLoginSubmittedParamsProps
) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const error = searchParams.get('error')
  // const submitted = searchParams.get('submitted')

  if (pathname === ERoute.Login && isSubmitSuccessful) {
    router.push(
      `${pathname}?${error ? `error=${error}` : ''}${
        error ? '&' : ''
      }submitted=${isSubmitSuccessful}`
    )

    return true
  }

  // else
  return undefined
}

export default useLoginSubmittedParams
