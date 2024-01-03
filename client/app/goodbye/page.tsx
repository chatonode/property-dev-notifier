import { permanentRedirect } from 'next/navigation'
import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import GoodByeScreen from '@/components/(GoodBye)/GoodByeScreen'

const GoodBye = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <main className="base">
      <section className="base content">
        <GoodByeScreen />
      </section>
    </main>
  )
}

export default GoodBye
