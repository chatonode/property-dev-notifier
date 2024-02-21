'use client'

import { ReactNode, memo, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import { TCurrentUser } from '@/app/api/(server)/auth/get-current-user'

import MainHeader from '../Header/MainHeader'

const ConditionalPublicLayoutWithHeader = (props: {
  children: ReactNode
  currentUser: TCurrentUser
}) => {
  const pathname = usePathname()
  const [isHomepage, setIsHomepage] = useState(false)

  useEffect(() => {
    if (pathname === ERoute.Home) {
      console.log('true')
      setIsHomepage(true)
    } else {
      console.log('false')
      setIsHomepage(false)
    }
  }, [pathname])

  return (
    <div
      // className="layout-public"
      // style={{
      //   background: isHomepage ? 'transparent' : 'auto',
      // }}
      className={`layout-${isHomepage ? 'homepage' : 'public'}`}
    >
      {/* <MainHeader currentUser={props.currentUser} isHomepage={isHomepage} /> */}
      {props.children}
    </div>
  )
}

export default memo(ConditionalPublicLayoutWithHeader)
