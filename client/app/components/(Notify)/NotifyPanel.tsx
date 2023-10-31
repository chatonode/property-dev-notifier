'use client'

// import { cookies } from 'next/headers'
import axios from "axios"

import NotifyButton from "./NotifyButton"

// Local
const ingressNginxURL = ''
// 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

// Prod
// const ingressNginxURL = 'http://www.your-domain.com'

const NotifyPanel = () => {
  // const cookieStore = cookies()
  // const session = cookieStore.get('session')

  const notifyHandler = () => {
    // const notifyDevelopers = async () => {
    //   const response = await fetch(`${ingressNginxURL}/api/notify-all`, {
    //     method: 'POST',
    //     headers: {
    //       Host: 'property-dev-notifier.com',
    //       'Content-Type': 'application/json',
    //       // cookie: `${session?.name}=${session?.value}`, // Review Differences: https://www.diffchecker.com/H6vuVwUz/
    //     },
    //     // body: JSON.stringify(data),
    //   })

    //   if (!response.ok) {
    //     throw new Error('Notifying developers Failed!')
    //   }

    //   console.log(await response.json())
    // }

    const notifyDevelopers = async () => {
      const response = await axios.post(`${ingressNginxURL}/api/notifications/send-all`, {})

      if (response.status !== 200) {
        throw new Error('Notifying developers Failed!')
      }

      const data = await response.data

      console.log(data)
    }

    notifyDevelopers()
  }

  return (
    <div>
      <NotifyButton onClick={notifyHandler}/>
    </div>
  )
}

export default NotifyPanel
