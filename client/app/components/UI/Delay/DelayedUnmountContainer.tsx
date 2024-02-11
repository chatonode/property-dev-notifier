'use client'

import React, { useEffect, useState, ReactNode, memo } from 'react'

type TDelayedUnmountContainerProps = {
  delayTime: number
  children: ReactNode
}

const DelayedUnmountContainer = ({
  delayTime,
  children,
}: TDelayedUnmountContainerProps) => {
  const [isUnmounting, setIsUnmounting] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined
    // Trigger fade-out after mounting

    // Clear the fading class after the transition duration
    clearTimeout(timeoutId)

    return () => {
      timeoutId = setTimeout(() => {
        setIsUnmounting(true)
      }, delayTime)
    }
  }, [delayTime])

  return (
    <div
      style={{
        opacity: isUnmounting ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default memo(DelayedUnmountContainer)
