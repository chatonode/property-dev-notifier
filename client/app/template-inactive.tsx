'use client'

import { Suspense, useEffect, useState } from 'react'
import LoadingContainer from '@/components/(Loading)/LoadingContainer'

export default function Template({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    // Use setTimeout to set a delay before setting isMounted to true
    timer = setTimeout(() => {
      setIsMounted(true)
    }, 2000) // 2 seconds

    // Cleanup on unmount
    return () => {
      // clearInterval(timer)
      clearTimeout(timer)
    }
  }, [])

  // Show Suspense fallback only when isMounted is false
  return (
    <div>
      <Suspense fallback={isMounted ? null : <LoadingContainer />}>
        {children}
      </Suspense>
    </div>
  )
}
