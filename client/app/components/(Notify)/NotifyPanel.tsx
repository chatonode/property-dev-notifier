'use client'

import NotifyButton from './NotifyButton'

import { buildSender } from '@/app/api/build-sender'

const NotifyPanel = () => {
  const notifyHandler = () => {
    const notifyDevelopers = async () => {
      const axiosSender = buildSender()

      const response = await axiosSender.post(`/api/notifications/send-all`, {})

      if (response.status !== 200) {
        throw new Error('Notifying developers Failed!')
      }

      const data = await response.data

      console.log('Notified Developers List:', data)
    }

    notifyDevelopers()
  }

  return (
    <div>
      <NotifyButton onClick={notifyHandler} />
    </div>
  )
}

export default NotifyPanel
