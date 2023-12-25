'use client'

import { redirect } from 'next/navigation'

import { ERoute } from '@/types/enums'

const WelcomeScreen = () => {
  const clickHandler = () => {
    redirect(ERoute.CreateNotificationTemplate)
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
