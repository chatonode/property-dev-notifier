'use client'

import { useRouter } from 'next/navigation'

import { ERoute } from '@/types/enums'

const WelcomeScreen = () => {
  const router = useRouter()
  const clickHandler = () => {
    router.push(ERoute.CreateNotificationTemplate)
  }
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
