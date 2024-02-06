// TODO: Make it a server component by creating a separate client button component for enabling event handler only for this particular element
'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'

import { ERoute } from '@/types/enums'

const WelcomeScreen = () => {
  const router = useRouter()
  const clickHandler = useCallback(() => {
    router.push(ERoute.CreateNotificationTemplate)
  }, [])
  return (
    <div>
      <button
        className="create-template-button"
        type="button"
        onClick={clickHandler}
      >
        Create a Template
      </button>
    </div>
  )
}

export default WelcomeScreen
