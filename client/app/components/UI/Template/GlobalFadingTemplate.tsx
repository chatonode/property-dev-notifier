'use client'

import { ReactNode, useState, useEffect, Suspense, memo } from 'react'
import LoadingContainer from '@/components/(Loading)/LoadingContainer'
// import DashboardFallback from '../Fallback/Dashboard/DashboardFallback'

type TGlobalFadingTemplateProps = {
  children: ReactNode
}

const GlobalFadingTemplate = (props: TGlobalFadingTemplateProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Clean up on unmount
    return () => setIsMounted(false)
  }, [])

  const childrenClasses = `template ${isMounted ? 'fade-in' : 'fade-out'}`
  // const childrenClasses= 'template fade-in'

  return (
    <Suspense fallback={<LoadingContainer />}>
      <div className={childrenClasses}>{props.children}</div>
    </Suspense>
  )
}

export default memo(GlobalFadingTemplate)
