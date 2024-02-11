'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const NavigationListener = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const searchParamsExist = searchParams.size !== 0

  useEffect(() => {
    const url = `${pathname}${searchParamsExist ? `?${searchParams}` : ''}`
    console.log('currentURL:', url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])

  return null
}

export default NavigationListener
