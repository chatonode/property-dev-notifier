'use client'

import { ReactNode, useState, useEffect, Suspense } from 'react'
import LoadingContainer from '../../(Loading)/LoadingContainer'

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


  return (
    <Suspense fallback={<LoadingContainer />}>
      <div className={`template ${isMounted ? 'fade-in' : 'fade-out'}`}>
        {props.children}
      </div>
    </Suspense>
  )
}

export default GlobalFadingTemplate
