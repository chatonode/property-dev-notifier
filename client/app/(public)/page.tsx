import { permanentRedirect } from 'next/navigation'

import { ERoute } from '@/types/enums'
import getCurrentUser from '@/api/(users)/get-current-user'

import HomeContainer from '@/components/(Home)/HomeContainer'

const Home = async () => {
  // const router = useRouter()
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <main className="base">
      <HomeContainer />
    </main>
  )
}

export default Home
