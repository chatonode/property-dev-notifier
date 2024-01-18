import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'

const Dashboard = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (!currentUser) {
    return permanentRedirect(ERoute.Home)
  }

  return (
    <main>
      <section className="content">
        <h2>Welcome!</h2>
        <WelcomeScreen />
      </section>
    </main>
  )
}

export default Dashboard
